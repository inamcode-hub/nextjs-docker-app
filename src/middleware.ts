import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle legacy .htm redirects
  const redirects: Record<string, string> = {
    '/About-Us.htm': '/about',
    '/Support.htm': '/support/help',
    '/Dryer-Manufacturers.htm': '/customers/manufacturers',
    '/Dryer-Master-510-Controller.htm': '/products/dm510-controller',
    '/pdf/Dryer-Master-Customer-Experiences.htm': '/customers/experiences',
    '/locations': '/dealers',
    '/locations/': '/dealers',
    
    // Additional legacy redirects that might exist
    '/support': '/support/help',
    '/customers': '/customers/experiences',
    
    // Common variations
    '/about-us': '/about',
    '/contact-us': '/contact',
    '/find-dealer': '/dealers',
    '/find-a-dealer': '/dealers',
    
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301);
  }

  // Handle /customers/examples/* redirects to /customers/applications/*
  if (pathname.startsWith('/customers/examples/')) {
    const newPath = pathname.replace('/customers/examples/', '/customers/applications/');
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }

  // Handle /customers/examples redirects to /customers/applications
  if (pathname === '/customers/examples') {
    return NextResponse.redirect(new URL('/customers/applications', request.url), 301);
  }

  // Handle trailing slashes consistently
  if (pathname.endsWith('/') && pathname !== '/') {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};