import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Users, TrendingUp, Shield, Eye, Building2, Home, Wrench, BarChart3, Globe, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const WHO_WE_SERVE = [
  { icon: <Wrench className="w-5 h-5 text-primary" />, label: "Contractors &amp; Trades", detail: "After-hours inquiries, quote follow-up gaps, no job reminder system" },
  { icon: <Building2 className="w-5 h-5 text-primary" />, label: "Service Businesses", detail: "Missed calls, cold leads, no reactivation process for past customers" },
  { icon: <Home className="w-5 h-5 text-primary" />, label: "Real Estate", detail: "Slow lead response, no long-term nurture, past client reactivation gaps" },
  { icon: <BarChart3 className="w-5 h-5 text-primary" />, label: "Law Firms", detail: "Slow inquiry response, no structured consultation follow-up, lost referrals" },
  { icon: <TrendingUp className="w-5 h-5 text-primary" />, label: "Auto Sales &amp; Service", detail: "Unanswered inquiries, no-shows, unsold inventory with no follow-up" },
  { icon: <Users className="w-5 h-5 text-primary" />, label: "Local Operators", detail: "No CRM, invisible pipeline, manual follow-up that stops when the team gets busy" },
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen text-foreground">

      {/* ── HERO ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(43 63% 52% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(43 63% 52% / 0.06) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
              About Blue Oak Revenue Infrastructure™
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-7">
              We Build Revenue Infrastructure for Businesses That Want to Know Exactly Where Their Revenue Is Going
            </motion.h1>
            <motion.div variants={fadeUp} className="h-px w-16 bg-primary/50 mx-auto mb-7" />
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Blue Oak Revenue Infrastructure™ helps businesses recover lost revenue by identifying the exact gaps in their follow-up, intake, lead conversion, and customer communication — then building the systems that close them.
            </motion.p>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-primary/25 bg-primary/[0.06]">
              <div className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm font-semibold text-foreground/90 tracking-wide italic">
                "We build systems that recover what others miss."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION · VISION · POSITIONING ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Foundation</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What Blue Oak Stands For</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mission */}
              <motion.div variants={fadeUp} className="rounded-2xl border border-border/50 bg-card/20 p-8 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary font-black text-xs tracking-widest">M</span>
                </div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Mission</p>
                <p className="text-foreground font-bold text-base mb-3 leading-snug">
                  Build prosperous businesses that create prosperous communities.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Thriving People → Prosperous Businesses → Prosperous Communities. Blue Oak pursues that mission by building the Revenue Infrastructure™ businesses need to recover, protect, optimise and grow revenue.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div variants={fadeUp} className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary font-black text-xs tracking-widest">V</span>
                </div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Vision</p>
                <p className="text-foreground font-bold text-base mb-3 leading-snug">
                  A world where no business loses revenue it already earned the right to.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Every business that generates demand deserves the infrastructure to capture it. Blue Oak exists to make that infrastructure accessible — in Jamaica, the United States, and beyond.
                </p>
              </motion.div>

              {/* Positioning */}
              <motion.div variants={fadeUp} className="rounded-2xl border border-border/50 bg-card/20 p-8 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary font-black text-xs tracking-widest">P</span>
                </div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Positioning</p>
                <p className="text-foreground font-bold text-base mb-3 leading-snug">
                  Not a marketing agency. Not an automation shop. A Revenue Infrastructure company.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Blue Oak is positioned at the intersection of operational systems and revenue strategy — for businesses that have demand and need the infrastructure to convert it consistently.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-16 px-4 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/15 bg-primary/[0.02] p-10 md:p-14"
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-8">The Blue Oak Manifesto</p>
            <div className="space-y-5 text-foreground/90 leading-relaxed">
              <p className="text-lg font-semibold">
                Most businesses are not failing because of a lack of effort or ambition.
              </p>
              <p className="text-muted-foreground">
                They are failing to capture revenue they already generated the demand for. The calls came in. The inquiries were submitted. The customers showed up once. But the systems that should have captured, followed up, and retained that revenue simply weren't there.
              </p>
              <p className="text-muted-foreground">
                This is not a marketing problem. More advertising into a business that can't follow up or convert consistently just means more wasted leads — not more revenue.
              </p>
              <p className="text-muted-foreground">
                It is an infrastructure problem. And infrastructure can be built, deployed, and measured.
              </p>
              <p className="text-foreground font-semibold">
                That is what Blue Oak does.
              </p>
              <p className="text-muted-foreground">
                We identify the exact points where revenue is escaping. We build the systems that stop those leaks. And we deploy those systems fast — because every day without infrastructure is a day of recoverable revenue that doesn't come back.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Who We Serve</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Built for Local and Regional Businesses</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Blue Oak serves businesses in Jamaica and the United States that generate consistent demand but need better systems to capture, convert, and retain it.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHO_WE_SERVE.map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-xl border border-border/50 bg-card/30 p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.label }} />
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">The Team Behind Blue Oak</h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="rounded-2xl border border-border/50 bg-card/30 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start">

                {/* Founder headshot */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl border-2 border-primary/30 overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.15)]">
                    <img
                      src="/founder-photo.png"
                      alt="Mark Jobson — Founder and CEO, Blue Oak Revenue Infrastructure"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="h-px w-12 bg-primary/50 mb-6" />
                  <h3 className="text-2xl font-extrabold tracking-tight mb-1">Mark Jobson</h3>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Founder &amp; CEO — Blue Oak Revenue Infrastructure™</p>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Mark Jobson is the founder and chief executive of Blue Oak Automation LLC, a Michigan-registered Revenue Infrastructure company serving businesses in Jamaica and the United States.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    With a background in enterprise IT, UNIX systems administration, and Cisco networking, Mark built Blue Oak on the principle that businesses face different constraints — some need more demand, others are losing the demand they already generate. The discipline is diagnosis before prescription: identify where revenue is actually constrained, then build the systems that address it.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Blue Oak deploys revenue recovery systems, lead capture infrastructure, and operational automation for clients across Jamaica and the Detroit Metro Area, with plans to expand across both markets.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 border border-border/40 px-3 py-1.5 rounded-full">
                      <MapPin className="w-3 h-3 text-primary" />
                      Jamaica &amp; United States
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 border border-border/40 px-3 py-1.5 rounded-full">
                      <Globe className="w-3 h-3 text-primary" />
                      Blue Oak Automation LLC · Michigan
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="py-20 px-4 bg-secondary/20 border-t border-border/40">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-10 md:p-14"
          >
            <div className="h-px w-12 bg-primary/50 mb-8" />
            <p className="text-foreground text-lg leading-relaxed mb-6 font-medium italic">
              "Blue Oak was built on a simple observation: most businesses aren't losing revenue because they lack ambition or effort. They're losing it because they lack infrastructure. The systems that capture, convert, and retain revenue simply don't exist — or were never built properly. That's what we change."
            </p>
            <div>
              <p className="font-bold text-sm">Mark Jobson</p>
              <p className="text-muted-foreground text-xs mt-1">Founder &amp; CEO, Blue Oak Revenue Infrastructure™ · Jamaica &amp; United States</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EVOLUTION ── */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">How Blue Oak Got Here</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
              From Tools to Systems to Revenue Infrastructure™
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Blue Oak began by exploring how artificial intelligence and automation could help businesses operate more effectively. That work exposed a larger issue: technology alone cannot repair disconnected marketing, sales, operations, customer experience, and revenue processes.
              </p>
              <p>
                The focus therefore expanded — from individual tools, to business systems, to Revenue Infrastructure™: the connected systems and operating capabilities behind sustainable, predictable revenue performance.
              </p>
              <p>
                AI and automation remain capabilities inside Revenue Infrastructure™. They are not the category. The category is the business outcome — recovered revenue, protected revenue, predictable growth.
              </p>
              <p className="font-semibold text-foreground">
                Thriving People → Prosperous Businesses → Prosperous Communities.
              </p>
              <p>
                That is the mission: build prosperous businesses that create prosperous communities. In Jamaica. In the United States. And wherever businesses need better systems to reach their potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="py-16 px-4 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-6">What's Coming</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-border/40 bg-card/20 p-6">
                <p className="font-bold mb-2">Blue Oak Academy</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Education designed to help business owners and their teams understand and improve the systems behind sustainable revenue performance. Courses, workshops, and resources built around Revenue Infrastructure™.
                </p>
              </div>
              <div className="rounded-xl border border-border/40 bg-card/20 p-6">
                <p className="font-bold mb-2">Blue Oak Educational Resources</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Books, playbooks, templates, and publications being developed around Revenue Infrastructure™ and business capability — practical resources for operators who want to build stronger, more resilient businesses.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Get Started
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              Find Out What Your Revenue Cycle Is Missing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto mb-9">
              Request a Revenue Snapshot™ to surface visible revenue opportunities and see where deeper investigation may be worthwhile.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="font-semibold px-10 shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:shadow-[0_0_36px_rgba(212,175,55,0.5)] transition-shadow">
                <Link href="/revenue-snapshot">
                  Request Your Revenue Snapshot™
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-semibold px-10 bg-transparent border-border hover:bg-white/5">
                <Link href="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
