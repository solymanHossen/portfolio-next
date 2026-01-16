"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Skills & Tech Stack</h2>
        <p className="text-muted-foreground mt-1">Manage proficiency levels and categories.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([key, category]) => (
          <GlassCard key={key} className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: category.color }}>{category.title}</h3>
              <div className="font-mono text-xs text-muted-foreground uppercase">{key}</div>
            </div>

            <div className="space-y-5">
              {category.items.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out hover:brightness-110 relative group cursor-pointer"
                      style={{ width: `${item.level}%`, backgroundColor: category.color }}
                    >
                      {/* Draggable Handle Simulation */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform scale-125" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground/50">
                    <span>Junior</span>
                    <span>Mid</span>
                    <span>Senior</span>
                    <span>Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
