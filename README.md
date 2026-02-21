# Kicks Project

A modern, responsive e-commerce frontend for footwear browsing and shopping, built with React + Vite.  
The app includes a landing page, product details, cart flow, responsive carousels, and persistent cart state using `localStorage`.

## Project Overview

This project is designed as a sneaker store experience with:

- A landing page composed of hero/promotional sections
- Category and review showcase components
- Product listing carousel with responsive behavior
- Product details page with size/color selection
- Cart page with quantity updates, order summary, and checkout confirmation
- Global UI feedback via toasts and alerts

## Live URL

- **Production:** `https://kicks-project-nine.vercel.app`

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4, styled-components
- **Routing:** react-router
- **HTTP Client:** axios
- **UI/Icons:** lucide-react
- **Carousel/Slider:** Swiper
- **Notifications:** react-toastify
- **Alerts/Modals:** sweetalert2
- **Animation:** framer-motion

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local app URL shown by Vite (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Routing

Defined in `src/router/Route.jsx`:

- `/` -> Landing page
- `/products/:productId` -> Product details page
- `/cart` -> Cart page

## Notes

- Cart data is persisted in `localStorage` using the key: `kicks_cart_items`.
- Product and category data are fetched from the Escuelajs API:
  - `https://api.escuelajs.co/api/v1/products`
  - `https://api.escuelajs.co/api/v1/categories`
- Entry-level loading is handled in `src/main.jsx` with an initial loader gate.
- The project is configured for Vercel (`.vercel/project.json`) but the public deployment URL is not stored in the repository.
