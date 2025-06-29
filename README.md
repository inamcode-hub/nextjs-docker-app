# Next.js Docker App

A production-ready Next.js application with Docker configuration for both development and production environments.

## Quick Start

### Development (Docker)
```bash
docker-compose --profile dev up nextjs-dev
```
Visit [http://localhost:3001](http://localhost:3001)

### Production (Docker)
```bash
docker-compose up nextjs-app
```
Visit [http://localhost:3000](http://localhost:3000)

### Local Development
```bash
npm install
npm run dev
```

## Docker Commands

### Build Production Image
```bash
docker build -t nextjs-docker-app .
```

### Run Production Container
```bash
docker run -p 3000:3000 nextjs-docker-app
```

### Development with Hot Reload
```bash
docker-compose --profile dev up
```
