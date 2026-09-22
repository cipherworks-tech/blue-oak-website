import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, PhoneOff, DollarSign, TrendingDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/marketConfig";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

function Slider({
  label, hint, value, min, max, step, display,
  onChange, testId,
}: {
  label: string; hint?: string; value: number; min: number; max: number;
  step: number; display: string; onChange: (v: number) => void; testId: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium flex items-center gap-2">
          {label}
          {hint && (
            <span className="group relative cursor-help">
              <Info className="w-3.5 h-3.5 text-muted-foreground/50" />
              <span className="absolute left-0 bottom-5 w-56 text-xs bg-card border border-border rounded-lg px-3 py-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none shadow-lg">
                {hint}
              </span>
            </span>
          )}
        </label>
        <span className="text-sm font-extrabold text-primary tabular-nums">{display}</span>
      </div>
      <div className="relative h-2 rounded-full bg-white/[0.06] border border-white/[0.08]">
        <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-yellow-400/80 transition-all duration-75"
          style={{ width: `${pct}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          data-testid={testId} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-75 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground/40">
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );
}

export default function MissedCallRevenue() {
  const [missedPerMonth, setMissedPerMonth] = useState(15);
  const [qualifiedPct, setQualifiedPct]     = useState(50);
  const [conversionPct, setConversionPct]   = useState(30);
  const [avgValue, setAvgValue]             = useState(500);

  const qualifiedLeads   = missedPerMonth * (qualifiedPct / 100);
  const convertedLeads   = qualifiedLeads * (conversionPct / 100);
  const monthlyOppty     = convertedLeads * avgValue;
  const annualOppty      = monthlyOppty * 12;

  return (
    <main className="pt-28 pb-20">

      {/* Header */}
      <section className="px-4 pb-16 border-b border-border/30">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Revenue Opportunity Analysis
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              What Might Missed Calls Be Costing Your Business?
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Missed calls are a revenue leak in most businesses — but the scale depends on your specific call volume, customer value, and conversion patterns.
              The calculator below lets you estimate the potential opportunity using your own assumptions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why missed calls matter */}
      <section className="py-16 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Why missed calls create lasting revenue impact
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                {
                  icon: <PhoneOff className="w-5 h-5 text-primary" />,
                  heading: "Callers who don't reach you often move on",
                  body: "A missed call during a busy period — lunch, evenings, peak hours — can quickly become a lost opportunity if the caller reaches a competitor first. Many callers don't leave a voicemail or call back.",
                },
                {
                  icon: <TrendingDown className="w-5 h-5 text-primary" />,
                  heading: "Slow response reduces the chance of conversion",
                  body: "Response time affects conversion. A caller who reaches a business quickly is more likely to become a customer than one who waited hours for a callback — even when the eventual response is equally good.",
                },
                {
                  icon: <DollarSign className="w-5 h-5 text-primary" />,
                  heading: "The opportunity cost scales with your business",
                  body: "The same number of missed calls has very different revenue implications depending on your average customer value and how many of those callers would have converted. That's why generic industry averages don't apply — your specific numbers matter.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl border border-border/40 bg-card/20 p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.heading}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Opportunity Calculator</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Estimate the potential revenue opportunity using your own numbers
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Enter your own assumptions. The calculator shows an illustrative estimate — not a guaranteed result.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Inputs */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 space-y-9">
                <Slider
                  label="Missed calls per month"
                  hint="Your estimate of how many inbound calls go unanswered in a typical month."
                  value={missedPerMonth} min={5} max={200} step={5}
                  display={`${missedPerMonth} calls`}
                  onChange={setMissedPerMonth} testId="slider-missed" />
                <Slider
                  label="Estimated qualified opportunity rate"
                  hint="What percentage of those missed calls represent genuine business inquiries — not wrong numbers, existing customers, or spam."
                  value={qualifiedPct} min={10} max={100} step={5}
                  display={`${qualifiedPct}%`}
                  onChange={setQualifiedPct} testId="slider-qualified" />
                <Slider
                  label="Estimated conversion rate"
                  hint="Of the qualified missed calls, what percentage would realistically have become customers if you had answered or followed up promptly?"
                  value={conversionPct} min={10} max={80} step={5}
                  display={`${conversionPct}%`}
                  onChange={setConversionPct} testId="slider-conversion" />
                <Slider
                  label="Average customer / job value"
                  hint="The revenue generated by a typical new customer from this type of inquiry — first transaction only, not lifetime value."
                  value={avgValue} min={100} max={10000} step={100}
                  display={`$${avgValue.toLocaleString()}`}
                  onChange={setAvgValue} testId="slider-value" />

                <div className="rounded-xl border border-border/30 bg-background/30 p-4 text-xs text-muted-foreground leading-relaxed">
                  <p className="font-semibold mb-1 text-foreground/80">Formula used</p>
                  <p>Missed calls × qualified opportunity rate × conversion rate × average customer value</p>
                </div>
              </div>

              {/* Output */}
              <div className="flex flex-col gap-4">
                <div className="flex-1 rounded-2xl border border-primary/25 bg-primary/[0.04] p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                      Illustrative Monthly Revenue Opportunity
                    </p>
                    <p className="text-5xl md:text-6xl font-extrabold text-foreground tabular-nums leading-none mb-2"
                      data-testid="calc-monthly">
                      {fmt(monthlyOppty)}
                    </p>
                    <p className="text-muted-foreground text-sm">/month, based on your assumptions</p>
                  </div>
                  <div className="border-t border-border/40 pt-5 mt-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annualised</span>
                      <span className="font-bold" data-testid="calc-annual">{fmt(annualOppty)}/year</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Qualified leads/month</span>
                      <span className="font-bold">{Math.round(qualifiedLeads)}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Converted customers/month</span>
                      <span className="font-bold">{convertedLeads.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/30 bg-card/20 p-5 text-xs text-muted-foreground leading-relaxed">
                  <p className="font-semibold mb-1.5 text-foreground/80 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    Important disclaimer
                  </p>
                  This calculator provides an illustrative estimate based only on the assumptions you entered.
                  Actual revenue impact depends on caller intent, qualification rates, conversion rates, customer value,
                  timing, follow-up quality, operating conditions, and other factors. These numbers should be treated as a
                  starting point for thinking, not a prediction or guarantee.
                </div>

                <Button asChild size="lg" className="w-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  data-testid="calc-cta">
                  <Link href={BRAND.snapshotPath}>
                    See What's Happening in Your Business
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to do about it */}
      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-7">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight">
              What a missed-call recovery system actually does
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              You do not need to hire more staff or change your phone system. You need a system that responds to callers automatically — promptly, before they move on to the next option.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                {
                  step: "01",
                  heading: "Detect the missed call",
                  body: "When a call goes unanswered, the system detects it and triggers an automated response — without requiring staff action.",
                },
                {
                  step: "02",
                  heading: "Send an automatic follow-up",
                  body: "A personalized SMS or WhatsApp message is sent to the caller — acknowledging the missed call and inviting them to continue the conversation.",
                },
                {
                  step: "03",
                  heading: "Initiate a follow-up sequence",
                  body: "If the caller doesn't respond immediately, a structured follow-up sequence continues over the coming days — keeping the opportunity alive without depending on a staff member to remember to follow up.",
                },
                {
                  step: "04",
                  heading: "Route qualified conversations to staff",
                  body: "When the caller engages, the conversation is routed to the appropriate person or intake flow — so staff only handle warm, active conversations, not cold outreach.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.heading}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">
              Want to understand the real picture for your business?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-9">
              A Revenue Snapshot™ surfaces visible revenue opportunities specific to your business — including missed-call patterns, slow follow-up, and other gaps worth investigating.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button size="lg" asChild className="font-semibold px-10 shadow-[0_0_24px_rgba(212,175,55,0.3)]">
                <Link href={BRAND.snapshotPath}>
                  Request a Complimentary Revenue Snapshot™
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
