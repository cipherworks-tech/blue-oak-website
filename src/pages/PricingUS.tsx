import { motion } from "framer-motion";
import { Check, ArrowRight, Globe, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { US, BRAND } from "@/lib/marketConfig";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const PACKAGES = [
  {
    name: "Community Impact",
    price: US.pricing.communityImpact,
    note: "Approval required · Solo operators & community organisations",
    featured: false,
    restricted: true,
    features: [
      "Missed call text-back (24/7)",
      "Basic SMS/email intake flow",
      "Appointment reminder sequence",
      "Monthly performance summary",
      "Email support",
    ],
    cta: "Apply",
  },
  {
    name: "Starter",
    price: US.pricing.starter,
    note: "Core revenue infrastructure",
    featured: false,
    restricted: false,
    features: [
      "Missed call text-back automation",
      "SMS + Email intake flow",
      "Appointment booking & confirmation",
      "Lead capture to CRM",
      "Appointment reminder sequence",
      "Pipeline reporting dashboard",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: US.pricing.growth,
    note: "For businesses scaling infrastructure",
    featured: true,
    restricted: false,
    features: [
      "Everything in Starter",
      "Multi-channel follow-up (3-touch)",
      "Lead qualification & routing",
      "CRM integration",
      "Bi-weekly performance reviews",
      "Priority support",
      "1 custom automation",
      "Lapsed customer reactivation",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: US.pricing.premium,
    note: "Full revenue infrastructure deployment",
    featured: false,
    restricted: false,
    features: [
      "Everything in Growth",
      "Full intake-to-conversion flow",
      "No-show & cancellation recovery",
      "Customer reactivation (90-day)",
      "Real-time pipeline dashboard",
      "Monthly strategy session",
      "Up to 3 custom automations",
      "Win-back campaign automation",
      "Revenue reporting suite",
    ],
    cta: "Get Started",
  },
];

const FAQS = [
  { q: "Does implementation begin without a diagnosis?", a: "No. Blue Oak recommends a Revenue Snapshot™ or Revenue Infrastructure Assessment™ before implementation. The right package is determined by what your business actually needs — not a generic recommendation." },
  { q: "What is the Revenue Infrastructure Assessment™?", a: "A comprehensive paid diagnostic that examines your complete revenue cycle across 8+ dimensions — visibility, lead capture, response, qualification, conversion, follow-up, retention, measurement, and more. Assessment pricing is provided during consultation." },
  { q: "Are there any additional costs?", a: "Any applicable third-party tool costs and any onboarding arrangements are set out during the Revenue Infrastructure Assessment™ and confirmed in your service agreement before work begins." },
  { q: "What does third-party tool cost mean?", a: "Some automations and systems use third-party platforms such as communication tools or CRM software. Where relevant, these costs are identified and disclosed before any deployment begins." },
  { q: "What are the contract terms?", a: "Plans are billed monthly. The specific term, notice period and cancellation arrangements are confirmed in your service agreement before any engagement begins." },
  { q: "What industries do you serve in the U.S.?", a: "Local and regional service businesses — HVAC and home services, plumbing and electrical, contractors, law firms, real estate, restaurants and hospitality, auto sales and service, and professional services. Blue Oak solves Revenue Infrastructure problems, so the underlying systems apply across many business types." },
];

export default function PricingUS() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-14">
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground mb-6">
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">United States · USD Pricing</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Revenue Infrastructure for U.S. Businesses
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Built for home services, contractors, law firms, real estate, auto service, and professional services that need stronger lead capture, faster response, better conversion, and full pipeline visibility.
          </motion.p>
        </motion.div>

        {/* Assessment gateway */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-7 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-2">Diagnosis Comes Before Implementation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Blue Oak does not recommend an implementation package without first understanding the business. Start with a complimentary Revenue Snapshot™ or discuss a Revenue Infrastructure Assessment™ — the paid comprehensive diagnostic. The right package is determined by the Assessment findings, not by a generic recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="sm" className="font-semibold">
                  <Link href={BRAND.snapshotPath}>Request Revenue Snapshot™ <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="font-semibold bg-transparent border-border hover:bg-white/5">
                  <Link href={BRAND.assessmentPath}>Learn About the Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl flex flex-col ${pkg.featured
                ? "border border-primary/30 bg-primary/[0.04] shadow-[0_0_32px_rgba(212,175,55,0.1)]"
                : "border border-border/50 bg-card/20"}`}
            >
              {pkg.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase text-center py-2 rounded-t-2xl">
                  ★ Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">{pkg.name}</p>
                <p className="text-3xl font-extrabold mb-1">{pkg.price}</p>
                <p className="text-xs text-muted-foreground mb-1">{US.billingPeriod}</p>
                <p className="text-xs text-muted-foreground/60 mb-5 italic">{pkg.note}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" variant={pkg.featured ? "default" : "outline"}
                  className={`w-full font-semibold ${!pkg.featured ? "bg-transparent border-border hover:bg-white/5" : ""}`}>
                  <Link href={BRAND.snapshotPath}>{pkg.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border/40 bg-card/20 p-6 mb-14 flex flex-col md:flex-row md:items-center gap-4 justify-between"
        >
          <div>
            <p className="font-semibold mb-1">Need a custom or enterprise build?</p>
            <p className="text-muted-foreground text-sm">Multi-location businesses and complex operations can request a custom infrastructure proposal.</p>
          </div>
          <Button asChild variant="outline" className="font-semibold flex-shrink-0 bg-transparent border-border hover:bg-white/5">
            <Link href="/contact">Request Custom Proposal</Link>
          </Button>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-7">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="text-2xl font-extrabold tracking-tight">U.S. Pricing FAQ</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}
                className="rounded-xl border border-border/40 bg-card/20 p-6">
                <h3 className="font-bold mb-2 text-sm">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Start with a Revenue Snapshot™</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            The right package starts with understanding your business. Request a complimentary Revenue Snapshot™ and see where the gaps are.
          </p>
          <Button size="lg" asChild className="font-semibold px-10 shadow-[0_0_24px_rgba(212,175,55,0.3)]">
            <Link href={BRAND.snapshotPath}>Request Revenue Snapshot™ <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
