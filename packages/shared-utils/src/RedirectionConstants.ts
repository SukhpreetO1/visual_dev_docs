/**
 * Redirection path constants for OAuth callbacks, auth flows, and error landing pages.
 */

export const RedirectionConstants = {
  OAUTH_GITHUB_CALLBACK: '/api/auth/callback/github',
  OAUTH_GOOGLE_CALLBACK: '/api/auth/callback/google',
  POST_LOGIN_REDIRECT: '/dashboard',
  POST_REGISTER_REDIRECT: '/onboarding',
  POST_LOGOUT_REDIRECT: '/login?logout=true',
  UNAUTHORIZED_REDIRECT: '/login?error=unauthorized',
  FORBIDDEN_REDIRECT: '/403',
  NOT_FOUND_REDIRECT: '/404',
} as const;
