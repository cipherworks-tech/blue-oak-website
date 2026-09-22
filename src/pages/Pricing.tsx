import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { US, JM, BRAND, MARKETS } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Pricing() {
  const { market, setMarket } = useMarketPreference();
  const [, navigate] = useLocation();

  // If the visitor has already told us their market, take them straight
  // to the right pricing page instead of asking again. This hub still
  // renders normally for anyone arriving without a stored preference.
  useEffect(() => {
    if (market !== null) navigate(MARKETS[market as keyof typeof MARKETS].pricingPath, { replace: true });
  }, [market, navigate]);

  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-5xl py-16">

        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-14">
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Pricing</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Revenue Infrastructure Pricing
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto mb-4">
            Blue Oak deploys revenue infrastructure tailored to your market. Diagnosis comes before implementation — we do not recommend a package without first understanding your business.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm max-w-xl mx-auto">
            Select your market to see local pricing and delivery details.
          </motion.p>
        </motion.div>

        {/* Diagnosis-first callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 mb-10 text-center"
        >
          <p className="text-sm font-semibold mb-2">Starting with the Revenue Snapshot™ or Assessment is always the right first step</p>
          <p className="text-sm text-muted-foreground mb-4">The right implementation package is determined by your business needs — not a generic recommendation.</p>
          <Button asChild size="sm" className="font-semibold">
            <Link href={BRAND.snapshotPath}>Request a Complimentary Revenue Snapshot™ <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
          </Button>
        </motion.div>

        {/* Market selector */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Jamaica */}
          <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-2xl border border-border/60 bg-card/30 hover:border-primary/30 transition-colors p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-0.5">Local Market</p>
                <h2 className="text-2xl font-extrabold tracking-tight">Jamaica</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pricing in JMD, built for Jamaican businesses. WhatsApp-first delivery, missed call automation, intake systems, and client reactivation.
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                `Prices in Jamaican dollars (JMD)`,
                `WhatsApp Business integration`,
                `Service businesses, contractors, local operators`,
                `Starter plans from ${JM.pricing.starter}${JM.billingPeriod}`,
                `Built for Jamaica's business context`,
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="outline"
              className="w-full font-semibold border-border bg-transparent hover:bg-white/5 hover:border-primary/40 transition-colors">
              <Link href={JM.pricingPath} onClick={() => setMarket("JM")}>
                View Jamaica Pricing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* United States */}
          <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-primary/35 bg-primary/[0.04] hover:border-primary/50 transition-colors p-10 flex flex-col shadow-[0_0_40px_rgba(212,175,55,0.07)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-black px-3 py-1 rounded-full tracking-widest uppercase">
                U.S. Market
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-0.5">U.S. Market</p>
                <h2 className="text-2xl font-extrabold tracking-tight">United States</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              USD pricing for U.S. home services, contractors, professional services, and local operators. Full revenue infrastructure with enterprise-grade deployment options.
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                `Prices in USD`,
                `Home services, contractors, law firms, real estate, professional services`,
                `CRM and workflow integration`,
                `Starter plans from ${US.pricing.starter}${US.billingPeriod}`,
                `Detroit Metro and nationwide`,
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg"
              className="w-full font-semibold shadow-[0_0_16px_rgba(212,175,55,0.2)] hover:shadow-[0_0_28px_rgba(212,175,55,0.4)] transition-shadow">
              <Link href={US.pricingPath} onClick={() => setMarket("US")}>View U.S. Pricing <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/40 bg-secondary/20 p-8 text-center"
        >
          <p className="font-semibold mb-2">Not sure which plan fits your business?</p>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Book a Revenue Snapshot™. We will identify your specific gaps and recommend the right approach based on what your business actually needs.
          </p>
          <Button asChild variant="outline" className="font-semibold border-border bg-transparent hover:bg-white/5">
            <Link href={BRAND.snapshotPath}>Request a Complimentary Revenue Snapshot™ <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
