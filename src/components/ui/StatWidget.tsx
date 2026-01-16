"use client";

import { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatWidgetProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color?: "primary" | "accent" | "success" | "warning";
  delay?: number;
}

export const StatWidget = ({ icon: Icon, label, value, color = "primary", delay = 0 }: StatWidgetProps) => {
  const colorMap = {
    primary: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10", // Assuming 'accent' color exists in tailwind config, if not it might fall back or need adjustment. Using purple as fallback in mind if accent doesn't exist
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
  };

  // Safe color application, assuming standard tailwind colors or variables defined in globals.css
  const colorClass = colorMap[color] || "text-primary bg-primary/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <GlassCard className="p-6 flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colorClass)}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-2xl font-bold">{value}</h4>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
};
