import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  MapPin,
  Info,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { JM } from "@/lib/marketConfig";
import { marketPath } from "@/lib/marketRoutes";

const SNAPSHOT = marketPath("JM", "snapshot");
const ASSESSMENT = marketPath("JM", "assessment");
const CONTACT = marketPath("JM", "contact");

const PACKAGES = [
  {
    name: "Community Impact",
    prices: ["J$45,000"],
    note: "For qualifying small businesses, solo operators, and community organisations. Approval required.",
    featured: false,
    features: [
      "Essential inquiry capture",
      "Basic WhatsApp intake",
      "Social Revenue Capture",
      "Missed inquiry response",
      "Appointment reminders",
      "Monthly performance summary",
      "Email support",
    ],
    cta: "Apply for Consideration",
  },
  {
    name: "Foundation System™",
    prices: ["J$65,000", "J$110,000", "J$180,000"],
    note: "Establish the essential systems for visibility, inquiry capture, response, and follow-up.",
    featured: false,
    features: [
      "Visibility and inquiry pathways",
      "Social Revenue Capture",
      "WhatsApp inquiry capture",
      "Lead response and qualification",
      "Appointment booking and confirmation",
      "Lead routing",
      "Follow-up infrastructure",
      "Basic pipeline visibility",
    ],
    cta: "Request Revenue Snapshot",
  },
  {
    name: "Recovery System™",
    prices: ["J$95,000", "J$190,000", "J$315,000"],
    note: "Recover opportunities lost through missed inquiries, delayed responses, weak follow-up, and inactive customers.",
    featured: true,
    features: [
      "Foundation capabilities as scoped",
      "Social inquiry capture and recovery",
      "Missed-call revenue recovery",
      "WhatsApp and multi-channel follow-up",
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
    prices: ["J$175,000", "J$315,000", "J$495,000"],
    note: "Connected Revenue Infrastructure for businesses ready to coordinate demand, leads, opportunities, automation, and measurement.",
    featured: false,
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
    q: "Are all prices in Jamaican dollars?",
    a: "Yes. All prices on this page are in Jamaican dollars (JMD) and represent monthly service-package pricing.",
  },
  {
    q: "Does implementation begin without a diagnosis?",
    a: "No. Blue Oak begins with a Revenue Snapshot™ and, where appropriate, a comprehensive paid Revenue Infrastructure Assessment™. Recommendations are based on identified business needs.",
  },
  {
    q: "Is WhatsApp included?",
    a: "WhatsApp inquiry capture and follow-up can be incorporated where appropriate. Availability, integration requirements, permissions, and third-party messaging charges depend on the approved implementation.",
  },
  {
    q: "Is Social Revenue Capture included?",
    a: "Yes. Social inquiry capture is included across Foundation, Recovery, and Engine Systems. The Community Impact offering also includes essential social inquiry capture. Scope varies by package.",
  },
  {
    q: "Are there additional costs?",
    a: "Third-party telecommunications, SMS, AI voice, WhatsApp services, email delivery, advertising, software subscriptions, and licensing costs may be additional. Applicable expenses are disclosed before implementation.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Businesses can expand their Revenue Infrastructure as their requirements change. Upgrade scope, pricing, and timing are confirmed in the service agreement.",
  },
  {
    q: "Who qualifies for Community Impact?",
    a: "Community Impact is a separate, approval-based offering intended for qualifying smaller businesses, solo operators, and community organisations. Eligibility and service scope are confirmed before acceptance.",
  },
  {
    q: "Is Blue Oak registered in Jamaica?",
    a: "Blue Oak Automation LLC is a Michigan, United States company. Jamaican company registration is pending. Any local engagement will be subject to applicable legal and contractual requirements.",
  },
];

export default function PricingJamaica() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              Jamaica · JMD Pricing
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Revenue Infrastructure for Jamaican Businesses
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-5">
            Build stronger systems for business visibility,
            social inquiry capture, WhatsApp communication,
            lead response, revenue recovery, and customer retention.
          </p>

          <p className="text-sm text-primary font-semibold">
            Designed for the Jamaican market · All prices in JMD
          </p>
        </motion.div>

        {/* ASSESSMENT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-7 mb-10"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0" />

            <div>
              <h2 className="font-bold mb-2">
                Diagnosis Before Prescription
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Blue Oak recommends systems based on your
                business's actual needs. Begin with a complimentary
                Revenue Snapshot™ or discuss a comprehensive
                paid Revenue Infrastructure Assessment™.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="sm">
                  <Link href={SNAPSHOT}>
                    Request Revenue Snapshot™
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-transparent"
                >
                  <Link href={ASSESSMENT}>
                    Learn About the Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`rounded-2xl flex flex-col ${
                pkg.featured
                  ? "border border-primary/30 bg-primary/[0.04]"
                  : "border border-border/50 bg-card/20"
              }`}
            >
              {pkg.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-bold text-center py-2 rounded-t-2xl">
                  Featured System
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-extrabold mb-4">
                  {pkg.name}
                </h3>

                <div className="space-y-2 mb-2">
                  {pkg.prices.map((price, tier) => (
                    <div
                      key={price}
                      className="flex items-baseline gap-2"
                    >
                      <span className="text-2xl font-extrabold">
                        {price}
                      </span>

                      {pkg.prices.length > 1 && (
                        <span className="text-xs text-muted-foreground">
                          {["Starter", "Growth", "Premium"][tier]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-3">
                  {JM.billingPeriod}
                </p>

                <p className="text-xs text-muted-foreground mb-5">
                  {pkg.note}
                </p>

                <ul className="space-y-3 mb-7 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  variant={pkg.featured ? "default" : "outline"}
                  className="w-full font-semibold"
                >
                  <Link href={SNAPSHOT}>
                    {pkg.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COST DISCLOSURE */}
        <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6 mb-10">
          <h2 className="font-bold mb-3">
            Pricing and Third-Party Costs
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            All published prices are monthly service-package
            prices in Jamaican dollars. Telecommunications,
            SMS, WhatsApp services, AI and voice usage,
            email delivery, advertising, CRM subscriptions,
            software licensing, and other third-party costs
            may be additional. Any applicable setup fees,
            usage charges, and contractual terms will be
            confirmed before an engagement begins.
          </p>
        </div>

        {/* CUSTOM BUILD */}
        <div className="rounded-xl border border-border/40 bg-card/20 p-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-bold mb-2">
              Need a Custom Infrastructure Build?
            </h2>

            <p className="text-sm text-muted-foreground">
              Multi-location businesses, hospitality operators,
              and larger enterprises can request a custom proposal.
            </p>
          </div>

          <Button asChild variant="outline" className="bg-transparent">
            <Link href={CONTACT}>
              Request Custom Proposal
            </Link>
          </Button>
        </div>

        {/* FAQ */}
        <section className="mb-14">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Common Questions
          </p>

          <h2 className="text-2xl font-extrabold mb-7">
            Jamaica Pricing FAQ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border/40 bg-card/20 p-6"
              >
                <h3 className="font-bold text-sm mb-2">
                  {faq.q}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <div className="rounded-xl border border-border/40 bg-card/20 p-6 mb-10 text-center">
          <h2 className="font-bold mb-4">
            Questions About Jamaica Pricing?
          </h2>

          {JM.whatsappHref && (
            <a
              href={JM.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Blue Oak on WhatsApp
            </a>
          )}
        </div>

        {/* FINAL CTA */}
        <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Start with a Revenue Snapshot™
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Discover where your business may be losing
            opportunities and which Revenue Infrastructure
            systems could make the greatest difference.
          </p>

          <Button asChild size="lg" className="font-semibold px-10">
            <Link href={SNAPSHOT}>
              Request Revenue Snapshot™
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Blue Oak Automation LLC is registered in Michigan,
          United States. Jamaican company registration is pending.
        </p>

      </div>
    </div>
  );
          }
