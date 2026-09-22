import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BRAND } from "@/lib/marketConfig";

const STORAGE_KEY = "blueoak_exit_intent_seen";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const firedRef = useRef(false);
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/revenue-snapshot" || location === "/contact") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 8 && !firedRef.current) {
        firedRef.current = true;
        sessionStorage.setItem(STORAGE_KEY, "1");
        setTimeout(() => setVisible(true), 200);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [location]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/65 backdrop-blur-sm"
            onClick={dismiss}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: -12 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md rounded-3xl border border-primary/20 bg-card shadow-[0_0_80px_rgba(212,175,55,0.1)] pointer-events-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.06] blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/25 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 pt-7 relative">
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Before you go</p>

                <h2 className="text-2xl font-extrabold tracking-tight leading-snug mb-3">
                  Your business may already have revenue opportunities hiding inside its current customer journey.
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A missed call, a slow response, a follow-up that never happened — these can quickly become missed opportunities. A complimentary Revenue Snapshot™ can show you where to look.
                </p>

                <div className="space-y-2.5 mb-7">
                  {[
                    { icon: <TrendingUp className="w-3.5 h-3.5 text-primary" />, text: "High-level review of visible revenue gaps" },
                    { icon: <CheckCircle className="w-3.5 h-3.5 text-primary" />, text: "Complimentary · No obligation" },
                    { icon: <Shield className="w-3.5 h-3.5 text-primary" />, text: "Identifies whether deeper investigation is worthwhile" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]" onClick={dismiss}>
                    <Link href={BRAND.snapshotPath}>
                      Request My Revenue Snapshot™
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <button
                    onClick={dismiss}
                    className="text-xs text-muted-foreground hover:text-muted-foreground/70 transition-colors py-1"
                  >
                    No thanks, I'll continue browsing
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
