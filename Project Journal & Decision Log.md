# Project Journal & Decision Log

## 1. Motivation and Goals

I set out to build a modern, modular React application that would stand out in my portfolio—especially for recruitment at companies like Squiz. My aim was to deliver an app that is not only functional, but also clear, easy to extend, and aligned with industry best practices.

---

## 2. Technology Choices

**Key technologies selected:**

- **React:** Popular, flexible, and industry-standard for building UIs.
- **Vite:** Chosen for its lightning-fast startup, simple configuration, and native ES Modules support.
- **Tailwind CSS:** Enables rapid prototyping and consistent styling without custom CSS files.
- **Jest + React Testing Library:** Ensures high code quality and easy refactoring through unit and integration tests.
- **SVGR:** Allows convenient use and animation of SVGs as React components.
- **Netlify/Vercel:** Static site deployment for quick, hassle-free project sharing.

---

## 3. Project Structure and Configuration Files

I aimed for a clear division of folders and files to make navigation and project development easier. The structure includes:

 ```
performance-dashboard-app/
├── public/           # Static assets (favicon, index.html)
├── src/
│   ├── assets/       # Static files and graphics
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom hooks for logic
│   ├── pages/        # View components
│   ├── tests/        # Unit and integration tests
│   └── utils/        # Helper functions
├── .github/          # CI/CD workflows
├── .eslintrc.js      # ESLint config
├── babel.config.cjs  # Babel config
├── jest.config.cjs   # Jest config
├── postcss.config.js # PostCSS config
├── tailwind.config.js# Tailwind CSS config
├── vite.config.js    # Vite config
├── package.json
├── README.md
└── ARCHITECTURE.md
```

---

## 4. Decision Process & Iterations

Throughout the project, I regularly reflected on best practices, code clarity, testing, and documentation. Some key questions and decisions included:

- How to describe the architecture for both recruiters and developers?
- Should I list all files or just main folders and config files?
- Which testing and automation tools best meet market expectations?

I iteratively improved the documentation and folder structure, always prioritizing clarity and professionalism.

---

## 5. Architectural Decisions

- **Caching:** Chose `localStorage` with TTL for API result caching—simple, fast, and backend-free, reducing API requests.
- **App State:** Used local React state and custom hooks for API logic, ensuring simplicity and code clarity.
- **Testing:** Focused on unit and integration tests, with the option to expand to E2E (Cypress/Playwright) in the future.
- **Theme Toggle:** Added a theme switcher with SVG animation for a modern, user-friendly experience.

---

## 6. Testing & Quality

- Ensured that all key elements—components, hooks, and utils—are covered by tests.
- The codebase is stable and easy to extend.
- Considered E2E tests, but unit and integration tests are sufficient at this stage.

---

## 7. CI/CD & Deployment

- Implemented GitHub Actions workflows for automated testing and deployment.
- Chose Netlify/Vercel for fast, reliable static site hosting and easy project demonstration.

---

## 8. Documentation & Presentation

- Treated documentation as a core part of the project.
- Aimed for docs that are both technical and reflective of my decision-making process.
- Added a “Further Improvements” section to highlight the project’s potential for future growth (CI/CD, E2E, backend, extended docs).

---

## 9. Final Reflections

This project achieves its goals: it’s modular, modern, well-documented, and ready for recruiters. Every decision was made with clarity, scalability, and easy onboarding in mind. I regularly analyzed my choices, sought the best solutions, and wasn’t afraid to iterate to achieve the best possible result.