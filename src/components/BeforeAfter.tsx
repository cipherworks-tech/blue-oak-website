import { motion } from "framer-motion";
import { X, Check, ArrowRight, Clock, PhoneOff, TrendingDown, Zap, TrendingUp, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const BEFORE = [
  {
    icon: <PhoneOff className="w-4 h-4 text-red-400" />,
    text: "Call comes in during lunch",
    sub: "Nobody answers. Caller moves on. No record it ever happened.",
  },
  {
    icon: <Clock className="w-4 h-4 text-orange-400" />,
    text: "Web inquiry submitted",
    sub: "Staff notice it hours later. Response sent — no reply.",
  },
  {
    icon: <TrendingDown className="w-4 h-4 text-red-400" />,
    text: "Quote sent, customer goes quiet",
    sub: "One follow-up call. No answer. Marked as lost.",
  },
  {
    icon: <X className="w-4 h-4 text-red-500" />,
    text: "Appointment no-show",
    sub: "Slot sits empty. No reminder was sent. No re-booking attempt.",
  },
  {
    icon: <X className="w-4 h-4 text-red-500" />,
    text: "Past customer drifts away",
    sub: "18 months since their last visit. Nobody has reached out.",
  },
];

const AFTER = [
  {
    icon: <Zap className="w-4 h-4 text-primary" />,
    text: "Call comes in during lunch",
    sub: "Automated text-back sent promptly. Conversation started before the caller moves on.",
  },
  {
    icon: <MessageSquare className="w-4 h-4 text-primary" />,
    text: "Web inquiry submitted",
    sub: "Automated response can be triggered promptly. Follow-up sequence begins without waiting on staff availability.",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    text: "Quote sent, customer goes quiet",
    sub: "Structured follow-up sequence deploys, giving the prospect multiple opportunities to respond rather than relying on a single attempt.",
  },
  {
    icon: <Check className="w-4 h-4 text-emerald-400" />,
    text: "Appointment reminder sent",
    sub: "48hr, 24hr, and 2hr reminders. No-show rate drops significantly.",
  },
  {
    icon: <Check className="w-4 h-4 text-emerald-400" />,
    text: "Past customer reactivated",
    sub: "Automated reactivation sequence sent at 12 months. Appointment rebooked.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-28 px-4 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-red-500/[0.015] to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              The Difference
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              The Same Business —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Without</span>
              {" "}vs.{" "}
              <span className="text-primary">With</span>
              {" "}Revenue Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Same phone. Same leads. Completely different outcomes.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* BEFORE */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-red-500/15 bg-red-500/[0.025] overflow-hidden"
              data-testid="before-after-before"
            >
              <div className="flex items-center gap-3 px-7 py-5 border-b border-red-500/10 bg-red-500/[0.04]">
                <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-red-400 uppercase tracking-wider">Without Blue Oak</p>
                  <p className="text-xs text-muted-foreground">Reactive. Manual. Leaking.</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {BEFORE.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl border border-red-500/[0.1] bg-white/[0.015] p-4"
                    data-testid={`before-item-${i}`}
                  >
                    <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-full border border-red-500/25 bg-red-500/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {i < BEFORE.length - 1 && (
                        <div className="w-px flex-1 min-h-[18px] bg-red-500/10 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <p className="text-sm font-semibold text-foreground/80">{item.text}</p>
                      <p className="text-xs text-red-400/80 mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-5 py-3.5 mt-2">
                  <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-sm font-bold text-red-400">Result: Revenue leaking every day</p>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-primary/20 bg-primary/[0.025] overflow-hidden"
              data-testid="before-after-after"
            >
              <div className="flex items-center gap-3 px-7 py-5 border-b border-primary/10 bg-primary/[0.05]">
                <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-primary uppercase tracking-wider">With Blue Oak</p>
                  <p className="text-xs text-muted-foreground">Automated. Consistent. Recovering.</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {AFTER.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl border border-primary/[0.1] bg-white/[0.015] p-4"
                    data-testid={`after-item-${i}`}
                  >
                    <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-full border border-primary/25 bg-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {i < AFTER.length - 1 && (
                        <div className="w-px flex-1 min-h-[18px] bg-primary/10 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <p className="text-sm font-semibold text-foreground/90">{item.text}</p>
                      <p className="text-xs text-primary/70 mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="flex items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.08] px-5 py-3.5 mt-2">
                  <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-bold text-primary">Result: Fewer missed opportunities and clearer visibility into incoming leads</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bridge CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-5 mt-12"
          >
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <span className="font-medium">The gap between these two realities is the infrastructure that doesn't exist yet</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              data-testid="before-after-cta"
            >
              Calculate what your business is losing
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
