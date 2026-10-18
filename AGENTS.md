# AGENTS.md

## Project

Static professional profile for Lilian Armas. The MVP has one project,
Mirror IRL, and must support adding more projects later. It also provides
contact information and privacy policies for Google Play applications.

## Stack

- Use only native HTML, CSS, and JavaScript.
- Do not add frameworks or libraries such as Bootstrap or Font Awesome.
- Keep the site static; do not add a backend or build step.

## Naming and formatting

- File names, CSS classes, JavaScript identifiers, object keys, and data
  attributes must be in English.
- Use `kebab-case` for file names and `camelCase` for JavaScript identifiers.
- Always write readable, indented files with line breaks. Never write a whole
  file on one line or minify source files.
- Keep project data and translations in `js/data.js`.

## Language

- Spanish is the default language; English is available through the `ES / EN`
  switcher.
- Save the selected language in `localStorage` and update the document `lang`
  attribute.
- Translate navigation, buttons, page content, projects, and privacy policies.

## Visual direction

- Follow the established concept: clean, spacious, responsive, rounded cards,
  subtle shadows, light backgrounds, and white surfaces.
- Main text must be black or dark gray, never blue.
- Use purple and turquoise for actions, accents, icons, and branding.
- In the hero, use `img/logo.png` next to “Tech for a more real life.” without
  a decorative background shape.

## Content and pages

- Keep `index.html` for the profile, featured project, and contact links.
- Keep `projects.html` extensible for future projects.
- Keep `mirror-irl.html` for the project detail.
- Keep `privacy-policy.html` bilingual and specific to Mirror IRL.
- Keep privacy-policy claims consistent with the app's actual behavior.

## Quality

- Use semantic HTML and responsive layouts for desktop and mobile.
- Keep images accessible with appropriate `alt` text.
- Keep interactive elements keyboard accessible and maintain visible focus.
- Preserve existing user changes and avoid unrelated edits.
