# Akanksha Mishra Portfolio Website

## Overview

This is a modern, animated personal portfolio website for Akanksha Mishra, a B.Sc Computer Science student at St. John College. The website features a purple-pink neon cyberpunk aesthetic with smooth animations, interactive elements, and a fully responsive design. It showcases skills, projects, education, and provides contact functionality.

The application is built as a full-stack web application with React frontend and Express backend, using Vite as the build tool and development server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using functional components and hooks

**Routing**: Wouter for client-side routing (lightweight React Router alternative)

**Styling Approach**:
- Tailwind CSS for utility-first styling with custom configuration
- shadcn/ui component library (New York style variant) for pre-built UI components
- Custom CSS variables for theming supporting light/dark modes
- Purple-pink neon gradient theme with glassmorphism effects
- Custom fonts: Poppins (headings) and Montserrat (body text) from Google Fonts

**State Management**: 
- React Query (@tanstack/react-query) for server state and API data fetching
- React hooks (useState, useEffect) for local component state
- No global state management solution (Redux, Zustand) is used

**Animation Libraries**:
- AOS (Animate On Scroll) for scroll-based animations
- Typed.js for typing animation effects in hero section
- Custom CSS animations for hover states and transitions

**Component Structure**:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- shadcn/ui components in `client/src/components/ui/`
- Section-based components (HeroSection, AboutSection, SkillsSection, etc.)

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Server Setup**:
- Custom Vite integration for development with HMR (Hot Module Replacement)
- Middleware for JSON parsing and logging
- Route registration pattern with HTTP server creation
- Static file serving for production builds

**Storage Interface**: 
- Abstract storage interface (IStorage) with in-memory implementation (MemStorage)
- Designed to be swappable with database implementations
- Currently implements basic user CRUD operations

**Development Tools**:
- Replit-specific plugins for error overlay and dev banner
- Source map support via @jridgewell/trace-mapping

### Database & ORM

**ORM**: Drizzle ORM configured for PostgreSQL

**Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL

**Schema Design**:
- User table with UUID primary keys, username, and password fields
- Drizzle-Zod integration for runtime validation
- Migration system configured in `drizzle.config.ts`

**Note**: The application currently uses in-memory storage but has Drizzle configured for future PostgreSQL integration.

### Build System

**Build Tool**: Vite with React plugin

**TypeScript Configuration**:
- Strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)
- ESM module resolution
- Incremental compilation

**Build Process**:
- Frontend: Vite bundles React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Production server serves static files from build output

### Deployment Strategy

**Development**: `npm run dev` runs tsx server with Vite middleware for HMR

**Production**: 
- `npm run build` creates optimized bundles
- `npm start` runs compiled Express server serving static assets
- Database migrations: `npm run db:push` applies schema changes

## External Dependencies

### UI Component Library
- **shadcn/ui**: Complete suite of Radix UI primitives (accordion, alert-dialog, avatar, button, card, carousel, checkbox, dialog, dropdown-menu, form, input, navigation-menu, popover, progress, select, sheet, sidebar, tabs, toast, tooltip, etc.)
- **Radix UI**: Unstyled, accessible component primitives
- **class-variance-authority**: For component variant styling
- **cmdk**: Command palette component

### Styling & Icons
- **Tailwind CSS**: Utility-first CSS framework with autoprefixer
- **react-icons**: Icon library (specifically simple-icons for brand logos)
- **lucide-react**: Icon set for UI elements
- **Google Fonts**: Poppins and Montserrat font families

### Animation Libraries
- **AOS (Animate On Scroll)**: Scroll-triggered animations loaded via CDN
- **Typed.js**: Typing animation effect loaded via CDN
- **Embla Carousel**: Carousel/slider functionality

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library
- **drizzle-zod**: Drizzle ORM to Zod schema converter

### Data Fetching
- **@tanstack/react-query**: Async state management and data fetching
- **date-fns**: Date utility library

### Backend Services
- **Express**: Node.js web framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Database
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **PostgreSQL**: Relational database (via Neon, configured but not actively used in current implementation)

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-dev-banner**: Development environment banner
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### Third-Party APIs
- **Web3Forms**: Contact form submission service (API key needs to be configured in ContactSection component)