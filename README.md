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
