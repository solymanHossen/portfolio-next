"use client";

import { motion } from "framer-motion";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function BlogPage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Knowledge Base
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Engineering Notes
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Technical deep-dives, best practices, and lessons learned from
          building production systems
        </p>
      </motion.div>

      {/* Blog Posts */}
      <BlogPreview />

      {/* Coming Soon */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass rounded-2xl p-8 max-w-2xl mx-auto bg-card/20 border border-border">
          <p className="text-muted-foreground">
            More articles coming soon. Topics include system design patterns,
            performance optimization, and DevOps best practices.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
