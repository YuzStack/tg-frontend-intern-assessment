# Tobams Group — Frontend Intern Assessment

A modular, component-driven landing page implementation built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, translating key visual specifications from the assessment Figma design into production-ready web code.

- **Live Demo:** [https://tg-frontend-intern-assessment.vercel.app/](https://tg-frontend-intern-assessment.vercel.app/)
- **Repository:** [https://github.com/YuzStack/tg-frontend-intern-assessment](https://github.com/YuzStack/tg-frontend-intern-assessment)

---

## Technical Stack & Architectural Decisions

- **Next.js (App Router):** Leveraged React Server Components (RSC) to serve pre-rendered HTML by default, reducing initial client-side JavaScript execution overhead.
- **TypeScript:** Applied strict typing across components, props, and design tokens to ensure maintainable, error-resistant code.
- **Tailwind CSS:** Used utility-first styling mapped directly to the design tokens (spacing scales, font families, and color hierarchies) to keep the bundle footprint small and predictable.
- **Modular Architecture:** Structured the codebase using isolated, reusable components to guarantee clear separation of concerns:
  ```text
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  │   ├── Nav.tsx
  │   ├── Hero.tsx
  │   └── ...
  └── public/
  ```
