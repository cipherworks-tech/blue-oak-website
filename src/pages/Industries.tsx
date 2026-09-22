import { motion } from "framer-motion";
import { ArrowRight, Wrench, Car, Scale, Home, Palmtree } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const INDUSTRY_CARDS = [
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "Home Services",
    slug: "home-services",
    tagline: "Missed calls during jobs, slow quote response, no repeat service system.",
    focusAreas: "Missed calls · quote follow-up · repeat service",
  },
  {
    icon: <Car className="w-6 h-6" />,
    name: "Auto Sales & Service",
    slug: "auto-sales-service",
    tagline: "Missed vehicle inquiries, slow financing follow-up, no-show service appointments.",
    focusAreas: "After-hours inquiries · financing follow-up · service no-shows",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    name: "Law Firms",
    slug: "law-firms",
    tagline: "Slow intake response, consultation non-conversion, referral capture gaps.",
    focusAreas: "Intake speed · consultation follow-up · referral capture",
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Real Estate",
    slug: "real-estate",
    tagline: "Slow lead response, no long-term nurture, past client reactivation gaps.",
    focusAreas: "Lead response speed · long-term nurture · past client reactivation",
  },
  {
    icon: <Palmtree className="w-6 h-6" />,
    name: "Hospitality & Tourism",
    slug: "hospitality-tourism",
    tagline: "Missed booking calls, abandoned inquiries, no off-season reactivation.",
    focusAreas: "Booking inquiries · abandoned enquiries · off-season reactivation",
  },
];

export default function Industries() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            Industries
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Revenue Infrastructure by Industry
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-3">
            Blue Oak deploys revenue infrastructure tailored to the specific revenue cycles, client acquisition patterns, and missed-opportunity profiles of each industry.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground/60 text-sm max-w-xl mx-auto">
            Select your industry to see specific revenue leak patterns, illustrative assessment examples, recovery scenarios, and the Blue Oak solutions that address them.
          </motion.p>
        </motion.div>

        {/* Industry cards */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {INDUSTRY_CARDS.map((ind, i) => (
            <motion.div
              key={i} variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border/50 bg-card/20 p-7 flex flex-col hover:border-border/80 transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
                  {ind.icon}
                </div>
              </div>
              <h2 className="font-extrabold text-lg tracking-tight mb-2">{ind.name}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{ind.tagline}</p>
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <p className="text-xs text-primary font-medium">{ind.focusAreas}</p>
              </div>
              <Button asChild variant="outline"
                className="w-full font-semibold bg-transparent border-border hover:bg-white/[0.04] group-hover:border-border/80 transition-colors">
                <Link href={`/industries/${ind.slug}`}>
                  View {ind.name} Page
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Not in the list strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/40 bg-secondary/20 p-8 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold mb-2">Don't see your industry?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Blue Oak builds revenue infrastructure for any business with an identifiable revenue cycle and inbound interest. If you have leads, inquiries, or customers — you likely have recoverable revenue.
            </p>
          </div>
          <Button asChild variant="outline" className="font-semibold flex-shrink-0">
            <Link href="/revenue-snapshot">Request a Revenue Snapshot™ <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </motion.div>

        {/* How it starts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/40 bg-card/20 p-9 text-center"
        >
          <div className="h-px w-12 bg-primary/50 mx-auto mb-6" />
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">How It Starts</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Start with a Complimentary Revenue Snapshot™</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-3">
            The Revenue Snapshot™ is a high-level, complimentary review of your visible revenue opportunities and gaps. No cost, no obligation.
          </p>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
            When deeper investigation is warranted, a Revenue Infrastructure Assessment™ provides the structured diagnostic that identifies specific gaps, quantifies recoverable opportunity, and informs the recommended deployment plan.
          </p>
          <Button size="lg" asChild className="font-semibold px-10">
            <Link href="/revenue-snapshot">Request Your Revenue Snapshot™ <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
