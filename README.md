<<<<<<< HEAD
# Personal Portfolio

My personal portfolio website built to showcase my projects, skills, education, and progress as a student developer.

The goal of this portfolio is simple: show what I can build, what I'm currently learning, and how my work improves over time.
---
## About

I'm a 3rd-year IT student interested in software development, web development, and game development.

This portfolio is a place to document:
- School projects
- Personal projects
- Programming skills
- Development experience
- Things I'm currently learning
- Notes and experiments

Instead of presenting myself as an experienced professional, the portfolio focuses on my actual work and development as a student in WIT

## What You'll Find Here
### About Me
A short introduction and background.

### Education
Information about my current studies and academic background.

### Experience
My development journey, including relevant school work, projects, and things I've worked on.

### Skills
The programming languages, technologies, and tools I have experience with.

### Projects
A collection of projects I've built or contributed to, including the technologies used and what I learned from them.

### Currently Learning
Technologies and concepts I'm currently studying or practicing.

### Notes
A place for development notes, lessons, and things I find useful while learning.

### Contact
Links to my GitHub, social accounts, and other ways to reach me, etc...

---

## Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### Tools

- Vite
- Git
- GitHub
- VS Code

The project should stay relatively simple. New libraries or frameworks should only be added when they solve an actual problem.

---

## Project Structure
``` ##will prolly have some changes soon because of workkkk
portfolio/
│
├── AGENTS.md
├── SKILLS.md
├── README.md
├── package.json
│
├── public/
│   ├── images/
│   ├── favicon/
│   └── resume/
│
└── src/
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    │
    ├── data/
    │   ├── education.js
    │   ├── experience.js
    │   ├── projects.js
    │   ├── skills.js
    │   └── social.js
    │
    ├── assets/
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

The structure can change as the project grows.

---

## Keeping Content Separate

Personal information should be kept in the `src/data/` directory whenever practical.

For example:

```text
src/data/projects.js
src/data/skills.js
src/data/experience.js
src/data/education.js
src/data/social.js
```

This keeps the actual content separate from the components that display it and makes future updates easier.

---

## Running the Project

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Enter the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The project should build successfully without errors before being considered ready.

---

## Environment Variables

Environment variables should only be used when the project actually needs them.

Create a `.env` file when necessary:

```text
.env
```

Example:

```env
VITE_API_URL=
```

Never commit passwords, API keys, tokens, or other private information to the repository.

---

## Design

The portfolio uses a dark developer-focused interface with an emphasis on:

- Clear typography
- Simple layouts
- Good spacing
- Strong visual hierarchy
- Subtle animations
- Responsive design
- Easy navigation

The design is influenced by portfolios and websites I like, but the implementation, content, structure, and visual identity are built specifically for this portfolio.

The goal isn't to recreate another developer's website. It should feel like **my own site**.

---

## Responsive Design

The website should work properly on:

- Mobile phones
- Tablets
- Laptops
- Desktop computers


There should be no unintended horizontal scrolling or broken layouts cause I suck.

## Accessibility

The portfolio should remain usable with different input methods and accessibility settings.

Important requirements include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Descriptive links
- Useful image alt text
- Accessible buttons
- Good color contrast
- Reduced-motion support

---

## Performance

Keep the website lightweight.

Avoid adding:

- Unnecessary dependencies
- Large unoptimized images
- Excessive JavaScript
- Animation libraries when CSS is enough
- UI libraries for simple components

Every dependency should have a reason to exist.

---

## Accuracy

Everything shown on the portfolio should be truthful and honest, WIT values type shi.

I WILL not add fake:
- Jobs
- Companies
- Internships
- Clients
- Awards
- Certifications
- Statistics
- Achievements
- Skills I have not actually worked with

---

## Before Calling It Finished

- [ ] Development server works
- [ ] Production build works
- [ ] No console errors
- [ ] Navigation works
- [ ] Hero section works
- [ ] About section works
- [ ] Education section works
- [ ] Experience section works
- [ ] Skills section works
- [ ] Projects work
- [ ] Project links work
- [ ] Contact links work
- [ ] Mobile layout works
- [ ] Tablet layout works
- [ ] Desktop layout works
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Images have appropriate alt text
- [ ] No unwanted horizontal scrolling
- [ ] Reduced-motion behavior works
- [ ] No fabricated information is displayed

---

## Status

🚧**In Development**

This portfolio is an ongoing project ;) mercy please.

## License

This is a personal portfolio project created for learning and personal use.
=======
# Student Portfolio

A single-page developer portfolio for a 3rd-year Computer Science student,
built with React + Vite + Tailwind CSS. Structurally inspired by
[Brittany Chiang's portfolio](https://brittanychiang.com/) (fixed sidebar on
desktop, single-page scroll, dark developer aesthetic) but with its own
palette, type system, and layout — see "Design notes" below.

## 1. Install & run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

**Note:** this project was scaffolded in an environment without internet
access, so `npm install` / `npm run build` have **not** been run yet. Please
run both after downloading, fix anything that surfaces (there shouldn't be
much — see "Known limitations" below), and don't consider this done until
the build succeeds and you've clicked through it yourself.

## 2. Add your real content

Everything a visitor sees lives in `src/data/`, not scattered through
components. Edit these files in order:

| File | What to fill in |
|---|---|
| `src/data/social.js` | GitHub, LinkedIn, email, resume path |
| `src/data/profile.js` | Name, role, hero intro, About paragraphs, "currently learning" |
| `src/data/education.js` | Degree, university, year, graduation, coursework |
| `src/data/experience.js` | Real projects/orgs/hackathons — delete the placeholder entry |
| `src/data/skills.js` | Trim to what you actually know |
| `src/data/projects.js` | Your real projects |
| `src/data/writing.js` | Leave empty (the section auto-hides) or add real posts |

Also update `index.html`: the `<title>`, meta description, Open Graph tags,
and favicon (`public/favicon/favicon.svg` is a placeholder).

Search the codebase for `TODO` to find every remaining placeholder:

```bash
grep -rn "TODO" src/ index.html
```

### A note on honesty

Nothing in this repo claims work experience, employers, awards, or stats
that weren't given to me. Buttons for GitHub/LinkedIn/email/demo links
automatically render as disabled (not as broken/fake links) until you
replace the placeholder strings in `social.js` and `projects.js`. Please
keep that pattern rather than filling in invented information.

## 3. Project structure

```
src/
├── components/
│   ├── layout/     Sidebar, MobileNav, Footer
│   ├── sections/   Hero, About, Education, Experience, Skills, Projects, Writing, Contact
│   └── ui/         Button, ProjectCard, SkillBadge, SectionHeading
├── data/           All editable content — see table above
├── hooks/          useActiveSection (scroll-spy for nav highlighting)
├── App.jsx
├── main.jsx
└── index.css
```

## 4. Design notes

- **Palette:** near-black violet-tinted background (`#14151A`), off-white
  text, a single warm amber accent (`#F2A65A`) — deliberately not the
  navy/teal-green combination the reference site is known for.
- **Type:** Fraunces (display/headings) + IBM Plex Sans (body) + IBM Plex
  Mono (small labels/tags, nodding to the developer/terminal context).
- **Layout:** fixed sidebar on desktop (`lg:` breakpoint, 1024px+) that
  collapses into a sticky header with a slide-down menu on mobile.
- Colors, fonts, and spacing tokens live in `tailwind.config.js` — change
  them there rather than in individual components.

## 5. Accessibility & responsiveness already handled

- Semantic landmarks (`header`, `nav`, `main`, section elements with
  `aria-labelledby`), skip-to-content link, visible focus rings.
- Keyboard-operable mobile menu (`aria-expanded`/`aria-controls`), active
  nav item marked with `aria-current`.
- `prefers-reduced-motion` respected globally in `index.css`.
- No fixed pixel widths; tested breakpoints in mind: 320/375/390/768/1024/1440px.
- Alt text required at the call site for any real screenshot you add to
  `projects.js` (`image` field) — the `ProjectCard` component passes it
  through as `Screenshot of {title}`.

## Known limitations / what to check once you can run it

- Dependencies have not been installed and the build has not been run in
  this environment (no network access here). Run `npm install && npm run
  build` yourself and fix anything that comes up.
- No real images exist yet — project cards show a dashed placeholder box
  until you add real screenshots to `public/images/` and reference them in
  `projects.js`.
- No resume file exists yet — the résumé button is hidden until you add one
  to `public/resume/` and set `social.resume` in `src/data/social.js`.
>>>>>>> c0a8d17 (Initial portfolio scaffold)
