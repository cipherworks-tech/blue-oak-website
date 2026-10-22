import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Core pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import PricingJamaica from "@/pages/PricingJamaica";
import PricingUS from "@/pages/PricingUS";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";

// Revenue journey pages
import RevenueSnapshot from "@/pages/RevenueSnapshot";
import RevenueAudit from "@/pages/RevenueAudit";
import RevenueInfrastructureAssessment from "@/pages/RevenueInfrastructureAssessment";
import RevenueRecoveryScenarios from "@/pages/RevenueRecoveryScenarios";
import RevenueIntelligenceFAQ from "@/pages/RevenueIntelligenceFAQ";
import WhatIsRevenueInfrastructure from "@/pages/WhatIsRevenueInfrastructure";
import MissedCallRevenue from "@/pages/MissedCallRevenue";
import WhyMarketingFails from "@/pages/WhyMarketingFails";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

// Industries
import Industries from "@/pages/Industries";
import IndustryPage from "@/pages/IndustryPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Switch>

          {/* =========================================
              UNITED STATES — REGIONAL ROUTES
              ========================================= */}

          <Route path="/us" component={Home} />
          <Route path="/us/" component={Home} />
          <Route path="/us/services" component={Services} />
          <Route path="/us/pricing" component={PricingUS} />
          <Route path="/us/contact" component={Contact} />
          <Route path="/us/about" component={About} />

          <Route
            path="/us/revenue-snapshot"
            component={RevenueSnapshot}
          />

          <Route
            path="/us/revenue-infrastructure-assessment"
            component={RevenueInfrastructureAssessment}
          />

          <Route
            path="/us/revenue-intelligence-faq"
            component={RevenueIntelligenceFAQ}
          />

          <Route path="/us/industries" component={Industries} />
          <Route path="/us/industries/:slug" component={IndustryPage} />

          <Route path="/us/blog" component={Blog} />
          <Route path="/us/blog/:slug" component={BlogPost} />

          {/* =========================================
              JAMAICA — REGIONAL ROUTES
              ========================================= */}

          <Route path="/jm" component={Home} />
          <Route path="/jm/" component={Home} />
          <Route path="/jm/services" component={Services} />
          <Route path="/jm/pricing" component={PricingJamaica} />
          <Route path="/jm/contact" component={Contact} />
          <Route path="/jm/about" component={About} />

          <Route
            path="/jm/revenue-snapshot"
            component={RevenueSnapshot}
          />

          <Route
            path="/jm/revenue-infrastructure-assessment"
            component={RevenueInfrastructureAssessment}
          />

          <Route
            path="/jm/revenue-intelligence-faq"
            component={RevenueIntelligenceFAQ}
          />

          <Route path="/jm/industries" component={Industries} />
          <Route path="/jm/industries/:slug" component={IndustryPage} />

          <Route path="/jm/blog" component={Blog} />
          <Route path="/jm/blog/:slug" component={BlogPost} />

          {/* =========================================
              EXISTING ROUTES — PRESERVED
              ========================================= */}

          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/pricing/jamaica" component={PricingJamaica} />
          <Route path="/pricing/united-states" component={PricingUS} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/about" component={About} />

          <Route
            path="/revenue-snapshot"
            component={RevenueSnapshot}
          />

          <Route
            path="/revenue-infrastructure-assessment"
            component={RevenueInfrastructureAssessment}
          />

          <Route path="/revenue-audit" component={RevenueAudit} />

          <Route
            path="/revenue-recovery-scenarios"
            component={RevenueRecoveryScenarios}
          />

          <Route
            path="/revenue-intelligence-faq"
            component={RevenueIntelligenceFAQ}
          />

          <Route
            path="/what-is-revenue-infrastructure"
            component={WhatIsRevenueInfrastructure}
          />

          <Route
            path="/how-much-revenue-are-you-losing-from-missed-calls"
            component={MissedCallRevenue}
          />

          <Route
            path="/why-marketing-fails-without-revenue-infrastructure"
            component={WhyMarketingFails}
          />

          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />

          <Route path="/industries" component={Industries} />
          <Route path="/industries/:slug" component={IndustryPage} />

          {/* 404 */}
          <Route component={NotFound} />

        </Switch>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
        >
          <Router />
        </WouterRouter>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
