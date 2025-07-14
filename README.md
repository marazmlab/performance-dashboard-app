# Performance Audit Dashboard

A practical web application for analyzing, visualizing, and documenting website performance metrics. Includes optimization checklists, simulated audit data, and technical notes. Built with React and Tailwind CSS, focused on clean code, accessibility, and real-world developer workflow.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Planned Improvements](#planned-improvements)
- [License](#license)

## Project Overview

Performance Audit Dashboard helps frontend developers practice performance audits, track improvements, and learn best practices in web optimization. The app simulates key performance metrics, provides a checklist for optimizations, and allows for technical note-taking.

## Tech Stack


## Optimization Technologies & Tools

- Lighthouse (performance audits & scoring)
- Chrome DevTools (performance profiling, audits)
- Lazy loading (images, components)
- Code splitting (React.lazy, dynamic imports)
- Image optimization (responsive images, modern formats)
- Minification (CSS/JS via Vite)
- Efficient caching strategies
- Accessibility (a11y) best practices
- Semantic HTML
- Bundle analysis (e.g. Vite plugin, Webpack Bundle Analyzer)
- Prettier & ESLint for code quality

## Features

- Display of simulated performance metrics (LCP, FCP, TTI, CLS, FID, Lighthouse Score)
- Optimization checklist with progress tracking
- Section for technical notes and audit conclusions
- Modular, accessible UI components
- Ready for integration with headless CMS (Netlify CMS)
- Unit and integration tests

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/marazmlab/performance-dashboard-app.git
   cd performance-dashboard-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Development Workflow

- Each feature or fix is committed with a clear, descriptive message.
- Modular components and logic separated into hooks and utils.
- Accessibility (a11y) and performance are prioritized.
- Documentation and tests are updated continuously.

## Testing

- Unit and integration tests are written with Jest and React Testing Library.
- To run tests:
  ```bash
  npm test
  ```
- Test coverage is monitored and improved regularly.

## Planned Improvements

- Integration with Netlify CMS for content management
- Real Lighthouse/Chrome DevTools data integration
- User authentication and audit history
- Deployment to Netlify with custom domain

