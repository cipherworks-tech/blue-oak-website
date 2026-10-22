import type { MarketKey } from "./marketConfig";

export type MarketPage =
  | "home"
  | "services"
  | "industries"
  | "pricing"
  | "contact"
  | "about"
  | "snapshot"
  | "assessment"
  | "faq"
  | "blog";

const MARKET_PATHS: Record<MarketPage, string> = {
  home: "",
  services: "services",
  industries: "industries",
  pricing: "pricing",
  contact: "contact",
  about: "about",
  snapshot: "revenue-snapshot",
  assessment: "revenue-infrastructure-assessment",
  faq: "revenue-intelligence-faq",
  blog: "blog",
};

/**
 * Returns the canonical URL for a page in a specific market.
 *
 * Examples:
 * marketPath("US", "services") -> "/us/services"
 * marketPath("JM", "pricing") -> "/jm/pricing"
 */
export function marketPath(
  market: MarketKey,
  page: MarketPage
): string {
  const prefix = market === "US" ? "/us" : "/jm";
  const suffix = MARKET_PATHS[page];

  return suffix ? `${prefix}/${suffix}` : `${prefix}/`;
}

/**
 * Determines the market from the URL.
 *
 * URL market always takes priority over stored preference.
 */
export function marketFromPath(
  pathname: string
): MarketKey | null {
  if (/^\/us(?:\/|$)/i.test(pathname)) return "US";
  if (/^\/jm(?:\/|$)/i.test(pathname)) return "JM";

  return null;
}

/**
 * Identifies the corresponding page when switching markets.
 */
export function pageFromPath(
  pathname: string
): MarketPage {
  const normalized = pathname
    .replace(/^\/(us|jm)(?=\/|$)/i, "")
    .replace(/^\/+|\/+$/g, "");

  const entry = (
    Object.entries(MARKET_PATHS) as [MarketPage, string][]
  ).find(([, suffix]) => suffix === normalized);

  return entry?.[0] ?? "home";
}

/**
 * Returns the equivalent page in another market.
 *
 * Example:
 * equivalentMarketPath("/us/services", "JM")
 * -> "/jm/services"
 */
export function equivalentMarketPath(
  pathname: string,
  targetMarket: MarketKey
): string {
  return marketPath(
    targetMarket,
    pageFromPath(pathname)
  );
}
