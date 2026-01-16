"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Briefcase, Calendar, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const ExperienceSimulator = () => {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);
  const [activeTab, setActiveTab] = useState<"problems" | "decisions" | "outcomes">("problems");

  const tabs = [
    { id: "problems", label: "Problems", icon: AlertTriangle, color: "text-warning" },
    { id: "decisions", label: "Decisions", icon: Zap, color: "text-primary" },
    { id: "outcomes", label: "Outcomes", icon: CheckCircle, color: "text-success" },
  ] as const;

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Timeline Navigation */}
      <div className="lg:col-span-4 space-y-3">
        {experiences.map((exp, i) => (
          <motion.button
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedExp(exp)}
            className={cn(
              "w-full text-left p-4 rounded-xl transition-all group border",
              selectedExp.id === exp.id
                ? "bg-card/60 backdrop-blur-md border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                : "bg-card/20 backdrop-blur-sm border-border hover:border-primary/20"
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <ChevronRight
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform",
                  selectedExp.id === exp.id && "rotate-90 text-primary"
                )}
              />
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {exp.type}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Simulator Panel */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {selectedExp.role}
                  </h3>
                  <p className="text-primary">{selectedExp.company}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {selectedExp.period}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {selectedExp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-muted text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors relative",
                    activeTab === tab.id
                      ? tab.color
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="exp-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* @ts-ignore */}
                  {selectedExp[activeTab].map((item: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50"
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                          activeTab === "problems" && "bg-warning/10 text-warning",
                          activeTab === "decisions" && "bg-primary/10 text-primary",
                          activeTab === "outcomes" && "bg-success/10 text-success"
                        )}
                      >
                        {i + 1}
                      </div>
                      <p className="text-foreground">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
