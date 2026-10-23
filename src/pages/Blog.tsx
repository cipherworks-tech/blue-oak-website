import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { getAllBlogPosts } from "@/lib/blogPosts";
import { BRAND } from "@/lib/marketConfig";
import { marketFromPath, marketPath } from "@/lib/marketRoutes";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const categories = [
  "All",
  "Revenue Recovery",
  "Revenue Infrastructure",
  "AI Automation",
  "Lead Conversion",
  "Operational Intelligence",
];

const GLOSSARY = [
  {
    q: "What is revenue recovery?",
    a: "Revenue recovery is the systematic process of identifying and recapturing income your business already earned the right to — but lost before it was collected. It targets missed calls, cold leads, lapsed customers, and unconverted inquiries.",
  },
  {
    q: "What is a revenue leak?",
    a: "A revenue leak is any point in your business's revenue cycle where potential income exits without being captured. Common leaks include unanswered calls, slow lead response, no-show appointments, and lapsed customer relationships.",
  },
  {
    q: "What is revenue infrastructure?",
    a: "Revenue infrastructure is the connected system of automations, intelligence tools, and processes that govern how a business captures, converts, and retains revenue — without requiring constant manual intervention.",
  },
  {
    q: "How does missed-call recovery work?",
    a: "Missed-call recovery automation sends an automated text message to a caller who didn't reach a live person, triggered promptly after the missed call. It can then initiate a follow-up sequence, keeping the opportunity open instead of relying on the caller to try again.",
  },
  {
    q: "What is Demand Intelligence?",
    a: "Demand Intelligence identifies where qualified interest is coming from, which channels produce the highest-value leads, and what patterns exist in the behavior of your best clients — so resources are deployed where demand is highest.",
  },
  {
    q: "What is Lead Intelligence?",
    a: "Lead Intelligence scores, qualifies, and routes incoming leads so higher-value opportunities are surfaced and prioritised rather than sitting undifferentiated in a queue.",
  },
  {
    q: "What is Revenue Intelligence?",
    a: "Revenue Intelligence provides real-time pipeline visibility, surfaces stalled deals and at-risk clients, and delivers attribution data showing exactly what's generating revenue and what isn't.",
  },
  {
    q: "How does Blue Oak differ from a marketing agency?",
    a: "A marketing agency is typically hired to run a channel — ads, content, social. Blue Oak is hired to diagnose where revenue is actually constrained and build the Revenue Infrastructure™ that addresses it. That may include visibility and opportunity creation, or it may be capture, response, conversion, retention, or a combination — the diagnosis comes first, not the channel.",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [location] = useLocation();

  const activeMarket = marketFromPath(location);

  const snapshotPath = activeMarket
    ? marketPath(activeMarket, "snapshot")
    : BRAND.snapshotPath;

  const posts = getAllBlogPosts();

  const filteredPosts = posts.filter(
    (post) =>
      activeCategory === "All" ||
      post.category === activeCategory
  );

  const featured = filteredPosts.find(
    (post) => post.featured
  );

  const regular = filteredPosts.filter(
    (post) => !post.featured
  );

  const articlePath = (slug: string) =>
    `/blog/${encodeURIComponent(slug)}`;

  return (
    <div className="pt-24 min-h-screen text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-16">

        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary text-xs font-semibold tracking-widest uppercase mb-4"
          >
            Revenue Intelligence
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            The Revenue Infrastructure Blog
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Field reports, frameworks, and revenue intelligence
            from the operators who are building the fastest.
          </motion.p>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3 flex-wrap justify-center mb-10"
          role="group"
          aria-label="Filter blog articles by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FILTER STATUS */}
        <div
          className="text-center mb-10"
          aria-live="polite"
          data-testid="blog-filter-status"
        >
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filteredPosts.length}
            </span>{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
            {activeCategory !== "All"
              ? ` in ${activeCategory}`
              : " across all categories"}
          </p>
        </div>

        {/* FEATURED POST */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Link
              href={articlePath(featured.slug)}
              className="block"
              data-testid="blog-featured-link"
            >
              <div className="group rounded-2xl border border-primary/25 bg-card/20 hover:border-primary/40 transition-colors p-6 md:p-12 cursor-pointer">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-black tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 px-2.5 py-1 rounded-full">
                    ★ Featured
                  </span>

                  <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Tag className="w-3 h-3" />
                    {featured.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* REGULAR POSTS */}
        {regular.length > 0 && (
          <motion.div
            key={activeCategory}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          >
            {regular.map((post) => (
              <motion.div
                key={post.slug}
                variants={fadeUp}
              >
                <Link
                  href={articlePath(post.slug)}
                  className="block h-full"
                  data-testid="blog-article-link"
                >
                  <div className="group rounded-xl border border-border/50 bg-card/20 hover:border-primary/30 transition-colors p-6 h-full flex flex-col cursor-pointer">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>

                      <span className="text-muted-foreground/40">
                        ·
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold mb-3 leading-snug group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>

                      <span className="flex items-center gap-1 text-xs text-primary font-semibold">
                        Read
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* EMPTY CATEGORY STATE */}
        {filteredPosts.length === 0 && (
          <div
            className="rounded-2xl border border-border/40 bg-card/20 p-10 text-center mb-16"
            data-testid="blog-empty-state"
          >
            <h2 className="text-xl font-bold mb-3">
              No Articles in This Category Yet
            </h2>

            <p className="text-muted-foreground text-sm mb-6">
              We're developing more Revenue Intelligence
              resources for this topic.
            </p>

            <Button
              type="button"
              variant="outline"
              onClick={() => setActiveCategory("All")}
              className="bg-transparent"
            >
              View All Articles
            </Button>
          </div>
        )}

        {/* GLOSSARY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/40 bg-secondary/20 p-6 md:p-8 mb-12"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Revenue Intelligence Glossary
          </p>

          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Key Concepts in Revenue Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GLOSSARY.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-border/40 bg-card/20 p-5"
              >
                <h3 className="font-bold text-sm mb-2">
                  {item.q}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/40 bg-card/20 p-6 md:p-12 text-center"
        >
          <div className="h-px w-12 bg-primary/50 mx-auto mb-6" />

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
            Ready to Find Your Revenue Leaks?
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Request a Revenue Snapshot™ to see where
            revenue may be slipping through your business.
          </p>

          <Button
            size="lg"
            asChild
            className="font-semibold h-auto min-h-12 w-full sm:w-auto max-w-full whitespace-normal text-center px-5 py-3"
          >
            <Link
              href={snapshotPath}
              className="inline-flex items-center justify-center gap-2"
            >
              <span className="min-w-0 break-words">
                Request Your Complimentary Revenue Snapshot™
              </span>

              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
              }
