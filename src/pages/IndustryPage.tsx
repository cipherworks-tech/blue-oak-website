import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check, AlertTriangle, BarChart3, Lightbulb, RefreshCcw, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug } from "@/lib/industries";
import NotFound from "@/pages/not-found";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const PACKAGE_COLORS: Record<string, string> = {
  "Visibility & Opportunity Creation": "text-emerald-400",
  "Capture, Response & Conversion": "text-sky-400",
  "Retention, Recovery & Growth": "text-amber-400",
  "Systems, AI & Automation": "text-violet-400",
  "Measurement & Continuous Optimization": "text-primary",
};

// Compact labels for the solution badges — the underlying `package`
// field carries the full capability-group name for clarity/consistency;
// this map keeps the pill from overflowing on narrow cards.
const PACKAGE_SHORT_LABELS: Record<string, string> = {
  "Visibility & Opportunity Creation": "Visibility",
  "Capture, Response & Conversion": "Capture & Convert",
  "Retention, Recovery & Growth": "Retention & Recovery",
  "Systems, AI & Automation": "Systems & AI",
  "Measurement & Continuous Optimization": "Measurement",
};

export default function IndustryPage() {
  const [, params] = useRoute("/industries/:slug");
  const slug = params?.slug ?? "";
  const data = getIndustryBySlug(slug);

  if (!data) return <NotFound />;

  return (
    <div className="pt-24 min-h-screen text-foreground">

      {/* ── HERO ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(36 36% 52% / 0.05) 1px, transparent 1px), linear-gradient(to bottom, hsl(36 36% 52% / 0.05) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-primary/[0.03] rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground mb-6">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase">{data.name}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {data.headline}
            </motion.h1>
            <motion.div variants={fadeUp} className="h-px w-12 bg-primary/50 mx-auto mb-6" />
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              {data.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold px-10">
                <Link href="/contact">
                  Request a Revenue Snapshot™
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-10 bg-transparent border-border hover:bg-white/5">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── REVENUE LEAKS ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Industry Revenue Leaks</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Where {data.name} Lose Revenue
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                These are the most common, most costly revenue gaps in {data.name.toLowerCase()}. Most businesses have several of these running simultaneously — undetected.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.leaks.map((leak, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-border/40 bg-card/20 p-6 hover:border-border/70 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-black text-primary/30 tabular-nums mt-0.5">0{i + 1}</span>
                    <h3 className="font-bold text-sm">{leak.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-6">{leak.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ASSESSMENT EXAMPLE ── */}
      <section className="py-20 px-4 bg-secondary/15 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Illustrative Revenue Scenario</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
              <div className="p-7 md:p-9">
                <p className="text-xs font-bold tracking-widest uppercase text-primary/70 mb-3">Illustrative Scenario — Not a Client Case Study</p>
                <h3 className="text-xl font-extrabold tracking-tight mb-6">{data.assessmentExample.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-5">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Scenario</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data.assessmentExample.scenario}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">What the Assessment Examines</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data.assessmentExample.finding}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-primary/[0.03] p-5 flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">Estimated Recovery Opportunity</p>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium">{data.assessmentExample.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RECOVERY EXAMPLE ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <RefreshCcw className="w-4 h-4 text-primary" />
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Revenue Recovery Example</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
              <div className="p-7 md:p-9">
                <p className="text-xs font-bold tracking-widest uppercase text-primary/70 mb-3">Illustrative Scenario — Not a Client Case Study</p>
                <h3 className="text-xl font-extrabold tracking-tight mb-6">{data.recoveryExample.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Scenario</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data.recoveryExample.scenario}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Mechanism</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{data.recoveryExample.mechanism}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-primary/[0.03] p-5">
                    <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">Illustrative Result</p>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium">{data.recoveryExample.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 px-4 bg-secondary/15 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-primary" />
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Blue Oak Solutions</p>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                How Blue Oak Addresses {data.name} Revenue Gaps
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Solutions are selected based on the findings of the Revenue Infrastructure Assessment™ and the needs of the business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.solutions.map((sol, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-border/40 bg-card/20 p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm">{sol.title}</h3>
                    <span className={`text-xs font-semibold ${PACKAGE_COLORS[sol.package] ?? "text-primary"} bg-card/60 border border-border/40 px-2.5 py-1 rounded-full whitespace-nowrap`}>
                      {PACKAGE_SHORT_LABELS[sol.package] ?? sol.package}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sol.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Industry FAQ</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Common Questions — {data.name}</h2>
            </motion.div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-border/40 bg-card/20 p-6">
                  <h3 className="font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND PILLARS ── */}
      <section className="py-14 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.02] p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="flex-1">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Blue Oak Revenue Infrastructure™</p>
                  <p className="text-foreground font-bold text-lg leading-snug">
                    Many businesses do not have a lead problem.<br className="hidden md:block" />
                    They have a revenue infrastructure problem.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-px h-16 bg-primary/20" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Every Blue Oak engagement is built on the same five Revenue Infrastructure™ capability groups — working together to close the gap between demand and collected revenue.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Visibility & Opportunity Creation", desc: "Build discoverability and demand" },
                  { label: "Capture, Response & Conversion", desc: "Turn inquiries into booked revenue" },
                  { label: "Retention, Recovery & Growth", desc: "Recover and retain what's already there" },
                  { label: "Systems, AI & Automation", desc: "Run the operational work reliably" },
                  { label: "Measurement & Continuous Optimization", desc: "See performance and keep improving" },
                ].map((p, i) => (
                  <div key={i} className="rounded-xl border border-border/40 bg-card/20 p-4 flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-primary leading-tight">{p.label}</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="rounded-3xl border border-border/40 bg-card/20 p-12 md:p-16 text-center"
          >
            <div className="h-px w-12 bg-primary/50 mx-auto mb-6" />
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">For {data.name}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">
              Find Out What Your Revenue Cycle Is Missing
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-9">
              A Revenue Snapshot™ to surface visible revenue opportunities and identify whether deeper investigation through a Revenue Infrastructure Assessment™ is worthwhile.
            </p>
            <Button size="lg" asChild className="font-semibold px-12">
              <Link href="/contact">
                Book a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="text-muted-foreground text-xs mt-5">
              Available in Jamaica and the United States. No cost. No commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ALL INDUSTRIES ── */}
      <section className="py-10 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">Explore other industries Blue Oak serves:</p>
            <Button asChild variant="outline" size="sm" className="font-semibold">
              <Link href="/industries">View All Industries <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
