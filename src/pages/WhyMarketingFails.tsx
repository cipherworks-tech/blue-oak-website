import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingDown, TrendingUp, XCircle, CheckCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function WhyMarketingFails() {
  return (
    <main className="pt-28 pb-20">

      <section className="px-4 pb-16 border-b border-border/30">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Revenue Strategy</motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Why Marketing Fails Without Revenue Infrastructure
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              More advertising does not fix a leaking business. Before you spend another dollar on marketing, read this.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-7">
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">The bucket with holes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Imagine a bucket with holes in the bottom. You keep pouring water in — more water, faster — but the bucket never fills.
                The water is your marketing budget. The holes are the leaks in your revenue process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most businesses respond to slow revenue growth by adding more marketing. More ads. More social media. More promotions.
                But if the fundamental problem is that leads are not being followed up, calls are being missed, and inquiries are going unanswered —
                more marketing just means more wasted leads, not more revenue.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-7">
              <p className="font-bold text-base mb-2">The uncomfortable truth:</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A business that misses a meaningful share of its calls and fails to follow up on the leads it does receive will get a better return from fixing those infrastructure problems than from spending more on marketing.
                than from doubling its marketing budget. The leads are already coming. The money is already being spent. It is just not being captured.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/10 border-b border-border/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Marketing vs Infrastructure — what each one actually does</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/40 bg-card/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm uppercase tracking-widest">What Marketing Does</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Generates awareness and interest",
                    "Brings new potential customers to your door",
                    "Creates demand for your product or service",
                    "Increases the volume of inquiries and calls",
                    "Works best when the business is ready to receive leads",
                  ].map((t, i) => <div key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>{t}</span></div>)}
                </div>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm uppercase tracking-widest">What Infrastructure Does</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Captures the leads marketing generates",
                    "Helps ensure inquiries receive a faster, more consistent response",
                    "Converts interest into booked appointments and sales",
                    "Recovers opportunities that fell through the cracks",
                    "Makes marketing spend more effective, not just larger",
                  ].map((t, i) => <div key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>{t}</span></div>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-3">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">Illustrative scenarios from businesses in Jamaica and Detroit</h2>
              <p className="text-xs text-muted-foreground/60">These are hypothetical examples demonstrating common patterns — not specific Blue Oak client results.</p>
            </motion.div>
            <div className="space-y-5 mt-8">
              {[
                {
                  setup: "An HVAC company in Mandeville, Jamaica increased its Google ad budget. Service inquiries went up. Revenue did not.",
                  problem: "The company was missing calls while technicians were on jobs and after 5 PM. New inquiries from the ads were hitting the same voicemail that existing customers never got responses from.",
                  fix: "Missed-call text-back and after-hours response system. Inquiries that previously received no follow-up began receiving automated responses and intake prompts.",
                },
                {
                  setup: "A plumbing contractor in Detroit, Michigan ran a seasonal promotion. Calls increased significantly. Revenue barely moved.",
                  problem: "The owner was handling calls himself while on job sites. Weekend calls — the highest-volume period — were almost entirely missed.",
                  fix: "Automated missed-call response and lead capture system for after-hours and weekends. Leads that previously went unanswered began receiving immediate automated follow-up.",
                },
                {
                  setup: "A law firm in Kingston, Jamaica began posting regularly on social media. Website traffic increased meaningfully.",
                  problem: "Contact form submissions were going to a general email inbox checked once per day. By the time someone responded, many potential clients had retained other attorneys.",
                  fix: "Automated intake response system — contact forms trigger a near-immediate response and intake scheduling. Inquiry response time dropped from hours to minutes.",
                },
              ].map((ex, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border/40 bg-card/20 p-7 space-y-4 text-sm">
                  <p className="font-semibold leading-relaxed">{ex.setup}</p>
                  <div className="flex gap-3">
                    <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{ex.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{ex.fix}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/10 border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">Fix the foundation first</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This is not an argument against marketing. Marketing is essential for growth. But marketing works best when the infrastructure beneath it is solid.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Before increasing your ad budget, answer these questions:
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-3">
              {[
                "What percentage of your incoming calls are you currently answering?",
                "How quickly does your business respond to website or WhatsApp inquiries?",
                "What happens to someone who calls after 5 PM or on a weekend?",
                "How many leads from the last 90 days did not convert — and did anyone follow up with them?",
                "How many past customers have not returned — and has anyone reached out to them?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/20 p-4 text-sm">
                  <span className="text-primary font-bold flex-shrink-0">{i+1}.</span>
                  <p className="text-muted-foreground leading-relaxed">{q}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-sm text-muted-foreground leading-relaxed">
              If you do not have confident answers to all five — or if the answers reveal gaps — infrastructure work will give you a better return than more marketing spend right now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight mb-5">
              Ready to fix the foundation?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Request a complimentary Revenue Snapshot™ to identify where revenue may be slipping through your business and whether deeper investigation would be worthwhile.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/revenue-snapshot">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors">
                  Request Revenue Snapshot™ <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/what-is-revenue-infrastructure">
                <button className="text-sm font-semibold text-primary hover:underline underline-offset-4">
                  What is Revenue Infrastructure? →
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
