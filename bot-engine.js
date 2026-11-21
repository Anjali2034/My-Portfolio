(function (root) {
  function norm(q) {
    return (" " + String(q || "").toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/é/g, "e")
      .replace(/[^a-z0-9ऀ-ॿ%]+/g, " ")
      .replace(/\s+/g, " ").trim() + " ");
  }

  var SYN = {
    u: "you", ur: "your", r: "are", abt: "about", wat: "what", wht: "what", pls: "please", plz: "please",
    yrs: "years", yr: "year", sal: "salary", exp: "experience", firm: "company", org: "company",
    organisation: "company", organization: "company", co: "company", cmpny: "company", stint: "role",
    wfo: "work from office", wfh: "work from home", ph: "phone", no: "no", num: "number",
    kaun: "who", kya: "what", kaha: "where", kahan: "where", kaam: "work", kitna: "how much", kitni: "how much",
    kyun: "why", kyu: "why", kamzori: "weakness", naukri: "job", padhai: "education", umar: "age"
  };

  function expand(q) {
    return " " + q.trim().split(" ").map(function (w) { return SYN.hasOwnProperty(w) ? SYN[w] : w; }).join(" ") + " ";
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
  function hit(term, q, toks, q0) {
    var exact = term.charAt(term.length - 1) === "$";
    var t = exact ? term.slice(0, -1) : norm(term).trim();
    if (!t) return 0;
    if (t.indexOf(" ") > -1) return (q.indexOf(" " + t) > -1 || (q0 && q0.indexOf(" " + t) > -1)) ? 1 : 0;
    for (var i = 0; i < toks.length; i++) {
      var w = toks[i];
      if (exact || t.length <= 3) { if (w === t || (!exact && w === t + "s")) return 1; continue; }
      if (w.indexOf(t) === 0) return 1;
    }
    if (exact || t.length < 6) return 0;
    for (i = 0; i < toks.length; i++) {
      var w2 = toks[i];
      if (w2.length >= 5 && (lev(w2, t) <= 1 || (w2.length > t.length && lev(w2.slice(0, t.length), t) <= 1))) return 0.75;
    }
    return 0;
  }

  function sum(list, w, q, toks, q0) {
    var s = 0;
    (list || []).forEach(function (term) { s += hit(term, q, toks, q0) * w; });
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
    var q0 = norm(text), q = expand(q0);
    var toks = (q.trim() + " " + q0.trim()).trim().split(" ").filter(function (w, i, a) { return w && a.indexOf(w) === i; });
    var negative = sum(kb.negative, 1, q, toks, q0) > 0;
    return kb.topics.map(function (t, i) {
      var strong = sum(t.strong, 3, q, toks, q0);
      var s = strong + sum(t.terms, 2, q, toks, q0) + sum(t.weak, 1, q, toks, q0);
      if (t.exact && (t.exact.indexOf(q.trim()) > -1 || t.exact.indexOf(norm(text).trim()) > -1)) s += 3;
      if (t.tier === 0 && strong > 0) s += 4;
      if (t.tier === 2) s -= 1;
      if (t.brag && negative) s -= 2;
      return { t: t, s: s, i: i };
    }).sort(function (a, b) { return b.s - a.s || a.i - b.i; });
  }

  function reply(kb, text) {
    var raw = String(text || "");
    if (/[ऀ-ॿ]/.test(raw) && !/[a-z]{3,}/i.test(raw)) return answer(kb, Object.assign({ id: "non-english" }, kb.nonEnglish));
    var nq = norm(raw);
    if (kb.notSkills && sum(kb.notSkills, 1, nq, nq.trim().split(" "), nq) > 0) return answer(kb, Object.assign({ id: "fallback" }, kb.fallback));
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
  var MEANING = { HIGH: 5, KEEP: 5, STRONG: 0.675, WEAK: 0.625, MARGIN: 0.04 };
  var sem = { embed: null, vec: null, loading: null };

  function prep(text) { return expand(norm(text)).trim(); }

  function setMeaning(embed, vectors) {
    var bin = typeof atob === "function" ? atob(vectors.data) : Buffer.from(vectors.data, "base64").toString("binary");
    var data = new Int8Array(bin.length);
    for (var i = 0; i < bin.length; i++) data[i] = bin.charCodeAt(i) << 24 >> 24;
    sem.vec = { dim: vectors.dim, topics: vectors.topics, idx: vectors.idx, data: data };
    sem.embed = embed;
  }

  function loadMeaning(base) {
    if (sem.loading) return sem.loading;
    base = base || "./";
    sem.loading = Promise.all([
      import(base + "vendor/transformers/transformers.min.js"),
      fetch(base + "bot-vectors.json").then(function (r) { return r.json(); })
    ]).then(function (res) {
      var T = res[0], env = T.env;
      env.allowRemoteModels = false;
      env.allowLocalModels = true;
      env.localModelPath = base + "models/";
      env.useBrowserCache = true;
      env.backends.onnx.wasm.wasmPaths = base + "vendor/transformers/";
      env.backends.onnx.wasm.numThreads = 1;
      return T.pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", { quantized: true }).then(function (ex) {
        setMeaning(function (s) {
          return ex(s, { pooling: "mean", normalize: true }).then(function (o) { return o.data; });
        }, res[1]);
        return true;
      });
    }).catch(function () { sem.loading = null; return false; });
    return sem.loading;
  }

  function meaningRank(qv) {
    var v = sem.vec, dim = v.dim, best = {};
    for (var e = 0; e < v.idx.length; e++) {
      var dot = 0, off = e * dim;
      for (var d = 0; d < dim; d++) dot += qv[d] * v.data[off + d];
      dot /= 127;
      var id = v.topics[v.idx[e]];
      if (best[id] === undefined || dot > best[id]) best[id] = dot;
    }
    return Object.keys(best).map(function (id) { return { id: id, sim: best[id] }; })
      .sort(function (a, b) { return b.sim - a.sim; });
  }

  function smartReply(kb, text, waited) {
    var raw = String(text || "");
    var quick = reply(kb, raw);
    if (quick.id === "fallback" && kb.notSkills && sum(kb.notSkills, 1, norm(raw), norm(raw).trim().split(" "), norm(raw)) > 0)
      return Promise.resolve(Object.assign(quick, { via: "words" }));
    var ranked = score(kb, raw), s1 = ranked[0] ? ranked[0].s : 0;
    if (/^(please )?(write|translate|compose|generate|solve|calculate|draw|sing|pretend|act as|code|book|order|buy)\b/.test(norm(raw).trim()))
      return Promise.resolve(Object.assign(answer(kb, Object.assign({ id: "fallback" }, kb.fallback)), { via: "words" }));
    var bare = norm(raw).trim().split(" ").length <= 1;
    if (quick.id === "non-english" || (quick.id === "help" && bare) || s1 >= MEANING.HIGH) return Promise.resolve(Object.assign(quick, { via: "words" }));
    if (!sem.embed) {
      if (!sem.loading || waited) return Promise.resolve(Object.assign(quick, { via: "words" }));
      return Promise.race([sem.loading, new Promise(function (r) { setTimeout(r, 4000); })])
        .then(function () { return smartReply(kb, raw, true); });
    }
    var byId = {};
    kb.topics.forEach(function (t) { byId[t.id] = t; });
    var negative = sum(kb.negative, 1, norm(raw), norm(raw).trim().split(" "), norm(raw)) > 0;
    return sem.embed(prep(raw)).then(function (qv) {
      var list = meaningRank(qv).filter(function (r) { return byId[r.id] && !(negative && byId[r.id].brag); });
      var top = list[0], next = list[1] || { sim: 0 };
      var kwId = s1 >= 2 ? ranked[0].t.id : null;
      var pick = null;
      if (top && top.sim >= MEANING.STRONG && !(kwId && s1 >= MEANING.KEEP && kwId !== top.id)) pick = top.id;
      else if (kwId) pick = kwId;
      else if (top && top.sim >= MEANING.WEAK && top.sim - next.sim >= MEANING.MARGIN) pick = top.id;
      if (!pick || pick === quick.id) return Object.assign(quick, { via: pick ? "words" : "none" });
      return Object.assign(answer(kb, byId[pick]), { via: "meaning" });
    }).catch(function () { return Object.assign(quick, { via: "words" }); });
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
        topic: result.id + (result.via === "meaning" ? " (meaning)" : ""),
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

  root.BotEngine = { reply: reply, smartReply: smartReply, loadMeaning: loadMeaning, setMeaning: setMeaning, meaningReady: function () { return !!sem.embed; }, prep: prep, tune: MEANING, score: score, norm: norm, log: log };
})(typeof window !== "undefined" ? window : globalThis);
