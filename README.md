# HTML/CSS Bootstrap Dashboard

> Tip: Technical decisions are summarized in the [Technical Notes](#technical-notes) section

Static responsive layout built for a web development course
exercise using Bootstrap 5 components, utilities and form
controls.

## Live Demo

[**View on GitHub Pages &nbsp; 🌐**](https://emanuelefavero.github.io/html-css-bootstrap-dashboard/)

## Exercise Goal

Recreate the provided responsive dashboard layout using
Bootstrap 5, then extend it with a second page for adding a
new book through a responsive Bootstrap form.

The project matches the reference screenshots across mobile,
tablet and desktop breakpoints while keeping custom CSS to a
minimum.

## Exercise Parts

This repository was developed across two connected Bootstrap
exercises.

- **Part 1:** recreate the responsive dashboard layout using
  Bootstrap 5.
- **Part 2:** extend the dashboard with a new `new-book.html`
  page containing a responsive Bootstrap form for adding a book.

## Reference Layouts

### Dashboard

#### Mobile

<img src="assets/screenshots/mobile.png" alt="mobile reference
  screenshot" width="400">

#### Tablet

<img src="assets/screenshots/tablet.png" alt="tablet reference
  screenshot" width="500">

#### Desktop

<img src="assets/screenshots/desktop.png" alt="desktop
  reference screenshot" width="700">

### New Book Page

#### Mobile (New Book Form)

<img src="assets/screenshots/mobile-new-book.png" alt="new book
  form mobile reference screenshot" width="400">

#### Desktop (New Book Form)

<img src="assets/screenshots/desktop-new-book.png" alt="new book
  form desktop reference screenshot" width="700">

## Scope

- Use HTML and Bootstrap 5
- Recreate the dashboard layout across mobile, tablet and
  desktop resolutions
- Add a second page linked from the dashboard through the
  `Aggiungi Libro` button
- Build the new page with semantic HTML form controls and
  Bootstrap form classes
- Use Bootstrap components, grid system and utility classes as
  the main layout and styling tools
- Use Bootstrap grid and spacing utilities for responsive
  dashboard and form layouts
- Add basic HTML validation and Bootstrap validation feedback
- Keep the project static and focused on layout/form
  reproduction
- Use custom CSS only for small utility and accessibility
  refinements where Bootstrap utilities were not enough

## Technical Notes

### Dashboard Layout

- Kept the navbar full width and placed the main content inside
  a Bootstrap `container`, with a responsive grid that stacks
  on small screens and splits into `9 / 3` columns on desktop.
- Built the right sidebar with `vstack` and `gap-*` utilities
  so the `Todo` and `F.A.Q.` cards remain vertically stacked at
  every breakpoint.
- Used Bootstrap components directly for the main UI:
  navbar, table, badges, buttons, cards, list group, checks
  and accordion.
- Relied on Bootstrap Icons for the repeated table action
  buttons to keep the markup compact and readable.
- Kept `style.css` intentionally small, using it only for a
  couple of custom utilities such as keyboard-only focus
  styling, a smaller text utility and a minimum width helper
  for the first table column.

### New Book Form

- Converted the dashboard `Aggiungi Libro` control from a
  button to an anchor styled with `btn btn-primary`, linking it
  to `new-book.html`.
- Reused the dashboard navbar on the new page, removing the
  search form because it is not present in the new reference
  screenshots.
- Built the form with Bootstrap form components:
  `form-control`, `form-select`, `form-check`, `form-text`,
  `invalid-feedback` and responsive grid columns.
- Used `gx-*` and `gy-*` gutters to tune horizontal and vertical
  spacing separately without adding margins to individual form
  fields.
- Added HTML validation attributes such as `required`,
  `minlength`, `maxlength`, `min`, `max` and `pattern` where
  they fit the field.
- Added a small deferred script in `assets/js/form-validation.js`
  to enable Bootstrap custom validation styles, reset valid
  static submissions and set the publication year maximum to the
  current year.
- Kept the second page static: the form validates and resets,
  but does not send data to a backend.

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#htmlcss-bootstrap-dashboard)
