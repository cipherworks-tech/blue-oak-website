import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  Phone,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BRAND } from "@/lib/marketConfig";
import { marketFromPath, marketPath } from "@/lib/marketRoutes";
import type { MarketKey } from "@/lib/marketConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

type CalculatorSettings = {
  currency: "USD" | "JMD";
  locale: string;
  initialJobValue: number;
  minJobValue: number;
  maxJobValue: number;
  jobValueStep: number;
  roundingIncrement: number;
};

const SETTINGS: Record<MarketKey, CalculatorSettings> = {
  US: {
    currency: "USD",
    locale: "en-US",
    initialJobValue: 500,
    minJobValue: 100,
    maxJobValue: 10000,
    jobValueStep: 100,
    roundingIncrement: 100,
  },
  JM: {
    currency: "JMD",
    locale: "en-JM",
    initialJobValue: 25000,
    minJobValue: 5000,
    maxJobValue: 500000,
    jobValueStep: 5000,
    roundingIncrement: 1000,
  },
};

function formatCurrency(
  value: number,
  settings: CalculatorSettings
): string {
  const formatted = new Intl.NumberFormat(settings.locale, {
    maximumFractionDigits: 0,
  }).format(value);

  return settings.currency === "JMD"
    ? `J$${formatted}`
    : `$${formatted}`;
}

function formatCompactCurrency(
  value: number,
  settings: CalculatorSettings
): string {
  const prefix = settings.currency === "JMD" ? "J$" : "$";

  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${prefix}${Math.round(value / 1000)}K`;
  }

  return `${prefix}${value}`;
}

type SliderProps = {
  label: string;
  icon: React.ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
  onChange: (value: number) => void;
  testId: string;
};

function Slider({
  label,
  icon,
  value,
  min,
  max,
  step,
  format,
  onChange,
  testId,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-primary">{icon}</span>
          {label}
        </div>

        <span className="text-base font-extrabold text-primary tabular-nums text-right">
          {format(value)}
        </span>
      </div>

      <div className="relative h-2 rounded-full bg-white/[0.06] border border-white/[0.08]">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-yellow-400/80 transition-all duration-75"
          style={{ width: `${pct}%` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-label={label}
          onChange={(event) =>
            onChange(Number(event.target.value))
          }
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          data-testid={testId}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-75 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-muted-foreground/50">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

// Illustrative assumptions, not verified market benchmarks.
// Actual results depend on business-specific evidence.
function calculate(
  missedCalls: number,
  jobValue: number,
  roundingIncrement: number
) {
  const NO_CALLBACK_ESTIMATE = 0.75;
  const RECOVERY_ESTIMATE = 0.55;
  const CONVERSION_ESTIMATE = 0.50;

  const annualPotentiallyLostContacts =
    missedCalls * NO_CALLBACK_ESTIMATE * 12;

  const annualPotentialValue =
    annualPotentiallyLostContacts *
    CONVERSION_ESTIMATE *
    jobValue;

  const recoverable =
    annualPotentialValue * RECOVERY_ESTIMATE;

  return {
    recoverableAnnual:
      Math.round(recoverable / roundingIncrement) *
      roundingIncrement,

    monthlyRecoverable:
      Math.round(
        recoverable / 12 / roundingIncrement
      ) * roundingIncrement,

    annualLostLeads:
      Math.round(annualPotentiallyLostContacts),
  };
}

function AnimatedNumber({
  value,
  settings,
}: {
  value: number;
  settings: CalculatorSettings;
}) {
  return (
    <motion.span
      key={`${settings.currency}-${value}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {formatCurrency(value, settings)}
    </motion.span>
  );
}

export default function RevenueCalculator() {
  const [location] = useLocation();

  const activeMarket = marketFromPath(location);

  // Legacy homepage retains the original USD calculator.
  // Regional pages use the currency of their URL.
  const calculatorMarket: MarketKey =
    activeMarket ?? "US";

  const settings = SETTINGS[calculatorMarket];

  const [missedCalls, setMissedCalls] = useState(20);

  const [jobValue, setJobValue] = useState(
    settings.initialJobValue
  );

  // Reset currency-dependent input when switching markets.
  useEffect(() => {
    setJobValue(settings.initialJobValue);
  }, [calculatorMarket]);

  const result = useMemo(
    () =>
      calculate(
        missedCalls,
        jobValue,
        settings.roundingIncrement
      ),
    [missedCalls, jobValue, settings.roundingIncrement]
  );

  const snapshotPath = activeMarket
    ? marketPath(activeMarket, "snapshot")
    : BRAND.snapshotPath;

  return (
    <section
      id="calculator"
      className="py-24 px-4 border-t border-border/30"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
        >
          <motion.div
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Illustrative Calculator
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              What Might Missed Calls Be Costing Your Business?
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Enter your numbers to see an illustrative estimate.
              Actual impact varies by business, market, and circumstances.
            </p>

            <p className="text-xs font-semibold text-primary mt-4">
              Currency:{" "}
              {calculatorMarket === "JM"
                ? "Jamaican Dollars (JMD)"
                : "United States Dollars (USD)"}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* INPUT SLIDERS */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md p-8 space-y-10">
              <Slider
                label="Missed Calls Per Month"
                icon={<Phone className="w-4 h-4" />}
                value={missedCalls}
                min={5}
                max={150}
                step={5}
                format={(value) => `${value} calls/mo`}
                onChange={setMissedCalls}
                testId="slider-missed-calls"
              />

              <Slider
                label="Average Job or Appointment Value"
                icon={<DollarSign className="w-4 h-4" />}
                value={jobValue}
                min={settings.minJobValue}
                max={settings.maxJobValue}
                step={settings.jobValueStep}
                format={(value) =>
                  formatCompactCurrency(value, settings)
                }
                onChange={setJobValue}
                testId="slider-job-value"
              />

              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Illustrative estimate only.</strong>{" "}
                  This calculator models potential missed-call revenue
                  using assumed callback, recovery, and conversion
                  rates. These assumptions are not verified market
                  benchmarks. Actual impact depends on your industry,
                  call quality, conversion rate, customer behaviour,
                  and other factors. This estimate is not a guarantee
                  of revenue recovery.
                </p>
              </div>
            </div>

            {/* RESULTS */}
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-2xl border border-primary/25 bg-primary/[0.04] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.07] blur-[70px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingDown className="w-4 h-4 text-muted-foreground/60" />

                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      Illustrative Annual Opportunity
                    </p>
                  </div>

                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-2 tabular-nums leading-tight break-words">
                    <AnimatedNumber
                      value={result.recoverableAnnual}
                      settings={settings}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Illustrative recoverable opportunity per year
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                    Monthly (illustrative)
                  </p>

                  <p className="text-lg sm:text-xl font-extrabold tabular-nums break-words">
                    <AnimatedNumber
                      value={result.monthlyRecoverable}
                      settings={settings}
                    />
                  </p>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                    Annual Lost Leads (est.)
                  </p>

                  <p className="text-xl font-extrabold text-primary tabular-nums">
                    {result.annualLostLeads}
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${calculatorMarket}-${result.recoverableAnnual}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                                                    <Button
                  asChild
                  size="lg"
                  className="w-full max-w-full h-auto min-h-12 px-3 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-normal text-center shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_36px_rgba(212,175,55,0.45)] transition-shadow"
                >
                  <Link
                    href={snapshotPath}
                    className="flex items-center justify-center gap-2 min-w-0"
                  >
                    <span className="min-w-0 break-words text-center leading-snug">
                      See What Your Business Is Actually Losing
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
