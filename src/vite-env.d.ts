/// <reference types="vite/client" />

/**
 * Blue Oak — Vite environment typings.
 *
 * Declares the VITE_ variables the application reads so that
 * `import.meta.env.VITE_*` is type-checked rather than `any`.
 *
 * Both values are embedded in the client bundle at build time and
 * are therefore publicly visible. They are configuration, not secrets.
 * See .env.example for setup guidance.
 */
interface ImportMetaEnv {
  /** Base public path — provided by Vite. Declared here to match vite/client. */
  readonly BASE_URL: string;
  /** Make.com webhook that receives Contact and Revenue Snapshot submissions. */
  readonly VITE_LEAD_WEBHOOK_URL?: string;
  /** Google Calendar Appointment Scheduling page URL. */
  readonly VITE_BOOKING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
