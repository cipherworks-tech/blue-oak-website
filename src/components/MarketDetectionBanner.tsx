import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Globe } from "lucide-react";
import { useLocation } from "wouter";
import {
  hintMarket,
  getStoredMarket,
  setStoredMarket,
  isPromptDismissed,
  dismissPrompt,
  type MarketHint,
} from "@/lib/marketPreference";
import { MARKETS, type MarketKey } from "@/lib/marketConfig";

/**
 * Market selection prompt.
 *
 * Behaviour (v3.2.4):
 *  - If the visitor has already chosen a market, this never appears.
 *  - If the timezone is confidently Jamaica or a known U.S. zone, we
 *    SUGGEST that market — phrased as a suggestion, not a claim.
 *  - Otherwise we ask the visitor to choose. We do not guess.
 *  - Any choice made here persists and overrides detection thereafter.
 */
export default function MarketDetectionBanner() {
  const [, navigate] = useLocation();
  const [hint, setHint] = useState<MarketHint>("unknown");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredMarket()) return;      // already chosen — respect it
    if (isPromptDismissed()) return;    // dismissed this session
    setHint(hintMarket());
    setVisible(true);
  }, []);

  function choose(market: MarketKey) {
    setStoredMarket(market);
    dismissPrompt();
    setVisible(false);
    navigate(MARKETS[market].pricingPath);
  }

  function close() {
    dismissPrompt();
    setVisible(false);
  }

  if (!visible) return null;

  const suggested = hint === "US" || hint === "JM" ? (hint as MarketKey) : null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-4"
          data-testid="market-prompt"
        >
          <div className="rounded-xl border border-primary/30 bg-background/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(176,141,87,0.15)] p-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                {suggested === "JM"
                  ? <MapPin className="w-4 h-4 text-primary" />
                  : <Globe className="w-4 h-4 text-primary" />}
              </div>

              <div className="flex-1 min-w-0">
                {suggested ? (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Viewing {MARKETS[suggested].label} pricing?
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Blue Oak operates in Jamaica and the United States. Choose your
                      market to see pricing in {MARKETS[suggested].currency}.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Which market are you in?
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Blue Oak operates in Jamaica and the United States. Choose your
                      market to see the right pricing and contact details.
                    </p>
                  </>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {(suggested === "JM" ? (["JM", "US"] as MarketKey[]) : (["US", "JM"] as MarketKey[])).map((m) => (
                    <button
                      key={m}
                      onClick={() => choose(m)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                        suggested === m
                          ? "text-primary border-primary/30 bg-primary/10 hover:bg-primary/20"
                          : "text-muted-foreground border-border hover:bg-white/5 hover:text-foreground"
                      }`}
                      data-testid={`market-choose-${m}`}
                    >
                      {MARKETS[m].label} · {MARKETS[m].currency}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={close}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-shrink-0"
                aria-label="Dismiss market selection"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
