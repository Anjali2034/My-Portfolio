(function (root) {
  function norm(q) {
    return (" " + String(q || "").toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/é/g, "e")
      .replace(/[^a-z0-9ऀ-ॿ%]+/g, " ")
      .replace(/\s+/g, " ").trim() + " ");
  }

  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 1) return 2;
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }
  function hit(term, q, toks) {
    var exact = term.charAt(term.length - 1) === "$";
    var t = exact ? term.slice(0, -1) : norm(term).trim();
    if (!t) return 0;
    if (t.indexOf(" ") > -1) return q.indexOf(" " + t) > -1 ? 1 : 0;
    for (var i = 0; i < toks.length; i++) {
      var w = toks[i];
      if (exact || t.length <= 3) { if (w === t) return 1; continue; }
      if (w.indexOf(t) === 0) return 1;
    }
    if (exact || t.length < 6) return 0;
    for (i = 0; i < toks.length; i++) {
      var w2 = toks[i];
      if (w2.length >= 5 && (lev(w2, t) <= 1 || (w2.length > t.length && lev(w2.slice(0, t.length), t) <= 1))) return 0.75;
    }
    return 0;
  }

  function sum(list, w, q, toks) {
    var s = 0;
    (list || []).forEach(function (term) { s += hit(term, q, toks) * w; });
    return s;
  }

  function resolveLinks(kb, names) {
    return (names || []).map(function (n) { var l = kb.LINKS[n]; return l ? Object.assign({ id: n }, l) : null; })
      .filter(Boolean);
  }

  function answer(kb, topic) {
    return { id: topic.id || "fallback", text: topic.text, links: resolveLinks(kb, topic.links), next: topic.next || [] };
  }

  function score(kb, text) {
    var q = norm(text);
    var toks = q.trim() ? q.trim().split(" ") : [];
    var negative = sum(kb.negative, 1, q, toks) > 0;
    return kb.topics.map(function (t, i) {
      var strong = sum(t.strong, 3, q, toks);
      var s = strong + sum(t.terms, 2, q, toks) + sum(t.weak, 1, q, toks);
      if (t.exact && t.exact.indexOf(q.trim()) > -1) s += 3;
      if (t.tier === 0 && strong > 0) s += 4;
      if (t.tier === 2) s -= 1;
      if (t.brag && negative) s -= 2;
      return { t: t, s: s, i: i };
    }).sort(function (a, b) { return b.s - a.s || a.i - b.i; });
  }

  function reply(kb, text) {
    var raw = String(text || "");
    if (/[ऀ-ॿ]/.test(raw) && !/[a-z]{3,}/i.test(raw)) return answer(kb, Object.assign({ id: "non-english" }, kb.nonEnglish));
    var ranked = score(kb, raw);
    var best = ranked[0];
    if (!best || best.s < 2) {
      var toks = norm(raw).trim().split(" ").filter(Boolean);
      var help = kb.topics.filter(function (t) { return t.id === "help"; })[0];
      if (help && toks.length <= 1 && (toks[0] || "").length <= 4) return answer(kb, help);
      return answer(kb, Object.assign({ id: "fallback" }, kb.fallback));
    }
    return answer(kb, best.t);
  }
  function store(kind) { try { return kind === "s" ? window.sessionStorage : window.localStorage; } catch (e) { return null; } }

  function loggingOff() {
    var loc = window.location;
    try {
      if (/(^|[?&])nolog\b/.test(loc.search)) { var ls = store("l"); if (ls) ls.setItem("anjali-nolog", "1"); }
      if (/(^|[?&])log\b/.test(loc.search)) { var l2 = store("l"); if (l2) l2.removeItem("anjali-nolog"); }
    } catch (e) {}
    if (loc.protocol === "file:" || /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/.test(loc.hostname)) return true;
    try { var s = store("l"); return !!(s && s.getItem("anjali-nolog")); } catch (e) { return false; }
  }

  function visitor() {
    var s = store("s"), id = null;
    try { id = s && s.getItem("anjali-visitor"); } catch (e) {}
    if (!id) {
      id = (Math.random().toString(36).slice(2) + "000000").slice(0, 6).toUpperCase();
      try { if (s) s.setItem("anjali-visitor", id); } catch (e) {}
    }
    return id;
  }

  function cameFrom() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get("utm_source")) return p.get("utm_source");
      if (document.referrer) {
        var h = new URL(document.referrer).hostname.replace(/^www\./, "");
        if (h && h !== window.location.hostname) return h;
      }
    } catch (e) {}
    return "direct";
  }

  function log(kb, question, result, how) {
    try {
      if (!kb.logUrl || loggingOff()) return;
      var body = JSON.stringify({
        q: String(question).slice(0, 300),
        topic: result.id,
        a: String(result.text).slice(0, 1000),
        fallback: result.id === "fallback" || result.id === "non-english",
        how: how === "chip" ? "tapped" : "typed",
        sid: visitor(),
        device: window.matchMedia && window.matchMedia("(max-width: 760px)").matches ? "phone" : "desktop",
        ref: cameFrom()
      });
      fetch(kb.logUrl, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: body })
        .catch(function () {});
    } catch (e) {}
  }

  root.BotEngine = { reply: reply, score: score, norm: norm, log: log };
})(typeof window !== "undefined" ? window : globalThis);
