// Legacy route: /revenue-audit → /revenue-snapshot
// Preserves indexed URLs while directing visitors to the current experience.
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function RevenueAudit() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/revenue-snapshot", { replace: true });
  }, [setLocation]);
  return null;
}
