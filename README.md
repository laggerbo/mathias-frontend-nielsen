# mathias-frontend-nielsen

A small birthday app: a sortable reading list (with charts), a grid of fun project
ideas, and a "my first project" get-started guide. Built with React + Vite.

## Run it locally

1. **Install [Node.js](https://nodejs.org/)** (includes `npm`) if you don't have it already.
2. **Clone the repo:**
   ```bash
   git clone https://github.com/laggerbo/mathias-frontend-nielsen.git
   cd mathias-frontend-nielsen
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. Open the URL Vite prints (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
```

This runs a TypeScript type-check (`tsc -b`) and then outputs a static site to `dist/`.
Preview the production build locally with:

```bash
npm run preview
```

## Download the repo

The project lives at
[github.com/laggerbo/mathias-frontend-nielsen](https://github.com/laggerbo/mathias-frontend-nielsen).
Clone it with:

```bash
git clone https://github.com/laggerbo/mathias-frontend-nielsen.git
```

or use GitHub's "Code" button to download a ZIP instead.

## Host it on a URL

Any static host works since this builds to plain HTML/CSS/JS. A few easy options:

- **Vercel** — import the GitHub repo at vercel.com/new, it auto-detects Vite.
- **Netlify** — import the repo, build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — run `npm run build`, then deploy the `dist/` folder (e.g. with the
  `gh-pages` package, or GitHub's built-in Pages-from-branch workflow).

## Project structure

```
src/
  App.tsx                  top-level tabs and layout
  main.tsx                 React entry point
  types.ts                 shared TypeScript types (Book, Idea, SetupStep, ...)
  styles.css                all styling (CSS variables, light/dark mode)
  data/
    books.ts                the reading list
    ideas.ts                the project idea list
    setupSteps.ts            the "my first project" guide steps
  utils/
    storage.ts               localStorage helpers (read/rating/tried progress)
  components/
    BooksTab.tsx              sortable reading-list table + pie charts
    BookCharts.tsx            read/not-read and rating pie charts
    PieChart.tsx              reusable Chart.js pie chart
    IdeasTab.tsx              project idea cards
    FirstProjectTab.tsx       get-started guide
    Stars.tsx / icons.tsx     small shared UI pieces
```

Reading progress, ratings, and "tried it" toggles are saved to the browser's
`localStorage`, per device — there's no backend.
