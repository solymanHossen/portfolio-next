"use client";

import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Project Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Deep dives into real-world projects—from business context to
          architecture decisions and measurable outcomes
        </p>
      </motion.div>

      {/* Projects Grid */}
      <ProjectShowcase />
    </div>
  );
}
