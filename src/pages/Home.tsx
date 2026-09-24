import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, AlertTriangle, BarChart3, CheckCircle,
  ChevronRight, Cpu, Eye, Layers, RefreshCcw, Search,
  TrendingUp, Users, Zap,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import RevenueCalculator from "@/components/RevenueCalculator";
import { BRAND } from "@/lib/marketConfig";

function CountUp({ end, suffix = "", prefix = "", duration = 1800 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const inc = end / (duration / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const PROBLEMS = [
  "Calls go unanswered.",
  "Leads wait too long for a response.",
  "Follow-up stops too soon.",
  "Marketing creates inquiries that never convert.",
  "Former customers disappear.",
  "Appointment slots remain empty.",
  "Systems do not communicate with each other.",
  "Owners cannot see where revenue is being lost.",
];

const CAPABILITIES = [
  {
    group: "Visibility & Opportunity Creation",
    icon: <Search className="w-5 h-5" />,
    desc: "Discoverability, demand creation, inquiry pathways",
    items: ["Search visibility & local presence", "Opportunity generation systems", "Educational & content positioning", "Inquiry pathway design"],
  },
  {
    group: "Capture, Response & Conversion",
    icon: <Zap className="w-5 h-5" />,
    desc: "Preventing valuable inquiries from being lost",
    items: ["Missed call & inquiry recovery", "AI voice & conversational systems", "Lead qualification & routing", "Appointment workflows & follow-up"],
  },
  {
    group: "Retention, Recovery & Growth",
    icon: <RefreshCcw className="w-5 h-5" />,
    desc: "Expanding value from existing relationships",
    items: ["Dormant lead reactivation", "Customer retention systems", "Reviews, reputation & referrals", "Repeat business & lifecycle growth"],
  },
  {
    group: "Systems, AI & Automation",
    icon: <Cpu className="w-5 h-5" />,
    desc: "AI does more of the work. People stay in control of consequential decisions.",
    items: ["CRM & business systems", "Workflow automation & integrations", "AI-assisted operations with human approval on consequential actions", "Business process design"],
  },
  {
    group: "Measurement & Continuous Optimization",
    icon: <BarChart3 className="w-5 h-5" />,
    desc: "Evidence, visibility and continuous improvement",
    items: ["Revenue diagnostics & health visibility", "Performance measurement", "Exception identification", "Continuous optimisation"],
  },
];

const PATHWAY = [
  { label: "Visibility", sub: "Can prospects find you?" },
  { label: "Capture", sub: "Are inquiries captured?" },
  { label: "Response", sub: "How fast do you reply?" },
  { label: "Qualification", sub: "Is the lead ready?" },
  { label: "Conversion", sub: "Does it become revenue?" },
  { label: "Follow-Up", sub: "Is the opportunity pursued?" },
  { label: "Retention", sub: "Does the customer return?" },
  { label: "Reactivation", sub: "Are lost customers recovered?" },
];

const JOURNEY = [
  { step: "01", title: "Revenue Snapshot™", note: "Complimentary · High-level initial review", href: BRAND.snapshotPath },
  { step: "02", title: "Revenue Infrastructure Assessment™", note: "Comprehensive paid diagnosis", href: BRAND.assessmentPath },
  { step: "03", title: "Revenue Recovery Plan™", note: "Prioritised roadmap from findings", href: null },
  { step: "04", title: "Implementation", note: "Systems and improvements deployed", href: "/services" },
  { step: "05", title: "Continuous Optimization™", note: "Ongoing improvement and measurement", href: null },
];

const INDUSTRIES = [
  "HVAC", "Plumbing", "Electrical Services",
  "Contractors & Home Improvement", "Law Firms",
  "Real Estate", "Restaurants & Hospitality",
  "Auto Sales & Service", "Professional Services",
];

const SEQUENCE = [
  { label: "Measure", body: "Understand what is currently happening across the revenue cycle." },
  { label: "Understand", body: "Identify the specific gaps causing preventable revenue loss." },
  { label: "Recover", body: "Implement systems that capture and convert missed opportunities." },
  { label: "Protect", body: "Strengthen the infrastructure so future opportunities are not lost." },
  { label: "Optimise", body: "Improve conversion, retention, and customer value over time." },
  { label: "Grow", body: "Build toward predictable revenue, stronger profitability, and enterprise value." },
];

export default function Home() {
  const [floatingCta, setFloatingCta] = useState(false);
  useEffect(() => {
    const handle = () => setFloatingCta(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">


      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-40 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(43 63% 52% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(43 63% 52% / 0.06) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase">Revenue Infrastructure™ · Jamaica &amp; United States</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-7">
            Your Business Generates More Opportunity Than It Captures.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Calls go unanswered. Leads wait too long. Follow-up stops before it should. Blue Oak finds exactly where revenue is slipping through — then builds the systems that close the gap.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground/60 mb-10">
            Serving businesses in Jamaica and the United States.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild
              className="w-full sm:w-auto text-base font-semibold px-6 sm:px-8 whitespace-normal text-center leading-tight min-h-14 shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:shadow-[0_0_36px_rgba(212,175,55,0.55)] transition-shadow">
              <Link href={BRAND.snapshotPath}>
                Request Your Complimentary Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild
              className="w-full sm:w-auto text-base font-semibold px-6 sm:px-8 whitespace-normal text-center leading-tight min-h-14 bg-transparent border-white/15 hover:bg-white/5 hover:border-primary/40">
              <a href="#what-is-revenue-infrastructure">
                Explore Revenue Infrastructure™ <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── RECOGNISABLE PROBLEMS ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">Do Any of These Sound Familiar?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {PROBLEMS.map((prob, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/[0.02] px-5 py-4">
                  <AlertTriangle className="w-4 h-4 text-red-400/70 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{prob}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center">
              <p className="text-foreground font-semibold text-lg">
                They look like separate problems. Usually, they share one cause.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS REVENUE INFRASTRUCTURE ── */}
      <section id="what-is-revenue-infrastructure" className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">What Blue Oak Builds</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">What Is Revenue Infrastructure™?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Revenue Infrastructure™ is the connected system of strategy, process, technology, people, and capabilities that businesses use to recover, protect, optimise, and grow revenue.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}
              className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12 text-center mb-8">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-5">
                It connects marketing, sales, operations, customer experience, technology, and measurement into a unified system — rather than leaving them as disconnected parts that each leak revenue independently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strong Revenue Infrastructure™ helps businesses create more predictable revenue, stronger profitability, healthier cash flow, and greater long-term enterprise value.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <Button asChild variant="outline" className="font-semibold bg-transparent border-border hover:bg-white/5">
                <Link href="/what-is-revenue-infrastructure">
                  Read the Full Explanation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── REVENUE PATHWAY ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">The Complete Revenue Pathway</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Weakness at Any Stage Leaks Revenue
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Revenue Infrastructure™ spans the entire pathway — from how prospects find you to how customers return and refer others.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {PATHWAY.map((stage, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-3">
                  {i < PATHWAY.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-10" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mb-2 text-xs font-black text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs font-bold mb-1">{stage.label}</p>
                  <p className="text-[10px] text-muted-foreground/60 leading-snug">{stage.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">What Blue Oak Does</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Five Capability Groups</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Solutions are designed based on the Revenue Infrastructure Assessment™ and the specific needs of each business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CAPABILITIES.map((cap, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-2xl border border-border/50 bg-card/30 p-7 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      {cap.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base">{cap.group}</h3>
                      <p className="text-xs text-muted-foreground">{cap.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="text-center mt-8">
              <Button asChild variant="outline" className="font-semibold bg-transparent border-border hover:bg-white/5">
                <Link href="/services">View Full Capabilities <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>

            {/* ── Governed AI ── */}
            <motion.div variants={fadeUp} className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 md:p-10">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">How the systems operate</p>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                AI does more of the work. People stay in control of consequential decisions.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Blue Oak builds systems where AI and automation carry the routine operational load — intake,
                follow-up, scheduling, reactivation, reporting. Results and recommendations are surfaced rather
                than buried. Actions that carry real consequence stay with the people accountable for them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  { n: "01", t: "Work gets done", d: "Routine operational work runs continuously without depending on someone remembering." },
                  { n: "02", t: "Results are surfaced", d: "What happened, what changed, and what needs attention is brought forward — not hidden in a report." },
                  { n: "03", t: "You decide what matters", d: "Consequential actions are presented for review and approval rather than executed silently." },
                  { n: "04", t: "Approved work executes", d: "Once approved, the system carries out the work and the evidence stays visible." },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl border border-border/40 bg-background/40 p-5">
                    <span className="text-xs font-bold text-primary">{s.n}</span>
                    <p className="font-semibold text-sm mt-2 mb-1.5">{s.t}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/40 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    Increasingly, you should be able to
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ask what is happening and get a direct answer",
                      "Review recommendations before anything is committed",
                      "Inspect the supporting evidence when you want it",
                      "Approve consequential actions and let approved work run",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/40 bg-background/40 p-5 flex flex-col justify-center">
                  <p className="text-sm font-bold text-foreground mb-2">One dashboard. One client. One story.</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The dashboard is there when you want visibility and evidence — not a screen you are
                    expected to watch all day. It supports the system; it is not the product.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW BLUE OAK WORKS ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">How Blue Oak Works</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Measure · Understand · Recover · Protect · Optimise · Grow</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {SEQUENCE.map((s, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-border/40 bg-card/20 p-4 text-center">
                  <p className="text-xs font-black tracking-widest uppercase text-primary mb-2">{s.label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT JOURNEY ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">The Client Journey</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Diagnosis Before Prescription</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Blue Oak does not recommend implementation without understanding the business first.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {JOURNEY.map((j, i) => (
                <motion.div key={i} variants={fadeUp}
                  className={`rounded-xl border p-5 ${i === 0 ? "border-primary/30 bg-primary/[0.04]" : "border-border/40 bg-card/20"}`}>
                  <p className={`text-xs font-black tracking-widest uppercase mb-2 ${i === 0 ? "text-primary" : "text-muted-foreground/50"}`}>{j.step}</p>
                  <p className={`text-sm font-bold mb-1.5 ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>{j.title}</p>
                  <p className="text-xs text-muted-foreground/60 mb-3">{j.note}</p>
                  {j.href && (
                    <Link href={j.href} className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVENUE CALCULATOR ── */}
      <RevenueCalculator />

      {/* ── INDUSTRIES ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Industries</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Built for Service Businesses</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built for service businesses and organisations where response, follow-up, conversion, retention, and customer experience directly affect revenue.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {INDUSTRIES.map((ind, i) => (
                <span key={i} className="text-sm text-muted-foreground bg-card/30 border border-border/40 px-3 py-1.5 rounded-full">
                  {ind}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <Button asChild variant="outline" className="font-semibold bg-transparent border-border hover:bg-white/5">
                <Link href="/industries">View All Industries <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Where We Operate</p>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">One Brand. Two Markets.</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Market-specific delivery. Shared standards of execution.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  market: "Jamaica",
                  note: "WhatsApp-first · JMD pricing · Mandeville & Kingston",
                  detail: "Systems and delivery designed for how Jamaican businesses operate — WhatsApp Business as the primary channel, local operator pricing in JMD.",
                  href: "/pricing/jamaica",
                  cta: "View Jamaica Pricing",
                },
                {
                  market: "United States",
                  note: "SMS + Email · USD pricing · Detroit Metro & beyond",
                  detail: "Revenue Infrastructure for U.S. home services, contractors, professional services, and local operators across Michigan and the wider U.S. market.",
                  href: "/pricing/united-states",
                  cta: "View U.S. Pricing",
                },
              ].map((m, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-2xl border border-border/50 bg-card/30 p-7">
                  <h3 className="text-xl font-extrabold mb-1">{m.market}</h3>
                  <p className="text-xs text-primary mb-4">{m.note}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.detail}</p>
                  <Button asChild variant="outline" size="sm" className="font-semibold bg-transparent border-border hover:bg-white/5">
                    <Link href={m.href}>{m.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATIONAL CONTENT ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Learn</p>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Understand Revenue Infrastructure</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Blue Oak educates before selling. These resources explain the category.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "What Is Revenue Infrastructure™?", href: "/what-is-revenue-infrastructure", desc: "A complete explanation of the category Blue Oak operates in." },
                { title: "What Is Revenue Recovery™?", href: "/blog/what-is-revenue-recovery", desc: "How businesses identify and recapture revenue they are already generating." },
                { title: "Why Marketing Can Fail Without Infrastructure", href: "/why-marketing-fails-without-revenue-infrastructure", desc: "The distinction between creating demand and converting it." },
                { title: "How Missed Calls Become Missed Revenue", href: "/how-much-revenue-are-you-losing-from-missed-calls", desc: "What happens to unanswered inquiries and what it costs a business." },
                { title: "What Is a Revenue Leak?", href: "/blog/what-is-a-revenue-leak", desc: "How to identify the points in your business where revenue escapes." },
                { title: "Revenue Recovery Scenarios", href: "/revenue-recovery-scenarios", desc: "Illustrative examples of how revenue infrastructure problems affect businesses." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={item.href}
                    className="block rounded-xl border border-border/40 bg-card/20 p-5 hover:border-primary/25 transition-colors h-full">
                    <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20 rounded-3xl border border-primary/20 bg-primary/[0.03] px-8"
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              Your business may already have revenue opportunities hiding inside its current customer journey.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-9">
              Start with a Complimentary Revenue Snapshot™ and see where a deeper look may be worthwhile.
            </p>
            <Button size="lg" asChild className="px-10 font-semibold shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow">
              <Link href={BRAND.snapshotPath}>
                Request Your Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
