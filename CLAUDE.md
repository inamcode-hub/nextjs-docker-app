# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15.3.4 application using the App Router, TypeScript, and Tailwind CSS. It's a production web application for Dryer Master (grain drying equipment) with Docker support.

## Essential Commands

### Development
```bash
# Local development (port 3000)
npm run dev

# Development with Docker (port 3001)
docker-compose --profile dev up nextjs-dev

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

### Docker Production
```bash
# Build production image
docker build -t nextjs-docker-app .

# Run production container (port 3000)
docker-compose up nextjs-app
```

## Architecture & Structure

### Technology Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom theme configuration
- **UI**: React 19, Lucide React icons
- **Deployment**: Docker containers for dev/prod environments

### Key Directories
- `src/app/`: Next.js App Router pages and API routes (file-based routing)
- `src/components/`: Reusable React components
- `src/lib/`: Business data (products, testimonials, etc.) and utilities
- `public/`: Static assets (images, PDFs, manuals)

### Important Configuration
- **Path Alias**: `@/*` resolves to `./src/*`
- **TypeScript**: Strict mode enabled in tsconfig.json
- **ESLint**: Configured with Next.js recommended rules
- **Tailwind**: Custom theme with primary/secondary colors, extended spacing/animations
- **Next.js Config**: Standalone output, ESLint ignore during builds, YouTube image optimization

### Development Notes
- No test framework is currently configured
- The app features product pages, dealer locator, customer testimonials, and support resources
- Docker development container includes hot reload support
- Production uses multi-stage Docker build for optimization