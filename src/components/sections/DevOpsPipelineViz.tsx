"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitCommit, Hammer, TestTube, ShieldCheck, Container, Server, UserCheck, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { devopsPipeline } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  "git-commit": GitCommit,
  hammer: Hammer,
  "test-tube": TestTube,
  "shield-check": ShieldCheck,
  container: Container,
  server: Server,
  "user-check": UserCheck,
  rocket: Rocket,
};

export const DevOpsPipelineViz = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % devopsPipeline.stages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="space-y-8">
      {/* Pipeline Visualization */}
      <div className="glass-strong rounded-2xl p-8 overflow-x-auto bg-card/30 backdrop-blur-md border border-border">
        <div className="flex items-center justify-between min-w-[900px]">
          {devopsPipeline.stages.map((stage, i) => {
            const Icon = iconMap[stage.icon] || GitCommit;
            const isActive = i === activeStage;
            const isPassed = i < activeStage;

            return (
              <div key={stage.id} className="flex items-center">
                <motion.button
                  onClick={() => {
                    setActiveStage(i);
                    setIsAnimating(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={cn(
                    "relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all cursor-pointer",
                    isActive
                      ? "bg-primary/20 border border-primary"
                      : isPassed
                        ? "bg-success/10 border border-success/30"
                        : "hover:bg-muted"
                  )}
                >
                  {/* Node */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow-md"
                        : isPassed
                          ? "bg-success/20 text-success"
                          : "bg-muted text-muted-foreground"
                    )}
                  >
                    {isPassed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isActive
                          ? "text-primary"
                          : isPassed
                            ? "text-success"
                            : "text-foreground"
                      )}
                    >
                      {stage.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 max-w-[100px]">
                      {stage.description}
                    </p>
                  </div>

                  {/* Active pulse */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-xl border-2 border-primary"
                    />
                  )}
                </motion.button>

                {/* Connector */}
                {i < devopsPipeline.stages.length - 1 && (
                  <div className="w-12 flex items-center justify-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isPassed ? 1 : isActive ? 0.5 : 0 }}
                      className={cn(
                        "h-0.5 w-full origin-left",
                        isPassed ? "bg-success" : "bg-primary"
                      )}
                    />
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 -ml-2",
                        isPassed
                          ? "text-success"
                          : isActive
                            ? "text-primary"
                            : "text-muted-foreground/30"
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Environments */}
      <div className="grid md:grid-cols-3 gap-6">
        {devopsPipeline.environments.map((env, i) => (
          <motion.div
            key={env.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 border border-border bg-card/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: env.color }}
              />
              <h4 className="font-medium text-foreground">{env.name}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{env.description}</p>
            <div className="mt-4 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: env.color }}
              />
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-6 py-2 rounded-lg glass hover:border-primary/30 transition-colors text-sm font-medium border border-border"
        >
          {isAnimating ? "Pause Animation" : "Resume Animation"}
        </button>
      </div>
    </div>
  );
};
