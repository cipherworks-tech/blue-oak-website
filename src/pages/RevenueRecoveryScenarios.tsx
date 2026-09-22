import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Phone, Clock, Users, RefreshCcw, Star, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SCENARIOS = [
  {
    icon: <Phone className="w-6 h-6" />,
    industry: "HVAC Company",
    location: "Detroit Metro Area — Illustrative Scenario",
    situation: "Consider an HVAC company that misses a meaningful share of inbound calls during peak summer season. Emergency AC calls are high-value and time-sensitive — callers who don't get through often call the next company on their list.",
    leak: "For illustration: suppose the company misses 15 calls in a peak month, roughly half are genuine qualified inquiries, and the average job is worth $600. At a 30% conversion rate, that represents approximately $1,350 in potential missed revenue in that month. Actual figures depend on the specific business.",
    solution: "A missed call text-back system could be configured so that unanswered calls trigger an automated SMS, keeping the lead alive until a technician can follow up.",
    outcome: "With this infrastructure in place, calls that previously went unanswered could be followed up systematically. Booking rates on recovered calls depend on the business, market, and follow-up quality.",
    metric: "Recovery focus: missed call text-back + after-hours lead capture",
  },
  {
    icon: <Star className="w-6 h-6" />,
    industry: "Electrical Contractor",
    location: "Mandeville, Jamaica — Illustrative Scenario",
    situation: "Consider an electrical contractor where inquiries regularly come in but many don't convert to booked jobs. Office staff follow up once, then move on. Unbooked inquiries receive no further outreach.",
    leak: "For illustration: suppose the contractor has 10 unbooked inquiries per month and a typical job is worth $450. At an assumed 25% recovery rate, a structured follow-up sequence could potentially convert 2–3 of those into booked jobs. Actual impact depends on inquiry quality and follow-up execution.",
    solution: "A multi-touch follow-up sequence via WhatsApp and SMS could be deployed for unbooked inquiries, running automatically over a defined period so routine follow-up does not depend on a staff member remembering to send it.",
    outcome: "Unbooked inquiries that previously went cold could re-enter the pipeline through automated follow-up. Visibility into open inquiries would reduce reliance on staff memory.",
    metric: "Recovery focus: WhatsApp follow-up sequences + inquiry pipeline",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    industry: "Law Firm",
    location: "Detroit, Michigan — Illustrative Scenario",
    situation: "Consider a law firm where inbound inquiries arrive via website and referral, but response time averages several hours. By the time the firm calls back, some prospects have already engaged with a competitor who responded faster.",
    leak: "For illustration: suppose the firm loses 3 consultations per month to slow response, and each would have been worth $2,000 in retainer value. That represents approximately $6,000 in potential monthly missed revenue. Actual figures depend on the firm's inquiry volume and conversion rate.",
    solution: "Speed-to-lead automation could be deployed so that web form submissions trigger a near-immediate SMS acknowledgment and an intake flow, allowing the prospect to schedule a consultation without waiting.",
    outcome: "Automated first response removes the delay between inquiry and initial contact. Whether that translates into more consultations depends on the quality of the intake flow and the firm's offer.",
    metric: "Recovery focus: speed-to-lead + automated consultation booking",
  },
  {
    icon: <Users className="w-6 h-6" />,
    industry: "Auto Service Center",
    location: "Kingston, Jamaica — Illustrative Scenario",
    situation: "Consider an auto service center with a large existing customer base and no system to prompt return visits. Customers service their vehicle once, then return only if they remember or the service center happens to be top of mind when they need service again.",
    leak: "For illustration: suppose 200 customers are overdue for a service visit and the average service appointment is worth $120. Even recovering 10% of that dormant list represents 20 customers and approximately $2,400 in recovered revenue from a single reactivation effort.",
    solution: "Automated service interval reactivation could be configured, sending customers a WhatsApp message at regular intervals since their last visit — personalized to their vehicle and service type.",
    outcome: "With automated reactivation running, dormant customers could be reached systematically, reducing the manual outreach otherwise required from staff. Results depend on the size of the dormant list and the business's service quality.",
    metric: "Recovery focus: lapsed customer reactivation + service reminders",
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    industry: "Professional Services Firm",
    location: "Kingston, Jamaica — Illustrative Scenario",
    situation: "Consider a professional services firm where a portion of booked consultations result in no-shows. Each no-show leaves a billable slot empty with no revenue and, typically, no recovery attempt — the slot is simply lost.",
    leak: "For illustration: suppose the firm has 5 no-shows per week at $200 per consultation. That is $1,000 per week or approximately $4,000 per month in revenue that could potentially be protected through better reminder systems. Actual no-show rates vary by firm and appointment type.",
    solution: "An appointment reminder sequence could be deployed — reminders sent at 48 hours, 24 hours, and 2 hours before each appointment via WhatsApp, with cancellations triggering an automated rebooking offer.",
    outcome: "Reminder sequences can help reduce no-show rates by keeping appointments top of mind. Automated rebooking flows can help fill cancelled slots. The actual impact depends on the firm's client base and communication preferences.",
    metric: "Recovery focus: appointment reminders + no-show reduction + slot recovery",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    industry: "Home Improvement Contractor",
    location: "Oakland County, Michigan — Illustrative Scenario",
    situation: "Consider a contractor who regularly sends quotes but has no structured follow-up process. Once a quote goes out, the contractor waits for the customer to respond — and if they don't, the opportunity is assumed lost.",
    leak: "For illustration: suppose the contractor sends 12 quotes per month and 5 go unresponded. At an average project value of $8,000 and a conservative 15% follow-up recovery rate, that represents approximately $6,000 per month in potential recovered revenue from improved follow-up alone.",
    solution: "A post-quote follow-up sequence could be deployed — a structured SMS and email series over 10 days for every unresponded estimate, focused on project timelines and availability.",
    outcome: "Systematic follow-up on cold quotes creates a second chance at revenue that would otherwise be assumed lost. Pipeline visibility into every open quote replaces guesswork with a managed process.",
    metric: "Recovery focus: post-quote follow-up sequences + pipeline visibility",
  },
];

export default function RevenueRecoveryScenarios() {
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
            Revenue Recovery Scenarios
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Illustrative Revenue Infrastructure Scenarios
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto mb-4">
            The following are hypothetical scenarios demonstrating how Revenue Infrastructure™ problems and solutions may apply to businesses like yours. Dollar figures use explicit assumptions — they are not Blue Oak client results or industry benchmarks.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground/60 text-sm max-w-xl mx-auto">
            These examples are not representations of specific Blue Oak client results or guarantees of outcome. Actual revenue impact depends on the specific business, implementation, market conditions, and operating environment.
          </motion.p>
        </motion.div>

        {/* Scenarios */}
        <div className="space-y-8">
          {SCENARIOS.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-border/50 bg-card/20 overflow-hidden"
              data-testid={`scenario-${i}`}
            >
              {/* Scenario header */}
              <div className="flex items-center gap-4 px-8 py-5 border-b border-border/40 bg-white/[0.015]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {scenario.icon}
                </div>
                <div>
                  <p className="font-extrabold text-lg leading-tight">{scenario.industry}</p>
                  <p className="text-xs text-muted-foreground">{scenario.location}</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 bg-primary/[0.06] border border-primary/20 px-3 py-1.5 rounded-full">
                    {scenario.metric.split(":")[0]}
                  </span>
                </div>
              </div>

              {/* Scenario body */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">The Situation</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scenario.situation}</p>
                  </div>
                  <div className="rounded-xl border border-red-500/15 bg-red-500/[0.03] px-5 py-4">
                    <p className="text-xs font-semibold tracking-widest uppercase text-red-400/80 mb-1.5">Revenue at Risk</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scenario.leak}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">The Infrastructure Deployed</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scenario.solution}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/[0.04] px-5 py-4">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary/80 mb-1.5">The Outcome</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scenario.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-5">
                <p className="text-xs text-muted-foreground/50 font-medium">{scenario.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center py-20 rounded-3xl border border-primary/20 bg-primary/[0.03] px-8"
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="text-primary text-xs font-semibold tracking-widest uppercase">Your Business Is Next</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Find Out What Your Business Is Losing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-9">
            Request a Revenue Snapshot™ to surface visible revenue opportunities and identify whether deeper investigation is worthwhile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-10 font-semibold shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow">
              <Link href="/contact">
                Book a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-10 font-semibold bg-transparent border-border hover:bg-white/5">
              <Link href="/services">View Our Systems</Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
