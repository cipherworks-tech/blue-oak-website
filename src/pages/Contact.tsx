import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Phone, MapPin, ExternalLink,
  MessageSquare, Calendar, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/webhook";
import { BRAND, US, JM } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// Read booking URL from environment — set VITE_BOOKING_URL in .env
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL as string | undefined;

// ─── Message Form ────────────────────────────────────────────────
function MessageForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { market: knownMarket, setMarket } = useMarketPreference();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";

    const name = get("name").trim();
    const businessEmail = get("businessEmail").trim();
    const businessName = get("businessName").trim();

    if (!name || !businessEmail || !businessName) {
      setSubmitError("Please complete all required fields before submitting.");
      setSubmitting(false);
      return;
    }

    const payload = {
      name,
      businessName,
      businessEmail,
      phone: get("phone").trim(),
      market: get("market"),
      industry: get("industry"),
      challenge: get("challenge"),
      message: get("message").trim(),
      __hp: get("__hp"),
    };

    const result = await submitLead("contact-message", payload);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error);
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-center py-10 flex flex-col items-center gap-5"
        data-testid="message-sent"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_32px_rgba(212,175,55,0.2)]">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold mb-2">Message Received</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Blue Oak will review your message and be in touch. If you'd prefer to speak sooner, use the scheduling option above.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="__hp" tabIndex={-1} aria-hidden="true" style={{ display: "none" }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Name <span className="text-primary">*</span></label>
          <input required name="name" type="text" placeholder="Your name"
            className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Business Name <span className="text-primary">*</span></label>
          <input required name="businessName" type="text" placeholder="Your business"
            className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Business Email <span className="text-primary">*</span></label>
          <input required name="businessEmail" type="email" placeholder="you@yourbusiness.com"
            className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Phone / WhatsApp</label>
          <input name="phone" type="tel" placeholder="+1 or +876"
            className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Market</label>
          <select name="market" defaultValue={knownMarket ?? ""}
            onChange={(e) => { const v = e.target.value; if (v === "US" || v === "JM") setMarket(v); }}
            className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none">
            <option value="">Select your market</option>
            <option value="US">United States</option>
            <option value="JM">Jamaica</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Industry</label>
          <select name="industry" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none">
            <option value="">Select your industry</option>
            <option>HVAC / Home Services</option>
            <option>Plumbing / Contracting</option>
            <option>Law Firm</option>
            <option>Real Estate</option>
            <option>Restaurant / Hospitality</option>
            <option>Auto Sales &amp; Service</option>
            <option>Professional Services</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">General Business Challenge</label>
        <select name="challenge" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none">
          <option value="">Select your primary challenge</option>
          <option>Not enough customers / leads</option>
          <option>Missing too many calls or inquiries</option>
          <option>Leads not converting to customers</option>
          <option>Customers not returning</option>
          <option>Slow or inconsistent follow-up</option>
          <option>No system to track opportunities</option>
          <option>High no-show or cancellation rate</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Message <span className="text-muted-foreground/60">(optional)</span></label>
        <textarea name="message" rows={3}
          className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          placeholder="Anything else you'd like Blue Oak to know…" />
      </div>

      {submitError && (
        <p className="text-sm text-red-400 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-2.5">
          {submitError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={submitting}
        className="w-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
        data-testid="button-send-message">
        {submitting ? "Sending…" : "Send Message"}
        {!submitting && <ArrowRight className="ml-2 w-4 h-4" />}
      </Button>
    </form>
  );
}

// ─── Schedule Panel ──────────────────────────────────────────────
function SchedulePanel() {
  if (!BOOKING_URL) {
    return (
      <div className="rounded-xl border border-border/40 bg-card/20 p-7 text-center">
        <Calendar className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Online scheduling is temporarily unavailable. Send Blue Oak a message using the form and we will arrange a consultation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-7 flex flex-col items-center text-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Calendar className="w-7 h-7 text-primary" />
      </div>
      <div>
        <p className="font-bold mb-2">Schedule a Consultation</p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Choose a real available time through Blue Oak's scheduling calendar.
          Timezone conversion and conflict prevention are handled automatically.
        </p>
      </div>
      <Button asChild size="lg" className="w-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)]"
        data-testid="button-view-times">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          View Available Times
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </Button>
      <p className="text-xs text-muted-foreground/60">
        Opens Blue Oak's Google Calendar scheduling page.
        Booking confirmation comes directly from Google Calendar.
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Talk With Blue Oak
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Let's Talk About Your Business
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Blue Oak works with businesses in Jamaica and the United States to identify and strengthen the systems behind revenue performance. Send a message or schedule a consultation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left — contact info + schedule */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            {/* Schedule */}
            <motion.div variants={fadeUp}>
              <SchedulePanel />
            </motion.div>

            {/* Direct contact */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Or Reach Us Directly
              </p>
              {[
                { icon: <Mail className="w-4 h-4" />, text: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: <Phone className="w-4 h-4" />, text: `${US.phone} — United States`, href: US.phoneHref },
                { icon: <MessageSquare className="w-4 h-4" />, text: `${JM.whatsapp} — Jamaica (WhatsApp)`, href: JM.whatsappHref! },
                { icon: <MapPin className="w-4 h-4" />, text: "Detroit, MI · Mandeville, Jamaica", href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="text-primary">{c.icon}</div>
                  {c.href ? (
                    <a href={c.href}
                      target={c.href.startsWith("https") ? "_blank" : undefined}
                      rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="hover:text-primary transition-colors">
                      {c.text}
                    </a>
                  ) : (
                    <span>{c.text}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* FAQ */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                About Consultations
              </p>
              {[
                {
                  q: "What happens during a consultation?",
                  a: "A Blue Oak consultation is an initial conversation about your business, current challenges, and whether Revenue Infrastructure™ services may be appropriate. It is not a substitute for the Revenue Infrastructure Assessment™.",
                },
                {
                  q: "Is there a cost?",
                  a: "Initial consultations are complimentary. If a Revenue Infrastructure Assessment™ is recommended following a consultation, that is a separate paid engagement.",
                },
                {
                  q: "Do I need to be in Detroit or Jamaica?",
                  a: "No. Blue Oak works with businesses remotely across both markets.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-border/40 bg-card/20 p-4">
                  <p className="text-sm font-bold mb-1.5">{faq.q}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — message form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md p-7 md:p-9">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Send Blue Oak a Message</p>
                  <p className="text-xs text-muted-foreground">We'll respond within one business day.</p>
                </div>
              </div>
              <MessageForm />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
