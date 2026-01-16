"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { philosophyCards } from "@/data/portfolio";
import { Scale, Code2, Shield, Zap, GraduationCap, MapPin, Sparkles } from "lucide-react";

// Helper map
const iconMap: Record<string, any> = {
  scale: Scale,
  code: Code2,
  shield: Shield,
  zap: Zap,
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-primary font-medium mb-4 block">
          About Me
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
          Identity & Philosophy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The story of a Bangla literature graduate who found his calling
          in building scalable software systems
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left - Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              My journey into technology wasn't linear. I spent my university years studying
              <span className="text-primary font-medium"> Bangla Literature</span>,
              analyzing poetry and prose. This background taught me something unexpected:
              <span className="text-foreground font-medium"> the importance of structure, semantics, and readability.</span>
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I realized that good code is a lot like good literature—it should be clear,
              intent-revealing, and tell a story. This unique perspective shapes how I
              approach software architecture today. I don't just write code that works;
              I write systems that can be understood and maintained by humans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <GlassCard className="p-4 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">Honors in Bangla</p>
              </div>
            </GlassCard>
            <GlassCard className="p-4 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Right - Image/Visual (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative h-full min-h-[400px] rounded-2xl overflow-hidden glass-strong flex items-center justify-center p-8"
        >
          {/* Abstract Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-50" />
          <div className="relative text-center space-y-4">
            <Sparkles className="w-16 h-16 text-primary mx-auto animate-pulse" />
            <p className="text-xl font-display font-bold">
              "Code is poetry written for machines."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Engineering Philosophy */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Engineering Philosophy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that drive my technical decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {philosophyCards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-full p-8 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
