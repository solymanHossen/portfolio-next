"use client";

import { motion } from "framer-motion";
import { ExperienceSimulator } from "@/components/sections/ExperienceSimulator";

export default function ExperiencePage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Career Journey
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Experience Simulator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Not just a timeline—explore the problems faced, decisions made,
          and outcomes delivered at each role
        </p>
      </motion.div>

      {/* Experience Simulator */}
      <ExperienceSimulator />

      {/* Journey Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto bg-card/40 backdrop-blur-md border border-border">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            The Journey: From Bangla to Tech
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            My path to software development was unconventional. With an academic
            background in Bangla literature, I discovered my passion for technology
            through problem-solving. This unique start has given me a deep appreciation
            for communication and continuous learning—skills I use every day as a
            senior engineer.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
