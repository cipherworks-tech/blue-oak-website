import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Globe,
  Info,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { US } from "@/lib/marketConfig";
import { marketPath } from "@/lib/marketRoutes";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const SNAPSHOT_PATH = marketPath("US", "snapshot");
const ASSESSMENT_PATH = marketPath("US", "assessment");
const CONTACT_PATH = marketPath("US", "contact");

const PACKAGES = [
  {
    name: "Community Impact",
    prices: [US.pricing.communityImpact],
    note:
      "Approval required. Intended for qualifying solo operators and community organisations.",
    featured: false,
    restricted: true,
    features: [
      "Essential inquiry capture",
      "Missed-call response support",
      "Basic SMS and email intake",
      "Social inquiry capture",
      "Appointment reminders",
      "Monthly performance summary",
      "Email support",
    ],
    cta: "Apply for Consideration",
  },
  {
    name: "Foundation System™",
    prices: US.pricing.foundation,
    note:
      "Build the essential infrastructure for visibility, inquiry capture, response, and follow-up.",
    featured: false,
    restricted: false,
    features: [
      "Visibility and inquiry pathways",
      "Social Revenue Capture",
      "Lead capture and response",
      "Appointment booking and confirmation",
      "Lead routing and qualification",
      "Pipeline visibility",
      "Follow-up infrastructure",
    ],
    cta: "Request Revenue Snapshot",
  },
  {
    name: "Recovery System™",
    prices: US.pricing.recovery,
    note:
      "Recover opportunities lost through missed inquiries, delayed response, inconsistent follow-up, and inactive customers.",
    featured: true,
    restricted: false,
    features: [
      "Foundation capabilities as scoped",
      "Social inquiry capture and recovery",
      "Missed-call revenue recovery",
      "Multi-channel follow-up",
      "Lead qualification and routing",
      "No-show and cancellation recovery",
      "Customer reactivation",
      "Win-back campaign automation",
      "Revenue recovery measurement",
    ],
    cta: "Request Revenue Snapshot",
  },
  {
    name: "Engine System™",
    prices: US.pricing.engine,
    note:
      "Connected Revenue Infrastructure for businesses ready to coordinate demand, leads, opportunities, automation, and measurement.",
    featured: false,
    restricted: false,
    features: [
      "Recovery capabilities as scoped",
      "Demand Intelligence",
      "Lead Intelligence",
      "Opportunity Intelligence",
      "Integrated Social Revenue Capture",
      "CRM and workflow integration",
      "AI-assisted operations with human oversight",
      "Revenue reporting and intelligence",
      "Continuous optimization",
    ],
    cta: "Request Revenue Snapshot",
  },
];

const FAQS = [
  {
    q: "Does implementation begin without a diagnosis?",
    a:
      "No. Blue Oak begins by understanding the business through a Revenue Snapshot™ and, where appropriate, a Revenue Infrastructure Assessment™. Recommendations are based on identified needs rather than a generic package selection.",
  },
  {
    q: "What is the Revenue Infrastructure Assessment™?",
    a:
      "A comprehensive paid diagnostic examining visibility, lead capture, response, qualification, conversion, follow-up, retention, measurement, and other revenue operations. Assessment pricing is provided during consultation.",
  },
  {
    q: "Are third-party costs included?",
    a:
      "Not necessarily. Telecommunications, SMS, AI and voice usage, WhatsApp services, email delivery, advertising, CRM subscriptions, software licences, and other third-party costs may be additional. Applicable expenses are disclosed before implementation.",
  },
  {
    q: "Are the three prices different service levels?",
    a:
      "Yes. Each system has Starter, Growth, and Premium pricing levels. The appropriate scope and level are determined through diagnosis and confirmed in the service agreement.",
  },
  {
    q: "Is Social Revenue Capture included?",
    a:
      "Yes. Social inquiry capture is part of the Foundation, Recovery, and Engine Systems. The depth of automation and integration depends on the selected scope.",
  },
  {
    q: "What are the contract terms?",
    a:
      "Published package prices are monthly. Contract duration, implementation arrangements, notice periods, cancellation provisions, and applicable usage costs are confirmed before engagement.",
  },
  {
    q: "What industries does Blue Oak serve?",
    a:
      "Blue Oak serves home services, contractors, professional services, real estate, hospitality, automotive businesses, and other organisations with revenue infrastructure needs. Regulated or sensitive-data workflows require appropriate compliance controls before deployment.",
  },
  {
    q: "Can Blue Oak support multiple locations?",
    a:
      "Yes. Multi-location and more complex operations can request a custom infrastructure proposal following an assessment of their requirements.",
  },
];

export default function PricingUS() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground mb-6"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />

            <span className="text-xs font-semibold tracking-widest uppercase">
              United States · USD Pricing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight"
          >
            Revenue Infrastructure for U.S. Businesses
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Build the systems that help your business
            capture opportunities, respond faster,
            recover missed revenue, and improve
            performance across the customer journey.
          </motion.p>

          <p className="text-sm text-primary font-semibold">
            Blue Oak Automation LLC · Michigan, United States
          </p>
        </motion.div>

        {/* DIAGNOSIS FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-7 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold mb-2">
                Diagnosis Before Prescription
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Blue Oak does not recommend implementation
                packages without understanding the business.
                Start with a complimentary Revenue Snapshot™
                or discuss a comprehensive paid Revenue
                Infrastructure Assessment™.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="sm"
                  className="font-semibold"
                >
                  <Link href={SNAPSHOT_PATH}>
                    Request Revenue Snapshot™
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="font-semibold bg-transparent border-border hover:bg-white/5"
                >
                  <Link href={ASSESSMENT_PATH}>
                    Learn About the Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              className={`rounded-2xl flex flex-col ${
                pkg.featured
                  ? "border border-primary/30 bg-primary/[0.04] shadow-[0_0_32px_rgba(212,175,55,0.1)]"
                  : "border border-border/50 bg-card/20"
              }`}
            >
              {pkg.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase text-center py-2 rounded-t-2xl">
                  Featured System
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                  {pkg.name}
                </p>

                <div className="space-y-1.5 mb-1">
                  {pkg.prices.map((price, tierIndex) => (
                    <div
                      key={tierIndex}
                      className="flex items-baseline gap-2"
                    >
                      <span className="text-2xl font-extrabold">
                        {price}
                      </span>

                      {pkg.prices.length > 1 && (
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {tierIndex === 0
                            ? "Starter"
                            : tierIndex === 1
                            ? "Growth"
                            : "Premium"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-1">
                  {US.billingPeriod}
                </p>

                <p className="text-xs text-muted-foreground/60 mb-5 italic">
                  {pkg.note}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />

                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  variant={
                    pkg.featured ? "default" : "outline"
                  }
                  className={`w-full font-semibold ${
                    !pkg.featured
                      ? "bg-transparent border-border hover:bg-white/5"
                      : ""
                  }`}
                >
                  <Link href={SNAPSHOT_PATH}>
                    {pkg.cta}
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THIRD-PARTY COSTS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6 mb-10"
        >
          <h2 className="font-bold mb-3">
            Pricing and Third-Party Costs
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            All prices are in United States dollars (USD)
            and represent published monthly service-package
            pricing. Third-party expenses may be additional,
            including telecommunications, SMS, AI and voice
            usage, WhatsApp services, email delivery,
            advertising, CRM subscriptions, and software
            licensing. Any implementation charges and
            usage-based costs will be confirmed before
            an engagement begins.
          </p>
        </motion.div>

        {/* CUSTOM PROPOSAL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/40 bg-card/20 p-6 mb-14 flex flex-col md:flex-row md:items-center gap-4 justify-between"
        >
          <div>
            <p className="font-semibold mb-1">
              Need a Custom or Enterprise Build?
            </p>

            <p className="text-muted-foreground text-sm">
              Multi-location businesses and complex
              operations can request a custom
              infrastructure proposal.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="font-semibold flex-shrink-0 bg-transparent border-border hover:bg-white/5"
          >
            <Link href={CONTACT_PATH}>
              Request Custom Proposal
            </Link>
          </Button>
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-7"
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              Common Questions
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight">
              United States Pricing FAQ
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            {FAQS.map((faq) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                className="rounded-xl border border-border/40 bg-card/20 p-6"
              >
                <h3 className="font-bold mb-2 text-sm">
                  {faq.q}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DIRECT CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/40 bg-card/20 p-6 mb-10 text-center"
        >
          <p className="font-semibold mb-3">
            Questions About United States Pricing?
          </p>

          <a
            href={US.phoneHref}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            {US.phone}
          </a>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
            Start with a Revenue Snapshot™
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            The right system starts with understanding
            your business. Request a complimentary
            Revenue Snapshot™ and discover where
            revenue opportunities may be slipping away.
          </p>

          <Button
            size="lg"
            asChild
            className="font-semibold px-10 shadow-[0_0_24px_rgba(212,175,55,0.3)]"
          >
            <Link href={SNAPSHOT_PATH}>
              Request Revenue Snapshot™
              <ArrowRight class
