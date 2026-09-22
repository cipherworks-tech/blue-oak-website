/**
 * Blue Oak Revenue Infrastructure™ — Market Configuration
 *
 * Centralised source of truth for all market-specific values.
 * When Jamaica incorporation completes, update JM.legalEntity only here.
 * When pricing changes, update here only.
 */

export type MarketKey = "US" | "JM";

export interface MarketConfig {
  key: MarketKey;
  label: string;
  currency: string;
  phone: string;
  phoneHref: string;
  whatsapp: string | null;
  whatsappHref: string | null;
  whatsappMessage: string | null;
  email: string;
  city: string;
  region: string;
  country: string;
  legalEntity: string;          // update when JM entity is registered
  legalEntityNote: string;      // shown in footer / Terms
  legalEntityConfirmed: boolean; // false = wording awaiting owner/legal confirmation
  /**
   * Who contracts with / provides services to clients in this market.
   * Used in Terms, Privacy and Footer so the U.S. LLC is not incorrectly
   * presented as the legal service provider for the Jamaican market.
   */
  serviceProvider: string;
  billingPeriod: string;        // appended by UI — never embed in price values
  pricingPath: string;
  pricing: {
    communityImpact: string;
    starter: string;
    growth: string;
    premium: string;
    assessment: string;         // "Provided during consultation" until formally priced
  };
}

export const MARKETS: Record<MarketKey, MarketConfig> = {
  US: {
    key: "US",
    label: "United States",
    currency: "USD",
    phone: "+1 (248) 988-0542",
    phoneHref: "tel:+12489880542",
    whatsapp: null,
    whatsappHref: null,
    whatsappMessage: null,
    email: "info@blueoakautomation.com",
    city: "Detroit",
    region: "Michigan",
    country: "United States",
    legalEntity: "Blue Oak Automation LLC",
    legalEntityNote: "Blue Oak Automation LLC · Michigan, United States",
    legalEntityConfirmed: true,
    serviceProvider: "Blue Oak Automation LLC (Michigan, United States)",
    pricingPath: "/pricing/united-states",
    // Price values are the amount ONLY — the UI appends the billing period.
    // Never embed "/month" here or it will render twice.
    billingPeriod: "/month",
    pricing: {
      communityImpact: "$497",
      starter: "$1,197",
      growth: "$2,397",
      premium: "$3,997",
      assessment: "Provided during consultation",
    },
  },
  JM: {
    key: "JM",
    label: "Jamaica",
    currency: "JMD",
    phone: null as unknown as string,
    phoneHref: null as unknown as string,
    whatsapp: "876-307-8916",
    whatsappHref: "https://wa.me/18763078916?text=Hi%20Blue%20Oak%2C%20I%27d%20like%20to%20learn%20more%20about%20a%20Revenue%20Snapshot%20for%20my%20business.",
    whatsappMessage: "Hi Blue Oak, I'd like to learn more about a Revenue Snapshot for my business.",
    email: "info@blueoakautomation.com",
    city: "Mandeville",
    region: "Manchester",
    country: "Jamaica",
    // ⚠ UNRESOLVED — REQUIRES OWNER CONFIRMATION BEFORE LAUNCH
    // The Jamaican business structure is separate from the Michigan LLC.
    // Do NOT describe Jamaica as "Blue Oak Automation LLC Jamaica Operations"
    // unless legal counsel confirms that is accurate.
    // Replace both fields below with the confirmed Jamaican legal wording.
    // Until confirmed, the site uses brand-only wording with no entity claim.
    legalEntity: "Blue Oak",
    legalEntityNote: "Blue Oak · Serving businesses in Jamaica",
    legalEntityConfirmed: false,
    // ⚠ UNRESOLVED — awaiting owner/legal confirmation of the Jamaican
    // contracting entity. Neutral brand wording used until confirmed.
    serviceProvider: "Blue Oak (Jamaica market)",
    pricingPath: "/pricing/jamaica",
    // Price values are the amount ONLY — the UI appends the billing period.
    // Never embed "/month" here or it will render twice.
    billingPeriod: "/month",
    pricing: {
      communityImpact: "J$45,000",
      starter: "J$95,000",
      growth: "J$190,000",
      premium: "J$315,000",
      assessment: "Provided during consultation",
    },
  },
};

export const US = MARKETS.US;
export const JM = MARKETS.JM;

/** Shared brand / company strings */
export const BRAND = {
  name: "Blue Oak Revenue Infrastructure™",
  shortName: "Blue Oak",
  tagline: "Find. Fix. Recover. Grow.",
  email: "info@blueoakautomation.com",
  usPhone: "+1 (248) 988-0542",
  usPhoneHref: "tel:+12489880542",
  jamaicaWhatsApp: "876-307-8916",
  jamaicaWhatsAppHref: "https://wa.me/18763078916?text=Hi%20Blue%20Oak%2C%20I%27d%20like%20to%20learn%20more%20about%20a%20Revenue%20Snapshot%20for%20my%20business.",
  snapshotPath: "/revenue-snapshot",
  assessmentPath: "/revenue-infrastructure-assessment",
  contactPath: "/contact",
  pricingPath: "/pricing",
  /**
   * Google Calendar Appointment Scheduling URL.
   * Set VITE_BOOKING_URL in .env — do not hard-code here.
   * When set, the Contact page and Revenue Snapshot page surface
   * a "View Available Times" link to the real Google booking page.
   * Maya and future channels should ultimately reference the same
   * underlying Google Calendar.
   */
  bookingUrl: (import.meta.env.VITE_BOOKING_URL as string | undefined) ?? "",
};
