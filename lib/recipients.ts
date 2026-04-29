/**
 * parseRecipients
 *
 * Parses the RECIPIENT_EMAIL environment variable into a validated array
 * of email addresses. Supports comma- or semicolon-separated values.
 *
 * Examples:
 *   "a@x.com"                        → ["a@x.com"]
 *   "a@x.com, b@x.com"               → ["a@x.com", "b@x.com"]
 *   "a@x.com;b@x.com ; c@x.com"      → ["a@x.com", "b@x.com", "c@x.com"]
 *
 * Returns an empty array when the variable is unset or contains no valid addresses.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseRecipients(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];

  return raw
    .split(/[,;]/)          // split on comma or semicolon
    .map((s) => s.trim())   // remove surrounding whitespace
    .filter((s) => {
      if (!s) return false;
      const valid = EMAIL_REGEX.test(s);
      if (!valid) console.warn(`parseRecipients: skipping invalid address "${s}"`);
      return valid;
    });
}
