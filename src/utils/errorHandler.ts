// Global error handler for the app. Services should throw errors and
// UI components/hooks should catch them and surface toasts/alerts.

export function handleError(error: unknown): void {
  // Replace this with integration to a logging service (Sentry, etc.)
  // Do not use console.log/console.error directly; keep them here only if
  // you intend to strip them before production.

  // eslint-disable-next-line no-console
  console.error('Unhandled error:', error);
}
