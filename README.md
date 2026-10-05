# Advanced Air Conditioning — Front-End

The customer-facing website for Advanced Air Conditioning. Built in React with Vite and Tailwind CSS, fully responsive, and designed around one goal: turning visitors into customers.

# Group members

- ST10439133 - Camryn Naidoo
- ST10441399 - Suvan Samlall
- ST10451026 - Calib Frank
- ST10446908 - Caleb Ragaven
- ST10296234 - Joshua Chetty
- ST10451537 - Keshvir Parthab

## Suvan Samlall (ST10441399) is submitting our Task 2 WIL assignment on behalf of Camryn Naidoo (ST10439133) who is away and is unable to subm

**YouTube Link Part 1:** 
**YouTube Link Part 2:** 

**Website API Link:** https://github.com/ST10441359/AdvancedAirAPI.git - you can find the website api readme in this link

---

## Tech Stack

- **React 18** — UI library
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **Tailwind CSS v3** — utility-first styling
- **React Router v6** — client-side routing
- **Lucide React** — icon set
- **Axios** — HTTP client (for API calls)

---

## Features

- Eight fully-designed pages: Home, About, Services, Products, BTU Calculator, Contact, Book a Callout, Request a Quote
- Responsive layout — desktop
- Product catalogue with images and details that's pulled from Supabase
- Interactive BTU Calculator with matching product recommendations
- Three customer forms with validation and confirmation states that save to Supabase
- Shared Navbar and Footer across all pages
- Custom brand palette and typography

---

## Future Improvements

- [ ] Mobile-first responsive design refinement
- [ ] Server-side rendering (SSR) for improved SEO
- [ ] Blog section for HVAC tips and company news
- [ ] Performance optimization — code splitting and lazy loading
- [ ] Progressive Web App (PWA) capabilities
- [ ] Adding quick actions to phone numbers, email address and addresses of the company
- [ ] As well as sending the customer email once a quote has been requested or they have contacted us or booked a call out for a technician 

---

## Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher

Check your versions:

```bash
node -v
npm -v
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (if configured) |

---

## Pages Overview

### Home
Hero with primary CTAs, stats bar, services preview, "Why Choose Us" section, featured products, emergency banner.

### About
Company story, mission / vision / values, certifications grid.

### Services
Six service categories with detail cards and a red emergency callout banner that's pulled from Supabase.

### Products
Full product catalogue with image, model, price, BTU, coverage, and features per card — all information pulled from Supabase.

### BTU Calculator
Interactive tool that recommends a BTU range and matching products based on room size, occupants, and room type.

### Contact
Contact details, business hours, and a general enquiry form that saves to Supabase.

### Book a Callout
Fast-track form for customers requesting a technician visit — includes urgency, address, and issue description that saves to Supabase.

### Request a Quote
Detailed quote form with dynamic room blocks — users can add or remove rooms that saves to Supabase.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL of the back-end API |

These are read at build time by Vite. Never commit `.env.local` or any `.env` file containing secrets.

---

## Build for Production

```bash
npm run build
```

The output is written to `dist/`. This folder can be served by any static host.

To preview the production build locally:

```bash
npm run preview
```

---

## AI Declaration

### Declaration 1

I acknowledge the use of chatgpt (https://chatgpt.com/share/6ab28c35-ed98-83e9-a94a-51d5fbfe) to generate code components, troubleshoot React and TypeScript errors, and refine the structure of this README documentation. All AI-generated code was reviewed, tested, and modified by me to ensure correctness and alignment with project requirements. The final implementation and all submitted work represent my own effort.

---

## References

Gerchev, I., 2022. *Tailwind CSS*. Melbourne: SitePoint.

Meta Platforms, Inc., 2026. *React – A JavaScript library for building user interfaces*. [online] Available at: <https://react.dev/> [Accessed 1 October 2026].

Minnick, C., 2022. *Beginning ReactJS Foundations Building User Interfaces with ReactJS: An Approachable Guide*. Hoboken, NJ: John Wiley & Sons.

Nielsen, J., 2020. *Usability engineering*. San Francisco: Morgan Kaufmann.

Supabase, Inc., 2026. *Supabase Documentation*. [online] Available at: <https://supabase.com/docs> [Accessed 1 October 2026].

Tailwind Labs, 2026. *Tailwind CSS Documentation*. [online] Available at: <https://tailwindcss.com/> [Accessed 1 October 2026].

Vite, 2026. *Vite – Next Generation Frontend Tooling*. [online] Available at: <https://vite.dev/> [Accessed 1 October 2026].
