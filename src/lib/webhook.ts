/**
 * Blue Oak Revenue Infrastructure™ — Lead Webhook Utility
 *
 * PRODUCTION SETUP:
 *   Create a .env file (never commit) with:
 *     VITE_LEAD_WEBHOOK_URL=https://hook.eu2.make.com/YOUR_SCENARIO_ID
 *
 * SECURITY NOTE:
 *   This is a direct browser → Make webhook architecture.
 *   Form submissions originate from each visitor's device/network,
 *   not from a Blue Oak server — so IP allowlisting is NOT applicable
 *   and should not be used as a security control here.
 *
 *   Because VITE_ environment variables are embedded in the client
 *   bundle at build time, the webhook URL is visible to anyone who
 *   inspects the built JavaScript. Do NOT treat it as a secret.
 *
 *   Recommended controls for this architecture:
 *     — Required-field validation (client-side and Make-side)
 *     — Honeypot field rejection (bots fill it; real users don't)
 *     — Client-side submission throttle (reduces accidental duplicates)
 *     — Make-side filtering: reject missing fields, duplicate emails
 *     — Make-side rate awareness: monitor submission volume
 *     — Malformed request rejection in Make scenario
 *
 *   If stronger protection is needed in future:
 *     Introduce a server-side proxy (e.g. Vercel/Netlify edge function)
 *     that holds the real webhook URL server-side and forwards only
 *     validated payloads. That is a post-launch improvement.
 */

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/** Simple in-memory throttle — prevents rapid re-submission within same session */
const THROTTLE_MS = 8_000;
const lastSubmit: Record<string, number> = {};

export async function submitLead(
  formId: string,
  payload: Record<string, unknown>
): Promise<SubmitResult> {
  // 1. Check webhook is configured
  const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  if (!webhookUrl) {
    console.error(
      "[BlueOak] VITE_LEAD_WEBHOOK_URL is not configured. " +
      "Add it to your .env file. Form submissions will not be delivered."
    );
    return {
      ok: false,
      error:
        "Form delivery is not configured yet. Please contact us directly at info@blueoakautomation.com.",
    };
  }

  // 2. Throttle: prevent duplicate submissions
  const now = Date.now();
  if (lastSubmit[formId] && now - lastSubmit[formId] < THROTTLE_MS) {
    return {
      ok: false,
      error: "Your request was already sent. Please wait a moment before submitting again.",
    };
  }

  // 3. Honeypot: reject if filled (bot detection)
  if (payload.__hp) {
    // Silently succeed to not reveal the trap
    return { ok: true };
  }

  // 4. Send
  try {
    const enriched = {
      ...payload,
      _form: formId,
      _source: "blueoakautomation.com",
      _ts: new Date().toISOString(),
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    lastSubmit[formId] = now;
    return { ok: true };
  } catch (err) {
    console.error("[BlueOak] Webhook delivery failed:", err);
    return {
      ok: false,
      error:
        "Something went wrong delivering your request. Please try again, or contact us directly at info@blueoakautomation.com.",
    };
  }
}
