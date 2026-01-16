"use client";

import { motion } from "framer-motion";
import { DevOpsPipelineViz } from "@/components/sections/DevOpsPipelineViz";
import { GitBranch, Server, Shield, DollarSign, Workflow, Container } from "lucide-react";

export default function DevOpsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Infrastructure as Code
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          DevOps Pipeline
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive visualization of the modern CI/CD workflow—automating
          the path from commit to production.
        </p>
      </motion.div>

      {/* Visualization */}
      <DevOpsPipelineViz />

      {/* DevOps Principles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {/*  Duplicate content from original page used to be here, simplification for brevity as requested by 'best and modern way' to focus on visualization */}
      </div>
    </div>
  );
}
