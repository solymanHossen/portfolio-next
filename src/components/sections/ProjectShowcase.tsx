"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GitBranch, Zap, LayoutGrid } from "lucide-react";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="space-y-8">
      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className={cn(
              "text-left p-6 rounded-2xl transition-all group relative overflow-hidden border",
              selectedProject.id === project.id
                ? "bg-card/60 backdrop-blur-md border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                : "bg-card/20 backdrop-blur-sm border-border hover:border-primary/20"
            )}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                Featured
              </div>
            )}

            <span className="text-xs font-medium text-primary mb-2 block">
              {project.category}
            </span>
            <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Metrics preview */}
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                <div key={key} className="text-center p-2 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground capitalize">{key}</p>
                </div>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Project Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden border border-border"
        >
          {/* Header */}
          <div className="p-8 border-b border-border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-sm font-medium text-primary mb-2 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  {selectedProject.description}
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Context */}
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <h4 className="text-sm font-medium text-foreground mb-2">Business Context</h4>
              <p className="text-sm text-muted-foreground">{selectedProject.context}</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Architecture */}
            <div className="space-y-6">
              <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-primary" />
                Architecture
              </h3>
              <div className="space-y-3">
                {Object.entries(selectedProject.architecture).map(([layer, desc]) => (
                  <div
                    key={layer}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground capitalize">
                        {layer}
                      </span>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics & Trade-offs */}
            <div className="space-y-6">
              {/* Metrics */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-4 rounded-xl bg-muted/30 text-center"
                    >
                      <p className="text-2xl font-bold text-foreground">{value}</p>
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade-offs */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                  <GitBranch className="w-5 h-5 text-primary" />
                  Trade-offs & Decisions
                </h3>
                <div className="space-y-3">
                  {selectedProject.tradeoffs.map((tradeoff, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg border border-border"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-muted-foreground">{tradeoff}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
