import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, Phone, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BRAND } from "@/lib/marketConfig";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

function Slider({ label, icon, value, min, max, step, format, onChange, testId }: {
  label: string; icon: React.ReactNode; value: number;
  min: number; max: number; step: number;
  format: (v: number) => string; onChange: (v: number) => void; testId: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-primary">{icon}</span>{label}
        </div>
        <span className="text-base font-extrabold text-primary tabular-nums">{format(value)}</span>
      </div>
      <div className="relative h-2 rounded-full bg-white/[0.06] border border-white/[0.08]">
        <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-yellow-400/80 transition-all duration-75" style={{ width: `${pct}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-testid={testId} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-75 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground/50">
        <span>{format(min)}</span><span>{format(max)}</span>
      </div>
    </div>
  );
}

function formatDollars(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n}`;
}

// Illustrative model — disclosed prominently. Actual impact varies by business.
function calculate(missedCalls: number, jobValue: number) {
  const NO_CALLBACK_ESTIMATE = 0.75; // Conservative: estimated share that do not call back
  const RECOVERY_ESTIMATE = 0.55;    // Estimated share recoverable through follow-up systems
  const CONVERSION_ESTIMATE = 0.50;  // Estimated conversion rate on recovered contacts

  const lostLeads = missedCalls * NO_CALLBACK_ESTIMATE * 12;
  const rawAnnual = lostLeads * CONVERSION_ESTIMATE * jobValue;
  const recoverable = rawAnnual * RECOVERY_ESTIMATE;

  return {
    recoverableAnnual: Math.round(recoverable / 500) * 500,
    monthlyRecoverable: Math.round(recoverable / 12 / 100) * 100,
    annualLostLeads: Math.round(lostLeads),
  };
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <motion.span key={value} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      {formatDollars(value)}
    </motion.span>
  );
}

export default function RevenueCalculator() {
  const [missedCalls, setMissedCalls] = useState(20);
  const [jobValue, setJobValue] = useState(500);

  const result = useMemo(() => calculate(missedCalls, jobValue), [missedCalls, jobValue]);

  return (
    <section id="calculator" className="py-24 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Illustrative Calculator</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              What Might Missed Calls Be Costing Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Enter your numbers to see an illustrative estimate. Actual impact varies by business, market, and circumstances.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sliders */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md p-8 space-y-10">
              <Slider
                label="Missed Calls Per Month"
                icon={<Phone className="w-4 h-4" />}
                value={missedCalls} min={5} max={150} step={5}
                format={v => `${v} calls/mo`}
                onChange={setMissedCalls} testId="slider-missed-calls"
              />
              <Slider
                label="Average Job or Appointment Value"
                icon={<DollarSign className="w-4 h-4" />}
                value={jobValue} min={100} max={10000} step={100}
                format={v => v >= 1000 ? `$${Math.round(v / 1000)}K` : `$${v}`}
                onChange={setJobValue} testId="slider-job-value"
              />

              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Illustrative estimate only.</strong> This calculator uses a conservative model to show the potential scale of missed-call revenue. Actual impact depends on your industry, call quality, conversion rate, customer behaviour, and other factors. The estimate is not a guarantee of revenue recovery.
                </p>
              </div>
            </div>

            {/* Result */}
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
                  <div className="text-5xl md:text-6xl font-extrabold text-foreground mb-2 tabular-nums leading-none">
                    <AnimatedNumber value={result.recoverableAnnual} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    illustrative recoverable opportunity per year
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Monthly (illustrative)</p>
                  <p className="text-xl font-extrabold tabular-nums"><AnimatedNumber value={result.monthlyRecoverable} /></p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">Annual Lost Leads (est.)</p>
                  <p className="text-xl font-extrabold text-primary tabular-nums">{result.annualLostLeads}</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={result.recoverableAnnual}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Button asChild size="lg" className="w-full font-semibold text-base shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_36px_rgba(212,175,55,0.45)] transition-shadow">
                    <Link href={BRAND.snapshotPath}>
                      See What Your Business Is Actually Losing
                      <ArrowRight className="ml-2 w-4 h-4" />
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
