# 🚀 Abinu Mathewos — Developer Portfolio

> A modern, interactive, single-page portfolio website built to showcase Abinu Mathewos's skills, projects, and contact information as a Full Stack Developer.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Component Breakdown](#-component-breakdown)
- [Key Libraries — What They Do & How They're Used](#-key-libraries--what-they-do--how-theyre-used)
- [Styling System](#-styling-system)
- [Assets & Static Files](#-assets--static-files)
- [Build & Development Tools](#-build--development-tools)
- [Getting Started](#-getting-started)
- [What's Missing / Could Be Improved](#-whats-missing--could-be-improved)

---

## 🌐 Project Overview

This is a **single-page application (SPA)** portfolio website with no backend or database. It is a purely frontend project. The site renders a series of scrollable sections: Home, About, Skills, Projects, and Contact.

**Notable highlights:**
- A custom **typewriter animation** built from scratch with `useState` + `useEffect` loops
- A **3D interactive skill sphere** rendered with WebGL via Three.js / React Three Fiber
- **Scroll-triggered fade-up animations** on every section using Framer Motion + Intersection Observer
- **Responsive design** across mobile, tablet, and desktop
- A **loading spinner** displayed for 1.5s on initial page load
- A **sticky navbar** with active-section tracking via scroll position

---

## 🧰 Tech Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | React | ^19.2.0 |
| Build Tool | Vite | ^7.3.1 |
| CSS Framework | Tailwind CSS v4 | ^4.2.1 |
| 3D Rendering | Three.js | ^0.183.1 |
| 3D React Bindings | @react-three/fiber | ^9.5.0 |
| 3D Helpers/Controls | @react-three/drei | ^10.7.7 |
| Animations | Framer Motion | ^12.34.3 |
| Icons | Lucide React | ^0.575.0 |
| Scroll Detection | react-intersection-observer | ^10.0.3 |
| Type Animation (unused) | react-type-animation | ^3.2.0 |
| Type Animation (unused) | typed.js | ^3.0.0 |
| Dev GUI (unused) | leva | ^0.10.1 |
| Linting | ESLint | ^9.39.1 |
| PostCSS | autoprefixer + postcss | ^10.4.24 / ^8.5.6 |

> **Note:** Tailwind CSS v4 is used here — it works differently from v3. The entire config is handled inside `vite.config.js` via the `@tailwindcss/vite` plugin, and there is **no `tailwind.config.js` file** (that's by design for v4).

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico                   # Browser tab icon
│   ├── Abinu_Mathewos_fullstack_CV.pdf  # Downloadable CV
│   └── logos/                        # Skill icon SVGs (used in 3D sphere & skill grid)
│       ├── react.svg
│       ├── nodejs.svg
│       ├── express.svg
│       ├── javascript.svg
│       ├── tailwind.svg
│       ├── mongodb.svg
│       ├── postgres.svg
│       ├── mysql.svg
│       ├── git.svg
│       ├── html.svg
│       ├── bootstrap.svg
│       ├── java.svg
│       ├── python.svg
│       ├── cplusplus.svg
│       └── csharp.svg
│
├── src/
│   ├── main.jsx                      # React DOM entry point
│   ├── App.jsx                       # Root component — renders all sections
│   ├── index.css                     # Global CSS (Tailwind import + blink keyframe)
│   │
│   ├── assets/                       # Imported image assets (bundled by Vite)
│   │   ├── logo.png                  # Navbar logo
│   │   ├── personalPhoto.jpg         # Profile photo (Home section)
│   │   ├── computerImage.png         # Illustration (About section)
│   │   ├── crownwear.png             # E-commerce project thumbnail
│   │   ├── crownwear2.png            # (Present in assets, not currently used in code)
│   │   ├── booksimply.png            # Hotel booking project thumbnail
│   │   ├── amazon.svg                # (Present in assets, not currently used in code)
│   │   ├── apple.svg                 # (Present in assets, not currently used in code)
│   │   ├── netflix.svg               # (Present in assets, not currently used in code)
│   │   └── react.svg                 # (Vite default, not used in code)
│   │
│   └── components/
│       ├── Navbar.jsx                # Fixed top navigation bar
│       ├── Spinner.jsx               # Full-screen loading animation
│       ├── Home.jsx                  # Hero / landing section
│       ├── About.jsx                 # Bio & CV download section
│       ├── Skills.jsx                # Skills section layout (orchestrator)
│       ├── Skill2.jsx                # Tech skill pills grid (Frontend/Backend/DB)
│       ├── SkillSphere.jsx           # 3D rotating sphere with skill logos
│       ├── SphereCanvas.jsx          # Three.js Canvas wrapper for SkillSphere
│       ├── Projects.jsx              # Project cards with hover/click interactions
│       ├── Contact.jsx               # Contact icons grid (email, phone, socials)
│       └── ScrollFadeUp.jsx          # Reusable scroll-triggered fade-up wrapper
│
├── index.html                        # Vite HTML entry point
├── vite.config.js                    # Vite + React + Tailwind plugin config
├── eslint.config.js                  # ESLint rules for React hooks & refresh
├── package.json                      # Dependencies & npm scripts
└── .gitignore
```

---

## 🧩 Component Breakdown

### `main.jsx` — Entry Point
Bootstraps the React app. Mounts `<App />` into the `#root` div inside `index.html`. Uses `React.StrictMode` to catch development-time issues.

---

### `App.jsx` — Root Component
- Manages a `loading` state (true for 1.5s on mount via `setTimeout`)
- Shows `<Spinner />` while loading, then renders the full page
- Composes all section components in order: `Navbar → Home → About → Skills → Projects → Contact`
- Sets the global deep-purple background color (`bg-[#11071f]`)

---

### `Navbar.jsx` — Navigation Bar
**Dependencies:** `lucide-react` (Menu, X icons), logo asset

**How it works:**
- `isOpen` state controls mobile hamburger menu visibility
- `activeSection` state tracks which nav item should appear as active
- A `scroll` event listener calculates which section is in the center of the viewport and updates `activeSection`
- Clicking a nav item calls `scrollIntoView({ behavior: 'smooth' })` for smooth scrolling
- Desktop: shows horizontal link list with a purple underline indicator on the active item
- Mobile: shows a hamburger icon (`Menu`) that toggles a dropdown menu (`X` to close)

---

### `Spinner.jsx` — Loading Screen
A purely CSS/Tailwind animation component. Renders two concentric spinning circles (one clockwise, one counter-clockwise) on the same deep-purple background as the app, creating a dual-ring loading effect. Also has an ambient purple glow blob using `animate-pulse`.

---

### `Home.jsx` — Hero Section
**Dependencies:** `framer-motion` (imported but not actively used for animations in final code), personal photo asset

**How it works:**
- Implements a **custom typewriter effect** built entirely with React state:
  - `text` — the currently displayed string
  - `roleIndex` — cycles between "Abinu Mathewos" and "A Full Stack Developer"
  - `phase` — controls the state machine: `"typing"` → `"pause"` → `"deleting"` → repeat
  - `charIndex` — tracks character position
- A `useEffect` runs a `setTimeout` on every state change to advance the animation
- A blinking cursor (`|`) is rendered via a `.blink-cursor` class defined in global CSS as a keyframe animation
- Displays a circular profile photo above the typewriter text

> **Note:** `framer-motion` is imported in this file but no `motion.*` components are actually used in the rendered JSX. It can be removed to clean up the import.

---

### `About.jsx` — About Section
**Dependencies:** `ScrollFadeUp` component, computerImage asset

- Split layout: illustration on the left, text on the right (stacks on mobile)
- Features a decorative radial-gradient purple glow blob as an absolute-positioned background element
- Text introduces Abinu, his role, and a short bio
- Contains a **Download CV** button linking to `/Abinu_fullstack_CV.pdf`

> ⚠️ **Bug:** The CV link href is `/Abinu_fullstack_CV.pdf` but the actual file in `public/` is named `Abinu_Mathewos_fullstack_CV.pdf`. The download button will 404. The href should be updated to `/Abinu_Mathewos_fullstack_CV.pdf`.

---

### `Skills.jsx` — Skills Section (Orchestrator)
A layout component that arranges two sub-sections side by side on desktop:
- **Left:** `<Skill2 />` — categorized tech skill pills grid
- **Right:** A styled card listing 6 soft skills with arrow indicators

Imports `SphereCanvas` but does **not** use it in the final rendered JSX. The 3D sphere from `SphereCanvas`/`SkillSphere` is currently unused in this layout.

---

### `Skill2.jsx` — Tech Skills Grid
**Dependencies:** `framer-motion`, `ScrollFadeUp`

- Renders skills grouped into 3 categories: **Frontend**, **Backend**, **Databases & Tools**
- Each skill is displayed as a small icon (from `public/logos/`) + label pill
- On hover, each icon scales up with a spring animation (`whileHover={{ scale: 1.25 }}`)
- Each category block fades in on scroll via `ScrollFadeUp`

---

### `SphereCanvas.jsx` — Three.js Canvas Wrapper
**Dependencies:** `@react-three/fiber` (Canvas), `@react-three/drei` (OrbitControls), `SkillSphere`

Sets up the WebGL rendering context:
- Camera positioned at `[0, 0, 8]` with `fov: 50`
- Ambient light + directional light
- `OrbitControls` with no zoom/pan, only rotation with damping
- Renders `<SkillSphere />` inside the canvas

> **Note:** This component is imported in `Skills.jsx` but **not rendered** in the current code. The Skill2 grid replaced it in the layout.

---

### `SkillSphere.jsx` — Interactive 3D Sphere
**Dependencies:** `@react-three/fiber` (useFrame, useLoader, useThree), `three` (THREE.TextureLoader)

The most technically complex component. Creates a rotating 3D globe-like arrangement of skill logo icons:
- 13 skill SVG textures are loaded with `THREE.TextureLoader`
- Icons are positioned on a sphere surface using the **Fibonacci/Sunflower sphere distribution formula** (`phi`, `theta`, `x`, `y`, `z`)
- The group rotates continuously via `useFrame` (Y axis: +0.001/frame, X axis: +0.0005/frame)
- On hover, an icon **scales up** from 0.8 to 1.2 with smooth lerp interpolation
- A purple progress/percentage bar animates below each icon on hover (random fill level)
- Icons always face the camera using `mesh.lookAt(camera.position)`
- Uses `useMemo` for stable random skill percentages per session

> **Note:** Currently not mounted in the Skills section. Can be re-enabled by adding `<SphereCanvas />` back into `Skills.jsx`.

---

### `Projects.jsx` — Projects Section
**Dependencies:** `framer-motion` (motion, AnimatePresence), `ScrollFadeUp`, project images, tech stack logo paths

Displays 3 projects. Each project card has **different behavior on mobile vs. desktop:**

**Desktop (lg+):**
- On hover, a frosted glass overlay fades in
- A popup card springs open (cubic-bezier spring animation) with the project title, GitHub link, live site link, and a "Description" button
- Clicking "Description" sets `activeId`, revealing an animated panel on the **left** of the grid with the full project description (using Framer Motion `AnimatePresence` for enter/exit transitions)

**Mobile/Tablet (< lg):**
- A "More" button on the card toggles a description block below the card
- On small screens (< md), the left description panel is hidden; on md, it appears but the close button behavior differs

The 3 projects showcased:
1. **AI-Powered E-Commerce** (PERN stack: PostgreSQL, Express, React, Node.js)
2. **Hotel Booking App** (MERN stack: MongoDB, Express, React, Node.js)
3. **Blog App** (MERN stack: MongoDB, Express, React, Node.js)

> **Note:** `amazon.svg`, `apple.svg`, and `netflix.svg` are imported at the top of the file but not used anywhere in the rendered JSX. These are leftover imports that should be cleaned up.

---

### `Contact.jsx` — Contact Section
**Dependencies:** `framer-motion`, `lucide-react` (Mail, Phone, Linkedin, Send, MapPin, Github), `ScrollFadeUp`

- Displays 6 contact cards in a responsive 2-column (mobile) / 3-column (desktop) grid
- Each card is a circular white button with a purple icon using `motion.a` for hover spring animations (`scale: 1.15` + purple box shadow on hover)
- Links open in a new tab for external URLs (email and tel links remain in the same context)
- Contact info: email, phone, LinkedIn, Telegram, GitHub, and physical address

---

### `ScrollFadeUp.jsx` — Reusable Scroll Animation Wrapper
**Dependencies:** `framer-motion` (motion, useAnimation), `react-intersection-observer` (useInView)

A utility wrapper component used throughout the site. Any content wrapped in `<ScrollFadeUp>` will:
- Start invisible and 50px below its final position (`opacity: 0, y: 50`)
- Fade and slide up smoothly when 20% of the element enters the viewport
- Play the animation **only once** (`triggerOnce: true`)

This is the foundational animation primitive of the entire site.

---

## 🎨 Styling System

| Tool | Role |
|---|---|
| **Tailwind CSS v4** | Utility-first CSS — almost all styling is done via Tailwind class names inline on JSX elements |
| **`@tailwindcss/vite` plugin** | Integrates Tailwind v4 directly into the Vite build pipeline — no separate `tailwind.config.js` needed |
| **`index.css`** | Imports Tailwind via `@import "tailwindcss"`, plus defines the `blink` keyframe for the cursor in the typewriter effect |
| **`autoprefixer` + `postcss`** | Handles CSS vendor prefixing for browser compatibility (configured as devDependencies) |

**Color palette used throughout:**
- `#11071f` — Deep purple/black (main background)
- `#191321` — Slightly lighter purple (navbar background)
- `#121212` — Dark grey (About section background)
- `#1d0b36` / `#2b1848` / `#1e1330` — Various card backgrounds
- `#9916b9` / `#9333ea` / `purple-500` — Accent purple (glows, borders, icons)
- `#d6d0d0` / `gray-300` — Primary text color

---

## 🖼️ Assets & Static Files

### `src/assets/` (Bundled by Vite)
These are imported directly into JSX components. Vite processes and fingerprints them at build time.

| File | Used In |
|---|---|
| `logo.png` | `Navbar.jsx` |
| `personalPhoto.jpg` | `Home.jsx` |
| `computerImage.png` | `About.jsx` |
| `crownwear.png` | `Projects.jsx` |
| `booksimply.png` | `Projects.jsx` |
| `crownwear2.png` | ⚠️ **Not used** — imported but unused |
| `amazon.svg` | ⚠️ **Not used** — imported but unused |
| `apple.svg` | ⚠️ **Not used** — imported but unused |
| `netflix.svg` | ⚠️ **Not used** — imported but unused |
| `react.svg` | ⚠️ **Not used** — Vite default leftover |

### `public/` (Served directly, not bundled)
These files are served at the root URL and referenced as plain string paths in code.

| File | Used In |
|---|---|
| `favicon.ico` | `index.html` |
| `Abinu_Mathewos_fullstack_CV.pdf` | About section (download button) — ⚠️ path mismatch |
| `logos/*.svg` | `SkillSphere.jsx`, `Skill2.jsx`, `Projects.jsx` |

---

## ⚙️ Build & Development Tools

| Tool | Purpose |
|---|---|
| **Vite** | Build tool & dev server. Handles HMR (Hot Module Replacement), asset bundling, and optimization |
| **`@vitejs/plugin-react`** | Enables JSX transformation and React Fast Refresh in Vite |
| **ESLint** | JavaScript linter. Configured with `eslint-plugin-react-hooks` (enforces hooks rules) and `eslint-plugin-react-refresh` (warns about non-component exports that break HMR) |
| **PostCSS + Autoprefixer** | Processes CSS and adds vendor prefixes for cross-browser compatibility |

**Available Scripts:**

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production (outputs to /dist)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint on all source files
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/abinuma/portfolio

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `/dist` folder. Ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

---

## 🔍 What's Missing / Could Be Improved

### 🐛 Known Bugs

| Issue | Location | Details |
|---|---|---|
| **CV download 404** | `About.jsx` L51 | `href="/Abinu_fullstack_CV.pdf"` but actual file is `Abinu_Mathewos_fullstack_CV.pdf` — fix the path |
| **Missing `key` prop** | `Projects.jsx` | `React.Fragment` elements inside `.map()` do not have `key` — should be `<React.Fragment key={project.id}>` |

### ♻️ Unused Code / Dead Imports

| Item | Location | Action |
|---|---|---|
| `framer-motion` import | `Home.jsx` | Imported but no `motion.*` elements are used — remove |
| `amazon.svg`, `apple.svg`, `netflix.svg` | `Projects.jsx` | Imported at top but never referenced in JSX — remove |
| `crownwear2.png`, `react.svg` | `src/assets/` | Files exist but are never imported or used anywhere |
| `useRef`, `useEffect` (Skills.jsx) | `Skills.jsx` | Imported from React but never used — clean up |
| `SphereCanvas` | `Skills.jsx` | Imported but not rendered — either add it back or remove the import |
| `leva` package | `package.json` | Installed but never imported anywhere in code — safe to remove |
| `react-type-animation` | `package.json` | Installed but the typewriter is implemented from scratch — can be removed |
| `typed.js` | `package.json` | Installed but never used — remove |

### 🚀 Features That Could Be Added

| Feature | Description |
|---|---|
| **Contact Form** | There is no actual contact form. Currently only links (email, phone, etc.) are shown. Adding a form (with EmailJS or Formspree for zero-backend form submission) would allow visitors to send messages directly from the site |
| **SEO meta tags** | `index.html` has a plain `<title>abinu</title>`. Adding descriptive `<meta name="description">`, Open Graph tags (`og:title`, `og:image`, etc.) and structured data would improve search visibility and social sharing |
| **3D Sphere in Skills** | `SphereCanvas`/`SkillSphere` are fully built but currently not rendered. Re-enabling the 3D sphere would add visual impact to the Skills section |
| **Dark/Light mode toggle** | The entire site is dark-mode only. A theme toggle is a common portfolio feature |
| **More projects** | Currently only 3 projects. The Projects grid supports more cards |
| **Blog section** | A section linking to or embedding blog posts would increase SEO and demonstrate writing ability |
| **Page transitions** | Currently sections animate individually. Full-page or route-level transitions with Framer Motion's `AnimatePresence` could add polish |
| **Analytics** | No analytics tracking. Google Analytics or Plausible could help understand visitor behavior |
| **PWA / offline support** | Adding a service worker and manifest would make the site installable and work offline |
| **Accessibility (a11y)** | Nav items use `<li>` with `onClick` instead of `<button>` or `<a>` — keyboard navigation is limited. ARIA roles and labels are mostly missing |
| **Environment-based config** | No `.env` files are used since this is a static frontend. If a contact form backend is added, env vars for API keys would be needed |

---

## 📦 Package Notes

### Why Tailwind v4?
Tailwind CSS v4 (used here via `@tailwindcss/vite`) is a significant departure from v3:
- No `tailwind.config.js` — config lives in CSS or Vite config
- Imports via `@import "tailwindcss"` instead of `@tailwind base/components/utilities`
- Faster build times via the Oxide engine
- Some v3 utilities have changed syntax (e.g., `bg-gradient-to-r` → `bg-linear-to-r`)

### Why both `react-type-animation` AND a custom typewriter?
The `react-type-animation` and `typed.js` packages are installed in `package.json` but **the typewriter animation in `Home.jsx` is built from scratch** using React state and `useEffect`. The packages were likely evaluated and replaced with a custom implementation. Both packages can safely be uninstalled:

```bash
npm uninstall react-type-animation typed.js leva
```

---

*Built by Abinu Mathewos — [GitHub](https://github.com/abinuma) | [LinkedIn](https://www.linkedin.com/in/abinu-mathewos-b9489434b/)*
