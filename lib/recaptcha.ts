/**
 * Google reCAPTCHA v3 server-side verification utility.
 * Call this inside API routes to validate a client-generated token.
 */

const RECAPTCHA_VERIFY_URL =
  "https://www.google.com/recaptcha/api/siteverify";

/** Minimum score to accept (0.0 – 1.0). Adjust as needed. */
const SCORE_THRESHOLD = 0.5;

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

/**
 * Verifies a reCAPTCHA v3 token server-side.
 * @returns `true` when the token is valid and the score meets the threshold.
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set");
    return false;
  }

  try {
    const res = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });

    if (!res.ok) return false;

    const data: RecaptchaResponse = await res.json();

    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
      return false;
    }

    if (data.score < SCORE_THRESHOLD) {
      console.warn(`reCAPTCHA score too low: ${data.score}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("reCAPTCHA fetch error:", err);
    return false;
  }
}
