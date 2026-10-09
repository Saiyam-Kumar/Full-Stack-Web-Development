# Full Stack Web Development

A structured collection of hands-on implementations, coding exercises, and projects covering modern web development, from frontend fundamentals to full-stack application development.

This repository documents my learning and practice across HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Next.js, with an emphasis on understanding core concepts and applying them through practical projects.

## Technologies

- **Frontend:** HTML5, CSS3, JavaScript, React.js
- **Styling:** CSS, Tailwind CSS, Styled JSX
- **Frontend Routing:** React Router, Next.js App Router concepts
- **State Management:** React Hooks, Context API, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Auth.js, GitHub OAuth
- **Development Tools:** Git, GitHub, npm, VS Code
- **Deployment:** Vercel, Ubuntu VPS

## Learning Modules

### 1. HTML and Web Fundamentals
- HTML document structure and semantic elements
- Headings, paragraphs, links, images, lists, and tables
- Forms, input elements, and media
- Inline and block elements
- SEO fundamentals and Core Web Vitals

### 2. CSS and Responsive Design
- Selectors, specificity, and the cascade
- Box model, typography, colors, and sizing units
- Display, positioning, overflow, and visibility
- Flexbox and CSS Grid
- Responsive design and media queries
- Transitions, transforms, animations, and visual effects
- CSS variables and reusable styling patterns

### 3. JavaScript
- Variables, data types, objects, arrays, and strings
- Functions, loops, and conditional statements
- DOM manipulation and event handling
- Browser events and event bubbling
- Callbacks, Promises, async/await, and Fetch API
- Error handling with `try...catch`
- Classes and object-oriented programming
- Asynchronous programming and modern JavaScript concepts

### 4. Backend Development
- Node.js fundamentals and npm
- CommonJS and ECMAScript modules
- File system and path modules
- Express.js routing and middleware
- HTTP requests and responses
- EJS templating
- REST API fundamentals
- Backend application hosting and deployment

### 5. Database Management
- MongoDB fundamentals
- CRUD operations
- MongoDB Compass
- Mongoose schemas and models
- Connecting databases to Express applications
- Generating and managing sample data

### 6. React.js
- Components, props, and JSX
- State and component lifecycle concepts
- React Hooks: `useState`, `useEffect`, and `useRef`
- Conditional rendering and lists
- Event handling and forms
- React Router
- Context API with `useContext`
- Performance optimization with `useMemo` and `useCallback`
- Redux fundamentals
- Connecting React applications to backend APIs

### 7. Next.js
- File-based routing and dynamic routes
- Layouts and navigation
- Server and Client Components
- Script, Link, and Image components
- Route Handlers and API development
- Server Actions and middleware
- Authentication with Auth.js and GitHub OAuth
- Server-side rendering (SSR)
- Static site generation (SSG)
- Incremental Static Regeneration (ISR)
- Environment variables and application configuration
- Styling with Styled JSX
- Application deployment using Vercel

## Projects and Practical Exercises

| Project | Technologies | Focus |
|---|---|---|
| Pure HTML Media Player | HTML | HTML media elements |
| Netflix Clone | HTML, CSS | Layout and visual design |
| Spotify Clone | HTML, CSS, JavaScript | Interactive frontend development |
| Faulty Calculator | JavaScript | Functions and conditional logic |
| Business Name Generator | JavaScript | String manipulation |
| Dynamic Website Builder | JavaScript, DOM | Dynamic UI generation |
| Hacker's Terminal | JavaScript | Interactive browser behavior |
| Todo List | React, Tailwind CSS | Components and state management |
| X.com Clone | Tailwind CSS | UI development |
| Password Manager | React, Tailwind CSS, Express, MongoDB | Full-stack integration |
| GetMeAChai | Next.js | Full-stack application development |
| URL Shortener | Next.js | Routing and application logic |
| LinkTree Clone | Next.js | Link management and UI development |

The repository also includes smaller exercises involving CSS layouts, Flexbox, Grid, animations, React components, hooks, and backend integration.

## Repository Organization

Code is organized by technology and project so that concepts, exercises, and implementations can be explored independently.

```text
Full-Stack-Web-Development/
├── HTML/
├── CSS/
├── JavaScript/
├── Node-Express/
├── MongoDB-Mongoose/
├── Tailwind-CSS/
├── React/
├── Full-Stack-Projects/
├── Next.js/
└── README.md
```

*The directory names above represent the intended organization. Actual folders may differ as the repository evolves.*

## Getting Started

### Prerequisites

Install the following tools as required by the project you want to run:

- Git
- Node.js and npm
- Visual Studio Code or another code editor
- MongoDB or MongoDB Atlas for database-dependent projects

### Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd Full-Stack-Web-Development
```

### Run a Project

Navigate to the relevant project directory and install its dependencies:

```bash
cd path/to/project
npm install
npm run dev
```

Available commands vary by project. Check its `package.json` for the appropriate development or start script.

For standalone HTML, CSS, and JavaScript projects, open the HTML entry point in a browser or use a local development server.

## Configuration and Security

Projects that use databases or external authentication providers may require environment variables.

- Keep credentials and API secrets in local environment files.
- Never commit real secrets, passwords, or database connection strings.
- Add local environment files such as `.env.local` to `.gitignore`.
- Use placeholder values in `.env.example` when documenting required configuration.
- Configure OAuth callbacks and deployment environment variables appropriately.

## Learning Objectives

- Develop a strong foundation in frontend and backend technologies.
- Understand how modern web applications are structured.
- Build responsive, interactive user interfaces.
- Design and integrate APIs with database-backed applications.
- Understand authentication and session management.
- Apply routing, rendering, and state management concepts.
- Practice development workflows, version control, and deployment.

## Future Improvements

- Refactor and improve existing implementations.
- Add project-specific documentation.
- Include screenshots and live demos for completed projects.
- Improve validation, error handling, and accessibility.
- Add testing and production-ready features.
- Deploy selected projects and document their live URLs.

---

**Purpose:** A continuously evolving portfolio of practical work and technical learning in full-stack web development.
