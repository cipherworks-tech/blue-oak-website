import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, PhoneOff, MessageSquareOff, Clock, Users, TrendingDown, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const leaks = [
  {
    icon: PhoneOff,
    title: "Missed phone calls",
    plain: "Someone called your business. Nobody answered. They called your competitor next.",
    examples: ["A customer calls an electrician at 5:02 PM. The office is closed. No voicemail callback. They hire someone else.", "A homeowner calls a plumber on a Saturday. No answer. They find someone else online within 10 minutes."],
  },
  {
    icon: Clock,
    title: "Slow response times",
    plain: "Someone sent a message or filled out a form. Hours passed. They lost interest or went elsewhere.",
    examples: ["A law firm receives an online inquiry at 9 AM. Someone responds at 4 PM. The potential client already retained another attorney.", "A restaurant gets a catering request. Nobody responds for two days. The event goes to a competitor."],
  },
  {
    icon: MessageSquareOff,
    title: "No follow-up after first contact",
    plain: "Someone showed interest but didn't book immediately. Nobody followed up. The opportunity disappeared.",
    examples: ["A contractor provides a quote. The customer says 'let me think about it.' Nobody calls back. The job goes to someone else.", "A firm sends appointment reminders but never follows up on no-shows. Those clients are simply lost."],
  },
  {
    icon: Users,
    title: "Old customers who never came back",
    plain: "You had customers who were happy. They drifted away. Nobody reached out to bring them back.",
    examples: ["A customer had work done 18 months ago. Nobody followed up. They found another provider closer to home.", "A home services company completed a job. The customer never heard from them again. Repeat business never happened."],
  },
];

const industries = [
  {
    name: "HVAC & Home Services",
    leak: "Customers call after hours or during jobs. No one answers. No callback system exists.",
    recovery: "Missed calls automatically trigger a text response and callback request.",
    solution: "After-hours capture and automated job booking.",
    outcome: "Fewer customers lost to competitors. More jobs booked without adding staff.",
  },
  {
    name: "Professional Services",
    leak: "Clients book consultations but don't show up. No reminders sent.",
    recovery: "Automated reminders at 48 hours, 24 hours, and 2 hours before the appointment.",
    solution: "Appointment confirmation and no-show recovery system.",
    outcome: "Fewer empty consultation slots. More revenue from the schedule already in place.",
  },
  {
    name: "HVAC Companies",
    leak: "Homeowners call for quotes. One quote is sent. No follow-up happens.",
    recovery: "Automated follow-up sequence checks in at day 2, day 5, and day 10 after quote.",
    solution: "Quote follow-up and lead nurture system.",
    outcome: "More quotes convert into booked jobs without extra sales effort.",
  },
  {
    name: "Plumbers & Contractors",
    leak: "Customers call on weekends and evenings. Nobody answers. They move on immediately.",
    recovery: "Missed call triggers an automated text acknowledging the call and offering a way to continue the conversation.",
    solution: "24/7 missed call text-back and lead capture.",
    outcome: "Weekend and after-hours calls no longer go to waste.",
  },
  {
    name: "Law Firms",
    leak: "Website contact forms are filled out. Follow-up takes 24 to 48 hours. Potential clients retain someone else.",
    recovery: "An automated response acknowledges the inquiry promptly. An intake call can be scheduled without waiting on staff availability.",
    solution: "Prompt, automated lead response and intake scheduling.",
    outcome: "Faster intake. Fewer lost consultations. More retained clients.",
  },
  {
    name: "Restaurants",
    leak: "Catering and event inquiries come in through email. They sit in an inbox for days.",
    recovery: "Inquiry triggers same-day follow-up with availability and pricing information.",
    solution: "Event and catering inquiry response system.",
    outcome: "More catering bookings. Fewer inquiries lost to competitors who respond faster.",
  },
];

const steps = [
  { n: "01", title: "Find where revenue is leaking", body: "We look at your business and identify exactly where opportunities are being lost. Missed calls. Slow follow-up. Forgotten leads. Lapsed customers." },
  { n: "02", title: "Build systems to capture opportunities", body: "We set up simple systems that catch what you're missing. Missed calls get a response. Inquiries get acknowledged. Leads get organized." },
  { n: "03", title: "Improve follow-up", body: "Automated systems ensure leads get consistent follow-up — not days later when someone remembers, but promptly and systematically according to a configured sequence." },
  { n: "04", title: "Recover lost opportunities", body: "We help you bring back customers who were interested but never booked. People who called but couldn't reach you. People who stopped coming back." },
  { n: "05", title: "Create a more predictable flow of revenue", body: "With systems in place, your revenue becomes more consistent. Fewer opportunities fall through the cracks." },
];

export default function WhatIsRevenueInfrastructure() {
  return (
    <main className="pt-28 pb-20">

      {/* ── HERO ── */}
      <section className="px-4 pb-16 border-b border-border/30">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Plain Language Guide
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              What Is Revenue Infrastructure?
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Every day, businesses lose customers they never knew they had. A missed call here. An unanswered message there.
              Revenue Infrastructure is the system that stops those losses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 1: WHAT IS IT ── */}
      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp}>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 1</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">The simplest possible explanation</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-lg">Revenue Infrastructure™ is the system that helps your business capture, follow up with, and convert more customers.</p>
              <p>Different businesses have different constraints. Some need more customers. Many have enough interest arriving but lose money because opportunities slip through the cracks after that point. Blue Oak diagnoses which is true for a given business before prescribing a system.</p>
              <div className="border-l-4 border-primary/30 pl-6 space-y-2 my-6">
                <p>A missed phone call.</p>
                <p>An unanswered WhatsApp message.</p>
                <p>A website inquiry that never receives a follow-up.</p>
                <p>A quote request that is forgotten.</p>
                <p>A customer who stopped coming back and nobody noticed.</p>
              </div>
              <p>Revenue Infrastructure helps prevent those losses. It is not a magic marketing trick. It is not a complicated software system. It is a set of simple, connected processes that make sure fewer opportunities are wasted.</p>
              <p>Think of it like plumbing for your business. If your pipes have leaks, more water pressure does not help. You fix the leaks first. Revenue Infrastructure fixes the leaks in your business.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: THE LEAK COMPARISON ── */}
      <section className="py-20 px-4 bg-secondary/10 border-b border-border/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 2</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Many businesses don't have a lead problem</h2>
              <p className="text-xl font-semibold text-primary">They have a leak problem</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Without */}
              <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-5 h-5 text-destructive/70" />
                  <h3 className="font-bold text-sm tracking-widest uppercase text-destructive/80">Without Revenue Infrastructure</h3>
                </div>
                <div className="space-y-4">
                  {[
                    ["Phone Calls", "Missed"],
                    ["Messages", "Ignored"],
                    ["Leads", "Forgotten"],
                    ["Quotes", "Unanswered"],
                    ["Old Customers", "Lost"],
                    ["Revenue", "Unpredictable"],
                  ].map(([from, to]) => (
                    <div key={from} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                      <span className="text-sm font-medium">{from}</span>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                        <span className="text-sm text-destructive/80 font-semibold">{to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* With */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm tracking-widest uppercase text-primary">With Revenue Infrastructure</h3>
                </div>
                <div className="space-y-4">
                  {[
                    ["Phone Calls", "Captured"],
                    ["Messages", "Followed Up"],
                    ["Leads", "Organized"],
                    ["Quotes", "Tracked"],
                    ["Old Customers", "Recovered"],
                    ["Revenue", "More Predictable"],
                  ].map(([from, to]) => (
                    <div key={from} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                      <span className="text-sm font-medium">{from}</span>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                        <span className="text-sm text-primary font-semibold">{to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: WHERE LEAKS HAPPEN ── */}
      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 3</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Where revenue leaks happen</h2>
              <p className="text-muted-foreground">These are the most common places businesses lose revenue without realizing it.</p>
            </motion.div>
            <div className="space-y-8">
              {leaks.map((leak, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border/40 bg-card/20 p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <leak.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">{leak.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{leak.plain}</p>
                    </div>
                  </div>
                  <div className="ml-14 space-y-2">
                    {leak.examples.map((ex, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500/70 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{ex}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: REVENUE RECOVERY ── */}
      <section className="py-20 px-4 bg-secondary/10 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 4</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">What is Revenue Recovery?</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p className="text-foreground font-semibold text-lg">Revenue Recovery™ is bringing back opportunities that were already trying to become customers.</p>
              <p>These are people who contacted you. They were interested. Something got in the way — a missed call, a slow response, a forgotten follow-up. Revenue Recovery helps bring those opportunities back.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Someone called but nobody answered.",
                "Someone requested a quote but never heard back.",
                "Someone booked but didn't show up — and nobody followed up.",
                "A customer purchased once but never came back.",
                "Someone visited your website but never made contact.",
                "A lead came in but got lost in a busy inbox.",
              ].map((ex, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.03] p-4">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{ex}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Revenue Recovery is not about chasing people who said no. It is about following up with people who were interested but slipped through the cracks before they could say yes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: HOW BLUE OAK WORKS ── */}
      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 5</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">How Blue Oak works</h2>
              <p className="text-muted-foreground">Five straightforward steps. No complicated contracts. No technical knowledge required from you.</p>
            </motion.div>
            <div className="space-y-5">
              {steps.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-5 rounded-2xl border border-border/40 bg-card/20 p-6">
                  <div className="text-2xl font-extrabold text-primary/20 tracking-tighter flex-shrink-0 w-10">{s.n}</div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: INDUSTRY EXAMPLES ── */}
      <section className="py-20 px-4 bg-secondary/10 border-b border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Section 6</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Real examples by industry</h2>
              <p className="text-muted-foreground">Every type of business loses revenue differently. Here is what it looks like — and how it gets fixed.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {industries.map((ind, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border/40 bg-card/30 p-6 space-y-4">
                  <h3 className="font-extrabold text-base tracking-tight">{ind.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-destructive/70">Revenue Leak</span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{ind.leak}</p>
                    </div>
                    <div className="h-px bg-border/30" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-600/70">Recovery Opportunity</span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{ind.recovery}</p>
                    </div>
                    <div className="h-px bg-border/30" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Infrastructure Solution</span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{ind.solution}</p>
                    </div>
                    <div className="h-px bg-border/30" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600/70">Business Outcome</span>
                      <p className="text-muted-foreground mt-1 leading-relaxed font-medium">{ind.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Ready to stop the leaks?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5">
              Stop losing revenue through the cracks
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Request a complimentary Revenue Snapshot™ to surface visible revenue opportunities and identify whether deeper investigation is worthwhile.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/revenue-snapshot">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors">
                  Book Revenue Snapshot™
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/revenue-recovery-scenarios">
                <button className="text-sm font-semibold text-primary hover:underline underline-offset-4">
                  See revenue recovery examples →
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
