/**
 * ═══════════════════════════════════════════════════════════════
 * BLUE OAK — ARCHIVED INDUSTRY DATA
 * ═══════════════════════════════════════════════════════════════
 *
 * STATUS: INACTIVE — NOT PUBLICLY MARKETED
 *
 * Healthcare and dental industry content is archived here and is
 * NOT imported anywhere in the active application.
 *
 * REASON FOR ARCHIVAL (v3.2.3, August 2026):
 *   Blue Oak is not currently positioned to actively market
 *   healthcare or dental Revenue Infrastructure services that
 *   could involve protected health information (PHI).
 *
 *   This content is preserved — not deleted — so it can be
 *   reactivated when appropriate compliance architecture,
 *   vendor agreements (including BAAs), security controls,
 *   and operating procedures are established.
 *
 * BEFORE REACTIVATING THIS CONTENT:
 *   1. Establish compliant data architecture for regulated data
 *   2. Confirm vendor BAA availability (Airtable, Make, Twilio, Vapi)
 *   3. Review all copy for compliance claims
 *   4. Remove any PHI collection pathways
 *   5. Legal review of healthcare marketing claims
 *   6. Re-add slugs to sitemap.xml, Navbar, Footer, Industries.tsx
 *
 * This file is intentionally excluded from the active build.
 * ═══════════════════════════════════════════════════════════════
 */

import type { IndustryData } from "./industries";

export const ARCHIVED_INDUSTRIES: IndustryData[] = [
  {
    slug: "dental-practices",
    name: "Dental Practices",
    headline: "Revenue Infrastructure for Dental Practices",
    subheadline: "Dental practices lose revenue at predictable points in their patient cycle — missed new patient calls, slow inquiry response, and lapsed patients with no recall system. Blue Oak builds the systems that address those gaps.",
    schemaDescription: "Revenue Infrastructure™ for dental practices, including systems for missed-call recovery, new patient intake, appointment reminders, recall, and lapsed patient reactivation.",
    leaks: [
      {
        title: "Missed new patient calls",
        body: "Unanswered calls from prospective new patients are missed opportunities. Without automated follow-up, many of these callers will schedule with the next practice that responds. The longer the delay, the lower the probability of recovery.",
      },
      {
        title: "No automated recall system",
        body: "Patients who haven't returned for 12–18 months represent recoverable revenue. Most practices rely on manual recall calls or batch postcards with low response rates. Automated multi-channel recall sequences (SMS + email) can help practices reconnect with a broader share of that lapsed group.",
      },
      {
        title: "Slow response to online inquiries",
        body: "Patients who fill out a contact form or submit an online appointment request expect a response within minutes. A 2–4 hour delay — or worse, the next business day — is enough to lose the booking to a competitor who responds faster.",
      },
      {
        title: "Post-consultation non-conversion",
        body: "Patients who attend a treatment consultation but don't schedule are a high-value recovery opportunity. Most practices do one follow-up call and mark them as declined. A structured 30-day re-engagement sequence recovers a meaningful percentage of these consultations.",
      },
      {
        title: "No-show revenue loss",
        body: "No-shows represent lost chair time that cannot be recovered after the fact. Automated confirmation and reminder sequences (48hr, 24hr, 2hr) can help protect appointments already on the books by keeping them top of mind.",
      },
      {
        title: "Referral pipeline decay",
        body: "Patient referrals that come in through informal channels — word of mouth, text, social media — often fall through because there is no structured intake path for them. Automated referral capture and follow-up prevents this leak.",
      },
    ],
    assessmentExample: {
      title: "Dental Practice Revenue Recovery — Example Scenario",
      scenario: "A 3-chair dental practice in a suburban market receives approximately 85 inbound calls per month. Staff answer roughly 68 of them. The 17 missed calls — predominantly during lunch and after 5 PM — receive no automated follow-up.",
      finding: "For illustration: suppose the practice misses 17 calls per month, 55% are genuine new patient inquiries, and each initial visit is worth $320. At a 100% assumed conversion rate on answered calls, the illustrative potential opportunity is approximately $2,992/month — but actual conversion rates and call quality vary by practice.",  // All values are illustrative assumptions
      value: "Illustrative estimate based on explicit assumptions above. Actual impact depends on call volume, conversion rate, patient mix, and market conditions.",  // Not a Blue Oak benchmark
    },
    recoveryExample: {
      title: "Dental Recall Recovery — Example Scenario",
      scenario: "A practice with 1,800 active patients has 340 patients who haven't booked in 18+ months. A three-touch reactivation sequence (SMS on Day 1, email on Day 4, personalized SMS on Day 10) is deployed.",
      mechanism: "Automated 3-touch SMS + email recall sequence with appointment booking link",
      result: "For illustration: assume 340 inactive patients, a 10% reactivation rate (assumption), and an average appointment value of $180. That represents approximately $6,120 from a single campaign. Actual reactivation rates depend on the lapse duration, patient base, and how the sequences are configured.",  // All rates are illustrative assumptions
    },
    solutions: [
      { title: "Missed Call Text-Back", body: "Automated SMS + WhatsApp response to unanswered calls, initiating an intake conversation and keeping the inquiry alive until staff can follow up.", package: "Foundation System™" },
      { title: "New Patient Intake Flow", body: "Conversational intake automation that collects business contact information and appointment preferences without requiring staff involvement during every inquiry.", package: "Foundation System™" },
      { title: "Lapsed Patient Reactivation", body: "Automated 90-day multi-channel campaigns that identify and reactivate patients who haven't returned — segmented by gap duration and treatment history.", package: "Revenue Recovery System™" },
      { title: "No-Show Prevention", body: "Automated confirmation + reminder sequences at 48hr, 24hr, and 2hr intervals, with re-booking links if cancellation occurs.", package: "Foundation System™" },
      { title: "Post-Consultation Follow-Up", body: "Structured 30-day follow-up sequence for treatment consultations that didn't convert — with value-based messaging, not pressure.", package: "Revenue Recovery System™" },
    ],
    faqs: [
      {
        q: "What is missed-call recovery for dental practices?",
        a: "Missed-call recovery for dental practices is an automated system that detects unanswered inbound calls and sends a personalized text or WhatsApp message to the caller — initiating an intake conversation and keeping the opportunity alive. When configured correctly, this happens quickly enough to capture interest before the caller moves on.",
      },
      {
        q: "How does patient reactivation automation work?",
        a: "Patient reactivation automation identifies patients who haven't booked in a defined period (typically 12–24 months), then deploys a personalized multi-channel sequence — SMS, email, and sometimes WhatsApp — with messaging tailored to their specific history. Sequences are timed and personalized, not generic blasts.",
      },
      {
        q: "What is a dental revenue leak?",
        a: "A dental revenue leak is any point in a practice's revenue cycle where potential patient revenue escapes before being captured. Common dental revenue leaks include missed new patient calls, slow inquiry response, lapsed patient gaps with no recall system, post-consultation non-conversions, and untriaged no-shows.",
      },
      {
        q: "How quickly can Blue Oak deploy for a dental practice?",
        a: "Foundation System deployments — including missed-call recovery, intake automation, and reminder sequences — are typically live within as quickly as practical after the initial diagnostic and approval.",
      },
      {
        q: "Does Blue Oak integrate with dental practice management software?",
        a: "Yes. We integrate with common dental PMS platforms and CRM tools. During the initial engagement, we identify your current tech stack and confirm all integrations before deployment.",
      },
    ],
  },
  {
    slug: "healthcare-clinics",
    name: "Healthcare Clinics",
    headline: "Revenue Infrastructure for Healthcare Clinics",
    subheadline: "Healthcare clinics generate significant inbound interest but frequently lose patients at intake, follow-up, and reactivation stages. Blue Oak builds the infrastructure that captures and retains that revenue.",
    schemaDescription: "Revenue Infrastructure™ for healthcare clinics, including systems for missed appointment recovery, patient intake, appointment reminders, lapsed patient reactivation, and referral follow-up.",
    leaks: [
      {
        title: "Unanswered intake calls",
        body: "Clinics with high call volumes — especially during peak hours and after standard office hours — frequently miss new patient calls. Each unanswered intake call is a patient relationship that either goes to a competitor or never develops.",
      },
      {
        title: "Long or complex intake forms",
        body: "Friction-heavy intake processes — long paper forms, multi-page online forms, or manual data collection — cause prospective patients to abandon mid-process. A conversational intake flow that collects information progressively and via mobile dramatically improves completion rates.",
      },
      {
        title: "No lapsed patient reactivation",
        body: "Patients who haven't returned for care in 6–18 months represent a significant recovery opportunity. Most clinics have no automated system to identify and re-engage these patients — leaving this revenue entirely passive.",
      },
      {
        title: "Referral intake gaps",
        body: "Referred patients — whether from primary care providers or existing patients — represent high-trust, high-conversion inbound leads. Without a structured intake flow specifically for referrals, these leads experience the same friction as cold inbound and convert at lower rates.",
      },
      {
        title: "Appointment no-shows",
        body: "No-shows represent direct, unrecoverable revenue loss in a time-based healthcare setting. Automated confirmation and multi-touch reminder sequences reduce no-show rates and protect appointments already on the schedule.",
      },
      {
        title: "Post-visit follow-up gaps",
        body: "Patients who visit for a consult, assessment, or treatment session that suggests ongoing care — but don't book a follow-up — represent a significant revenue gap. Automated post-visit follow-up sequences convert a meaningful percentage of one-time visits into ongoing care relationships.",
      },
    ],
    assessmentExample: {
      title: "Healthcare Clinic Revenue Recovery — Example Scenario",
      scenario: "A multi-provider physical therapy clinic receives 65–75 inbound calls per week. Approximately 14 calls per week go unanswered during treatment blocks and end-of-day hours. The clinic has no automated response system.",
      finding: "For illustration: assume the clinic misses 14 qualified new patient calls per month, 45% would have converted (assumption), and the average initial value is $1,200. Illustrative potential: approximately $7,560/month. All inputs are assumptions — actual impact depends on the clinic.",  // Illustrative assumptions only
      value: "Illustrative estimate based on assumptions above. Not a Blue Oak benchmark or expected result.",  // Illustrative only
    },
    recoveryExample: {
      title: "Lapsed Patient Reactivation — Example Scenario",
      scenario: "A chiropractic clinic has 920 patients who haven't booked in 12+ months. A segmented 3-touch reactivation sequence is deployed — customized by care history and duration since last visit.",
      mechanism: "Segmented SMS + email reactivation sequence with personalized messaging and appointment booking link",
      result: "For illustration: assume 920 lapsed patients, a 10% reactivation rate (assumption), and $185 average appointment value. That represents approximately $17,020 from a single campaign. Reactivation rates vary significantly by clinic and patient base.",  // Illustrative assumptions
    },
    solutions: [
      { title: "24/7 Intake Automation", body: "Conversational intake flow via SMS and email that captures business contact information and appointment preferences — available outside of business hours without requiring staff.", package: "Foundation System™" },
      { title: "Missed Call Recovery", body: "Automated response to unanswered inbound calls, initiating an intake conversation and keeping the inquiry alive before the prospective patient calls the next clinic.", package: "Foundation System™" },
      { title: "Lapsed Patient Reactivation", body: "Segmented multi-channel campaigns that identify and re-engage patients by lapse duration and appointment type, encouraging them to rebook.", package: "Revenue Recovery System™" },
      { title: "No-Show Reduction", body: "Automated confirmation + 48hr, 24hr, and 2hr reminders with re-booking links if the patient needs to reschedule.", package: "Foundation System™" },
      { title: "Referral Intake Optimization", body: "Dedicated intake flow for referred patients that reduces friction and converts at a higher rate than standard intake.", package: "Revenue Recovery System™" },
    ],
    faqs: [
      {
        q: "How does missed-call recovery work for healthcare clinics?",
        a: "A missed-call recovery system detects unanswered inbound calls and sends an automated text message — acknowledging the call and initiating a structured intake conversation. When configured correctly, this happens quickly enough to capture the patient's interest before they call the next provider.",
      },
      {
        q: "Does Blue Oak collect patient health information?",
        a: "No. Blue Oak systems are designed for business-level Revenue Infrastructure™ — improving how a clinic captures and responds to business inquiries, reduces no-shows, and reactivates lapsed patients. Blue Oak does not collect, store, or process patient health records, diagnoses, treatment details, or other sensitive health information. Any applicable regulatory considerations for a specific clinic's operations are identified before deployment.",
      },
      {
        q: "What is patient reactivation automation?",
        a: "Patient reactivation automation is a system that identifies patients who haven't returned for care in a defined period and automatically deploys a personalized multi-channel re-engagement sequence — timed, segmented by patient type, and designed to make re-booking frictionless.",
      },
      {
        q: "How does Blue Oak reduce no-show rates?",
        a: "By deploying automated appointment confirmation sequences (sent immediately after booking) plus multi-touch reminders at 48 hours, 24 hours, and 2 hours before the appointment — each with a direct rescheduling link so cancellations are captured and the slot can be refilled.",
      },
    ],
  },
];
