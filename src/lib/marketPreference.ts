/**
 * Blue Oak — Market Preference
 *
 * Governing rules (v3.2.4):
 *  1. Explicit user selection is AUTHORITATIVE and overrides detection.
 *  2. Selection persists in localStorage so it survives navigation/refresh.
 *  3. Timezone is a HINT only. It is never treated as authoritative location.
 *  4. Jamaica may be confidently suggested only for "America/Jamaica".
 *  5. United States is suggested only for known U.S. timezone identifiers.
 *  6. Any other timezone (Canada, Mexico, Caribbean, Central/South America,
 *     Europe, etc.) yields "unknown" — we invite the visitor to choose
 *     rather than making a false claim about where they are.
 *
 * The previous implementation treated every "America/*" timezone as the
 * United States. That was wrong and is deliberately not reproduced here.
 */

import type { MarketKey } from "./marketConfig";

const STORAGE_KEY = "bo_market_preference";
const PROMPT_DISMISSED_KEY = "bo_market_prompt_dismissed";

/** Result of a non-authoritative hint. */
export type MarketHint = MarketKey | "unknown";

/**
 * IANA timezone identifiers for United States territories.
 * Explicit allowlist — never a "America/*" prefix match.
 */
const US_TIMEZONES = new Set([
  "America/New_York",
  "America/Detroit",
  "America/Chicago",
  "America/Denver",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "America/Boise",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Menominee",
  "Pacific/Honolulu",
]);

const JM_TIMEZONES = new Set(["America/Jamaica"]);

function safeTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    return "";
  }
}

/**
 * Returns a HINT only. Never treat as confirmed location.
 * Returns "unknown" whenever we cannot be confident.
 */
export function hintMarket(): MarketHint {
  if (typeof window === "undefined") return "unknown";

  const tz = safeTimezone();
  if (JM_TIMEZONES.has(tz)) return "JM";
  if (US_TIMEZONES.has(tz)) return "US";

  // Language is a weak signal — only used when it is unambiguous.
  const lang = (navigator.language ?? "").toLowerCase();
  if (lang === "en-jm") return "JM";

  // Deliberately no "America/*" fallback.
  return "unknown";
}

/** The visitor's explicitly chosen market, if any. */
export function getStoredMarket(): MarketKey | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "US" || v === "JM" ? v : null;
  } catch {
    return null;
  }
}

/** Persist an explicit selection. This overrides all detection. */
export function setStoredMarket(market: MarketKey): void {
  try {
    localStorage.setItem(STORAGE_KEY, market);
  } catch {
    /* storage unavailable — selection applies for this page view only */
  }
}

export function clearStoredMarket(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* no-op */
  }
}

/**
 * Resolved market for the current visitor.
 * Explicit selection wins; otherwise null (caller decides how to handle).
 */
export function resolveMarket(): MarketKey | null {
  return getStoredMarket();
}

export function isPromptDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return sessionStorage.getItem(PROMPT_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissPrompt(): void {
  try {
    sessionStorage.setItem(PROMPT_DISMISSED_KEY, "1");
  } catch {
    /* no-op */
  }
}
