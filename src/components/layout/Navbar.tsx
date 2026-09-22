import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlueOakLogo from "@/components/brand/BlueOakLogo";
import { BRAND, MARKETS } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";

const INDUSTRIES = [
  { name: "Home Services",          href: "/industries/home-services" },
  { name: "Auto Sales & Service",   href: "/industries/auto-sales-service" },
  { name: "Law Firms",              href: "/industries/law-firms" },
  { name: "Real Estate",            href: "/industries/real-estate" },
  { name: "Hospitality & Tourism",  href: "/industries/hospitality-tourism" },
];

const LEARN_LINKS = [
  { name: "What Is Revenue Infrastructure?", href: "/what-is-revenue-infrastructure" },
  { name: "Revenue Recovery Scenarios",      href: "/revenue-recovery-scenarios" },
  { name: "Revenue Intelligence FAQ",        href: "/revenue-intelligence-faq" },
  { name: "Why Marketing Fails",             href: "/why-marketing-fails-without-revenue-infrastructure" },
  { name: "Blog",                            href: "/blog" },
];

function buildNavLinks(pricingHref: string) {
  return [
    { name: "Services",    href: "/services",     dropdown: null },
    { name: "Industries",  href: "/industries",   dropdown: "industries" },
    { name: "How It Works",href: "/revenue-snapshot", dropdown: null },
    { name: "Learn",       href: null,            dropdown: "learn" },
    { name: "Pricing",     href: pricingHref,     dropdown: null },
    { name: "About",       href: "/about",        dropdown: null },
  ];
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const { market, setMarket } = useMarketPreference();

  // Pricing link respects the visitor's chosen market once known.
  // Falls back to the market-selection hub when no explicit choice exists yet.
  const pricingHref: string = market !== null ? MARKETS[market as keyof typeof MARKETS].pricingPath : "/pricing";
  const NAV_LINKS = buildNavLinks(pricingHref);

  // Switching markets updates the persistent preference. If the visitor is
  // currently on the other market's pricing page, we swap them to the
  // equivalent page for the new market — otherwise we leave navigation
  // alone entirely (no unnecessary reload or redirect).
  function switchMarket(next: "US" | "JM") {
    setMarket(next);
    setOpenDropdown(null);
    const otherPricingPath = MARKETS[next === "US" ? "JM" : "US"].pricingPath;
    if (location === otherPricingPath) {
      navigate(MARKETS[next].pricingPath, { replace: true });
    }
  }

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-background/70 backdrop-blur-md"}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <BlueOakLogo className="h-[52px] md:h-[64px]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <div key={link.name} className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
                onMouseLeave={() => setOpenDropdown(null)}>

                {link.href ? (
                  <Link href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"}`}>
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === link.dropdown ? null : link.dropdown!)}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                <AnimatePresence>
                  {openDropdown === link.dropdown && link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden py-1"
                    >
                      {(link.dropdown === "industries" ? INDUSTRIES : LEARN_LINKS).map(item => (
                        <Link key={item.href} href={item.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors">
                          {item.name}
                        </Link>
                      ))}
                      {link.dropdown === "industries" && (
                        <div className="border-t border-border/30 mt-1 pt-1">
                          <Link href="/industries" className="block px-4 py-2.5 text-xs font-semibold text-primary hover:bg-primary/[0.04] transition-colors">
                            All Industries →
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative"
              onMouseEnter={() => setOpenDropdown("market")}
              onMouseLeave={() => setOpenDropdown(prev => (prev === "market" ? null : prev))}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "market" ? null : "market")}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors border border-border/40"
                aria-label="Choose your market"
                data-testid="market-switcher-desktop"
              >
                <Globe className="w-3.5 h-3.5" />
                {market !== null ? MARKETS[market as keyof typeof MARKETS].label : "Market"}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openDropdown === "market" && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-48 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden py-1"
                  >
                    {(["US", "JM"] as const).map(key => (
                      <button
                        key={key}
                        onClick={() => switchMarket(key)}
                        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                        data-testid={`market-option-${key}`}
                      >
                        <span>{MARKETS[key].label} <span className="text-muted-foreground/60">· {MARKETS[key].currency}</span></span>
                        {market === key && <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button asChild size="sm" className="font-semibold">
              <Link href={BRAND.snapshotPath}>Revenue Snapshot™</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border/50 bg-background/98 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-5 space-y-1">
              {/* Mobile market switcher */}
              <div className="flex items-center gap-2 px-3 pb-4 mb-3 border-b border-border/30">
                <Globe className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground mr-1">Market:</span>
                {(["US", "JM"] as const).map(key => (
                  <button
                    key={key}
                    onClick={() => switchMarket(key)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      market === key
                        ? "text-primary border-primary/30 bg-primary/10"
                        : "text-muted-foreground border-border hover:bg-white/[0.04]"
                    }`}
                    data-testid={`market-option-mobile-${key}`}
                  >
                    {MARKETS[key].label}
                  </button>
                ))}
              </div>
              {NAV_LINKS.map(link => (
                <div key={link.name}>
                  {link.href ? (
                    <Link href={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <p className="block px-3 py-2.5 text-xs font-semibold text-primary uppercase tracking-wider">{link.name}</p>
                      {(link.dropdown === "industries" ? INDUSTRIES : LEARN_LINKS).map(item => (
                        <Link key={item.href} href={item.href}
                          className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-border/30 pt-4 mt-4">
                <Link href="/contact" className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors">Contact</Link>
                <Button size="lg" className="w-full mt-4 font-semibold" asChild>
                  <Link href={BRAND.snapshotPath}>Revenue Snapshot™</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
