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

export function marketPath(
  market: MarketKey,
  page: MarketPage
): string {
  const prefix = market === "US" ? "/us" : "/jm";
  const suffix = MARKET_PATHS[page];

  return suffix ? `${prefix}/${suffix}` : `${prefix}/`;
}

export function marketFromPath(
  pathname: string
): MarketKey | null {
  if (/^\/us(?:\/|$)/i.test(pathname)) return "US";
  if (/^\/jm(?:\/|$)/i.test(pathname)) return "JM";

  return null;
}

export function pageFromPath(
  pathname: string
): MarketPage {
  const normalized = pathname
    .split(/[?#]/)[0]
    .replace(/^\/(us|jm)(?=\/|$)/i, "")
    .replace(/^\/+|\/+$/g, "");

  if (/^industries\/[^/]+$/.test(normalized)) {
    return "industries";
  }

  const entry = (
    Object.entries(MARKET_PATHS) as [MarketPage, string][]
  ).find(([, suffix]) => suffix === normalized);

  return entry?.[0] ?? "home";
}

export function equivalentMarketPath(
  pathname: string,
  targetMarket: MarketKey
): string {
  const cleanPath = pathname.split(/[?#]/)[0];

  const normalized = cleanPath
    .replace(/^\/(us|jm)(?=\/|$)/i, "")
    .replace(/^\/+|\/+$/g, "");

  // Preserve the selected industry when changing markets.
  if (/^industries\/[^/]+$/.test(normalized)) {
    return `/${targetMarket.toLowerCase()}/${normalized}`;
  }

  return marketPath(
    targetMarket,
    pageFromPath(cleanPath)
  );
}
