// Redirect /testimonials → /revenue-recovery-scenarios
// Keeps old URL alive for any inbound links while sending visitors to the correct page.
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Testimonials() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/revenue-recovery-scenarios", { replace: true });
  }, [setLocation]);
  return null;
}
