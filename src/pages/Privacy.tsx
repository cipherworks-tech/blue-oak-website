import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const LAST_UPDATED = "June 2026";

export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-3xl py-16">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-14">
          <motion.p variants={fadeUp} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Legal
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight mb-4">
            Privacy Policy
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
          className="prose-content space-y-10 text-muted-foreground leading-relaxed"
        >

          {/* 1 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">1. Who We Are</h2>
            <p>
              "Blue Oak," "we," "our," or "us" refers to the Blue Oak Revenue Infrastructure™ business. Blue Oak Automation LLC, a Michigan-registered limited liability company, provides services to clients in the United States and operates this website. Blue Oak also serves clients in Jamaica through its Jamaican business. Our principal service areas include revenue recovery, lead conversion systems, missed-call recovery, operational intelligence, and related revenue infrastructure.
            </p>
            <p className="mt-3">
              This Site is owned and operated by Blue Oak Automation LLC. We operate the website at blueoakautomation.com and any associated subdomains or pages (collectively, the "Site"). This Privacy Policy explains how we collect, use, and protect information submitted through our Site and services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us through our contact forms, Revenue Snapshot™ request forms, and other inquiry submissions. This may include:</p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Full name",
                "Email address",
                "Phone number or WhatsApp number",
                "Business name and type",
                "Geographic location (city, country)",
                "Industry and general business challenge information you choose to share",
                "Any additional information you choose to provide in free-text fields",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not collect payment card information directly. Any payment processing is handled by third-party payment processors subject to their own privacy policies.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>Information you provide is used to:</p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Respond to your inquiry, contact form submission, or Revenue Snapshot™ request",
                "Provide the services you have requested or expressed interest in",
                "Communicate with you about your inquiry or engagement, including by email, SMS, phone, or WhatsApp",
                "Schedule and conduct consultations, Revenue Snapshot™ reviews, or Revenue Infrastructure Assessment™ sessions",
                "Improve our service delivery and operational systems",
                "Comply with applicable legal and regulatory obligations",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">4. Third-Party Service Providers</h2>
            <p>
              Blue Oak uses trusted third-party service providers to operate, deliver, and improve our services. These providers may process information on our behalf in the course of delivering specific functions. We do not sell your personal information to third parties.
            </p>
            <p className="mt-4">Current service providers used in our operations may include:</p>
            <div className="mt-4 space-y-3">
              {[
                { name: "Airtable", purpose: "Customer record management, intake data storage, and workflow coordination" },
                { name: "Twilio", purpose: "SMS and voice communication delivery for automated follow-up, missed-call recovery, and appointment reminders" },
                { name: "Vapi AI", purpose: "AI-powered voice automation and conversational intake processing" },
                { name: "Make.com (formerly Integromat)", purpose: "Automation workflow orchestration connecting systems involved in service delivery" },
                { name: "Google Workspace", purpose: "Internal business communications, document management, and scheduling" },
                { name: "OpenAI", purpose: "AI language processing components used in certain automated intake and response workflows" },
                { name: "WhatsApp Business (Meta)", purpose: "Business messaging for client communication, intake flows, and follow-up sequences — primarily for Jamaica-market operations" },
                { name: "GitHub", purpose: "Website source control, version management, and deployment workflows for the Blue Oak website" },
                { name: "GoDaddy", purpose: "Domain registration, DNS management, and related domain services for blueoakautomation.com" },
              ].map((p, i) => (
                <div key={i} className="rounded-lg border border-border/40 bg-card/20 px-5 py-4">
                  <p className="font-semibold text-foreground text-sm mb-1">{p.name}</p>
                  <p className="text-sm">{p.purpose}</p>
                </div>
              ))}
            </div>
            <p className="mt-5">
              Each provider operates under its own privacy policy and data processing terms. Blue Oak is not responsible for the independent privacy practices of these providers, but we select providers that meet reasonable standards for data security and confidentiality.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">5. Communication Consent</h2>
            <p>
              By submitting a contact form, Revenue Snapshot™ request, or any other inquiry through our Site, you consent to being contacted by Blue Oak through the communication channels you have provided. This may include:
            </p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Email communications regarding your inquiry or engagement",
                "SMS messages for follow-up, scheduling, or service delivery",
                "Phone calls to discuss your inquiry, Revenue Snapshot™, or service requirements",
                "WhatsApp messages, where applicable, for clients in markets where WhatsApp Business is the primary delivery channel",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              You may withdraw consent to receive communications at any time by contacting us at the details provided in Section 10 of this policy. Withdrawal of consent will not affect the lawfulness of communications sent prior to withdrawal.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">6. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect the information you provide against unauthorised access, disclosure, alteration, or destruction. These measures include use of secure hosting infrastructure, access controls on internal systems, and encrypted data transmission where supported by our service providers.
            </p>
            <p className="mt-3">
              No method of transmission over the internet or electronic storage is completely secure. While we work to protect your information, we cannot guarantee absolute security. In the event of a data breach that affects your personal information, we will notify you as required by applicable law.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">7. Cookies and Tracking</h2>
            <p>
              Our Site may use standard browser cookies and similar tracking technologies to support site functionality, session management, and analytics. Cookies used by our Site do not collect personal information beyond what you have directly provided through forms or interactions.
            </p>
            <p className="mt-3">
              You may disable cookies through your browser settings. Disabling cookies may affect certain features of the Site. We do not currently use third-party advertising tracking cookies.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">8. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfil the purposes for which it was collected, maintain our business records, and comply with applicable legal obligations. Information associated with an active client engagement is retained for the duration of that engagement and for a reasonable period thereafter. You may request deletion of your information at any time by contacting us.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">9. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="mt-3 space-y-2 pl-1">
              {[
                "Request access to the personal information we hold about you",
                "Request correction of inaccurate information",
                "Request deletion of your personal information",
                "Object to or restrict processing of your information",
                "Withdraw consent to communications",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Clients and contacts in Jamaica may have additional rights under the Jamaica Data Protection Act 2020. To exercise any of these rights, contact us using the details in Section 10.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">10. Contact</h2>
            <p>For privacy-related inquiries, requests, or concerns, contact Blue Oak:</p>
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

          {/* 11 */}
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or operational practices. Material changes will be indicated by updating the "Last updated" date at the top of this page. Continued use of the Site after changes are posted constitutes acceptance of the revised policy.
            </p>
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
