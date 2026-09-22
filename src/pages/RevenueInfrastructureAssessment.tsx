import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, CheckCircle, Eye, Layers,
  MessageSquare, RefreshCcw, TrendingUp, Users, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const EXAMINATION_AREAS = [
  { icon: <Eye className="w-5 h-5" />, title: "Visibility & Discovery", items: ["Search engine presence", "Online reputation signals", "Discoverability across key channels", "Geographic market visibility"] },
  { icon: <Users className="w-5 h-5" />, title: "Lead Capture & Inquiry", items: ["Inbound inquiry pathways", "Website contact experience", "Phone and messaging accessibility", "Lead capture completeness"] },
  { icon: <Zap className="w-5 h-5" />, title: "Response & Qualification", items: ["Speed and quality of initial response", "After-hours response capability", "Lead qualification processes", "Routing and prioritisation"] },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Conversion & Follow-Up", items: ["Appointment and consultation conversion", "Follow-up consistency and depth", "Proposal and sales process", "Unconverted inquiry handling"] },
  { icon: <RefreshCcw className="w-5 h-5" />, title: "Retention & Reactivation", items: ["Customer retention processes", "Inactive customer reactivation", "No-show and cancellation recovery", "Review and reputation management"] },
  { icon: <Layers className="w-5 h-5" />, title: "Systems & Technology", items: ["CRM and lead tracking", "Automation and workflow capability", "AI and communications technology", "System integration and data flow"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Measurement & Intelligence", items: ["Revenue cycle visibility", "Pipeline reporting", "Performance tracking", "Decision-support data"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Customer Experience", items: ["Journey consistency", "Communication quality", "Friction points", "Experience relative to expectations"] },
];

const BUSINESS_RECEIVES = [
  "A clear map of your complete revenue cycle as it currently operates",
  "Identification of specific gaps, weaknesses, and missed opportunities",
  "An estimate of financial impact where quantifiable",
  "A Revenue Recovery Plan™ with prioritised recommendations",
  "A structured path to Revenue Infrastructure Implementation™",
];

const WHO_SHOULD_CONSIDER = [
  "Businesses generating consistent demand but not capturing or converting enough of it",
  "Businesses with marketing spend that is not producing proportionate revenue",
  "Businesses where revenue feels inconsistent despite reasonable activity levels",
  "Business owners who know something is off but cannot identify the exact problem",
  "Businesses preparing for growth that want a solid infrastructure foundation first",
  "Businesses that have received a Revenue Snapshot™ and want to go deeper",
];

export default function RevenueInfrastructureAssessment() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-20">
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Revenue Infrastructure Assessment™
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            A Serious Diagnosis Deserves a Serious Process
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto">
            The Revenue Infrastructure Assessment™ is a comprehensive paid diagnostic that examines your complete revenue cycle — from visibility and lead capture through conversion, retention, reactivation, and measurement.
          </motion.p>
        </motion.div>

        {/* What vs Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20"
        >
          <div className="rounded-2xl border border-border/40 bg-card/20 p-7">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 mb-4">Revenue Snapshot™ (Complimentary)</p>
            <ul className="space-y-2.5">
              {[
                "High-level review of publicly visible information",
                "Initial observations about possible gaps",
                "Designed to surface obvious questions worth investigating",
                "Delivered as initial observations — not a complete roadmap",
                "No cost — no obligation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] p-7">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Revenue Infrastructure Assessment™ (Paid)</p>
            <ul className="space-y-2.5">
              {[
                "Comprehensive examination of your complete revenue cycle",
                "Structured diagnosis across 8+ revenue pathway dimensions",
                "Financial impact estimation where quantifiable",
                "Prioritised Revenue Recovery Plan™ as a deliverable",
                "Foundation for Revenue Infrastructure Implementation™",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* What may be examined */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">What the Assessment May Examine</p>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Eight Dimensions of Your Revenue Cycle</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The Assessment examines all stages where revenue is created, captured, lost, or recovered — not just the most obvious ones.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXAMINATION_AREAS.map((area, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="rounded-xl border border-border/40 bg-card/20 p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  {area.icon}
                </div>
                <h3 className="text-sm font-bold mb-3">{area.title}</h3>
                <ul className="space-y-1.5">
                  {area.items.map((item, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What the business receives */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">What the Business Receives</p>
              <h2 className="text-2xl font-extrabold tracking-tight mb-6">Clarity, Not Just Observations</h2>
              <ul className="space-y-3">
                {BUSINESS_RECEIVES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Who Should Consider the Assessment</p>
              <h2 className="text-2xl font-extrabold tracking-tight mb-6">Designed for Business Owners Ready to Fix the Right Problem</h2>
              <ul className="space-y-3">
                {WHO_SHOULD_CONSIDER.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* What happens after */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">What Comes After</p>
            <h2 className="text-3xl font-extrabold tracking-tight">The Assessment Leads to a Plan</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Revenue Recovery Plan™",
                body: "The Assessment findings lead directly to a prioritised Revenue Recovery Plan™ — a structured roadmap defining what should be repaired, strengthened, implemented, or connected.",
              },
              {
                step: "02",
                title: "Revenue Infrastructure Implementation™",
                body: "Blue Oak implements approved systems and improvements. This may include strategy, systems, processes, technology, automation, communications, measurement, and other appropriate capabilities.",
              },
              {
                step: "03",
                title: "Continuous Optimization™",
                body: "Blue Oak may continue measuring, improving, maintaining, and expanding the Revenue Infrastructure™ after initial implementation — ensuring systems compound over time.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-border/40 bg-card/20 p-6">
                <p className="text-4xl font-black text-white/[0.06] mb-3">{item.step}</p>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/50 bg-card/20 p-10 md:p-14 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
            Ready to Discuss the Assessment?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Assessment pricing is provided during consultation. Start with a complimentary Revenue Snapshot™ or contact us directly to discuss whether the Assessment is the right next step for your business.
          </p>
          <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto mb-10">
            Diagnosis comes before prescription. Blue Oak does not recommend implementation packages without first understanding your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="font-semibold px-10 shadow-[0_0_24px_rgba(212,175,55,0.3)]">
              <Link href="/revenue-snapshot">
                Start with a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-semibold px-10 bg-transparent border-border hover:bg-white/5">
              <Link href="/contact">Contact Us Directly</Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
