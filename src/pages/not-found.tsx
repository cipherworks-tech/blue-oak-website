import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/marketConfig";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24">
      <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Page Not Found</p>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">404</h1>
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="font-semibold">
          <Link href="/">Back to Home <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="font-semibold bg-transparent border-border hover:bg-white/5">
          <Link href={BRAND.snapshotPath}>Revenue Snapshot™</Link>
        </Button>
      </div>
    </div>
  );
}
