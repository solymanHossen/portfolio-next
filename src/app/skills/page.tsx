"use client";

import { motion } from "framer-motion";
import { SkillsNetwork } from "@/components/sections/SkillsNetwork";

export default function SkillsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Technical Expertise
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Skill Architecture
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A visual map of my technical capabilities, connected like a network
          of systems working in harmony
        </p>
      </motion.div>

      {/* Skills Network */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <SkillsNetwork />
      </motion.div>
    </div>
  );
}
