/**
 * Global type declarations for GTM dataLayer and other window extensions.
 */

interface Window {
  dataLayer?: Array<Record<string, unknown>>;
}
