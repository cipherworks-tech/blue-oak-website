import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Zap,
  RefreshCcw,
  Cpu,
  BarChart3,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BRAND, MARKETS } from "@/lib/marketConfig";
import { marketFromPath, marketPath } from "@/lib/marketRoutes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

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
      "Social media content and engagement systems",
      "Social inquiry capture and lead routing",
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
      "AI voice response (Maya), where available",
      "Multi-channel inquiry capture",
      "Speed-to-lead response infrastructure",
      "Lead qualification and routing",
      "Appointment scheduling and confirmation",
      "Sales follow-up sequences",
      "Conversion infrastructure",
      "Social inquiry response and follow-up",
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
      "Revenue Infrastructure™ depends on connected, reliable systems. Blue Oak designs and implements the technology, automation, and AI capabilities that make revenue operations consistent and scalable. AI handles routine work while people retain control over consequential decisions.",
    capabilities: [
      "CRM implementation and management",
      "Lead tracking and pipeline visibility",
      "Workflow automation",
      "AI voice and conversational systems",
      "Communications infrastructure",
      "System integrations",
      "Process design and improvement",
      "Human approval and AI governance controls",
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

const SYSTEMS = [
  {
    name: "Foundation System™",
    description:
      "Establish the essential infrastructure for business visibility, inquiry capture, response, and follow-up.",
    features: [
      "Visibility and inquiry pathway review",
      "Lead capture and response foundations",
      "Social revenue capture",
      "Essential follow-up workflows",
      "Basic performance visibility",
    ],
  },
  {
    name: "Recovery System™",
    description:
      "Identify and recover opportunities lost through missed inquiries, delayed responses, inconsistent follow-up, and dormant relationships.",
    features: [
      "Missed inquiry recovery",
      "Lead qualification and routing",
      "Automated follow-up workflows",
      "Social inquiry capture and recovery",
      "Customer reactivation opportunities",
      "Revenue recovery measurement",
    ],
  },
  {
    name: "Engine System™",
    description:
      "Connect visibility, lead management, opportunity intelligence, automation, and measurement into a coordinated Revenue Infrastructure system.",
    features: [
      "Demand and lead intelligence",
      "Opportunity intelligence",
      "Integrated social revenue capture",
      "CRM and workflow integration",
      "AI-assisted operations with oversight",
      "Performance reporting and optimization",
    ],
  },
];

const JOURNEY = [
  {
    step: "01",
    label: "Revenue Snapshot™",
    note: "Complimentary initial review",
  },
  {
    step: "02",
    label: "Assessment™",
    note: "Comprehensive paid diagnostic",
  },
  {
    step: "03",
    label: "Recovery Plan™",
    note: "Prioritized recommendations",
  },
  {
    step: "04",
    label: "Implementation™",
    note: "Systems built and deployed",
  },
  {
    step: "05",
    label: "Optimization™",
    note: "Measurement and improvement",
  },
];

export default function Services() {
  const [location] = useLocation();

  const activeMarket = marketFromPath(location);

  const marketConfig = activeMarket
    ? MARKETS[activeMarket]
    : null;

  const snapshotPath = activeMarket
    ? marketPath(activeMarket, "snapshot")
    : BRAND.snapshotPath;

  const assessmentPath = activeMarket
    ? marketPath(activeMarket, "assessment")
    : BRAND.assessmentPath;

  const pricingPath = activeMarket
    ? marketPath(activeMarket, "pricing")
    : "/pricing";

  const contactPath = activeMarket
    ? marketPath(activeMarket, "contact")
    : BRAND.contactPath;

  const marketIntro =
    activeMarket === "US"
      ? "Revenue Infrastructure systems designed for businesses operating in the United States."
      : activeMarket === "JM"
      ? "Revenue Infrastructure systems designed for businesses operating in Jamaica."
      : "Revenue Infrastructure systems for businesses in the United States and Jamaica.";

  const pricingLabel =
    activeMarket === "US"
      ? "View United States Pricing"
      : activeMarket === "JM"
      ? "View Jamaica Pricing"
      : "Explore Pricing";

  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Revenue Infrastructure™ Services
            {marketConfig ? ` · ${marketConfig.label}` : ""}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            The Systems Behind Revenue
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-xl max-w-2xl mx-auto mb-5"
          >
            Blue Oak strengthens the connected systems businesses use
            to create opportunities, capture demand, respond, convert,
            retain customers, recover lost revenue, and improve performance.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm text-primary mb-8"
          >
            {marketIntro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-card/20"
          >
            <p className="text-sm text-muted-foreground">
              Blue Oak does not deploy every capability for every business.
              Solutions are selected based on the{" "}
              <Link
                href={assessmentPath}
                className="text-primary hover:underline"
              >
                Revenue Infrastructure Assessment™
              </Link>
              , existing systems, priorities, constraints, and opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* THREE SERVICE SYSTEMS */}
        <section
          id="service-systems"
          className="scroll-mt-28 mb-24"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-12"
            >
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Blue Oak Service Architecture
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Three Systems. One Revenue Infrastructure.
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                The right system depends on the business's current
                revenue gaps, operational readiness, and priorities.
                Social revenue capture is included across all three systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SYSTEMS.map((system, index) => (
                <motion.div
                  key={system.name}
                  variants={fadeUp}
                  className={`rounded-2xl border p-7 flex flex-col ${
                    index === 1
                      ? "border-primary/35 bg-primary/[0.04]"
                      : "border-border/50 bg-card/20"
                  }`}
                >
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    System {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-xl font-extrabold mb-4">
                    {system.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {system.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {system.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full font-semibold bg-transparent border-border hover:bg-white/5"
                  >
                    <Link href={pricingPath}>
                      {pricingLabel}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="text-xs text-muted-foreground text-center mt-6"
            >
              Third-party costs such as telecommunications, SMS,
              AI voice usage, WhatsApp services, advertising,
              and software subscriptions may be billed separately.
            </motion.p>
          </motion.div>
        </section>

        {/* CAPABILITY GROUPS */}
        <section id="capabilities" className="scroll-mt-28">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              What Blue Oak Can Build
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Five Capability Groups
            </h2>
          </div>

          <div className="space-y-10 mb-20">
            {GROUPS.map((group) => (
              <motion.div
                key={group.id}
                id={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="scroll-mt-28 rounded-2xl border border-border/50 bg-card/20 overflow-hidden"
                data-testid={`section-service-${group.id}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/40">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                        {group.icon}
                      </div>

                      <span className="text-5xl font-black text-white/[0.04] select-none leading-none">
                        {group.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight mb-4">
                      {group.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {group.description}
                    </p>
                  </div>

                  <div className="p-8 md:p-10">
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                      Capabilities May Include
                    </p>

                    <ul className="space-y-3">
                      {group.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
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
            {JOURNEY.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold text-primary">
                    {step.step}
                  </span>
                </div>

                <p className="text-sm font-semibold leading-tight mb-1">
                  {step.label}
                </p>

                <p className="text-xs text-muted-foreground">
                  {step.note}
                </p>

                {index < JOURNEY.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/30 mt-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* REGIONAL CONTACT */}
        {activeMarket && marketConfig && (
          <div className="rounded-2xl border border-border/40 bg-card/20 p-7 md:p-9 mb-10 text-center">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              {marketConfig.label} Contact
            </p>

            <h2 className="text-xl md:text-2xl font-extrabold mb-4">
              Speak With Blue Oak About Your Business
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {activeMarket === "US" && marketConfig.phoneHref && (
                <a
                  href={marketConfig.phoneHref}
                  className="text-primary font-semibold hover:underline"
                >
                  {marketConfig.phone}
                </a>
              )}

              {activeMarket === "JM" && marketConfig.whatsappHref && (
                <a
                  href={marketConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Contact Blue Oak on WhatsApp
                </a>
              )}

              <Link
                href={contactPath}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Contact Page →
              </Link>
            </div>

            <p className="text-xs text-muted-foreground mt-5">
              {marketConfig.legalEntityNote}
            </p>
          </div>
        )}

        {/* BOTTOM CTA */}
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
            Begin with a complimentary Revenue Snapshot™.
            Blue Oak will review visible revenue opportunities and
            identify whether deeper investigation may be worthwhile —
            at no cost and no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="px-10 font-semibold shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow"
            >
              <Link href={snapshotPath}>
                Request a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-10 font-semibold bg-transparent border-border hover:bg-white/5"
            >
              <Link href={assessmentPath}>
                Learn About the Assessment™
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
    }
