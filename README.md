# Aithentic Product Showcase

A refreshed single-page experience for the Aithentic product studio. The site highlights signature launch capabilities, client stories, and provides a contact flow that persists submissions to a lightweight Node backend.

## Stack

- HTML5 + Bootstrap 5
- Custom CSS and GSAP animations (brand palette #050505 / #44d125)
- Vanilla JavaScript for interactions
- Express.js API for persisting contact submissions
- SweetAlert2 for inline notifications

## Getting Started

```bash
npm install
npm run dev
```

`npm run dev` starts the Express server with nodemon on [http://localhost:3000](http://localhost:3000). The server serves the static site and handles POST requests at `/api/contact`.

### Contact submissions

Each contact form submission is appended to `data/contact-submissions.txt`. The directory and file are created automatically when the server boots. You can change the storage path in `server.js` if needed.

## Project Structure

```
assets/
  css/            # Global styles and typography
  images/         # SVG illustrations, photography, logos
  js/             # Front-end behaviour (animations, form logic)
server.js         # Express server that stores contact submissions
package.json      # Scripts and dependencies
data/             # Runtime-generated contact log (gitignored)
```

## Building from source

The project is intentionally framework-free on the front end. Any static hosting service can serve the `index.html` bundle. When deploying, make sure the Express server (or an equivalent endpoint) is available so the contact form can persist data.

## Customisation

- Update hero copy and metrics directly in `index.html`.
- Adjust brand colours or typography in `assets/css/style.css` (see the variables under `:root`).
- Edit capabilities, insight modal content, or animations inside `assets/js/main.js`.

## License

MIT ? Aithentic Studios
