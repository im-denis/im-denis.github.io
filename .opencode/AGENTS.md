# Artist Website

Personal artist portfolio website showcasing oil paintings. Built with TanStack Start.

## Tech Stack

- **Framework**: TanStack Start (React full-stack framework)
- **Router**: TanStack React Router v1
- **UI**: React 19 + Radix UI primitives
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **Forms**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── assets/
│   ├── artist/           # Artist photos
│   └── paintings/        # Painting images (named with ID, dimensions, year)
├── components/
│   ├── ui/               # Radix UI shadcn components
│   ├── Gallery.tsx      # Painting gallery component
│   ├── PageShell.tsx    # Layout wrapper
│   ├── SiteNav.tsx      # Navigation header
│   └── SiteFooter.tsx   # Footer
├── hooks/
│   └── use-mobile.tsx   # Mobile detection hook
├── lib/
│   ├── useDocumentMeta.ts  # Document meta helper
│   └── utils.ts           # Utilities (cn, etc.)
├── routes/
│   ├── __root.tsx        # Root route
│   ├── index.tsx        # Home/gallery page
│   ├── commissions.tsx  # Commissions info
│   ├── vita.tsx         # Artist biography
│   └── imprint.tsx      # Legal/imprint page
└── styles.css           # Global styles
```

## Routes

- `/` - Home/Gallery (main painting gallery)
- `/commissions` - Commission information
- `/vita` - Artist biography
- `/imprint` - Legal information

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run deploy` - Build and deploy to GitHub Pages

## Painting Assets

Paintings are stored in `src/assets/paintings/` with naming convention:
`{id}-{title}-{width}x{height}-{year}.jpg`

Example: `28-titus-40x40-2026.jpg`
