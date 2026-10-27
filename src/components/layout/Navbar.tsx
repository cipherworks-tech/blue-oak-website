import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import BlueOakLogo from "@/components/brand/BlueOakLogo";
import { MARKETS } from "@/lib/marketConfig";
import type { MarketKey } from "@/lib/marketConfig";
import { useMarketPreference } from "@/lib/useMarketPreference";
import {
  marketFromPath,
  marketPath,
  equivalentMarketPath,
} from "@/lib/marketRoutes";

const INDUSTRIES = [
  { name: "Home Services", slug: "home-services" },
  { name: "Auto Sales & Service", slug: "auto-sales-service" },
  { name: "Law Firms", slug: "law-firms" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Hospitality & Tourism", slug: "hospitality-tourism" },
];

const LEARN_LINKS = [
  {
    name: "What Is Revenue Infrastructure?",
    path: "/what-is-revenue-infrastructure",
  },
  {
    name: "Revenue Recovery Scenarios",
    path: "/revenue-recovery-scenarios",
  },
  {
    name: "Revenue Intelligence FAQ",
    path: "/revenue-intelligence-faq",
  },
  {
    name: "Why Marketing Fails",
    path: "/why-marketing-fails-without-revenue-infrastructure",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const [location, navigate] = useLocation();

  const {
    market: storedMarket,
    setMarket,
  } = useMarketPreference();

  const urlMarket = marketFromPath(location);

  const market: MarketKey | null =
    urlMarket ?? storedMarket;

  function route(path: string): string {
    if (!market) return path;

    if (path === "/") {
      return marketPath(market, "home");
    }

    const normalized = path.replace(/^\/+/, "");

    return `/${market.toLowerCase()}/${normalized}`;
  }

  function pricingRoute(): string {
    return market
      ? marketPath(market, "pricing")
      : "/pricing";
  }

  function learnRoute(path: string): string {
    // Only these educational routes are regionalized.
    if (
      path === "/blog" ||
      path === "/revenue-intelligence-faq"
    ) {
      return route(path);
    }

    return path;
  }

  function switchMarket(next: MarketKey) {
    setMarket(next);
    setOpenDropdown(null);
    setMenuOpen(false);

    const target = equivalentMarketPath(
      location,
      next
    );

    if (location !== target) {
      navigate(target);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  const NAV_LINKS = [
    {
      name: "Services",
      href: route("/services"),
      dropdown: null,
    },
    {
      name: "Industries",
      href: route("/industries"),
      dropdown: "industries",
    },
    {
      name: "How It Works",
      href: route("/revenue-snapshot"),
      dropdown: null,
    },
    {
      name: "Learn",
      href: null,
      dropdown: "learn",
    },
    {
      name: "Pricing",
      href: pricingRoute(),
      dropdown: null,
    },
    {
      name: "About",
      href: route("/about"),
      dropdown: null,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-background/95 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          <Link
            href={route("/")}
            onClick={closeMenu}
            className="flex items-center flex-shrink-0"
          >
            <BlueOakLogo className="h-[52px] md:h-[64px]" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.dropdown) {
                    setOpenDropdown(link.dropdown);
                  }
                }}
                onMouseLeave={() =>
                  setOpenDropdown(null)
                }
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.name}

                    {link.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.dropdown
                          ? null
                          : link.dropdown
                      )
                    }
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}

                <AnimatePresence>
                  {link.dropdown &&
                    openDropdown === link.dropdown && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -4,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden py-1"
                      >
                        {link.dropdown ===
                        "industries" ? (
                          <>
                            {INDUSTRIES.map(
                              (item) => (
                                <Link
                                  key={item.slug}
                                  href={route(
                                    `/industries/${item.slug}`
                                  )}
                                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                                >
                                  {item.name}
                                </Link>
                              )
                            )}

                            <div className="border-t border-border/30 mt-1 pt-1">
                              <Link
                                href={route(
                                  "/industries"
                                )}
                                className="block px-4 py-2.5 text-xs font-semibold text-primary hover:bg-primary/[0.04]"
                              >
                                All Industries →
                              </Link>
                            </div>
                          </>
                        ) : (
                          LEARN_LINKS.map(
                            (item) => (
                              <Link
                                key={item.path}
                                href={learnRoute(
                                  item.path
                                )}
                                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                              >
                                {item.name}
                              </Link>
                            )
                          )
                        )}
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* DESKTOP MARKET SELECTOR */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              className="relative"
              onMouseEnter={() =>
                setOpenDropdown("market")
              }
              onMouseLeave={() =>
                setOpenDropdown((prev) =>
                  prev === "market"
                    ? null
                    : prev
                )
              }
            >
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "market"
                      ? null
                      : "market"
                  )
                }
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.04] border border-border/40"
                aria-label="Choose your market"
                aria-expanded={
                  openDropdown === "market"
                }
                data-testid="market-switcher-desktop"
              >
                <Globe className="w-3.5 h-3.5" />

                {market
                  ? MARKETS[market].label
                  : "Market"}

                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {openDropdown === "market" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="absolute top-full right-0 mt-1 w-48 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden py-1"
                  >
                    {(
                      ["US", "JM"] as const
                    ).map((key) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() =>
                          switchMarket(key)
                        }
                        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                        data-testid={`market-option-${key}`}
                      >
                        <span>
                          {MARKETS[key].label}
                          <span className="text-muted-foreground/60">
                            {" "}
                            · {MARKETS[key].currency}
                          </span>
                        </span>

                        {market === key && (
                          <Check className="w-3.5 h-3.5 text-primary" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              asChild
              size="sm"
              className="font-semibold"
            >
              <Link
                href={route(
                  "/revenue-snapshot"
                )}
              >
                Revenue Snapshot™
              </Link>
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.06]"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="blue-oak-mobile-menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="blue-oak-mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl"
          >
            <div
              className="overflow-y-auto overscroll-contain"
              style={{
                maxHeight:
                  "calc(100dvh - 70px)",
                WebkitOverflowScrolling:
                  "touch",
              }}
            >
              <div className="container mx-auto px-4 py-5 space-y-1">
                {/* MOBILE MARKET SELECTOR */}
                <div className="flex flex-wrap items-center gap-2 px-3 pb-4 mb-3 border-b border-border/30">
                  <Globe className="w-3.5 h-3.5 text-muted-foreground shrink-0" />

                  <span className="text-xs text-muted-foreground">
                    Market:
                  </span>

                  {(
                    ["US", "JM"] as const
                  ).map((key) => (
                    <button
                      type="button"
                      key={key}
                      onClick={() =>
                        switchMarket(key)
                      }
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${
                        market === key
                          ? "text-primary border-primary/30 bg-primary/10"
                          : "text-muted-foreground border-border"
                      }`}
                      data-testid={`market-option-mobile-${key}`}
                      aria-pressed={
                        market === key
                      }
                    >
                      {MARKETS[key].label}
                    </button>
                  ))}
                </div>

                {/* MOBILE LINKS */}
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.04]"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div>
                        <p className="px-3 py-2.5 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
                          {link.name}
                        </p>

                        {LEARN_LINKS.map(
                          (item) => (
                            <Link
                              key={item.path}
                              href={learnRoute(
                                item.path
                              )}
                              onClick={closeMenu}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* CONTACT AND CTA */}
                <div className="border-t border-border/30 pt-4 mt-4 pb-6">
                  <Link
                    href={route("/contact")}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>

                  <Button
                    size="lg"
                    className="w-full h-auto min-h-12 mt-4 font-semibold whitespace-normal text-center"
                    asChild
                  >
                    <Link
                      href={route(
                        "/revenue-snapshot"
                      )}
                      onClick={closeMenu}
                    >
                      Revenue Snapshot™
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
                                }
