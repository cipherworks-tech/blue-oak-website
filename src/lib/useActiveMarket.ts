import { useLocation } from "wouter";
import { useMarketPreference } from "@/lib/useMarketPreference";
import { marketFromPath } from "@/lib/marketRoutes";
import type { MarketKey } from "@/lib/marketConfig";

/**
 * Returns the active market for the current page.
 *
 * Regional URLs are authoritative.
 * Stored preference is used only on legacy routes.
 */
export function useActiveMarket(): {
  market: MarketKey | null;
  isRegionalRoute: boolean;
  setMarket: (market: MarketKey) => void;
} {
  const [location] = useLocation();
  const preference = useMarketPreference();

  const urlMarket = marketFromPath(location);

  return {
    market: urlMarket ?? preference.market,
    isRegionalRoute: urlMarket !== null,
    setMarket: preference.setMarket,
  };
}
