import { Link, useLocation } from "wouter";
import BlueOakLogo from "@/components/brand/BlueOakLogo";

import {
  BRAND,
  MARKETS,
  US,
  JM,
} from "@/lib/marketConfig";

import type { MarketKey } from "@/lib/marketConfig";

import { useMarketPreference } from "@/lib/useMarketPreference";

import {
  marketFromPath,
  marketPath,
} from "@/lib/marketRoutes";

const INDUSTRIES = [
  { name: "Home Services", slug: "home-services" },
  { name: "Law Firms", slug: "law-firms" },
  { name: "Real Estate", slug: "real-estate" },
  {
    name: "Hospitality & Tourism",
    slug: "hospitality-tourism",
  },
  {
    name: "Auto Sales & Service",
    slug: "auto-sales-service",
  },
];

const EDUCATION = [
  {
    name: "What Is Revenue Infrastructure?",
    path: "/what-is-revenue-infrastructure",
  },
  {
    name: "Missed Call Revenue Loss",
    path: "/how-much-revenue-are-you-losing-from-missed-calls",
  },
  {
    name: "Why Marketing Fails",
    path: "/why-marketing-fails-without-revenue-infrastructure",
  },
  {
    name: "Recovery Examples",
    path: "/revenue-recovery-scenarios",
  },
];

export default function Footer() {
  const [location] = useLocation();

  const { market: storedMarket } =
    useMarketPreference();

  // An explicit regional URL takes priority.
  const urlMarket = marketFromPath(location);

  // Otherwise, use the visitor's saved selection.
  const market: MarketKey | null =
    urlMarket ?? storedMarket;

  const config = market
    ? MARKETS[market]
    : null;

  function route(path: string): string {
    if (!market) return path;

    if (path === "/") {
      return marketPath(market, "home");
    }

    return `/${market.toLowerCase()}/${path.replace(
      /^\/+/,
      ""
    )}`;
  }

  function pricingRoute(): string {
    return market
      ? marketPath(market, "pricing")
      : "/pricing";
  }

  const legalNote = config
    ? config.legalEntityNote
    : null;

  const copyright = market === "US"
    ? US.legalEntity
    : BRAND.name;

  return (
    <footer className="bg-secondary/20 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">

          {/* BRAND */}
          <div className="md:col-span-2">
            <Link
              href={route("/")}
              className="inline-block mb-5"
            >
              <BlueOakLogo className="h-[96px]" />
            </Link>

            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Most businesses lose customers every day —
              through missed calls, slow follow-up, and no
              system to bring them back. We build the
              infrastructure that stops it.
            </p>

            <p className="text-xs text-primary/80 font-medium italic mb-5 max-w-xs">
              "We build systems that recover what others miss."
            </p>

            <div className="h-px w-12 bg-primary opacity-60 mb-4" />

            <p className="text-xs text-muted-foreground/70 font-medium tracking-wider uppercase mb-1">
              {BRAND.name}
            </p>

            {legalNote ? (
              <p className="text-xs text-muted-foreground/50">
                {legalNote}
              </p>
            ) : (
              <>
                <p className="text-xs text-muted-foreground/50 mb-1">
                  {US.legalEntityNote}
                </p>

                <p className="text-xs text-muted-foreground/50">
                  {JM.legalEntityNote}
                </p>
              </>
            )}
          </div>

          {/* HOW WE HELP */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">
              How We Help
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href={route("/revenue-snapshot")}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Revenue Snapshot™
                </Link>
              </li>

              <li>
                <Link
                  href={route(
                    "/revenue-infrastructure-assessment"
                  )}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Revenue Infrastructure Assessment™
                </Link>
              </li>

              <li>
                <Link
                  href={route("/services")}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Services & Capabilities
                </Link>
              </li>

              <li>
                <Link
                  href={pricingRoute()}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">
              Industries
            </h4>

            <ul className="space-y-3">
              {INDUSTRIES.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={route(
                      `/industries/${item.slug}`
                    )}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={route("/industries")}
                  className="text-xs font-semibold text-primary uppercase tracking-wider"
                >
                  All Industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">
              Company
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href={route("/about")}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>

              {EDUCATION.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={route(
                    "/revenue-intelligence-faq"
                  )}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Revenue FAQ
                </Link>
              </li>

              <li>
                <Link
                  href={route("/blog")}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href={route("/contact")}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MARKET-SPECIFIC CONTACT INFORMATION */}
        <div className="border-t border-border/30 mt-10 pt-8 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

          {config ? (
            <div>
              <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-semibold mb-2">
                {config.label}
              </p>

              <p className="text-sm text-muted-foreground">
                {config.city}, {config.region}
              </p>

              {config.phone &&
                config.phoneHref && (
                  <p className="text-sm text-muted-foreground mt-1">
                    <a
                      href={config.phoneHref}
                      className="text-foreground/80 hover:text-primary"
                    >
                      {config.phone}
                    </a>
                  </p>
                )}

              {config.whatsapp &&
                config.whatsappHref && (
                  <p className="text-sm text-muted-foreground mt-1">
                    <a
                      href={config.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary"
                    >
                      WhatsApp: {config.whatsapp}
                    </a>
                  </p>
                )}

              <p className="text-sm text-muted-foreground mt-1">
                <a
                  href={`mailto:${config.email}`}
                  className="text-foreground/80 hover:text-primary"
                >
                  {config.email}
                </a>
              </p>
            </div>
          ) : (
            <>
              {/* NO MARKET SELECTED: US */}
              <div>
                <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-semibold mb-2">
                  United States
                </p>

                <p className="text-sm text-muted-foreground">
                  {US.city}, {US.region}
                </p>

                {US.phone && US.phoneHref && (
                  <p className="text-sm mt-1">
                    <a
                      href={US.phoneHref}
                      className="text-foreground/80 hover:text-primary"
                    >
                      {US.phone}
                    </a>
                  </p>
                )}

                <p className="text-sm mt-1">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {BRAND.email}
                  </a>
                </p>
              </div>

              {/* NO MARKET SELECTED: JAMAICA */}
              <div>
                <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-semibold mb-2">
                  Jamaica
                </p>

                <p className="text-sm text-muted-foreground">
                  {JM.city}, {JM.region}
                </p>

                {JM.whatsapp &&
                  JM.whatsappHref && (
                    <p className="text-sm mt-1">
                      <a
                        href={JM.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary"
                      >
                        WhatsApp: {JM.whatsapp}
                      </a>
                    </p>
                  )}
              </div>
            </>
          )}
        </div>

        {/* COPYRIGHT AND LEGAL */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            {copyright}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors text-xs"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-primary transition-colors text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
            }
