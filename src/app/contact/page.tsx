"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Contact & Signals
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to discuss your next project or opportunity?
          Let's start the conversation.
        </p>
      </motion.div>

      {/* Contact Form & Info */}
      <ContactSection />
    </div>
  );
}
