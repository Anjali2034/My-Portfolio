# Anjali Verma: portfolio

Personal portfolio site. It's static, with no build step.

- `index.html`: the page. Markup and inline styles sit in the `<x-dc>` block, and the logic is in the script at the bottom.
- `Case-*.dc.html`: the three product case studies.
- `bot-knowledge.js`: the answers for the "Ask about Anjali" assistant. `bot-engine.js` matches questions to them.
- `support.js`, `vendor/`: the runtime that renders the page in the browser.
- `assets/`: images and the résumé.

## Run it locally

```
python -m http.server
```

Then open http://localhost:8000. Some browsers block the scripts if you open the file directly.
