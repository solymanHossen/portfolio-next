"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag, FileCode } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export const BlogPreview = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, i) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group"
        >
          <GlassCard className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <FileCode className="w-4 h-4" />
                <span>v{post.version}</span>
              </div>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground flex-grow mb-4">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
                <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                  Read more
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.article>
      ))}
    </div>
  );
};
