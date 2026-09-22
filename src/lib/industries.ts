export interface RevenueLeak {
  title: string;
  body: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  schemaDescription: string;
  leaks: RevenueLeak[];
  assessmentExample: {
    title: string;
    scenario: string;
    finding: string;
    value: string;
  };
  recoveryExample: {
    title: string;
    scenario: string;
    mechanism: string;
    result: string;
  };
  solutions: { title: string; body: string; package: string }[];
  faqs: FAQ[];
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "home-services",
    name: "Home Services",
    headline: "Revenue Infrastructure for Home Service Companies",
    subheadline: "Home service companies lose more revenue to slow follow-up and missed calls than almost any other industry. Blue Oak deploys the systems that capture, convert, and retain the jobs your team is already generating interest for.",
    schemaDescription: "Revenue Infrastructure™ for home service companies, including systems for missed-call recovery, rapid inquiry response, quote follow-up, seasonal reactivation, and repeat service reminders.",
    leaks: [
      {
        title: "Missed calls while crews are on jobs",
        body: "Home service operators frequently miss inbound calls while technicians are on-site and the office is unmanned. Each unanswered call is a job quote that went to the competitor who picked up. Without automated follow-up, the majority of these callers never return.",
      },
      {
        title: "Slow response to online quote requests",
        body: "Homeowners submitting an online quote request generally expect a quick reply. When a response takes hours, the homeowner has often already booked with a company that answered sooner.",
      },
      {
        title: "Quote follow-up gaps",
        body: "Most home service companies send one quote and wait. If the homeowner doesn't respond, the job is abandoned. A structured 14-day follow-up sequence — price anchoring, value reminders, deadline — gives quoted jobs that initially went quiet further opportunities to convert.",
      },
      {
        title: "No seasonal reactivation system",
        body: "Past customers are the highest-value lead source for home service companies — they already trust the brand. Without an annual or seasonal reactivation campaign, this audience remains dormant. Automated seasonal outreach (spring tune-ups, winter prep, annual service reminders) recovers this revenue at minimal acquisition cost.",
      },
      {
        title: "No repeat service reminders",
        body: "Services like HVAC maintenance, gutter cleaning, lawn care, and pest control have natural repeat cycles. Most companies don't have automated systems to remind past customers when their next service interval is due — leaving repeat jobs to chance.",
      },
      {
        title: "Referral capture gaps",
        body: "Word-of-mouth referrals from satisfied customers are high-value inbound leads — but they often arrive through informal channels (text, social media) with no structured intake path, meaning they're captured inconsistently or not at all.",
      },
    ],
    assessmentExample: {
      title: "Home Services Revenue Recovery — Example Scenario",
      scenario: "A mid-size HVAC company receives 110 inbound calls per week. During peak season, approximately 22 calls go unanswered while technicians are in the field. The company has no automated response system.",
      finding: "For illustration: assume 22 missed peak-season calls per week, 50% qualified (assumption), 30% conversion (assumption), and $850 average job value. Illustrative potential: approximately $2,805/week. Actual figures depend on the specific business.",  // All values are illustrative assumptions
      value: "Illustrative estimate based on scenario assumptions. Actual impact depends on call volume, job values, conversion rates, and other factors specific to the business.",
    },
    recoveryExample: {
      title: "Quote Follow-Up Recovery — Example Scenario",
      scenario: "A roofing company sends 40 quotes per month. Roughly 28 are accepted. The 12 declined or non-responsive quotes receive one follow-up call and are then abandoned.",
      mechanism: "Automated 14-day follow-up sequence with 4 touchpoints: value reminder (Day 3), urgency signal (Day 7), final offer (Day 12), opt-out (Day 14)",
      result: "Illustrative estimate. Actual recovery depends on quote volume, job values, follow-up sequence configuration, and prospect circumstances. Results vary by business.",
    },
    solutions: [
      { title: "Missed Call Text-Back", body: "Automated SMS response to unanswered calls — capturing the inquiry before the caller moves on to the next contractor.", package: "Capture, Response & Conversion" },
      { title: "Speed-to-Lead Automation", body: "Rapid automated response to online quote requests — SMS + email — with intake qualification and job details collection.", package: "Capture, Response & Conversion" },
      { title: "Quote Follow-Up Sequences", body: "Structured 14-day follow-up automation for unconverted quotes — timed, value-based, and non-intrusive.", package: "Retention, Recovery & Growth" },
      { title: "Seasonal Reactivation Campaigns", body: "Automated outreach to past customers before peak seasons — spring, fall, and winter — with service reminders and re-booking links.", package: "Retention, Recovery & Growth" },
      { title: "Repeat Service Reminders", body: "Interval-based automated reminders for recurring services — sent via SMS or email at the appropriate time for each service type.", package: "Capture, Response & Conversion" },
    ],
    faqs: [
      {
        q: "What is speed-to-lead automation for home service companies?",
        a: "Speed-to-lead automation is a system that can be configured to respond rapidly to inbound leads — whether from a missed call, an online form, or a web chat — subject to the configured workflow and channel. For home service companies, faster response can help capture the lead before they call a competitor.",
      },
      {
        q: "How does Blue Oak help home service companies recover missed calls?",
        a: "Blue Oak can deploy a missed-call text-back system that detects unanswered inbound calls and sends an automated, personalized SMS — acknowledging the missed call, providing a way to start the intake conversation, and initiating automated qualification without requiring a staff member to be available.",
      },
      {
        q: "What is quote follow-up automation?",
        a: "Quote follow-up automation is a structured sequence of timed messages — SMS and email — that keeps a pending quote in front of the homeowner without requiring a salesperson to track and manually follow up on every open estimate. The sequence is designed to provide value and create a soft deadline, not to pressure.",
      },
      {
        q: "Can Blue Oak integrate with service management software like Jobber or ServiceTitan?",
        a: "Yes. We assess your current tech stack before deployment and confirm integrations before deployment. Common home service platforms are supported through direct integration or API connection.",
      },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    headline: "Revenue Infrastructure for Law Firms",
    subheadline: "Law firms with inbound inquiries lose significant potential client revenue to slow intake response, intake friction, and the absence of structured follow-up for consultations that didn't immediately convert.",
    schemaDescription: "Revenue Infrastructure™ for law firms, including systems for new client intake, rapid inquiry response, consultation follow-up, missed inquiry recovery, and pipeline visibility.",
    leaks: [
      {
        title: "Slow response to consultation requests",
        body: "Prospective legal clients in active need — especially in personal injury, family law, immigration, and criminal defense — are often making urgent decisions. A slow response is frequently enough to lose the potential client to the first firm that gets back to them. Faster, more consistent response can improve the likelihood that an inquiry progresses to a consultation.",
      },
      {
        title: "Intake friction",
        body: "Long intake forms, phone-only intake, and business-hours-only availability create significant friction for prospective clients who are often initiating contact at inconvenient times. A conversational, mobile-first intake flow available 24/7 captures a meaningfully higher percentage of inquiries.",
      },
      {
        title: "Post-consultation non-conversion",
        body: "Consultations that didn't result in an immediate engagement are rarely followed up more than once. A structured 30-day follow-up sequence — educational content, value reinforcement, deadline framing — gives these consultations further opportunities to convert into retainers weeks after the initial meeting.",
      },
      {
        title: "Unsystematic referral intake",
        body: "Referrals from past clients, referring attorneys, and professional networks arrive through informal channels — text, personal email, phone — and are frequently captured inconsistently or not at all. A referral intake flow is designed so referred contacts are processed and followed up systematically rather than depending on memory.",
      },
      {
        title: "No pipeline visibility",
        body: "Without a real-time view of which consultations are pending, which have stalled, and which need follow-up, managing partner decisions are made on incomplete information. Revenue that could be recovered from stalled consultations is invisible.",
      },
    ],
    assessmentExample: {
      title: "Law Firm Revenue Recovery — Example Scenario",
      scenario: "A personal injury firm receives 55 inbound inquiries per month via phone and web form. Intake response averages 6 hours during business days. The firm converts 40% of consultations to retainers. 12 post-consultation non-conversions per month receive one follow-up call and are abandoned.",
      finding: "Two gaps are visible: inbound inquiries are not receiving a prompt first response, and consultations that do not convert receive no structured follow-up. Both are addressable with infrastructure. The size of the opportunity depends on the firm's inquiry volume, case values and current conversion rate — quantified during the Revenue Infrastructure Assessment™.",
      value: "Quantified during the Revenue Infrastructure Assessment™ using the firm's actual inquiry volume, conversion rate and retainer values.",
    },
    recoveryExample: {
      title: "Post-Consultation Recovery — Example Scenario",
      scenario: "A family law firm has 18 consultations per month that don't convert immediately. Standard practice is one follow-up call within 48 hours. A structured 30-day educational follow-up sequence is deployed instead.",
      mechanism: "30-day educational email + SMS sequence: legal guidance content (Day 3), case summary reminder (Day 10), urgency framing (Day 21), final outreach (Day 28)",
      result: "For illustration: assume 18 post-consultation non-conversions per month and a 15% recovery rate (assumption) from structured follow-up. At $3,500 average retainer, that represents approximately $9,450/month from this pipeline. Actual recovery depends on the case type, follow-up quality, and sequence design.",  // Illustrative assumptions
    },
    solutions: [
      { title: "24/7 Intake Automation", body: "Conversational intake flow available around the clock — SMS, web chat, or email — that captures prospective client information and begins the intake process without requiring a staff member to be available.", package: "Capture, Response & Conversion" },
      { title: "Speed-to-Lead Response", body: "Rapid automated acknowledgment and qualification follow-up for inbound inquiries — reducing the delay between first contact and firm response.", package: "Capture, Response & Conversion" },
      { title: "Post-Consultation Follow-Up", body: "Structured 30-day sequence for non-converting consultations — educational content, value reinforcement, and deadline framing — that converts stalled consultations into active retainers.", package: "Retention, Recovery & Growth" },
      { title: "Pipeline Visibility Dashboard", body: "Real-time view of every consultation, intake, and pending retainer — with status, follow-up timing, and revenue at stake — so managing partners have full visibility into the intake pipeline.", package: "Measurement & Continuous Optimization" },
    ],
    faqs: [
      {
        q: "How does intake automation work for law firms?",
        a: "Intake automation deploys a conversational flow — via SMS, web chat, or email — that collects prospective client information, case details, and contact preferences as a conversation rather than a form. It operates 24/7 and routes qualified prospects to the appropriate attorney or intake coordinator based on practice area and urgency.",
      },
      {
        q: "What is speed-to-lead for law firms?",
        a: "Speed-to-lead for law firms refers to the time between a prospective client's initial inquiry and the first firm response. Research suggests legal prospects convert at higher rates when the initial response is prompt. Speed-to-lead automation can provide an immediate, professional automated acknowledgment — regardless of time of day — while routing the inquiry to appropriate staff.",
      },
      {
        q: "Is there a conflict with attorney-client privilege or bar rules?",
        a: "Blue Oak's intake and follow-up systems are designed to operate within appropriate professional boundaries. They collect information and initiate contact — they do not provide legal advice. All deployment designs are reviewed for compliance with applicable bar association communication and solicitation rules before going live.",
      },
      {
        q: "How does post-consultation follow-up work for law firms?",
        a: "Post-consultation follow-up automation deploys a structured, time-sequenced series of touchpoints — educational content, case guidance, value reminders — for prospective clients who attended a consultation but did not immediately sign a retainer. The sequence is designed to keep the firm top-of-mind and provide value, not to pressure.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Revenue Infrastructure for Real Estate Teams",
    subheadline: "Real estate teams generate high volumes of inbound inquiry — and lose a disproportionate amount of it to slow response, no follow-up system, and the absence of a long-term nurture infrastructure.",
    schemaDescription: "Revenue Infrastructure™ for real estate teams, including systems for rapid lead response, long-term lead nurture, past client reactivation, and pipeline visibility.",
    leaks: [
      {
        title: "Slow response to property inquiries",
        body: "Real estate leads have one of the shortest decision windows in any industry. A prospective buyer or seller who submits an inquiry and doesn't hear back within 5–10 minutes is likely to contact the next agent or team they see. Speed-to-lead is the single highest-leverage variable in real estate conversion.",
      },
      {
        title: "No long-term lead nurture",
        body: "Most real estate CRM contacts are either actively followed up or effectively abandoned. Leads who aren't ready to transact in the next 30 days typically receive no structured outreach and eventually go cold or choose another agent when they're ready. A 12–24 month nurture sequence can re-engage these leads without the acquisition cost of generating new ones.",
      },
      {
        title: "No past client reactivation system",
        body: "Past clients are the most cost-effective source of new business — through personal transactions, referrals, and investment activity. Without an automated annual touchpoint system, most agents allow these relationships to decay passively. A structured annual client nurture sequence maintains the relationship without requiring manual effort.",
      },
      {
        title: "Open house follow-up gaps",
        body: "Open house attendees who don't immediately engage are frequently not followed up beyond one or two calls. A structured 21-day post-open-house sequence — personalized to the property and the visitor's stated interest — gives attendees further opportunities to re-engage as active buyers.",
      },
      {
        title: "Portal lead leakage",
        body: "Leads from Zillow, Realtor.com, and similar portals represent paid acquisition. If response time is slow or the intake experience is poor, these leads convert at low rates — making paid portal leads appear unprofitable when the issue is actually follow-up infrastructure.",
      },
    ],
    assessmentExample: {
      title: "Real Estate Revenue Recovery — Example Scenario",
      scenario: "A 6-agent team generates 140 inbound leads per month from paid portals, organic search, and open houses. Average response time to portal leads is 4 hours. Post-showing follow-up is inconsistent — handled manually by each agent. The team closes 14% of all leads within 90 days.",
      finding: "Speed-to-lead matters in real estate. For illustration: a team closing 14% of leads today might see improved results with faster response. Even a modest conversion improvement from faster first contact can represent meaningful additional closings at current lead volume.",  // Illustrative reasoning, not a performance claim
      value: "Additional closings at improved conversion rate: 3–4/quarter. Average commission per transaction: determined during the Revenue Infrastructure Assessment™.",
    },
    recoveryExample: {
      title: "Long-Term Nurture Recovery — Example Scenario",
      scenario: "A team has 380 CRM contacts classified as 'long-term buyer' or 'not yet ready' who have received no systematic outreach in 6+ months. A 12-month nurture sequence is deployed.",
      mechanism: "Monthly market update emails + bi-monthly personalized SMS check-ins + property match alerts based on stated search criteria",
      result: "For illustration: a team with 380 dormant CRM contacts and a 10% reactivation rate (assumption) over 12 months would see approximately 38 leads re-engage. Even modest conversion of those re-engaged leads represents business from a pipeline that would otherwise generate nothing without outreach.",  // Illustrative assumption
    },
    solutions: [
      { title: "Speed-to-Lead Automation", body: "Rapid automated response to inbound inquiries across all sources — portals, web forms, social media, and calls — reducing the delay between inquiry and first contact.", package: "Capture, Response & Conversion" },
      { title: "Long-Term Lead Nurture", body: "12–24 month automated nurture sequences personalized to each prospect's stated search criteria, timeline, and contact history.", package: "Retention, Recovery & Growth" },
      { title: "Past Client Annual Touchpoint", body: "Automated annual client relationship maintenance — market updates, anniversary touches, neighborhood news — that keeps the relationship warm without requiring an agent to remember each outreach.", package: "Retention, Recovery & Growth" },
      { title: "Open House Follow-Up Sequences", body: "Automated 21-day follow-up sequences for open house attendees — personalized to the property and the visitor's stated interest.", package: "Capture, Response & Conversion" },
      { title: "Pipeline Intelligence Dashboard", body: "Real-time view of all leads by stage, source, and follow-up timing — so team leaders know exactly where revenue is stalling.", package: "Measurement & Continuous Optimization" },
    ],
    faqs: [
      {
        q: "What is speed-to-lead automation for real estate?",
        a: "Speed-to-lead automation is a system that can be configured to acknowledge and initiate contact with inbound leads rapidly — regardless of source or time of day. For real estate, where buyers and sellers are often exploring multiple agents simultaneously, being among the first to respond is a meaningful competitive advantage.",
      },
      {
        q: "How does long-term lead nurture work for real estate teams?",
        a: "A long-term nurture system deploys a structured sequence of automated touchpoints — market updates, personalized property alerts, check-in messages — over a 12–24 month period for leads that are not yet ready to transact. The goal is to remain the agent of record in the prospect's mind when they become ready to act.",
      },
      {
        q: "How does Blue Oak help real estate teams with past client reactivation?",
        a: "Blue Oak deploys an automated annual client relationship maintenance system — a series of touchpoints throughout the year (market update emails, neighborhood reports, anniversary messages, personalized check-ins) — that keeps past clients engaged without requiring manual effort from the agent.",
      },
    ],
  },
  {
    slug: "hospitality-tourism",
    name: "Hospitality & Tourism",
    headline: "Revenue Infrastructure for Hospitality & Tourism Businesses",
    subheadline: "Hotels, tour operators, resorts, and tourism businesses lose significant booking revenue to missed inquiries, slow response, and the absence of off-season reactivation systems. Blue Oak builds the infrastructure that recovers it.",
    schemaDescription: "Revenue Infrastructure™ for hospitality and tourism businesses, including systems for booking inquiry recovery, group sales follow-up, off-season reactivation, and guest communication.",
    leaks: [
      {
        title: "Missed booking inquiry calls",
        body: "Travellers researching accommodations and tours often call multiple providers simultaneously. A missed call with no automated follow-up means the booking goes to the property or operator that responded first. In a high-volume inquiry environment, this can represent significant monthly revenue loss.",
      },
      {
        title: "Abandoned online booking inquiries",
        body: "Visitors who begin an inquiry via contact form or website chat but don't complete a booking — due to unanswered questions, slow response, or distraction — represent a high-intent audience that is rarely systematically followed up. An automated 7-day follow-up sequence gives these inquiries further opportunities to convert.",
      },
      {
        title: "No off-season reactivation system",
        body: "Past guests who stayed during peak season represent the highest-probability audience for off-season bookings — they already know and trust the property. Without an automated off-season campaign reaching out with value-based messaging and availability, this reactivation potential sits dormant.",
      },
      {
        title: "Group and event inquiry drop-off",
        body: "Group bookings — weddings, corporate retreats, tour groups — have longer sales cycles and typically require multiple touchpoints before a decision. Most properties have no structured group sales follow-up infrastructure, losing high-value bookings to competitors who follow up more persistently.",
      },
      {
        title: "Post-stay reactivation gaps",
        body: "Guests who had a positive stay are the most likely to rebook or refer new guests. Without automated post-stay follow-up — a review request, a rebooking offer, a seasonal prompt — this warm audience cools quickly.",
      },
    ],
    assessmentExample: {
      title: "Hospitality Revenue Recovery — Example Scenario",
      scenario: "A boutique hotel in a tourism market receives 80 direct booking inquiries per month via phone and email. Approximately 18 of these inquiries — primarily after-hours calls and weekend web forms — receive no response within 24 hours.",
      finding: "For illustration: suppose the property receives 18 unresponded inquiries per month, 50% would have booked with timely follow-up (assumption), and the average stay is worth $520. Illustrative potential: approximately $4,680/month. Actual figures depend on property type, market, and inquiry quality.",  // Illustrative assumptions
      value: "Illustrative estimate based on assumptions above. Not a Blue Oak benchmark.",  // Illustrative only
    },
    recoveryExample: {
      title: "Off-Season Reactivation — Example Scenario",
      scenario: "A resort property has 640 guests from the previous year's peak season. An off-season reactivation campaign is deployed 8 weeks before the slower season begins — offering value messaging and priority availability.",
      mechanism: "3-touch email + SMS campaign: value offer (Week 1), urgency + limited availability (Week 2), final outreach (Week 3)",
      result: "For illustration: assume 640 past guests, a 10% reactivation rate (assumption), and $480 average booking value. That represents approximately $30,720 from an off-season campaign to a segment that would otherwise generate nothing. Actual reactivation rates vary by property, guest type, and campaign quality.",  // Illustrative assumptions
    },
    solutions: [
      { title: "Missed Call & Inquiry Recovery", body: "Automated follow-up for missed calls and web form submissions — initiating a booking conversation and capturing guest interest before they book elsewhere.", package: "Capture, Response & Conversion" },
      { title: "Abandoned Inquiry Follow-Up", body: "7-day automated sequence for incomplete online inquiries — addressing common questions, offering assistance, and re-presenting availability with a direct booking path.", package: "Capture, Response & Conversion" },
      { title: "Past Guest Reactivation", body: "Segmented reactivation campaigns for past guests — seasonal offers, anniversary stays, loyalty messaging — timed to reach them before they make competing travel plans.", package: "Retention, Recovery & Growth" },
      { title: "Group Sales Follow-Up", body: "Structured multi-touch follow-up sequences for group and event inquiries — timed to the group's decision timeline and escalating in value and urgency.", package: "Retention, Recovery & Growth" },
      { title: "Post-Stay Engagement", body: "Automated post-stay sequence: review request (Day 2), re-booking offer (Day 14), seasonal prompt (Day 60) — maintaining the guest relationship without requiring staff to track and send each touch.", package: "Capture, Response & Conversion" },
    ],
    faqs: [
      {
        q: "What is booking inquiry recovery for hospitality businesses?",
        a: "Booking inquiry recovery is an automated system that detects missed calls or unresponsive web form submissions and initiates follow-up — via SMS, email, or WhatsApp — to re-engage the potential guest before they finalize a booking with a competing property. For hospitality businesses, speed of response is directly correlated with booking conversion.",
      },
      {
        q: "How does off-season reactivation work?",
        a: "Off-season reactivation is a timed, automated campaign deployed to past guests before the slower season begins. It presents value-based messaging — early booking offers, exclusive packages, loyalty recognition — through a multi-touch sequence (email + SMS) and links directly to availability and booking. The goal is to convert past guests into off-season bookings before they commit to other travel plans.",
      },
      {
        q: "How does Blue Oak help with group sales for hotels and tourism operators?",
        a: "Blue Oak deploys a structured group sales follow-up infrastructure — a timed multi-touch sequence for every group or event inquiry that tracks the group's decision timeline and escalates outreach appropriately. This helps keep high-value group bookings from falling through the cracks due to a lack of persistent, systematic follow-up.",
      },
      {
        q: "Does this work for Jamaican tourism businesses?",
        a: "Yes. Blue Oak has Jamaica-specific infrastructure — including WhatsApp-first delivery, local pricing, and deployment experience in the Jamaican market. Jamaica pricing is available at /pricing/jamaica.",
      },
    ],
  },
  {
    slug: "auto-sales-service",
    name: "Auto Sales & Service",
    headline: "Revenue Infrastructure for Auto Sales & Service",
    subheadline: "Dealerships, repair shops, tire shops, body shops, and vehicle importers lose significant revenue to unanswered inquiries, slow financing follow-up, abandoned test-drive requests, and service appointment gaps. Blue Oak builds the systems that capture and recover that revenue.",
    schemaDescription: "Revenue Infrastructure™ for auto dealers, car lots, repair shops, and vehicle service businesses, including systems for missed inquiry recovery, financing follow-up, test-drive conversion, and service appointment management.",
    leaks: [
      {
        title: "Missed vehicle inquiries and unanswered WhatsApp messages",
        body: "Buyers shopping for vehicles move fast. A missed call or an unanswered WhatsApp message during business hours — or after hours — often means the buyer contacts the next lot on their list. With no automated follow-up, the inquiry is lost with no record and no recovery attempt.",
      },
      {
        title: "Slow financing and credit application follow-up",
        body: "Customers who submit financing applications or request credit approval are actively ready to buy. Delays in follow-up — even a few hours — create doubt, invite competitor comparisons, and frequently result in the buyer choosing a lot that responds faster. Speed-to-lead on financing inquiries is a direct revenue variable.",
      },
      {
        title: "Abandoned test-drive requests",
        body: "A customer who requests a test drive has demonstrated high purchase intent. Without an automated confirmation, reminder, and no-show recovery sequence, test drive slots go unfilled and high-intent buyers disappear without a structured re-engagement attempt.",
      },
      {
        title: "Service appointment no-shows and cancellations",
        body: "Service departments lose revenue every day to no-shows and last-minute cancellations with no waitlist fill system. At an average service ticket of $280–$600, each empty bay is a quantifiable daily revenue loss that compounds across the week.",
      },
      {
        title: "Unsold inventory follow-up gap",
        body: "Customers who viewed a vehicle — in person or online — but didn't purchase are the highest-probability leads in any lot's pipeline. Without a structured 30–60 day follow-up sequence, these contacts receive one call and are abandoned. The sale goes to whoever stays present.",
      },
      {
        title: "Estimate and repair quote abandonment",
        body: "Customers who receive a repair or service estimate but don't book represent recoverable revenue. A structured 14-day follow-up sequence with value reinforcement and scheduling convenience consistently converts a portion of these abandoned estimates into confirmed jobs.",
      },
    ],
    assessmentExample: {
      title: "Auto Lot Missed Inquiry Assessment — Example Scenario",
      scenario: "A used car lot with 80 inbound inquiries per week — via phone, WhatsApp, and web form — has no after-hours automation. 35% of inquiries arrive outside business hours with no response until the following morning.",
      finding: "For illustration: assume 28 after-hours inquiries per week (35% of 80 total — an assumption), 25% conversion rate (assumption), and $1,800 average gross per vehicle. Illustrative potential: up to $12,600/week from after-hours leads alone. Actual figures depend on the lot's traffic and conversion patterns.",  // Illustrative assumptions
      value: "Illustrative estimate based on assumptions above. Not a Blue Oak benchmark or expected result.",  // Illustrative only
    },
    recoveryExample: {
      title: "Unsold Inventory Follow-Up — Example Scenario",
      scenario: "A dealership has 140 prospects who test-drove or seriously inquired about a vehicle in the past 60 days but did not purchase. A structured follow-up sequence is deployed with updated inventory availability, financing options, and a low-friction re-engagement offer.",
      mechanism: "Automated 30-day multi-touch sequence via SMS + WhatsApp + email, personalized by vehicle of interest and last contact date",
      result: "For illustration: assume 140 dormant prospects and a 10% re-engagement rate (assumption). At $1,800 average gross per vehicle, 14 re-engaged prospects represent approximately $25,200 in pipeline from leads already in the database. Actual re-engagement rates depend on how long leads have been dormant and the follow-up approach.",  // Illustrative assumptions
    },
    solutions: [
      {
        title: "Missed Inquiry Text-Back",
        body: "Automated SMS and WhatsApp response to missed calls and unanswered messages — capturing buyer interest before they contact the next lot on their list.",
        package: "Capture, Response & Conversion",
      },
      {
        title: "After-Hours Lead Capture",
        body: "24/7 automated intake flow for all after-hours inquiries — vehicle interest, availability questions, financing requests — with intelligent routing and a follow-up sequence that deploys the next morning.",
        package: "Capture, Response & Conversion",
      },
      {
        title: "Financing Follow-Up Automation",
        body: "Rapid follow-up automation for credit and financing applications — automated acknowledgment, status updates, and a structured follow-up cadence that keeps the buyer engaged while the application is processed.",
        package: "Retention, Recovery & Growth",
      },
      {
        title: "Test-Drive Conversion Sequence",
        body: "Automated confirmation, reminder (24hr + 2hr), and no-show recovery sequence for every scheduled test drive — with re-booking links and alternative availability if the appointment is missed.",
        package: "Capture, Response & Conversion",
      },
      {
        title: "Unsold Inventory Re-Engagement",
        body: "Structured 30–60 day automated follow-up campaigns for prospects who viewed or inquired about a vehicle but didn't purchase — personalized by vehicle interest, visit date, and stated buying timeline.",
        package: "Retention, Recovery & Growth",
      },
      {
        title: "Service Department Revenue Protection",
        body: "Appointment confirmation and multi-step reminder sequences for service bookings, with waitlist automation to fill cancellations and a re-booking sequence for no-shows.",
        package: "Capture, Response & Conversion",
      },
      {
        title: "Estimate & Quote Follow-Up",
        body: "Automated 14-day follow-up sequence for repair and service estimates that weren't immediately booked — value reinforcement, scheduling convenience, and urgency framing without pressure.",
        package: "Retention, Recovery & Growth",
      },
      {
        title: "Demand & Revenue Intelligence Dashboard",
        body: "Real-time pipeline visibility across all inquiry sources, vehicle interest categories, and service department activity — with lead scoring, conversion tracking, and revenue attribution so operators always know where money is moving and where it's stalling.",
        package: "Measurement & Continuous Optimization",
      },
    ],
    faqs: [
      {
        q: "How does missed inquiry recovery work for a car lot or dealership?",
        a: "When a call goes unanswered or a WhatsApp message receives no reply within a set window, the system automatically sends a response — acknowledging the inquiry, asking about the vehicle or service they're interested in, and initiating a conversation. This runs 24/7, capturing after-hours and peak-hour overflow without requiring a staff member to be available.",
      },
      {
        q: "Can Blue Oak integrate with dealership management systems or CRMs?",
        a: "Yes. Blue Oak systems connect with CRMs and DMS platforms including HubSpot, Pipedrive, and custom setups via API. In Jamaica, WhatsApp Business API is used as the primary delivery layer. In the U.S., SMS + email + CRM integration is standard. A Revenue Snapshot or Assessment maps your current stack and identifies integration points before any build begins.",
      },
      {
        q: "What is the typical revenue recovery opportunity for an auto service business?",
        a: "It varies significantly by business type, volume, and market. Service departments with meaningful appointment volume and no-show patterns may have recoverable revenue from unfilled bays. For sales operations, the after-hours inquiry gap and unsold inventory follow-up are common areas worth investigating. A Revenue Snapshot™ and Assessment identify the specific opportunities for your operation.",
      },
      {
        q: "Does this work for used car lots and independent dealers — not just franchises?",
        a: "Yes. Blue Oak infrastructure is designed to be deployable for independent lots, used car operations, vehicle importers, and dealer groups of all sizes. The systems scale with your inquiry volume and inventory turnover — there is no minimum size requirement.",
      },
      {
        q: "How does Blue Oak help with WhatsApp-based auto inquiries in Jamaica?",
        a: "In Jamaica, WhatsApp is the dominant channel for vehicle inquiries. Blue Oak can deploy WhatsApp Business API automation that responds promptly to inquiries, routes them by intent (vehicle availability, test drive, financing, service), and initiates intake and follow-up sequences — all within WhatsApp, without requiring the customer to switch channels.",
      },
      {
        q: "What is Demand Intelligence for auto sales?",
        a: "Demand Intelligence for auto businesses tracks which inventory categories are generating the most inquiries, which channels are producing the highest-intent buyers, and where demand patterns are strongest by time of day, day of week, and vehicle type — so marketing spend and follow-up resources are concentrated where conversion probability is highest.",
      },
    ],
  },
];

export const getIndustryBySlug = (slug: string): IndustryData | undefined =>
  INDUSTRIES.find((i) => i.slug === slug);
