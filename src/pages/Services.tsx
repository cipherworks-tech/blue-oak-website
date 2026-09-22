import { motion } from "framer-motion";
import {
  ArrowRight, Eye, Zap, RefreshCcw, Cpu, BarChart3,
  Check, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BRAND } from "@/lib/marketConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const GROUPS = [
  {
    id: "visibility",
    icon: <Eye className="w-7 h-7" />,
    number: "01",
    title: "Visibility & Opportunity Creation",
    description:
      "Revenue depends on being found. Blue Oak assesses how effectively a business creates visibility, attracts attention, and generates the conditions for inbound opportunity.",
    capabilities: [
      "Search visibility and local presence",
      "Google Business Profile optimization",
      "Online reputation and review management",
      "Inquiry pathway clarity",
      "Demand generation infrastructure",
      "Lead generation systems where appropriate",
      "Content and educational positioning",
    ],
  },
  {
    id: "capture",
    icon: <Zap className="w-7 h-7" />,
    number: "02",
    title: "Capture, Response & Conversion",
    description:
      "Generating interest has little value if that interest is lost before it converts. Blue Oak strengthens the systems that capture inquiries, respond promptly, qualify prospects, and move them toward a decision.",
    capabilities: [
      "Missed call recovery and text-back systems",
      "AI voice response (Maya)",
      "Multi-channel inquiry capture",
      "Speed-to-lead response infrastructure",
      "Lead qualification and routing",
      "Appointment scheduling and confirmation",
      "Sales follow-up sequences",
      "Conversion infrastructure",
    ],
  },
  {
    id: "retention",
    icon: <RefreshCcw className="w-7 h-7" />,
    number: "03",
    title: "Retention, Recovery & Growth",
    description:
      "The highest-probability revenue opportunity is often with people who already know the business. Blue Oak builds systems that retain customers, recover lost opportunities, and generate ongoing value from existing relationships.",
    capabilities: [
      "Customer retention systems",
      "Lapsed customer reactivation",
      "No-show and cancellation recovery",
      "Post-service follow-up",
      "Review and reputation development",
      "Referral infrastructure",
      "Repeat business facilitation",
    ],
  },
  {
    id: "systems",
    icon: <Cpu className="w-7 h-7" />,
    number: "04",
    title: "Systems, AI & Automation",
    description:
      "Revenue Infrastructure™ depends on connected, reliable systems. Blue Oak designs and implements the technology, automation, and AI capabilities that make revenue operations consistent and scalable. The operating principle is straightforward: AI does more of the work, and people stay in control of consequential decisions. Routine work runs on its own; results and recommendations are surfaced; actions that carry real consequence wait for approval.",
    capabilities: [
      "CRM implementation and management",
      "Lead tracking and pipeline visibility",
      "Workflow automation",
      "AI voice and conversational systems",
      "Communications infrastructure",
      "System integrations",
      "Process design and improvement",
    ],
  },
  {
    id: "measurement",
    icon: <BarChart3 className="w-7 h-7" />,
    number: "05",
    title: "Measurement & Continuous Optimization",
    description:
      "Revenue Infrastructure™ that cannot be measured cannot be improved. Blue Oak installs the tracking, reporting, and intelligence capabilities that allow businesses to understand performance and improve continuously.",
    capabilities: [
      "Revenue performance tracking",
      "Lead source attribution",
      "Conversion measurement",
      "Pipeline reporting dashboards",
      "Revenue Intelligence infrastructure",
      "Performance benchmarking",
      "Continuous optimization programs",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Revenue Infrastructure™ Services
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The Systems Behind Revenue
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">
            Blue Oak strengthens the connected systems businesses use to create opportunities, capture demand, respond, convert, retain customers, recover lost revenue, and improve performance.
          </motion.p>
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-card/20">
            <p className="text-sm text-muted-foreground">
              Blue Oak does not deploy every capability for every business. Solutions are selected based on the{" "}
              <Link href={BRAND.assessmentPath} className="text-primary hover:underline">
                Revenue Infrastructure Assessment™
              </Link>
              , existing systems, priorities, constraints, and opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* Capability Groups */}
        <div className="space-y-10 mb-20">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              id={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-border/50 bg-card/20 overflow-hidden"
              data-testid={`section-service-${group.id}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left */}
                <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                      {group.icon}
                    </div>
                    <span className="text-5xl font-black text-white/[0.04] select-none leading-none">
                      {group.number}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight mb-4">
                    {group.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {group.description}
                  </p>
                </div>

                {/* Right */}
                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                    Capabilities May Include
                  </p>
                  <ul className="space-y-3">
                    {group.capabilities.map((cap, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/40 bg-secondary/20 p-8 md:p-10 mb-10"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            How Blue Oak Works
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Revenue Snapshot™", note: "Complimentary initial review" },
              { step: "02", label: "Assessment™", note: "Comprehensive paid diagnostic" },
              { step: "03", label: "Recovery Plan™", note: "Prioritized recommendations" },
              { step: "04", label: "Implementation™", note: "Systems built and deployed" },
              { step: "05", label: "Optimization™", note: "Measurement and improvement" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold text-primary">{s.step}</span>
                </div>
                <p className="text-sm font-semibold leading-tight mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
                {i < 4 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/30 mt-2 hidden md:block rotate-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-20 rounded-3xl border border-primary/20 bg-primary/[0.03] relative overflow-hidden px-8"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Start Here
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Not Sure Which Systems Apply to Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-9">
            Begin with a complimentary Revenue Snapshot™. Blue Oak will review visible revenue opportunities and identify whether deeper investigation may be worthwhile — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-10 font-semibold shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow">
              <Link href={BRAND.snapshotPath}>
                Request a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-10 font-semibold bg-transparent border-border hover:bg-white/5">
              <Link href={BRAND.assessmentPath}>Learn About the Assessment™</Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
