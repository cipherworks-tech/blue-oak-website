/**
 * Blue Oak — useMarketPreference
 *
 * Thin React binding over src/lib/marketPreference.ts so components can
 * read and set the visitor's explicit market choice without touching
 * localStorage directly.
 *
 * This does not introduce a new state framework: it is a small hook
 * around the existing preference module, kept intentionally simple.
 *
 * Behaviour:
 *  - Explicit selection (setMarket) is authoritative and persists.
 *  - If nothing has been explicitly selected, `market` is null — callers
 *    decide how to handle "unknown" (e.g. show both options, default to
 *    a neutral view, or fall back to a non-authoritative hint).
 *  - Never infers United States from a generic "America/*" timezone.
 */
import { useState, useCallback, useEffect } from "react";
import {
  getStoredMarket,
  setStoredMarket,
  hintMarket,
  type MarketHint,
} from "@/lib/marketPreference";
import type { MarketKey } from "@/lib/marketConfig";

export function useMarketPreference() {
  const [market, setMarketState] = useState<MarketKey | null>(() => getStoredMarket());
  const [hint, setHint] = useState<MarketHint>("unknown");

  useEffect(() => {
    // Hint is computed client-side only; never authoritative, never persisted
    // as if it were a confirmed selection.
    setHint(hintMarket());
  }, []);

  const setMarket = useCallback((next: MarketKey) => {
    setStoredMarket(next);
    setMarketState(next);
  }, []);

  return {
    /** Explicit, persisted selection. null = not yet chosen. */
    market,
    /** Non-authoritative signal for when market is null. Never "US" from a bare America/* zone. */
    hint,
    /** Persist an explicit choice. Overrides all detection going forward. */
    setMarket,
  };
}
