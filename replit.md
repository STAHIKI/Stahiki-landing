# Stahiki - AI-Native Digital Twin Platform

## Overview

Stahiki is a modern web application for creating intelligent digital twins using AI. The platform is designed to help industries like agriculture, smart cities, and manufacturing build and deploy digital twin solutions quickly. The application follows a full-stack architecture with a React frontend and Express backend, utilizing modern web technologies and design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Exact GitHub replica - colors, themes, animations, fonts, and layout structure.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Theme System**: Context-based dark/light mode toggle
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: PostgreSQL-based session storage
- **Development**: tsx for TypeScript execution in development

### Design System
- **Component Library**: Radix UI primitives with custom styling
- **CSS Framework**: Tailwind CSS with CSS variables for theming
- **Typography**: Inter font family for modern, clean appearance
- **Icons**: Lucide React for consistent iconography

## Key Components

### Frontend Components
- **Landing Page**: GitHub-inspired hero section with email capture
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.)
- **Theme Provider**: Dark/light mode switching with localStorage persistence
- **Toast System**: User notifications and feedback

### Backend Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Route Registration**: Modular route organization with `/api` prefix
- **Vite Integration**: Development server with HMR support

### Shared Components
- **Schema Definitions**: Drizzle ORM schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

### Client-Server Communication
- **API Requests**: Fetch-based HTTP client with automatic error handling
- **Query Management**: TanStack Query for caching and synchronization
- **Authentication**: Cookie-based session management (ready for implementation)

### State Management
- **Server State**: TanStack Query with custom query functions
- **Client State**: React hooks and context for UI state
- **Theme State**: Local storage persistence with system preference detection

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon serverless driver
- **UI Library**: Radix UI for accessible component primitives
- **Animation**: Framer Motion for smooth transitions
- **Validation**: Zod for runtime type checking
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Formatting**: Configured for modern ES modules
- **Development Server**: Integrated Vite dev server with Express

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations in dedicated `migrations` folder

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-based session persistence
- **Static Files**: Express serves built frontend in production

### Development Workflow
- **Hot Reloading**: Vite HMR for frontend changes
- **TypeScript Execution**: tsx for immediate backend development
- **Database Operations**: Drizzle Kit for schema management and migrations

### Production Considerations
- **Error Handling**: Centralized error middleware with status code handling
- **Logging**: Request/response logging for API endpoints
- **Security**: Cookie-based sessions with proper configuration
- **Performance**: Optimized builds with code splitting and tree shaking

The application is structured as a monorepo with clear separation between client, server, and shared code, making it maintainable and scalable for future development.