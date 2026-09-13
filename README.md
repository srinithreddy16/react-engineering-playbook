# React Engineering Playbook

A hands-on React + TypeScript learning project built with **Vite**. This repository walks through core React concepts with working demos—from Virtual DOM basics to routing, HTTP, Context API, lazy loading, ESLint, and unit testing with Vitest.

> Application code lives in the [`my-app`](./my-app) folder.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Application Shell](#application-shell)
5. [Topics Covered](#topics-covered)
   - [React Fundamentals](#1-react-fundamentals)
   - [Components & JSX](#2-components--jsx)
   - [Data Binding & State](#3-data-binding--state)
   - [Lists, Keys & Conditional Rendering](#4-lists-keys--conditional-rendering)
   - [Props](#5-props)
   - [Forms](#6-forms)
   - [Refs (`useRef`)](#7-refs-useref)
   - [Hooks](#8-hooks)
   - [Memoization (`React.memo`, `useMemo`, `useCallback`)](#9-memoization)
   - [Higher-Order Components (HOC)](#10-higher-order-components-hoc)
   - [Recursive Components](#11-recursive-components)
   - [Events (Synthetic Events)](#12-events-synthetic-events)
   - [HTTP & Axios](#13-http--axios)
   - [Interceptors](#14-interceptors)
   - [Routing](#15-routing)
   - [Code Splitting / Lazy Loading](#16-code-splitting--lazy-loading)
   - [Context API](#17-context-api)
   - [ESLint](#18-eslint)
   - [Unit Testing (Vitest)](#19-unit-testing-vitest)
6. [Key Routes](#key-routes)
7. [Useful Scripts](#useful-scripts)
8. [Learning Notes](#learning-notes)

---

## Tech Stack

| Area | Libraries |
|------|-----------|
| UI | React 19, TypeScript, Bootstrap 5 |
| Build | Vite 8 |
| Routing | `react-router-dom` |
| HTTP | Axios |
| Forms | Formik + Yup |
| UI helpers | SweetAlert2, react-modal, react-select, react-icons |
| Testing | Vitest, Testing Library, jest-dom, jsdom |
| Lint | ESLint + typescript-eslint + react-hooks |

---

## Getting Started

```bash
cd my-app
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

---

## Project Structure

```text
ReactProject/                 ← GitHub repository root
├── README.md                 ← This file (visible on GitHub)
├── package-lock.json
└── my-app/                   ← Vite React application
    ├── src/
    │   ├── main.tsx          ← App bootstrap (Router + providers)
    │   ├── App.tsx           ← Layout shell + interceptors
    │   ├── components/
    │   │   ├── navbar/       ← NavLink navigation
    │   │   ├── categories/   ← Props parent → child demo
    │   │   ├── carousel/
    │   │   ├── body/         ← Demo host + <Routes>
    │   │   ├── footer/
    │   │   ├── databinding/
    │   │   ├── listItem/
    │   │   ├── props/
    │   │   ├── state/
    │   │   ├── form/
    │   │   ├── hooks/
    │   │   ├── HOC/
    │   │   ├── http/
    │   │   ├── productList/
    │   │   ├── userlist/
    │   │   ├── folder_explorer/
    │   │   ├── counter/      ← CounterDemo (tested)
    │   │   └── routing/      ← Pages, nested & protected routes
    │   ├── interceptors/     ← Auth, Time, Error
    │   ├── services/
    │   ├── utils/            ← Contexts, math utils, Axios instance
    │   └── setupTests.ts
    ├── tests/
    │   ├── component/counter.test.tsx
    │   └── util/math-util.test.ts
    ├── notes.txt             ← Detailed study notes
    ├── vitest.config.ts
    └── package.json
```

---

## Application Shell

**`main.tsx`** wires global providers:

- `StrictMode`
- `BrowserRouter`
- `userContext.Provider` (logged-in user string)
- `TimeProvider` (live clock)
- `ThemeProvider` (light/dark theme)

**`App.tsx`** renders the page layout:

- `Navbar` → `Categories` → `Carousel` → `Body` → `Footer`
- Registers Axios interceptors (`Auth`, `Time`, `Error`)

Most learning demos are mounted from **`Body`**, and page navigation is handled by React Router routes defined there.

---

## Topics Covered

### 1. React Fundamentals

| Concept | What we learned |
|---------|-----------------|
| Virtual DOM | Lightweight JS tree of UI; React diffs trees instead of rewriting the whole page |
| Diffing | Compare previous vs new Virtual DOM |
| Reconciliation | Apply minimal updates to the real DOM |
| Fiber | React’s reconciler engine (React 16+) |
| Modules | ES modules: default vs named `import` / `export` |
| StrictMode | Highlights unsafe patterns in development (double-invokes some logic) |

**Project files:** Vite + React setup, `main.tsx`, study notes in `notes.txt`

---

### 2. Components & JSX

- Functional components (primary style used throughout)
- Class components (covered conceptually in notes)
- Fragments (`<>...</>`) for multiple root elements without extra DOM nodes
- Component styling with Bootstrap classes and CSS files
- Layout split into reusable pieces: Navbar, Categories, Carousel, Body, Footer

**Examples:** `App.tsx`, `Navbar.tsx`, `Categories.tsx`, `CategoryItem.tsx`

---

### 3. Data Binding & State

- One-way data flow: **state → UI**
- Why local variables don’t trigger re-renders
- `useState` for reactive UI updates

**Examples:**

- `components/databinding/DataBinding.tsx`
- `components/databinding_examples/DataBindingExamples.tsx`
- `components/state/Counter.tsx` (increment / decrement / reset)

---

### 4. Lists, Keys & Conditional Rendering

- Rendering arrays with `.map()`
- Why **keys** matter for list identity and performance
- Conditional UI with ternary / `&&`

**Examples:**

- `ListDemo1.tsx`, `EmployeeList.tsx`, `TaskList.tsx`
- `UserList.tsx`, `ProductList.tsx` / `ProductList2.tsx`

---

### 5. Props

- Passing data parent → child
- Destructuring props
- Optional props & default values
- TypeScript interfaces for prop shapes
- PropTypes (also covered in notes)
- Props are **immutable**; unidirectional flow

**Examples:**

- `PropsDemo1.tsx`
- `Categories.tsx` → `CategoryItem.tsx` (category object per item)
- `UserCard.tsx` (used with memoization demos)

---

### 6. Forms

| Approach | Demo |
|----------|------|
| Controlled inputs with `useState` | `FormDemo1.tsx`, `AdditionDemo1.tsx` |
| Refs-based values | `AdditionDemo2.tsx` |
| Formik + Yup validation | `FormDemo2.tsx` (fields, radios, checkboxes, errors) |

Covered ideas: controlled vs uncontrolled inputs, validation messages, form state sync.

---

### 7. Refs (`useRef`)

- Access DOM values without re-rendering on every keystroke
- `ref={inputRef}` → read `inputRef.current.value` on action
- Useful for focus, measurements, and non-reactive values

**Example:** addition demos comparing state vs ref approaches

---

### 8. Hooks

| Hook | Purpose in this project |
|------|-------------------------|
| `useState` | Local component state |
| `useEffect` | Side effects: API fetch, timers, cleanup |
| `useRef` | DOM / mutable refs |
| `useMemo` | Cache expensive calculated values |
| `useCallback` | Cache function identities for memoized children |
| `useContext` | Read Context values |
| Custom hooks | `useTime()`, `useTheme()` |

**Examples:** `UseEffectDemo1.tsx`, `UserDetails.tsx`, `UseMemoTest.tsx`

Lifecycle mapping (notes): class lifecycle phases ↔ `useEffect` patterns (`[]`, `[deps]`, cleanup).

---

### 9. Memoization

- **`React.memo`**: skip child re-render when props are shallow-equal
- **`useCallback`**: keep the same function reference so memoized children don’t re-render
- **`useMemo`**: avoid repeating expensive calculations

**Examples:** `Counter.tsx` + `UserCard.tsx`, `UseMemoTest.tsx`

---

### 10. Higher-Order Components (HOC)

Pattern: take a component → return an enhanced component (shared counter logic).

**Examples:**

- `CounterHOC.tsx` / `LoggerHOC.tsx`
- `ClickCounter.tsx`, `HoverCounter.tsx`
- `MyCounter.tsx` with logger HOC

---

### 11. Recursive Components

Folder explorer that renders nested folders by calling the same `Folder` component for children.

**Examples:** `folder_explorer/Folder.tsx` + `data.json`

---

### 12. Events (Synthetic Events)

- React wraps native events in a **SyntheticEvent**
- Cross-browser consistency + event delegation
- Access native event via `event.nativeEvent` when needed

---

### 13. HTTP & Axios

Ways practiced:

1. `fetch` + `.then()`
2. `async` / `await`
3. Axios `get` / responses
4. Shared Axios instance (`utils/api.ts`)
5. Parallel calls with `axios.all`

**Examples:**

- `UserList_Http.tsx`
- `CommentList_Http.tsx`
- `ToDoList_Http.tsx`
- `Multiple_API.tsx`

Also used: SweetAlert2, react-modal, react-select in product UI demos.

---

### 14. Interceptors

Centralized request/response handling:

| Interceptor | Role |
|-------------|------|
| `AuthInterceptor` | Attach auth-related headers |
| `TimeInterceptor` | Time-related request handling |
| `ErrorInterceptor` | Global error alerts |

Registered from `App.tsx` so all Axios traffic shares the same pipeline.

---

### 15. Routing

Built with **React Router**:

| Topic | Implementation |
|-------|----------------|
| `BrowserRouter` | Wraps app in `main.tsx` |
| `Routes` / `Route` | Defined in `body.tsx` |
| `NavLink` | Active styling in `Navbar.tsx` |
| Path params | `/userdetails/:id` → `UserDetail.tsx` (`useParams`) |
| Query params | `/productdetails?...` → `ProductDetails.tsx` (`useSearchParams`) |
| Nested routes | `/careers` → permanent / contract + `<Outlet />` |
| Index route | Default child under Careers = `PermanentJobs` |
| Protected routes | `ProtectedRoute` around `/upload` |
| `Navigate` + `replace` | Blocked users redirected without polluting history |
| 404 | `path="*"` → `NotFound` |

**Pages:** Home, AboutUs, Careers, ContactUs, Products, Users, UploadVideos, NotFound, etc.

**Protected route idea:** role check (e.g. student) → `alert` + redirect to `/home` with `replace` so Back does not return to `/upload`.

---

### 16. Code Splitting / Lazy Loading

- Eager import loads with the initial bundle
- `React.lazy(() => import(...))` loads on demand
- Must wrap lazy components in `<Suspense fallback={...}>`

**Example:** `ProductList` lazy-loaded on `/products` inside `body.tsx`

How to verify: Network tab → open Products → JS chunk appears only then.

---

### 17. Context API

Avoid prop drilling by providing shared values at the top of the tree.

| Context | File | What it shares |
|---------|------|----------------|
| User | `utils/app_context.ts` | Logged-in user info |
| Time | `utils/TimeContext.tsx` | Live clock via `useTime()` |
| Theme | `utils/ThemeContext.tsx` | Light/dark + `toggleTheme` via `useTheme()` |

**Pattern:**

1. `createContext`
2. Provider with state (`TimeProvider` / `ThemeProvider`)
3. Custom hook (`useTime` / `useTheme`) using `useContext`
4. Consumers: `CounterDemo`, `Footer`, etc.

`TimeProvider` uses `useEffect` + `setInterval` (1s) and cleans up with `clearInterval`.

---

### 18. ESLint

- Static analysis for JS/TS problems and React best practices
- Project config: `eslint.config.js`
- Run: `npm run lint`
- Notable rule: `react-refresh/only-export-components` — Context files that export both a Provider and a hook (`useTime`, `useTheme`) are allowed via `allowExportNames`

---

### 19. Unit Testing (Vitest)

Replaces “console.log + click around” with automated checks.

**Setup:**

- `vitest` + `@vitest/coverage-v8` + `@vitest/ui`
- `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- `vitest.config.ts` — `environment: "jsdom"`, `globals`, `setupFiles`
- `src/setupTests.ts` — jest-dom matchers for Vitest

**Tests:**

| File | Covers |
|------|--------|
| `tests/util/math-util.test.ts` | `add`, `sumOfDigits` from `math.utils.ts` |
| `tests/component/counter.test.tsx` | `CounterDemo` render, increment, decrement, reset |

**Commands:**

```bash
npm test              # watch mode
npm run test:coverage # coverage report
npm run test:ui       # Vitest UI
```

**Matchers practiced:** `toBe`, `not.toBe`, `toHaveTextContent`, role queries, `userEvent.click`

---

## Key Routes

| Path | Component / behavior |
|------|----------------------|
| `/`, `/home` | Home (+ CounterDemo) |
| `/aboutus` | About Us |
| `/careers` | Careers + nested jobs (`Outlet`, index → Permanent) |
| `/careers/permanent` | PermanentJobs |
| `/careers/contract` | ContractJobs |
| `/contactus` | Contact Us |
| `/products` | ProductList (**lazy**) |
| `/productdetails` | Query-param product details |
| `/users` | User list |
| `/userdetails/:id` | Path-param user details |
| `/upload` | Protected upload page |
| `*` | NotFound |

---

## Useful Scripts

From `my-app/`:

```bash
npm run dev           # start Vite dev server
npm run build         # TypeScript check + production build
npm run preview       # preview production build
npm run lint          # ESLint
npm test              # Vitest
npm run test:coverage # coverage
npm run test:ui       # Vitest UI
```

---

## Learning Notes

Extended study notes (Virtual DOM, hooks, routing, interceptors, testing terminology, and more) are maintained in:

[`my-app/notes.txt`](./my-app/notes.txt)

---

## Author

Training / practice repository for React engineering fundamentals — demos are intentionally kept simple and topic-focused for learning and mentoring.
