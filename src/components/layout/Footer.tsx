import React from "react";
import { Link } from "wouter";
import BlueOakLogo from "@/components/brand/BlueOakLogo";
import { BRAND, US, JM } from "@/lib/marketConfig";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <BlueOakLogo className="h-[96px]" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Most businesses lose customers every day — through missed calls, slow follow-up, and no system to bring them back. We build the infrastructure that stops it.
            </p>
            <p className="text-xs text-primary/80 font-medium italic mb-5 max-w-xs">
              "We build systems that recover what others miss."
            </p>
            <div className="h-px w-12 bg-primary opacity-60 mb-4" />
            <p className="text-xs text-muted-foreground/70 font-medium tracking-wider uppercase mb-1">
              {BRAND.name}
            </p>
            <p className="text-xs text-muted-foreground/50 mb-1">
              {US.legalEntityNote}
            </p>
            <p className="text-xs text-muted-foreground/50">
              {JM.legalEntityNote}
            </p>
          </div>

          {/* How We Help */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">How We Help</h4>
            <ul className="space-y-3">
              <li><Link href="/revenue-snapshot" className="text-sm text-muted-foreground hover:text-primary transition-colors">Revenue Snapshot™</Link></li>
              <li><Link href="/revenue-infrastructure-assessment" className="text-sm text-muted-foreground hover:text-primary transition-colors">Revenue Infrastructure Assessment™</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services & Capabilities</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">Industries</h4>
            <ul className="space-y-3">              <li><Link href="/industries/home-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home Services</Link></li>
              <li><Link href="/industries/law-firms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Law Firms</Link></li>
              <li><Link href="/industries/real-estate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/hospitality-tourism" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hospitality &amp; Tourism</Link></li>
              <li><Link href="/industries/auto-sales-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Auto Sales &amp; Service</Link></li>
              <li><Link href="/industries" className="text-xs font-semibold text-primary uppercase tracking-wider hover:opacity-80 transition-opacity mt-1 inline-block">All Industries →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/what-is-revenue-infrastructure" className="text-sm text-muted-foreground hover:text-primary transition-colors">What Is Revenue Infrastructure?</Link></li>
              <li><Link href="/how-much-revenue-are-you-losing-from-missed-calls" className="text-sm text-muted-foreground hover:text-primary transition-colors">Missed Call Revenue Loss</Link></li>
              <li><Link href="/why-marketing-fails-without-revenue-infrastructure" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Marketing Fails</Link></li>
              <li><Link href="/revenue-recovery-scenarios" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recovery Examples</Link></li>
              <li><Link href="/revenue-intelligence-faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">Revenue FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-border/30 mt-10 pt-8 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-semibold mb-2">United States</p>
            <p className="text-sm text-muted-foreground">
              {US.city}, {US.region} &nbsp;·&nbsp;{" "}
              <a href={US.phoneHref} className="text-foreground/80 hover:text-primary transition-colors">{US.phone}</a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <a href={`mailto:${BRAND.email}`} className="text-foreground/80 hover:text-primary transition-colors">{BRAND.email}</a>
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-semibold mb-2">Jamaica</p>
            <p className="text-sm text-muted-foreground">
              {JM.city}, {JM.region} &nbsp;·&nbsp;{" "}
              <a href={JM.whatsappHref!} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                WhatsApp: {JM.whatsapp}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved. U.S. services are provided by {US.legalEntity} (Michigan). Services in Jamaica are provided by the Blue Oak Jamaica business.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
