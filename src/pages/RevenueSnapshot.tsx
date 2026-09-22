import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, Eye, TrendingUp, Phone,
  MessageSquare, Globe, MapPin, ChevronDown, ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BRAND } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";
import { submitLead } from "@/lib/webhook";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const WHAT_WE_REVIEW = [
  { icon: <Globe className="w-4 h-4 text-primary" />, label: "Website visibility", detail: "How easily can prospects find you online?" },
  { icon: <Phone className="w-4 h-4 text-primary" />, label: "Contact pathways", detail: "Can interested prospects reach you quickly and easily?" },
  { icon: <Eye className="w-4 h-4 text-primary" />, label: "Lead capture", detail: "Are inquiries being captured or slipping through?" },
  { icon: <MessageSquare className="w-4 h-4 text-primary" />, label: "Response experience", detail: "What happens immediately after a prospect reaches out?" },
  { icon: <TrendingUp className="w-4 h-4 text-primary" />, label: "Online reputation signals", detail: "What do reviews and online presence communicate to prospects?" },
  { icon: <CheckCircle className="w-4 h-4 text-primary" />, label: "Visible follow-up opportunities", detail: "Are there obvious gaps in how opportunities are being pursued?" },
];

const FAQS = [
  {
    q: "What exactly is the Revenue Snapshot™?",
    a: "The Revenue Snapshot™ is a complimentary high-level review based primarily on publicly available information and limited details you provide. It is designed to surface visible revenue opportunities and identify questions worth investigating — not to replace a thorough diagnosis.",
  },
  {
    q: "How is the Snapshot different from the Revenue Infrastructure Assessment™?",
    a: "The Revenue Snapshot™ is a preliminary, complimentary observation. The Revenue Infrastructure Assessment™ is a comprehensive paid diagnostic that examines your complete revenue cycle in depth — visibility, lead capture, response, qualification, conversion, follow-up, retention, reactivation, referrals, systems, and measurement. The Assessment is where serious diagnosis occurs.",
  },
  {
    q: "What do I receive after the Snapshot?",
    a: "You receive high-level observations about visible revenue opportunities and possible gaps. The Snapshot identifies whether deeper investigation through a Revenue Infrastructure Assessment™ may be worthwhile — it is not a complete recovery roadmap.",
  },
  {
    q: "Does the Snapshot guarantee I will find revenue leaks?",
    a: "No. The Snapshot is designed to provide useful initial observations. What it surfaces depends on what is publicly visible and what you share. Some businesses have significant visible gaps. Others require deeper analysis to identify opportunities.",
  },
  {
    q: "Is the Revenue Snapshot™ really complimentary?",
    a: "Yes. There is no cost and no obligation. You keep the observations regardless of whether we work together further.",
  },
  {
    q: "Do you serve businesses in Jamaica?",
    a: "Yes. Blue Oak serves businesses in Jamaica and the United States. Select your market in the form and we will route your Snapshot to the appropriate team.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/40 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors gap-4"
      >
        <span className="text-sm font-semibold">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border/30">
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SnapshotForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { market: knownMarket, setMarket } = useMarketPreference();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const get = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";

    // Validate required fields
    const fullName = get("fullName").trim();
    const email = get("email").trim();
    const businessName = get("businessName").trim();
    if (!fullName || !email || !businessName) {
      setError("Please complete your name, business name, and email before submitting.");
      setSubmitting(false);
      return;
    }

    const payload = {
      type: "revenue-snapshot",
      fullName,
      businessName,
      website: get("website").trim(),
      email,
      phone: get("phone").trim(),
      industry: get("industry"),
      market: get("market"),
      challenge: get("challenge"),
      __hp: get("__hp"), // honeypot — must be empty
    };

    const result = await submitLead("revenue-snapshot", payload);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
      setSubmitting(false);
    }
  }

  if (submitted) {
    const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 flex flex-col items-center gap-5"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_32px_rgba(212,175,55,0.2)]">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold mb-2">Revenue Snapshot™ Request Received</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Blue Oak will review the information you provided and look for visible revenue opportunities and possible gaps worth investigating.
          </p>
        </div>
        {bookingUrl && (
          <div className="w-full rounded-xl border border-border/40 bg-card/20 p-5 text-left">
            <p className="text-sm font-semibold mb-1">Want to discuss your business?</p>
            <p className="text-xs text-muted-foreground mb-4">
              Schedule a complimentary consultation while you wait for your Snapshot observations.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Schedule a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        )}
        <p className="text-xs text-muted-foreground/60">
          Questions? Email <span className="text-primary">{BRAND.email}</span>
        </p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input type="text" name="__hp" tabIndex={-1} aria-hidden="true" style={{ display: "none" }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name *</label>
          <input required name="fullName" type="text" placeholder="Jane Smith" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Business Name *</label>
          <input required name="businessName" type="text" placeholder="Your Business" className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Website</label>
        <input name="website" type="url" placeholder="https://yourbusiness.com" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Business Email *</label>
          <input required name="email" type="email" placeholder="you@yourbusiness.com" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone / WhatsApp *</label>
          <input required name="phone" type="tel" placeholder="+1 555 000 0000" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industry *</label>
          <select required name="industry" className={`${inputClass} appearance-none`}>
            <option value="">Select industry</option>
            <option>HVAC / Home Services</option>
            <option>Plumbing / Contracting</option>
            <option>Law Firm</option>
            <option>Real Estate</option>
            <option>Restaurant / Hospitality</option>
            <option>Auto Sales & Service</option>
            <option>Professional Services</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Market *</label>
          <select required name="market" defaultValue={knownMarket ?? ""}
            onChange={(e) => { const v = e.target.value; if (v === "US" || v === "JM") setMarket(v); }}
            className={`${inputClass} appearance-none`}>
            <option value="">Select market</option>
            <option value="US">United States</option>
            <option value="JM">Jamaica</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Primary business challenge</label>
        <select name="challenge" className={`${inputClass} appearance-none`}>
          <option value="">Select your main challenge</option>
          <option>Missing too many calls or inquiries</option>
          <option>Leads not converting to appointments or sales</option>
          <option>Customers not returning</option>
          <option>Slow or inconsistent follow-up</option>
          <option>No visibility into where revenue is being lost</option>
          <option>Marketing not producing enough revenue</option>
          <option>Other</option>
        </select>
      </div>

      {error && (
        <p className="text-sm text-red-400 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_36px_rgba(212,175,55,0.45)] transition-shadow disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request My Revenue Snapshot™"}
        {!submitting && <ArrowRight className="ml-2 w-4 h-4" />}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Complimentary · No obligation · We will be in touch shortly
      </p>
    </form>
  );
}

export default function RevenueSnapshot() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Complimentary Revenue Snapshot™
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            See Where Revenue May Be Slipping Through Your Business
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto mb-4">
            The Revenue Snapshot™ is a high-level complimentary review designed to surface visible revenue opportunities and identify whether deeper investigation may be worthwhile.
          </motion.p>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/[0.05] text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            Serving Jamaica and the United States
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">

          {/* Left — what we review + distinction */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-lg font-extrabold mb-4">What the Snapshot May Examine</h2>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Using publicly available information and what you share, we look at visible indicators across your revenue pathway.
              </p>
              <div className="space-y-3">
                {WHAT_WE_REVIEW.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border/40 bg-white/[0.02] p-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important distinction */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-amber-400/80 mb-3">Important to Know</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Revenue Snapshot™ is <strong className="text-foreground">not</strong> a comprehensive Revenue Infrastructure Assessment™. It is designed to provide useful initial observations and determine whether deeper analysis may be worthwhile.
              </p>
              <Link href="/revenue-infrastructure-assessment" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">
                Learn about the Assessment <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Market contact options */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Prefer to reach out directly?</p>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-white/[0.02] p-4 hover:border-primary/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Email — Both Markets</p>
                  <p className="text-sm">{BRAND.email}</p>
                </div>
              </a>
              <a
                href={BRAND.jamaicaWhatsAppHref}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-white/[0.02] p-4 hover:border-primary/30 transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp — Jamaica</p>
                  <p className="text-sm">{BRAND.jamaicaWhatsApp}</p>
                </div>
              </a>
              <a
                href={BRAND.usPhone ? `tel:+12489880542` : "#"}
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-white/[0.02] p-4 hover:border-primary/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Phone — United States</p>
                  <p className="text-sm">+1 (248) 988-0542</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md p-8">
              <h2 className="text-xl font-extrabold mb-2">Request Your Complimentary Revenue Snapshot™</h2>
              <p className="text-sm text-muted-foreground mb-7">
                Complete the form and we will review your submission and be in touch with initial observations.
              </p>
              <SnapshotForm />
            </div>
          </motion.div>
        </div>

        {/* Client journey CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/40 bg-card/20 p-8 md:p-10 mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">How Blue Oak Works</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            {[
              { step: "01", title: "Revenue Snapshot™", note: "Complimentary · You are here", active: true },
              { step: "02", title: "Revenue Infrastructure Assessment™", note: "Comprehensive paid diagnosis" },
              { step: "03", title: "Revenue Recovery Plan™", note: "Prioritized roadmap" },
              { step: "04", title: "Implementation", note: "Systems deployed" },
              { step: "05", title: "Continuous Optimization™", note: "Ongoing improvement" },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl p-4 text-center ${s.active ? "border border-primary/30 bg-primary/[0.05]" : "border border-border/30 bg-white/[0.01]"}`}>
                <p className={`text-xs font-black tracking-widest uppercase mb-1 ${s.active ? "text-primary" : "text-muted-foreground/50"}`}>{s.step}</p>
                <p className={`text-xs font-bold leading-snug mb-1 ${s.active ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</p>
                <p className="text-[10px] text-muted-foreground/60">{s.note}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Button asChild variant="outline" size="sm" className="font-semibold bg-transparent border-border hover:bg-white/5">
              <Link href="/revenue-infrastructure-assessment">
                Learn About the Assessment <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="font-semibold bg-transparent border-border hover:bg-white/5">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="text-2xl font-extrabold tracking-tight">About the Revenue Snapshot™</h2>
          </motion.div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
