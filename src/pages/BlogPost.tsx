import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blogPosts";
import NotFound from "@/pages/not-found";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-extrabold tracking-tight mt-10 mb-4 text-foreground">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold mt-7 mb-3 text-foreground">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-foreground my-3">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Regular paragraph — handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-3">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**")
              ? <strong key={j} className="font-semibold text-foreground">{part.replace(/\*\*/g, "")}</strong>
              : part
          )}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getBlogPostBySlug(slug);

  if (!post) return <NotFound />;

  const allPosts = getAllBlogPosts();
  const related = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-24 min-h-screen text-foreground">

      {/* ── HERO ── */}
      <section className="relative py-20 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09 } } }}>

            <motion.div variants={fadeUp}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
              {post.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
              {post.excerpt}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="prose-content"
          >
            {renderMarkdown(post.content)}
          </motion.article>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-14 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 md:p-10 text-center">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Next Step</p>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4">Find the Revenue Leaks in Your Business</h2>
            <p className="text-muted-foreground text-base max-w-lg mx-auto mb-7">
              Request a Revenue Snapshot™ to see where revenue may be slipping through your business.
            </p>
            <Button size="lg" asChild className="font-semibold px-10">
              <Link href="/contact">
                Book a Revenue Snapshot™
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="py-14 px-4 border-t border-border/40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-6">Related Articles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((rp, i) => (
                <Link key={i} href={`/blog/${rp.slug}`}>
                  <div className="rounded-xl border border-border/50 bg-card/20 p-6 hover:border-primary/30 transition-colors cursor-pointer group h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary">{rp.category}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">{rp.readTime}</span>
                    </div>
                    <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-primary transition-colors flex-1">{rp.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{rp.excerpt.slice(0, 100)}…</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
