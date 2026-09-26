# AgentHoneypot project website

This repository contains the standalone static AgentHoneypot academic project page. The published files live in `site/`; no private research source tree is included. The page follows a compact editorial project-page layout and includes static, evidence-labeled attack-carrier samples.

## Local preview

```bash
python3 -m http.server 8000 --directory site
```

Open `http://127.0.0.1:8000/`.

## GitHub Pages

The Pages workflow uploads only `site/` and runs from the `main` branch. The public project site is:

```text
https://AgentHoneypot.github.io/
```

The page remains in anonymous-review configuration. Paper, code, author, affiliation, and citation metadata are intentionally withheld in `site/js/config.js` until a public release is approved. All attack samples are static mechanism previews; they do not invoke an agent or claim a live attack.
