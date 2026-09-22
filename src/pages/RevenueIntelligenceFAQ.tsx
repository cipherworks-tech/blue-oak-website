import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const FAQ_SECTIONS = [
  {
    section: "Revenue Recovery",
    faqs: [
      { q: "What is revenue recovery?", a: "Revenue recovery is the systematic process of identifying revenue your business already generated the demand for — but failed to collect before it was lost. It targets missed calls, slow lead response, unconverted consultations, lapsed clients, and no-show appointments." },
      { q: "What is a revenue leak?", a: "A revenue leak is any point in a business's revenue cycle where qualified interest exits without being captured as revenue. Common leaks include unanswered calls, delayed follow-up, no reactivation for past clients, and broken intake processes that lose prospects mid-conversation." },
      { q: "How does missed-call recovery work?", a: "Missed-call recovery automation sends an automated text message to a caller who didn't reach a live person, triggered promptly after the missed call subject to the configured workflow and channel. The message acknowledges the missed call, offers a direct booking link, and can initiate a follow-up sequence if there's no response. The system runs continuously, so coverage does not depend on someone being free to answer." },
      { q: "What industries benefit most from revenue recovery?", a: "Any appointment-based or inquiry-driven business with inbound call volume can benefit: home services and HVAC, contractors and trades, auto sales and service businesses, law firms, real estate teams, and hospitality operators. The size of the opportunity scales with call volume and average transaction value." },
      { q: "How quickly can revenue recovery show results?", a: "It depends on inquiry volume and the systems deployed. Missed-call recovery and lead follow-up automation begin capturing opportunities as soon as they are live, so activity is usually visible early. Reactivation campaigns work through an existing contact list, so response timing depends on the size and age of that list. Blue Oak does not promise a specific timeframe or result." },
    ],
  },
  {
    section: "Revenue Infrastructure",
    faqs: [
      { q: "What is revenue infrastructure?", a: "Revenue infrastructure is the connected system of automations, intelligence tools, and processes that govern how a business captures, converts, and retains revenue. It is distinct from sales, marketing, and customer service — it is the underlying architecture that makes those functions work reliably at scale." },
      { q: "What is AI-supported revenue infrastructure?", a: "AI-supported Revenue Infrastructure™ uses artificial intelligence and automation where appropriate to improve functions such as inquiry response, lead qualification, routing, follow-up, analysis, and decision support. The specific technologies and degree of automation depend on the business, its existing systems, operating requirements, and priorities. AI is a tool within the infrastructure — not a replacement for human judgment." },
      { q: "How is revenue infrastructure different from a CRM?", a: "A CRM stores data. Revenue infrastructure acts on it. A CRM records that a lead came in. Revenue infrastructure scores the lead, routes it to the right follow-up sequence, monitors engagement, and escalates if the opportunity is stalling — automatically." },
      { q: "How does Blue Oak differ from a marketing agency?", a: "A marketing agency is usually hired to run a channel. Blue Oak is hired to diagnose where revenue is actually constrained and build the systems that address it. That constraint may be visibility and opportunity creation, or it may be capture, response, conversion or retention — the diagnosis comes first. Marketing, content, search, AI and automation are capabilities Blue Oak may use inside Revenue Infrastructure™, not the category Blue Oak sells." },
      { q: "How does Blue Oak differ from an automation agency?", a: "Automation agencies build workflows. Blue Oak builds revenue infrastructure — a connected architecture of demand intelligence, lead intelligence, revenue intelligence, and operational intelligence that is measured by revenue outcomes, not workflow execution." },
    ],
  },
  {
    section: "Intelligence Systems",
    faqs: [
      { q: "What is Demand Intelligence?", a: "Demand Intelligence is the layer that identifies where qualified interest is coming from, which channels produce the highest-value leads, and what patterns exist in the inbound behavior of your best clients — so marketing and sales resources are deployed where demand is strongest." },
      { q: "What is Lead Intelligence?", a: "Lead Intelligence refers to the systems that capture, qualify, and route leads — reducing the manual work of deciding which opportunities to prioritize and when to follow up. Depending on the implementation, it may include automated routing, follow-up triggers, and engagement tracking. The specific capabilities deployed depend on the business and its systems." },
      { q: "What is Revenue Intelligence?", a: "Revenue Intelligence provides real-time pipeline visibility, surfaces stalled deals and at-risk relationships, and delivers attribution data showing exactly what channels and actions are generating revenue. It turns subjective gut-feel about pipeline health into objective, real-time data." },
      { q: "What is Operational Intelligence?", a: "Operational Intelligence reduces manual process overhead across the revenue cycle — automating intake, scheduling, confirmations, follow-ups, handoffs, and reporting so routine execution stays consistent. Exceptions and consequential actions are surfaced for appropriate human review rather than executed silently." },
      { q: "Does AI make decisions on its own?", a: "Blue Oak builds systems where AI does more of the work while people stay in control of consequential decisions. Routine operational work — intake, follow-up, scheduling, reminders, reporting — runs automatically. Results and recommendations are surfaced for review. Actions that carry real consequence, such as important communications, financial commitments, or changes to key business records, are presented for approval rather than executed silently. The degree of automation is set according to the consequence of the action." },
      { q: "How does AI improve lead conversion?", a: "AI and automation can shorten first-response time, personalise follow-up based on how a prospect has engaged, score and prioritise leads, and inform timing and channel choices. The intent is to remove delay and inconsistency from the process. Actual conversion impact depends on the business, its offer and its market." },
    ],
  },
  {
    section: "Jamaica & United States",
    faqs: [
      { q: "Does Blue Oak serve businesses in Jamaica?", a: "Yes. Blue Oak operates in Mandeville, Manchester, Jamaica and serves businesses across the island. Jamaica-market systems are WhatsApp-first, priced in Jamaican dollars, and designed for how local operators actually work." },
      { q: "Does Blue Oak serve U.S. businesses?", a: "Yes. Blue Oak is based in Detroit, Michigan and serves businesses across the United States. U.S.-market systems integrate with HubSpot, Salesforce, Pipedrive, and 200+ tools. Pricing is in USD." },
      { q: "What is WhatsApp-first delivery?", a: "WhatsApp is the primary business communication channel in Jamaica. Blue Oak's Jamaica systems use WhatsApp Business API as the default delivery channel for intake flows, follow-ups, reminders, and reactivation campaigns — not email or SMS, which have lower open rates in the Jamaican market." },
      { q: "Can a Jamaica-based business access U.S. pricing or vice versa?", a: "Pricing is structured per market. Jamaica pricing is in JMD and reflects the local operator context. U.S. pricing is in USD and reflects the U.S. market. If your business operates across both markets, contact Blue Oak for a dual-market infrastructure proposal." },
    ],
  },
];

export default function RevenueIntelligenceFAQ() {
  return (
    <div className="pt-24 min-h-screen text-foreground">

      {/* ── HERO ── */}
      <section className="relative py-20 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase">Revenue Intelligence FAQ</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Revenue Infrastructure — Questions &amp; Answers
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to understand about revenue recovery, revenue infrastructure, AI automation, and how Blue Oak operates across Jamaica and the United States.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-14">
          {FAQ_SECTIONS.map((section, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-6">{section.section}</p>
              <div className="space-y-4">
                {section.faqs.map((faq, fi) => (
                  <div key={fi} className="rounded-xl border border-border/50 bg-card/20 p-6">
                    <h2 className="font-bold text-sm mb-3">{faq.q}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold tracking-tight mb-5">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              A Revenue Snapshot™ is a complimentary initial review. A Revenue Infrastructure Assessment™ is the comprehensive paid diagnostic that gives you a complete picture of your gaps.
            </p>
            <Button size="lg" asChild className="font-semibold px-10">
              <Link href="/contact">Request Revenue Snapshot™ <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
