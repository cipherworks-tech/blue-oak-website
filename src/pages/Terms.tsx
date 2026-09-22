import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const LAST_UPDATED = "June 2026";

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-3xl py-16">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-14">
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Legal
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight mb-4">
            Terms of Service
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm">
            Blue Oak Automation LLC · Last updated: {LAST_UPDATED}
          </motion.p>
          <motion.div variants={fadeUp} className="h-px w-12 bg-primary/40 mt-6" />
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="space-y-10 text-muted-foreground leading-relaxed"
        >

          {/* Intro */}
          <section>
            <p>
              These Terms of Service ("Terms") govern your use of the website operated under the Blue Oak Revenue Infrastructure™ brand at blueoakautomation.com and any associated services. Blue Oak operates in two markets. Services to clients in the United States are provided by Blue Oak Automation LLC, a Michigan limited liability company. Services to clients in Jamaica are provided by the Blue Oak Jamaica business; the contracting entity for a Jamaican engagement is identified in the applicable service agreement. By accessing the Site or engaging our services, you agree to be bound by these Terms.
            </p>
            <p className="mt-3">
              Blue Oak Automation LLC is a Michigan-registered limited liability company operating under the Blue Oak Revenue Infrastructure™ brand and providing Revenue Infrastructure™ services to clients in the United States. Blue Oak also serves clients in Jamaica; the Jamaican contracting entity is identified in the applicable service agreement. Our services may incorporate business strategy, systems, processes, technology, artificial intelligence, automation, communications, analytics, and related capabilities. Services include revenue recovery systems, lead conversion infrastructure, missed-call recovery, operational intelligence, and related revenue infrastructure deployments.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">1. Services</h2>
            <p>
              Blue Oak provides revenue infrastructure services including, but not limited to:
            </p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Visibility & Opportunity Creation — search visibility, demand generation, and inquiry pathway infrastructure where diagnosed as a client's constraint",
                "Capture, Response & Conversion — intake automation, missed-call recovery, appointment systems, and lead response infrastructure",
                "Retention, Recovery & Growth — reactivation of lapsed or dormant opportunities, follow-up systems, and customer retention infrastructure",
                "Systems, AI & Automation — CRM, workflow automation, and AI-assisted operational systems",
                "Measurement & Continuous Optimization — pipeline visibility, revenue reporting, and ongoing performance measurement",
                "Complimentary Revenue Snapshot™ — a high-level preliminary review identifying visible revenue opportunities and whether deeper investigation may be worthwhile",
                "Revenue Infrastructure Assessment™ — a structured diagnostic conducted after the Snapshot when a deeper review is warranted, assessing revenue cycle gaps, recoverable opportunity, and a recommended deployment plan",
                "Community Impact packages — access-level infrastructure for qualifying small businesses and community operators",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              The specific scope, deliverables, and terms of each engagement are set out in the applicable service agreement or proposal provided to the client. These Terms apply generally to all engagements and supplement any client-specific agreement.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">2. Use of the Site</h2>
            <p>You may use this Site for lawful purposes only. You agree not to:</p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Use the Site in any manner that violates applicable law or regulation",
                "Submit false, misleading, or fraudulent information through any form or inquiry",
                "Attempt to gain unauthorised access to any part of the Site or its underlying systems",
                "Use automated tools to scrape, harvest, or extract content from the Site without prior written consent",
                "Reproduce, distribute, or commercially exploit content from the Site without written authorisation from Blue Oak",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">3. Revenue Snapshot™ and Revenue Infrastructure Assessment™</h2>
            <p>
              The <strong>Complimentary Revenue Snapshot™</strong> is a high-level preliminary review provided at no charge and with no obligation to engage further services. The Snapshot provides general, non-exhaustive observations based on publicly available information and any details you share. It is not a comprehensive diagnostic, audit, or revenue recovery plan. Results and observations from the Snapshot represent initial analysis only — not guaranteed findings or outcomes.
            </p>
            <p className="mt-3">
              The <strong>Revenue Infrastructure Assessment™</strong> is a deeper structured diagnostic conducted where warranted following the Snapshot. The Assessment is conducted on the basis of information you provide and may be subject to a separate engagement agreement. Results, estimates, and recommendations from the Assessment represent informed professional analysis — not guaranteed outcomes.
            </p>
            <p className="mt-3">
              By submitting a Revenue Snapshot request or booking a consultation, you consent to being contacted by Blue Oak to discuss your inquiry. You may cancel or reschedule any consultation at any time.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">4. Client Engagements</h2>
            <p>
              Paid service engagements are governed by the specific service agreement executed between the applicable Blue Oak contracting entity and the client. In the absence of a signed service agreement, these Terms apply to any engagement conducted on the basis of an accepted proposal or confirmed order.
            </p>
            <p className="mt-3">
              Blue Oak services are designed to recover, protect, and grow revenue for client businesses. Revenue outcomes described in examples, scenarios, and assessment estimates are illustrative. Actual results vary by business type, industry, market conditions, existing infrastructure, and the degree of client participation in the implementation process. Blue Oak does not guarantee specific financial outcomes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">5. Intellectual Property</h2>
            <p>
              All content on this Site — including text, design, structure, graphics, and code — is the property of Blue Oak Automation LLC or its licensors and is protected by applicable intellectual property law. Nothing in these Terms grants you a right or licence to use Blue Oak's name, brand, or any proprietary content without prior written consent.
            </p>
            <p className="mt-3">
              Revenue infrastructure systems, automation workflows, and operational frameworks delivered as part of a client engagement remain the intellectual property of the applicable Blue Oak contracting entity unless otherwise agreed in writing. Client data and business information provided to Blue Oak in connection with an engagement remain the property of the client.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">6. Confidentiality</h2>
            <p>
              Blue Oak treats all client business information, assessment findings, revenue data, and operational details as confidential. We do not disclose client information to third parties except as required to deliver the contracted services or as required by law. Clients may be asked to sign a mutual non-disclosure agreement prior to the commencement of a paid engagement.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Blue Oak and the applicable contracting entity shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of the Site or from the provision of services, even if advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              Blue Oak's total liability to any client for any claim arising from a service engagement shall not exceed the total fees paid by that client to Blue Oak in the three months preceding the claim.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">8. Service Areas and Governing Law</h2>
            <p>
              This Site is operated by Blue Oak Automation LLC, registered in Michigan, United States. These Site Terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law principles. Governing law for a specific paid engagement is set out in the applicable service agreement, which for Jamaican clients may specify a different jurisdiction.
            </p>
            <p className="mt-3">
              For clients located in Jamaica, services are provided in compliance with applicable Jamaican law, including the Jamaica Data Protection Act 2020 where personal data processing is involved.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">9. Modifications</h2>
            <p>
              Blue Oak reserves the right to update or modify these Terms at any time. Material changes will be indicated by updating the "Last updated" date at the top of this page. Continued use of the Site or services after changes are posted constitutes acceptance of the revised Terms. If you do not agree to the revised Terms, you should discontinue use of the Site and contact us to discuss any active engagement.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">10. Contact</h2>
            <p>For any questions regarding these Terms of Service, contact Blue Oak:</p>
            <div className="mt-4 rounded-xl border border-border/40 bg-card/20 p-6 space-y-2 text-sm">
              <p><span className="font-semibold text-foreground">Blue Oak Automation LLC</span></p>
              <p>Michigan, United States</p>
              <p>United States: +1 (248) 988-0542</p>
              <p>Jamaica (WhatsApp): 876-307-8916</p>
              <p>
                Or use the <Link href="/contact" className="text-primary hover:underline">Contact Form</Link> on our website.
              </p>
            </div>
          </section>

          <div className="h-px w-full bg-border/30 my-8" />
          <p className="text-xs text-muted-foreground/50 text-center">
            © {new Date().getFullYear()} Blue Oak Automation LLC. All rights reserved. Registered in Michigan, United States.
          </p>

        </motion.div>
      </div>
    </div>
  );
}
