import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Globe,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { US, JM, BRAND } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";
import { marketFromPath, marketPath } from "@/lib/marketRoutes";

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
    transition: { staggerChildren: 0.1 },
  },
};

export default function Pricing() {
  const [location] = useLocation();

  const activeMarket = marketFromPath(location);

  const { setMarket } = useMarketPreference();

  const usPricingPath = marketPath("US", "pricing");
  const jmPricingPath = marketPath("JM", "pricing");

  const snapshotPath = activeMarket
    ? marketPath(activeMarket, "snapshot")
    : BRAND.snapshotPath;

  const marketCards = [
    {
      key: "US" as const,
      label: "United States",
      eyebrow: "U.S. Market",
      icon: <Globe className="w-6 h-6 text-primary" />,
      description:
        "Revenue Infrastructure systems for U.S. home services, contractors, professional services, and local businesses.",
      features: [
        "Pricing in United States dollars (USD)",
        "Social revenue capture included",
        "CRM and workflow integration",
        "Missed inquiry and revenue recovery",
        `Foundation System™ from ${US.pricing.foundation[0]}${US.billingPeriod}`,
        "Detroit Metro and nationwide service",
      ],
      path: usPricingPath,
      button: "View Pricing",
    },
    {
      key: "JM" as const,
      label: "Jamaica",
      eyebrow: "Jamaica Market",
      icon: <MapPin className="w-6 h-6 text-primary" />,
      description:
        "Revenue Infrastructure systems for Jamaican service businesses, contractors, hospitality operators, and growing enterprises.",
      features: [
        "Pricing in Jamaican dollars (JMD)",
        "Social revenue capture included",
        "WhatsApp inquiry capture and follow-up",
        "Missed inquiry and customer recovery",
        `Foundation System™ from ${JM.pricing.foundation[0]}${JM.billingPeriod}`,
        `Community Impact offering from ${JM.pricing.communityImpact}/month`,
      ],
      path: jmPricingPath,
      button: "View Pricing",
    },
  ];

  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-5xl py-16">

        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Revenue Infrastructure™ Pricing
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Revenue Infrastructure Pricing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-xl max-w-2xl mx-auto mb-4"
          >
            Blue Oak deploys Revenue Infrastructure systems
            tailored to your market and business needs.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-sm max-w-xl mx-auto"
          >
            Select your market to explore local pricing,
            service systems, and delivery options.
          </motion.p>
        </motion.div>

        {/* DIAGNOSIS FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 mb-10 text-center"
        >
          <p className="text-sm font-semibold mb-2">
            Diagnosis Before Prescription
          </p>

          <p className="text-sm text-muted-foreground mb-4">
            Every engagement begins with understanding your
            business. We recommend systems based on identified
            revenue opportunities, operational readiness,
            and business priorities.
          </p>

          <Button
            asChild
            size="sm"
            className="font-semibold"
          >
            <Link href={snapshotPath}>
              Request a Complimentary Revenue Snapshot™
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </Button>
        </motion.div>

        {/* MARKET SELECTOR */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {marketCards.map((market, index) => (
            <motion.div
              key={market.key}
              variants={fadeUp}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className={`group rounded-2xl border p-8 md:p-10 flex flex-col transition-colors ${
                index === 0
                  ? "border-primary/35 bg-primary/[0.04] hover:border-primary/50 shadow-[0_0_40px_rgba(212,175,55,0.07)]"
                  : "border-border/60 bg-card/30 hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {market.icon}
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-0.5">
                    {market.eyebrow}
                  </p>

                  <h2 className="text-2xl font-extrabold tracking-tight">
                    {market.label}
                  </h2>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {market.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {market.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={index === 0 ? "default" : "outline"}
                className={`w-full font-semibold ${
                  index === 0
                    ? "shadow-[0_0_16px_rgba(212,175,55,0.2)] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]"
                    : "border-border bg-transparent hover:bg-white/5"
                }`}
              >
                <Link
                  href={market.path}
                  onClick={() => setMarket(market.key)}
                >
                  {market.button}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* THIRD-PARTY COST DISCLOSURE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/40 bg-card/20 p-7 mb-10"
        >
          <p className="font-semibold mb-3">
            Important Pricing Information
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Published prices describe Blue Oak service
            packages. Third-party expenses may be additional,
            including telecommunications, SMS, AI and voice
            usage, WhatsApp services, email delivery,
            advertising, software subscriptions, and
            applicable licensing fees. Any applicable
            implementation fees and usage costs should be
            confirmed before an engagement begins.
          </p>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/40 bg-secondary/20 p-8 text-center"
        >
          <p className="font-semibold mb-2">
            Not Sure Which System Fits Your Business?
          </p>

          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Start with a complimentary Revenue Snapshot™.
            Blue Oak will identify visible revenue gaps
            and determine whether a deeper assessment
            would be valuable.
          </p>

          <Button
            asChild
            variant="outline"
            className="font-semibold border-border bg-transparent hover:bg-white/5"
          >
            <Link href={snapshotPath}>
              Request a Complimentary Revenue Snapshot™
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
        }
