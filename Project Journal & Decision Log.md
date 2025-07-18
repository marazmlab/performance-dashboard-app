# Project Journal & Decision Log

## Overview

This project is a modern React-based performance audit dashboard inspired by Google PageSpeed Insights. It is designed for modularity, scalability, and developer experience.

---

## Project Structure

```
performance-dashboard-app/
├── public/                   # Static assets (favicon, index.html)
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── tests/
│   └── utils/
├── .github/                  # GitHub Actions workflows (CI/CD)
├── .eslintrc.js              # ESLint config
├── babel.config.cjs          # Babel config
├── jest.config.cjs           # Jest config
├── postcss.config.js         # PostCSS config
├── tailwind.config.js        # Tailwind CSS config
├── vite.config.js            # Vite config
├── package.json
├── README.md
└── ARCHITECTURE.md

```

---

## Main Dependencies

- **React**: UI framework
- **Vite**: Fast build tool and dev server (chosen for speed and modern config)
- **Tailwind CSS**: Utility-first CSS for rapid styling
- **Jest + React Testing Library**: Unit and integration testing
- **SVGR**: SVG as React components
- **Netlify/Vercel**: (optional) for deployment

---

## Key Architectural Decisions

### Why Vite?
- Fast dev server and build times
- Native ES modules support
- Simple configuration for React + Tailwind + SVG

### File/Folder Structure
- Separation of concerns: components, hooks, utils, pages, assets
- Easy to scale and maintain
- Custom hooks for logic reuse

### State Management
- Local React state for UI
- Custom hooks for API/data logic

---

## Caching

**Decision:** Use `localStorage` for API response cache

**Reasoning:**  
- Simple, no extra dependencies  
- Fast access for repeated audits  
- TTL (time-to-live) for cache freshness

**ADR Example:**  

ADR: Use localStorage for API cache
Context: API results are often repeated for the same URL.
Decision: Store results in localStorage with TTL.
Consequences: Faster UX, less API usage, but cache is per-browser and not shared.


---

## Testing

- Unit tests for components, hooks, and utils
- (Optional) E2E tests with Cypress/Playwright

---

## Deployment

- Ready for static hosting (Netlify, Vercel)
- CI/CD can be added via GitHub Actions

---

## Further Improvements

- Add CI/CD workflow for automated testing and deployment
- Add E2E tests for user flows
- Expand documentation (ADR, API docs, etc.)
- Integrate with a backend for full-stack experience

---

*For more details, see the README or contact the project maintainer.*