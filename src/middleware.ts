import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  // Routes qui ne nécessitent pas d'authentification
  publicRoutes: [
    '/',
    '/api/webhook',
    '/api/public(.*)',
    '/sign-in',
    '/sign-up',
  ],
  
  // Routes ignorées par le middleware d'authentification
  ignoredRoutes: [
    '/api/public(.*)',
    '/_next/static/(.*)',
    '/favicon.ico',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 