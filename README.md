# Vijay / Dev — Portfolio

A responsive, accessible, single-page developer portfolio built with plain HTML, CSS, and JavaScript. No build step or framework required.

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark/light theme toggle with saved preference
- Mobile navigation with keyboard Escape support
- Project cards with category filters
- Copy-email interaction with status feedback
- Reduced-motion support and skip-to-content link
- Semantic sections, metadata, and lightweight CSS artwork
- Ready for GitHub Pages

## Run locally

Open `index.html` in a browser. For a local server, run `python -m http.server 8000` and visit `http://localhost:8000`.

## Personalize before publishing

1. Replace `YOUR_EMAIL@example.com` with your public contact address.
2. Replace the generic LinkedIn link with your profile.
3. Update project cards, statuses, and links with accurate details for work you have actually built.
4. Add a current resume PDF in `assets/` if desired.
5. Verify experience, education dates, role details, and technologies.

Keep only the skills you can comfortably explain and demonstrate. Do not publish private documents, credentials, or tokens.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under build and deployment, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.
4. After GitHub Pages finishes building, open the published URL shown in Pages settings.

## Project structure

```text
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

The site is static and does not send form submissions to a server. The contact CTA uses `mailto:`. Project illustrations are made with CSS.
