# Taskeen 🏨

**Taskeen** is a small React front-end project scaffolded with Vite and styled with Tailwind CSS. This repository contains the source for a multi-page site including Home, About, Rooms, Facilities, Gallery, Testimonials, and Contact pages.

---

## 🔧 Technologies

- **Framework:** React (v19)
- **Bundler:** Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** react-router-dom

---

## 🚀 Quick Start

Prerequisites:

- Node.js (recommended v18+)
- npm (comes with Node) or a compatible package manager

1. Install dependencies

```bash
npm install
```

2. Start development server (Vite):

```bash
npm run dev
```

3. Build production assets:

```bash
npm run build
```

4. Preview built site locally:

```bash
npm run preview
```

---

## ⚙️ Available npm scripts

- `npm run dev` — Run the app in development mode with HMR.
- `npm run build` — Create an optimized production build.
- `npm run preview` — Preview the production build locally.

---

## 📁 Project Structure

```
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
public/
  images/
    inclusions/
  videos/
src/
  App.jsx
  main.jsx
  index.css
  style.css
  components/
    Footer.jsx
    Layout.jsx
    Navbar.jsx
  pages/
    About.jsx
    Contact.jsx
    Facilities.jsx
    Gallery.jsx
    Home.jsx
    Rooms.jsx
    Testimonials.jsx
```

- `src/` — Application source code
- `public/` — Static assets (images, videos, etc.)

---

## ✅ Tips & Common Tasks

- If you update Tailwind configuration, restart the dev server to pick up changes.
- To inspect the final bundled output, run `npm run build` then `npm run preview`.
- If you get permission or network errors while installing, try clearing the npm cache or switching registries.

---

## 🧪 Testing & CI

This project currently doesn't include automated tests or CI configuration. Consider adding:

- GitHub Actions for build checks and previews
- Unit tests with Jest or Vitest for components
- E2E tests with Playwright or Cypress

---

## 🤝 Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes with clear messages
4. Open a pull request on GitHub

Please follow existing code style and add documentation for non-trivial changes.

---

## 📞 Contact

If you need help, open an issue or contact the maintainer listed on the GitHub repo.

---

## 📝 License

Add a license file to clarify permitted uses (e.g., MIT, Apache-2.0). If you already have a preferred license, add a `LICENSE` file at the project root.

---

Happy building! ✨
