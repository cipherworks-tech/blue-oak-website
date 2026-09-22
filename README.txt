BLUEOAK-LAUNCH-READY-v3.2.6
Blue Oak Revenue Infrastructure™
Last updated: August 2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AT A GLANCE

- Active public industries: 5 (see /industries)
- Healthcare / dental: ARCHIVED, not marketed publicly.
  See src/lib/industries.archived.ts for reactivation checklist.
- Active markets: United States and Jamaica (two markets, one brand).
- Jamaican legal entity wording: PENDING owner/legal confirmation.
  See marketConfig.ts JM.legalEntity / legalEntityNote / serviceProvider.
- v3.2.6 is the final planned source-content correction pass before
  production build verification and live integration testing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEPLOYMENT

1. Copy .env.example to .env
2. Set VITE_LEAD_WEBHOOK_URL (Make.com webhook)
3. Set VITE_BOOKING_URL (Google Calendar booking page)
4. npm install
5. npm run build
6. Push /dist to GitHub
   GoDaddy pulls automatically from the connected repo.

Dev preview:
   npm run dev → http://localhost:5173

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENVIRONMENT VARIABLES

Both variables are BROWSER-ACCESSIBLE (Vite VITE_ prefix).
They are visible in the built JavaScript bundle.
Do not treat them as secrets. Protect receiving services
through validation, filtering, and rate limiting.

VITE_LEAD_WEBHOOK_URL
  Status: REQUIRES EXTERNAL CONFIGURATION
  Make.com webhook for lead form delivery.
  Both the Contact form and Revenue Snapshot form POST here.
  Make scenario should validate, filter, route to Airtable,
  and send Blue Oak notification.

VITE_BOOKING_URL
  Status: REQUIRES EXTERNAL CONFIGURATION
  Google Calendar Appointment Scheduling page URL.
  When set: Contact and Revenue Snapshot pages show
  "View Available Times" → real Google booking page.
  When not set: professional fallback message shown.

  Setup:
  1. In Google Calendar, create an Appointment Schedule
     "Blue Oak Revenue Infrastructure Consultation"
     (Recommended: 30 min, Google Meet enabled)
  2. Publish the booking page
  3. Paste the URL into .env as VITE_BOOKING_URL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT JOURNEY (Approved Sequence)

STEP 1: Complimentary Revenue Snapshot™
  /revenue-snapshot
  High-level preliminary review.
  Surfaces visible opportunities and possible gaps.
  Does NOT promise comprehensive diagnosis or recovery plan.

STEP 2: Revenue Infrastructure Assessment™
  /revenue-infrastructure-assessment
  Paid comprehensive diagnostic where warranted.

STEP 3: Revenue Recovery Plan™
  Prioritized recommendations based on Assessment findings.

STEP 4: Revenue Infrastructure Implementation™
  Systems built and deployed.

STEP 5: Continuous Optimization™
  Measurement, improvement, expansion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCHEDULING ARCHITECTURE

IMPLEMENTED:
  Website → VITE_BOOKING_URL → Google Calendar
  (when VITE_BOOKING_URL is set)

ARCHITECTURALLY PREPARED / NOT YET LIVE:
  Maya → Make.com → Google Calendar
  (requires voice platform + Make scenario configuration)

GOVERNING RULE:
  Google Calendar is the scheduling source of truth.
  The website does not control availability.
  Maya must not invent availability.
  Neither system claims a booking is confirmed
  until Google Calendar confirms it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MAYA — AI VOICE ASSISTANT ARCHITECTURE

READY: Website architecture is designed for Maya integration.
NOT CONFIGURED: Maya live calendar booking requires:
  1. Vapi voice configuration
  2. Make.com scenario connecting Maya → Google Calendar
  3. Availability check operations
  4. Appointment creation with confirmation gate
  5. End-to-end testing before going live

MAYA RULE: Maya may only claim an appointment is confirmed
after receiving successful confirmation from Google Calendar.
Maya must not invent availability or fabricate bookings.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEAD INFRASTRUCTURE

Website → Make.com → Airtable (current launch architecture)

Airtable is the current operational lead database.
The website connects to Make via VITE_LEAD_WEBHOOK_URL only.
No Airtable API keys go into the browser.
The architecture is database-agnostic for future migration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROUTES

ACTIVE:
  /                               Home
  /services                       Revenue Infrastructure™ Services
  /pricing                        Pricing hub (market selector)
  /pricing/united-states          US pricing
  /pricing/jamaica                Jamaica pricing
  /revenue-snapshot               Revenue Snapshot™ (primary entry point)
  /revenue-infrastructure-assessment  Revenue Infrastructure Assessment™
  /revenue-recovery-scenarios     Illustrative Revenue Scenarios
  /revenue-intelligence-faq       Revenue Intelligence FAQ
  /what-is-revenue-infrastructure  Educational page
  /how-much-revenue-are-you-losing-from-missed-calls  Educational page
  /why-marketing-fails-without-revenue-infrastructure  Educational page
  /industries                     Industry listing
  /industries/:slug               Industry detail (5 active public industries)
  /about                          About Blue Oak
  /blog                           Blog listing (6 posts)
  /blog/:slug                     Blog post
  /contact                        Contact / consultation
  /privacy                        Privacy Policy
  /terms                          Terms of Service

LEGACY REDIRECTS (preserved):
  /revenue-audit → /revenue-snapshot  (via useEffect in RevenueAudit.tsx)
  /testimonials → /revenue-recovery-scenarios

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CENTRALIZED CONFIGURATION

src/lib/marketConfig.ts — single source of truth for:
  - Market pricing (US and Jamaica)
  - Phone, WhatsApp, email contact details
  - Legal entity names
  - CTA paths (snapshotPath, assessmentPath, contactPath)
  - Currency and market labels
  - bookingUrl (reads from VITE_BOOKING_URL)

When pricing changes: update marketConfig.ts only.
When Jamaica entity is formally incorporated: update JM.legalEntity only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRICING (current — from marketConfig.ts)

United States (USD):
  Community Impact:  $497/month   (eligibility/application required)
  Starter:           $1,197/month
  Growth:            $2,397/month
  Premium:           $3,997/month
  Assessment:        Provided during consultation

Jamaica (JMD):
  Community Impact:  J$45,000/month  (eligibility/application required)
  Starter:           J$95,000/month
  Growth:            J$190,000/month
  Premium:           J$315,000/month
  Assessment:        Provided during consultation

Community Impact is NOT the standard entry-level price.
It is an eligibility-based tier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEALTHCARE / DENTAL — PAUSED FROM ACTIVE PUBLIC MARKETING

STATUS: Healthcare and dental are currently PAUSED from active
public marketing. They are NOT marketed on the live website.

This pause remains in force until the required compliance
infrastructure and operating controls are in place, including:
  - Compliant data architecture for regulated information
  - Vendor BAAs where applicable (Airtable, Make, Twilio, Vapi)
  - Security controls and documented operating procedures
  - Legal review of healthcare marketing claims

Website removal does NOT mean permanent enterprise removal.
Healthcare content is PRESERVED in:
    src/lib/industries.archived.ts
That file is not imported by the active application. Its header
contains the full reactivation checklist.

Do not reactivate healthcare routes, navigation entries, sitemap
URLs, form options or schema references until the above is ready.

DATA BOUNDARY (applies now and after any reactivation):

Blue Oak does NOT collect, store, or process:
  - Patient health information
  - Diagnoses or symptoms
  - Medical history or treatment details
  - Insurance details
  - PHI of any kind

No page makes any HIPAA, PHI-readiness or healthcare compliance
claim. Maya follows the same boundary on sales calls.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BRAND COLORS

Primary Navy:    #0B1F3A  (dominant — 70-80%)
Gold:            #D4AF37  (accent only — 5-10%)
White:           #FFFFFF

NEVER USE: teal, cyan, orange, neon, AI-agency positioning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS (verified)

US Phone:    +1 (248) 988-0542
JA WhatsApp: 876-307-8916
Email:       info@blueoakautomation.com
US:          Detroit, Michigan
JA:          Mandeville, Manchester

INTERNAL — NEVER PUBLIC:
Demo line +1 (248) 834-9808 — must never appear in any rendered page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LAUNCH CHECKLIST

P0 — REQUIRED BEFORE GOING LIVE:
[ ] Set VITE_LEAD_WEBHOOK_URL in production environment
[ ] Submit test Contact message — verify Make receives it
[ ] Submit test Revenue Snapshot — verify Make receives it
[ ] Set VITE_BOOKING_URL — confirm Google Calendar page opens
[ ] Book a test appointment — verify it appears in Google Calendar
[ ] Verify test booking creates conflict protection
[ ] Remove test appointment afterward

RECOMMENDED:
[ ] npm run build — confirm zero TypeScript errors
[ ] Visual check: mobile (360px, 390px) and desktop
[ ] Confirm robots.txt accessible at /robots.txt
[ ] Submit sitemap.xml to Google Search Console
[ ] Confirm founder photo renders on About page
[ ] Confirm GBP listings live for US and Jamaica

POST-LAUNCH (non-blocking):
[ ] Real client results → enable SocialProofTicker.tsx
[ ] Maya Make scenario + calendar integration → test end-to-end
[ ] Per-page meta tags and canonical tags (SEO improvement)
[ ] Blue Oak Academy content (when ready)
[ ] Blog articles for GEO authority building

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QA DEFECT CORRECTION — POST v3.2.6 (August 2026)

One confirmed active-public claims defect found during independent QA
and corrected. Not a new source-content iteration.

  blogPosts.ts   "Automated Missed Call Text-Back operates in a 30-60
                 second response window, regardless of what your staff
                 is doing." REMOVED (unsupported exact timing claim,
                 missed by prior claims sweeps).
                 -> "Automated Missed Call Text-Back can trigger
                 promptly after an unanswered call, based on the
                 configured workflow. That turns speed-to-lead from a
                 staff-dependent goal into a repeatable system."

  blogPosts.ts   Adjacent claim inspected per QA instruction: "MIT
                 research published in the Harvard Business Review
                 found that the odds of qualifying a lead decrease by
                 10x after the first hour and by 21x after the first
                 day." No source for this attribution or these exact
                 multipliers exists in the project's documented
                 sources, so per the fallback rule the precise figures
                 and citation were removed rather than published
                 unverified. Softened to a qualitative statement
                 preserving the underlying point (response speed
                 matters, and drops off fast) without a specific,
                 unverifiable number or attribution.

  Re-ran the full active-public claims sweep after the fix. Confirmed
  clean: no "30-60 second response window," no unsupported exact
  response-time guarantees, no unsupported numerical performance
  claims. Archived healthcare content (industries.archived.ts) was
  not touched.

WHAT CHANGED IN v3.2.6 — PERSUASION & COPY-QUALITY PASS
(second v3.2.6 revision, same day)

This is an ADDITIONAL pass on top of the v3.2.6 technical corrections
documented below. Source content was already correct; this pass
improved clarity, self-recognition, and reading flow on the highest-
traffic pages. No claims were loosened, no new numerical claims were
introduced, no pricing or architecture changed.

  Home.tsx (hero)   H1 changed from "Build the Systems That Turn More
                    Business Activity Into Revenue." to "Your Business
                    Generates More Opportunity Than It Captures." —
                    leads with self-recognition instead of an abstract
                    capability statement. Sub-headline now echoes the
                    exact phrasing used in the problem list just below
                    it ("Calls go unanswered. Leads wait too long.
                    Follow-up stops before it should.") before naming
                    Blue Oak's mechanism and outcome — reinforces
                    recognition through repetition rather than
                    introducing new claims.

  Home.tsx (problem section close)
                    "These may look like separate problems. Often,
                    they are infrastructure problems." tightened to
                    "They look like separate problems. Usually, they
                    share one cause." — shorter, same hedge level
                    ("usually" retained, not "always"), better
                    sentence-to-sentence momentum.

  About.tsx (hero)  H1 changed from "...Businesses That Refuse to
                    Leave Money on the Table" (generic agency cliché,
                    used by virtually every marketing/consulting site)
                    to "...Businesses That Want to Know Exactly Where
                    Their Revenue Is Going" — same identity-signal
                    function, more specific to Blue Oak's diagnosis-
                    first positioning, less interchangeable with a
                    competitor's website.

  Services.tsx, RevenueSnapshot.tsx, Industries.tsx
                    Reviewed against the copy-quality checklist.
                    No changes made — hero copy, the Snapshot's
                    reciprocity framing, and the Assessment
                    distinction were already clear, specific, and
                    free of hype or fabricated proof. Changing
                    working copy for its own sake was avoided.

  Full-repository sweep for generic hype language ("revolutionary,"
  "cutting-edge," "game-changing," "world-class," etc.): NONE FOUND.

  No new testimonials, statistics, customer counts, or social proof
  of any kind were added. Where genuine social proof does not exist,
  none was fabricated — per directive, credibility is carried by
  the Revenue Snapshot's methodology and specificity, not manufactured
  numbers.

  Internal persuasion/copywriting lenses used to evaluate copy during
  this pass are not named here or anywhere in the source — they are
  working methodology, not customer-facing content.

WHAT CHANGED IN v3.2.6 (August 2026)

── CLAIMS CLEANUP (25 corrections) ──
  BeforeAfter.tsx        "Most respond by touch 3" removed
  blogPosts.ts (x9)      "Systems can respond instantly" softened;
                          "recover thousands per month" softened;
                          "recovers a meaningful percentage ... every
                          time" softened; "typically show early results
                          within the first weeks" softened; "often
                          within the first minute" softened;
                          "A salesperson can manage 50-80 active leads.
                          An automated system can manage 5,000" removed
                          (unsupported specific numbers); "$100,000/month
                          in pipeline" now explicitly illustrative with
                          stated assumptions
  industries.ts (x5)     "recovers/converts a meaningful/significant
                          percentage" claims (4 instances) softened to
                          "gives further opportunities to convert";
                          "often within the first minute of inquiry"
                          softened
  WhatIsRevenueInfrastructure.tsx
                          "Instant lead response" -> "Prompt, automated
                          lead response"

── DEMAND / MARKETING POSITIONING ──
  WhatIsRevenueInfrastructure.tsx
      "Most businesses do not lose money because they lack customers"
      rewritten to diagnosis-first framing (different businesses have
      different constraints).
  index.html (JSON-LD FAQ)
      "Most businesses that feel marketing isn't working are actually
      losing leads after they arrive" rewritten — now states Revenue
      Infrastructure covers the full path including visibility/demand
      generation where that is the diagnosed constraint.
  CONFIRMED: Blue Oak remains Revenue Infrastructure(TM), not a
  traditional marketing agency. Visibility & Opportunity Creation
  remains a fully supported capability group.

── GOVERNED AI / AUTONOMY LANGUAGE ──
  RevenueRecoveryScenarios.tsx (x2), industries.ts (x2),
  MissedCallRevenue.tsx (x1), blogPosts.ts (x1)
      "without manual staff involvement" / "without manual outreach
      from staff" / "without manual effort" (x3) / "runs whether or
      not anyone is actively managing it at any given moment"
      all rewritten to governed-automation language — routine work
      runs without depending on staff memory; consequential actions
      remain available for review.
  industries.ts (x2)
      "ensures every referred contact is processed" / "This ensures
      high-value group bookings don't fall through the cracks" —
      "ensures" (absolute guarantee word) softened to "is designed to"
      / "helps keep ... from falling through the cracks".

── PUBLIC ARCHITECTURE NORMALIZED (CRITICAL FIND) ──
  Found THREE competing frameworks beyond the five capability groups:

  1) blogPosts.ts — "The Four Layers of Revenue Infrastructure"
     (two separate blog posts each presented this as THE definitive
     top-level framework, with "Layer 1/2/3/4:" prefixes).
     FIXED: retitled "Four Supporting Intelligence Functions", explicit
     sentence added tying them to the five capability groups
     (chiefly Systems, AI & Automation and Measurement & Continuous
     Optimization), "Layer N:" prefixes removed.

  2) IndustryPage.tsx — a hidden "five operating disciplines" card
     grid using ENTIRELY DIFFERENT labels ("Revenue Recovery",
     "Revenue Intelligence", "Lead Conversion", "Operational
     Intelligence", "Revenue Infrastructure") including autonomy
     language ("Eliminate process overhead", "Build systems that run
     without you").
     FIXED: replaced with the actual five approved capability groups.

  3) industries.ts / Terms.tsx / IndustryPage.tsx — old formal package
     names competing with the commercial tiers (see below).

  Demand/Lead/Revenue/Operational Intelligence concepts are RETAINED
  as supporting analytical functions within the architecture — not
  deleted, only reframed so they no longer read as a competing
  top-level framework.

── OLD PACKAGE NAME REMOVAL (27 instances) ──
  industries.ts    "Foundation System(TM)" (13x) -> "Capture, Response
                    & Conversion"
                    "Revenue Recovery System(TM)" (9x) -> "Retention,
                    Recovery & Growth"
                    "Revenue Engine System(TM)" (3x) -> "Measurement &
                    Continuous Optimization"
                    (badges now map directly onto the five approved
                    capability groups instead of obsolete product names)
  IndustryPage.tsx  PACKAGE_COLORS keys renamed to match. Added
                    PACKAGE_SHORT_LABELS map so longer group names
                    ("Measurement & Continuous Optimization") don't
                    overflow the badge pill on narrow mobile cards —
                    full name is retained in the underlying data,
                    only the visible badge text is shortened.
  Terms.tsx         Rewrote the "Services" bullet list — replaced
                    "Revenue Recovery Systems / Foundation System
                    infrastructure / Revenue Engine Systems" formal
                    product names with the five capability groups.
  No occurrences intentionally retained — none had a documented
  reason to remain a formal named product.

── MARKET SWITCHER (NEW — visible, persistent) ──
  Navbar.tsx        NEW desktop dropdown (Globe icon + current market
                    label + checkmark on active choice) and NEW mobile
                    toggle (US | JM buttons) in the mobile menu.
                    switchMarket() calls setMarket() (persists via
                    useMarketPreference/localStorage) and, only if the
                    visitor is currently on the OTHER market's pricing
                    page, swaps them to the new market's equivalent
                    page via wouter navigate — no full page reload,
                    no unnecessary redirect otherwise.
  Contact.tsx,
  RevenueSnapshot.tsx
                    Market <select> fields now call setMarket() via
                    onChange, so manually choosing a market inside a
                    form updates the SAME persistent site-wide
                    preference — the site can no longer hold two
                    contradictory market values (form vs. stored pref).
  CONFIRMED: no "America/*" prefix matching exists anywhere in the
  repository. Unknown visitors are still asked, never falsely told
  where they are.

── README ──
  "/industries/:slug Industry detail (7 industries)" corrected to
  "(5 active public industries)". AT-A-GLANCE status block added
  (from v3.2.5's continuation) confirming 5 active industries,
  archived healthcare, two active markets, and the pending Jamaican
  legal-wording flag.

── VERIFICATION FOUND AND FIXED 2 NEW DEFECTS ──
  Navbar.tsx (x2)  TS7053 "implicitly any" when indexing MARKETS with
                    a nullable MarketKey — introduced by this pass's
                    own market-switcher code. Caught by
                    tsc --noEmit and fixed with the same explicit-
                    narrowing pattern used elsewhere in the codebase,
                    before packaging.

WHAT CHANGED IN v3.2.5 (August 2026)

── CLAIMS AUDIT COMPLETED (18 corrections) ──
  BeforeAfter.tsx        "Instant automated response" -> "can be
                          triggered promptly"; "Every opportunity
                          captured" -> "Fewer missed opportunities
                          and clearer visibility"
  blogPosts.ts (x9)      "Within 30-60 seconds" timing claims removed
                          or softened; "always identified" / "eliminate
                          no-shows" / "without staff involvement" removed;
                          "Every missed call is a potential revenue
                          loss" softened; "respond to every inquiry
                          instantly" softened
  industries.ts (x2)     "Most home service companies respond within
                          4-8 hours" removed (unsourced); "firms that
                          respond within 5 minutes convert at 9x the
                          rate" removed (unsourced, no citation existed)
  RevenueIntelligenceFAQ.tsx, Blog.tsx (x3)
                          "typically within about a minute" timing
                          claim softened to workflow-dependent language;
                          "always identified and worked first" removed
  Services.tsx            "capture every inquiry" -> "capture inquiries"
  WhatIsRevenueInfrastructure.tsx (x2)
                          "Instant"/"within 15 minutes" recovery claims
                          softened to capability language

── MARKETING / DEMAND CONTRADICTIONS REMOVED ──
  blogPosts.ts (x4), Blog.tsx (x1), index.html FAQ schema (x1)
  All instances of "Marketing generates demand, Blue Oak captures it"
  and "Most businesses already generate enough demand" rewritten to
  diagnosis-first framing: different businesses have different
  constraints; Blue Oak identifies the constraint before prescribing
  the system. Visibility & Opportunity Creation preserved as a
  legitimate Blue Oak capability. "We don't run ads or create
  content" removed.

── GOVERNED AI ──
  No further violations found beyond the items already corrected via
  the claims audit above (autonomy language and claims language
  overlapped in blogPosts.ts). Confirmed clean: no "no human
  intervention" / "without manual review" / "eliminates" remain.

── MARKET PREFERENCE NOW CONSUMED SITE-WIDE ──
  NEW  src/lib/useMarketPreference.ts
       Thin React hook over marketPreference.ts. Exposes
       { market, hint, setMarket }. No new state framework.

  Navbar.tsx        Pricing nav link now points to the visitor's
                     selected market's pricing page once known;
                     falls back to the /pricing hub otherwise.
  Pricing.tsx        Auto-redirects to the selected market's pricing
                     page on load if a preference is already stored.
                     Both market-card buttons persist the choice via
                     setMarket() when clicked, in addition to
                     navigating.
  Contact.tsx        Market dropdown pre-selects the visitor's known
                     market (defaultValue) rather than always showing
                     the empty placeholder.
  RevenueSnapshot.tsx Same pre-selection behaviour on the Snapshot form.
  Footer.tsx         Unchanged by design — already shows both markets
                     side-by-side as parallel facts, so it does not
                     contradict any stored selection.
  MarketDetectionBanner.tsx  Unchanged from v3.2.4 (already correct):
                     respects getStoredMarket(), never claims a
                     detected location, asks when uncertain.

  CONFIRMED: grep for startsWith("America/") returns zero matches
  anywhere in the repository.

── VERIFICATION FOUND AND FIXED 2 NEW DEFECTS ──
  Navbar.tsx, Pricing.tsx
      TS7053 "implicitly any" when indexing MARKETS with a nullable
      MarketKey. Introduced by this pass's own edits; caught by
      tsc --noEmit and fixed with explicit narrowing before packaging.

WHAT CHANGED IN v3.2.4 (August 2026)

── BROKEN IMPORTS (build blockers) ──
  Blog.tsx           @/data/blogPosts   -> @/lib/blogPosts
  BlogPost.tsx       @/data/blogPosts   -> @/lib/blogPosts
  IndustryPage.tsx   @/data/industries  -> @/lib/industries
  ui/sidebar.tsx     @/hooks/use-mobile -> @/lib/use-mobile
  Verified repo-wide: 149 local imports, 0 unresolved.

── DEFECTS FOUND BY ACTUAL TYPECHECK (tsc ran; npm install did not) ──
  WhatIsRevenueInfrastructure.tsx
        Stray heredoc terminator + shell lines were embedded in the
        file (TS1434 syntax error). Removed. File now ends correctly.
  Industries.tsx
        {ind.leakEstimate} usage survived the v3.2.3 field rename.
        Corrected to {ind.focusAreas}.
  industries.archived.ts
        Still used auditExample after the interface renamed the field
        to assessmentExample. Corrected.
  src/vite-env.d.ts
        MISSING entirely despite 5 import.meta.env usages. Created
        with typed VITE_LEAD_WEBHOOK_URL / VITE_BOOKING_URL / BASE_URL.
  tsconfig.json
        Removed deprecated "baseUrl" (TS6 error TS5101). "paths" is
        resolved relative to tsconfig — valid on TS >= 4.1.

── FIVE CAPABILITY GROUPS ──
  Home.tsx  Visible heading "Four Capability Groups" -> "Five
            Capability Groups". Data already held five.

── MISSION CORRECTED ──
  About.tsx Mission card now reads the official mission:
            "Build prosperous businesses that create prosperous
             communities." with Thriving People -> Prosperous
             Businesses -> Prosperous Communities beneath it.
            The revenue-recovery wording is no longer labelled Mission.

── GOVERNED AI (not implemented in v3.2.3) ──
  Home.tsx  New section: "AI does more of the work. People stay in
            control of consequential decisions." 4-step model
            (work gets done -> results surfaced -> you decide ->
            approved work executes) plus "One dashboard. One client.
            One story." positioned as a supporting evidence layer.
  Services.tsx  Group 04 description + capability line added.
  RevenueIntelligenceFAQ.tsx  New Q: "Does AI make decisions on its own?"

── UNCONTROLLED AUTONOMY LANGUAGE REMOVED ──
  blogPosts.ts (x4) and RevenueIntelligenceFAQ.tsx (x1):
  "none of these require human intervention", "without manual review",
  "without requiring manual intervention at each step" rewritten to
  governed-autonomy wording. Routine low-consequence automation
  wording (e.g. "without manual effort" for annual touchpoints) was
  intentionally KEPT — the standard is governed autonomy proportional
  to consequence, not human micromanagement.

── MARKETING / DEMAND POSITIONING ──
  blogPosts.ts, RevenueIntelligenceFAQ.tsx:
  "Blue Oak does not run ads, create content, or manage social media"
  removed. Replaced with: Blue Oak is not a marketing agency, but
  marketing/content/search/campaign capabilities may be used when they
  are the identified Revenue Infrastructure constraint. Preserves
  Visibility & Opportunity Creation as a legitimate capability group.

── CLAIMS AUDIT ──
  removed "Most businesses see measurable pipeline movement in 7 days"
  removed "reactivation campaigns typically generate responses in 2-3 weeks"
  removed "the first business to respond wins it within the first 5 minutes"
  removed "would increase consultation rate by an estimated 25-30%"
  removed "2-3 additional retainers per month" / "4-5 additional retainers"
  softened "instant" response claims to "typically within about a minute"
  softened "converts at a fraction of the cost" -> "can re-engage without
          the acquisition cost"

── LEGACY AUDIT TERMINOLOGY ──
  auditExample -> assessmentExample (industries.ts, IndustryPage.tsx)
  "Auto Lot Missed Inquiry Audit" -> "... Assessment"
  Industries.tsx "audit examples" -> "illustrative assessment examples"
  blogPosts.ts "Audit the existing revenue cycle" -> "Assess ..."
  Terms.tsx "audit estimates"/"audit findings" -> "assessment ..."
  Ordinary-English legal use of "audit" in Terms s.98 intentionally KEPT.
  /revenue-audit remains a redirect only.

── U.S. / JAMAICA LEGAL SEPARATION ──
  marketConfig.ts  new serviceProvider field per market.
                   US: "Blue Oak Automation LLC (Michigan, United States)"
                   JM: "Blue Oak (Jamaica market)"  [UNCONFIRMED]
  Terms.tsx        Services now scoped per market. Jamaican contracting
                   entity deferred to the service agreement. Liability
                   and IP clauses no longer name the LLC universally.
                   Governing law clause scoped to Site terms.
  Privacy.tsx      Controller wording scoped. LLC retained only where
                   accurate (it does own and operate the site).
  Footer.tsx       "A service of Blue Oak Automation LLC" removed as a
                   universal statement; now market-scoped.
  index.html       Global "legalName" removed from ProfessionalService;
                   moved into a U.S. subOrganization block so the LLC is
                   not declared the legal entity for Jamaica.

  *** STILL REQUIRES OWNER / LEGAL CONFIRMATION ***
  The exact Jamaican contracting entity wording. Neutral brand wording
  is in place until confirmed. Update ONLY JM.legalEntity,
  JM.legalEntityNote and JM.serviceProvider in marketConfig.ts, then
  set legalEntityConfirmed: true.

── MARKET DETECTION REBUILT ──
  NEW src/lib/marketPreference.ts
      - explicit selection is authoritative, persisted in localStorage
      - timezone is a HINT only, never authoritative
      - explicit US timezone allowlist (no "America/*" prefix match)
      - America/Jamaica -> Jamaica hint
      - anything else -> "unknown": we ask rather than claim
  MarketDetectionBanner.tsx rewritten. It no longer asserts
      "Looks like you're visiting from the United States."
      When uncertain it asks "Which market are you in?" and offers both.
      Choice persists and overrides detection thereafter.

── COMMERCIAL TERMS (neutralised — see report) ──
  "No setup fees" / "Setup is included in all plans" -> removed
  "Monthly plans with standard 30-day notice" -> removed
  "You can upgrade at any time" -> softened
  All replaced with: terms are confirmed in the service agreement.
  PRICE POINTS UNCHANGED.

WHAT CHANGED IN v3.2.3 (August 2026)

── HEALTHCARE / DENTAL PAUSED FROM ACTIVE MARKETING ──
Removed from all active public surfaces. Content PRESERVED in
src/lib/industries.archived.ts (not imported — inactive).

  Navbar.tsx              dental + healthcare nav links removed
  Footer.tsx              dental + healthcare footer links removed
  Industries.tsx          both industry cards removed
  industries.ts           both data blocks moved to archive file
  sitemap.xml             both URLs removed
  Contact.tsx             healthcare industry options removed
  RevenueSnapshot.tsx     healthcare industry options removed
  index.html              healthcare removed from FAQ schema
  Home.tsx                healthcare removed from industries list
  PricingUS/JM/Pricing    clinic references replaced
  About.tsx               healthcare persona replaced with Real Estate
  WhatIsRevenueInfra.tsx  dental/doctor industries + examples replaced
  RevenueRecoveryScen.tsx dental + clinic scenarios replaced
  WhyMarketingFails.tsx   dental scenario replaced with HVAC
  RevenueIntelFAQ.tsx     healthcare removed from industries answer
  blogPosts.ts            all dental/patient/clinic references replaced

  NO HIPAA / PHI / compliance claims exist anywhere in the build.
  NO healthcare route is active. NO PHI is collected.

  TO REACTIVATE LATER: see header of industries.archived.ts

── FIVE CAPABILITY GROUPS (was four) ──
  Home.tsx  Corrected to the approved five:
            1. Visibility & Opportunity Creation
            2. Capture, Response & Conversion
            3. Retention, Recovery & Growth
            4. Systems, AI & Automation
            5. Measurement & Continuous Optimization
            (Services.tsx already had the correct five.)

── DUAL MARKET / LEGAL SEPARATION ──
  marketConfig.ts   Jamaica legal entity NO LONGER collapsed into the
                    Michigan LLC. Now brand-only wording pending owner
                    confirmation. Flagged legalEntityConfirmed: false.
  Footer.tsx        "Jamaican operations:" prefix removed.

  ⚠ UNRESOLVED — REQUIRES OWNER/LEGAL CONFIRMATION:
    The exact Jamaican legal/business wording. Until confirmed the
    site uses "Blue Oak · Serving businesses in Jamaica" with no
    entity claim. Update JM.legalEntity + JM.legalEntityNote only.

── PRICING RENDERING FIX ──
  marketConfig.ts   "/month" REMOVED from all price values.
                    New billingPeriod field added per market.
  PricingUS.tsx     now renders {US.billingPeriod}
  PricingJamaica    now renders {JM.billingPeriod}
  Pricing.tsx       template strings append ${'{'}billingPeriod{'}'}
                    → duplicate "/month/month" eliminated
  Price points UNCHANGED: US $497/$1,197/$2,397/$3,997
                          JM J$45,000/J$95,000/J$190,000/J$315,000

── CLAIMS & MATH ──
  Pricing.tsx       "Infrastructure That Pays for Itself" →
                    "Revenue Infrastructure Pricing" (ROI implication)
  Industries.tsx    ALL "Avg 15–30% recoverable monthly revenue" style
                    claims removed → replaced with focus-area labels
  blogPosts.ts      $364,000/yr math error → $104,000/yr (2,000 × 52)
  blogPosts.ts      $134,400 LTV benchmark now explicitly illustrative
  About.tsx         "most businesses don't have a demand problem" →
                    diagnosis-first framing (businesses differ)
  WhatIsRevenueInfra / IndustryPage — same absolutism corrected

── LEGACY AUDIT LANGUAGE ──
  IndustryPage.tsx  "What the Audit Finds" → "What the Assessment Examines"
  industries.ts     "assessed at audit" → "determined during the
                    Revenue Infrastructure Assessment™"
  /revenue-audit    redirect to /revenue-snapshot PRESERVED

── SEO ──
  index.html        SearchAction REMOVED (blog search does not exist —
                    do not declare unimplemented features to crawlers)
  sitemap.xml       healthcare URLs removed

── DEPENDENCIES ──
  package.json      + react-hook-form ^7.53.0        (used by ui/form.tsx)
                    + @radix-ui/react-aspect-ratio ^1.1.0
                                                    (used by ui/aspect-ratio.tsx)
  Home.tsx          + Cpu icon import (new capability group)
  About.tsx         Stethoscope import → Home icon

── SPA ROUTING (direct URL navigation) ──
  public/.htaccess  NEW — Apache / GoDaddy rewrite to index.html
  public/_redirects NEW — Netlify fallback
  vercel.json       NEW — Vercel rewrite
  Required so /services, /pricing/jamaica, /revenue-snapshot etc.
  resolve on direct navigation and hard refresh.

WHAT CHANGED IN v3.2.2 (August 2026)

src/lib/webhook.ts     — Removed incorrect IP allowlist guidance.
                         This is a browser → Make architecture.
                         Submissions originate from visitor devices,
                         not a Blue Oak server. IP allowlisting is
                         not applicable and was removed. Correct
                         security controls documented instead.

src/pages/MissedCallRevenue.tsx
                       — FULL REWRITE. Removed prebuilt industry
                         loss table ($86K dental, $450K law, etc).
                         Replaced with assumption-driven interactive
                         calculator. All inputs are user-entered.
                         Disclaimer added: results are illustrative
                         estimates based on user assumptions only.

src/pages/RevenueRecoveryScenarios.tsx
                       — All 6 scenarios rewritten to:
                         · Use "Consider..." / "Suppose..." framing
                         · Include "For illustration: assume X..."
                           for all numerical claims
                         · Remove all present-tense factual assertions
                           ("was missing", "had a consistent rate")
                         · Page heading changed to "Illustrative
                           Revenue Infrastructure Scenarios"
                         · Prominent disclosure strengthened

src/lib/industries.ts  — 20 numerical claim corrections:
                         · All "at a typical X% rate" → "For
                           illustration: assume X% (assumption)"
                         · All dollar recovery figures converted
                           to illustrative calculations with explicit
                           assumption labels
                         · dental subheadline: "15-30% of revenue"
                           removed
                         · "consistently outperform/reduce" →
                           hedged capability language
                         · Auto FAQ "typically have a measurable" →
                           qualified capability language

src/lib/blogPosts.ts   — Removed/corrected:
                         · "80% of callers" unsourced stat
                         · $7,000/week dental calculation removed
                         · "consistently recover 10-20%" → capability
                           language
                         · "2-3 weeks" deployment timing guarantee
                         · "Industry data consistently shows" removed
                         · "Research consistently shows" removed
                         · "48-72 hours" deployment guarantee removed
                         · "40% after-hours inquiry volume" factual
                           claim → hedged capability language

src/pages/WhyMarketingFails.tsx
                       — Section heading "Real examples" →
                         "Illustrative scenarios"
                       · Added disclosure note under heading
                       · Removed fabricated % outcomes:
                         "28% increase", "revenue doubled", "35%
                         increase" from all three scenarios
                       · Replaced with accurate process descriptions
                       · Removed "30% of calls / 30-60% better
                         return" unsupported stat

README.txt             — Updated to v3.2.2.

WHAT CHANGED IN v3.2.1 (August 2026)

.gitignore             — NEW. Was completely absent from v3.2.
                         Now protects .env, dist, node_modules,
                         editor files, and OS artifacts.
                         .env.example is intentionally not ignored.

src/lib/industries.ts  — CLAIMS AUDIT. Multiple industry solution
                         descriptions and FAQ answers rewrote from
                         absolute guarantees to accurate capability
                         language. Key changes:
                         · "within 60 seconds of every missed call" →
                           "automated response to unanswered calls"
                         · "every inbound inquiry — ensuring no client
                           waits more than 5 minutes" (law firms) →
                           "rapid automated acknowledgment"
                         · "instantly responds to every inbound lead
                           within 60 seconds, 24/7" (real estate) →
                           "configured to acknowledge leads rapidly"
                         · Dental/healthcare: removed "insurance details"
                           from intake descriptions (data boundary)
                         · Removed "$800–$2,400 lifetime value" unsupported
                           stat from dental page
                         · Home services recovery dollar figures (~$37K/mo,
                           $5.6K–$8.4K) replaced with illustrative disclaimer
                         · Auto/hospitality: removed "within 60 seconds of
                           every missed call" from solution descriptions

src/components/BeforeAfter.tsx
                       — "Text-back sent within 60 seconds" (presented
                         as guaranteed fact) →
                         "Automated text-back sent promptly"

src/pages/WhatIsRevenueInfrastructure.tsx
                       — "every lead gets followed up — automatically.
                         Not days later. Within minutes." →
                         accurate capability framing

README.txt             — Updated to v3.2.1.

WHAT CHANGED IN v3.2 (August 2026)

Contact.tsx         — Complete rewrite. Removed all fake calendar
                      code (BOOKED, availableSlots, selectedTime,
                      "You're Booked", "Confirmation sent",
                      "Available Times"). Replaced with clean
                      two-path experience: Send a Message form +
                      Schedule a Consultation (→ VITE_BOOKING_URL).
                      Booking fallback shown when URL not set.

Services.tsx        — Full rebuild around 5 capability groups:
                      Visibility & Opportunity Creation; Capture,
                      Response & Conversion; Retention, Recovery
                      & Growth; Systems, AI & Automation;
                      Measurement & Continuous Optimization.
                      Removed: "Four Systems. Zero Revenue Leaks.",
                      "typically produce measurable bookings",
                      "consistently improves inquiry-to-booking",
                      "No disruption to your current operations",
                      "every lead stage", "always-on infrastructure".

RevenueSnapshot.tsx — Post-submission state updated: correct
                      headline ("Revenue Snapshot™ Request Received"),
                      correct supporting copy, optional scheduling
                      CTA (only shown when VITE_BOOKING_URL set).

blogPosts.ts        — Line 525: removed "The Audit takes 45 minutes
                      and is provided at no cost." Replaced with
                      Snapshot/Assessment language.

industries.ts       — Healthcare FAQ: "Is patient communication
                      automation compliant?" removed. Replaced with
                      "Does Blue Oak collect patient health info?"
                      with correct boundary answer.

marketConfig.ts     — Added bookingUrl field (reads VITE_BOOKING_URL).

.env.example        — Added VITE_BOOKING_URL with full documentation
                      including Google Calendar setup instructions.

README.txt          — Complete v3.2 update.

index.html          — Fixed JSON syntax error (missing comma in
                      FAQPage schema between questions 12 and 13).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
