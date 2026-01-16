"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SkillNode {
  name: string;
  level: number;
  years: number;
  x: number;
  y: number;
  category: string;
  color: string;
}

export const SkillsNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<SkillNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: Math.max(500, containerRef.current.offsetHeight),
        });
      }
    };

    updateDimensions();
    const handleResize = () => updateDimensions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const allNodes: SkillNode[] = [];
    const categories = Object.entries(skills);
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    // Adjust radius for mobile/desktop
    const minDim = Math.min(dimensions.width, dimensions.height);
    const radius = minDim * 0.35;

    categories.forEach(([key, category], catIndex) => {
      const angleOffset = (catIndex / categories.length) * Math.PI * 2;

      category.items.forEach((skill, skillIndex) => {
        // Distribute within the quadrant/slice
        const skillAngle = angleOffset + (skillIndex / category.items.length) * (Math.PI / 2.5);
        const skillRadius = radius * (0.6 + (skill.level / 100) * 0.4);

        allNodes.push({
          ...skill,
          category: category.title,
          color: category.color,
          x: centerX + Math.cos(skillAngle) * skillRadius,
          y: centerY + Math.sin(skillAngle) * skillRadius,
        });
      });
    });

    setNodes(allNodes);
  }, [dimensions]);

  const getConnections = () => {
    const connections: Array<{ from: SkillNode; to: SkillNode }> = [];

    // Connect nodes within same category
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j && node.category === otherNode.category) {
          connections.push({ from: node, to: otherNode });
        }
      });
    });

    return connections;
  };

  return (
    <div ref={containerRef} className="relative w-full h-[600px] rounded-2xl border border-border bg-card/10 backdrop-blur-sm overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Connections */}
        {getConnections().map((conn, i) => (
          <motion.line
            key={i}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={conn.from.color}
            strokeWidth={1}
            strokeOpacity={
              hoveredNode === conn.from.name || hoveredNode === conn.to.name
                ? 0.5
                : 0.1
            }
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.02 }}
          />
        ))}

        {/* Center hub */}
        <motion.circle
          cx={dimensions.width / 2}
          cy={dimensions.height / 2}
          r={40}
          fill="hsl(var(--card))"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text
          x={dimensions.width / 2}
          y={dimensions.height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="hsl(var(--primary))"
          fontSize={12}
          fontFamily="JetBrains Mono, monospace"
        >
          MERN
        </text>
      </svg>

      {/* Skill nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.05 }}
          className={cn(
            "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300",
            hoveredNode === node.name ? "z-20" : "z-10"
          )}
          style={{ left: node.x, top: node.y }}
          onMouseEnter={() => setHoveredNode(node.name)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={cn(
              "relative rounded-full flex items-center justify-center transition-all bg-background",
              hoveredNode === node.name
                ? "w-24 h-24"
                : "w-12 h-12 md:w-14 md:h-14"
            )}
            style={{
              borderColor: node.color,
              borderWidth: "2px",
              boxShadow:
                hoveredNode === node.name
                  ? `0 0 30px ${node.color}40`
                  : "none",
            }}
          >
            <span
              className={cn(
                "font-mono text-xs md:text-sm font-medium text-center px-1 transition-all",
                hoveredNode === node.name && "text-sm"
              )}
              style={{ color: node.color }}
            >
              {hoveredNode === node.name ? node.name : node.name.slice(0, 3)}
            </span>
          </motion.div>

          {/* Tooltip */}
          {hoveredNode === node.name && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-lg p-3 min-w-[160px] z-30 shadow-xl"
            >
              <p className="font-medium text-foreground mb-1">{node.name}</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Proficiency</span>
                  <span className="text-primary">{node.level}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>{node.years} years</span>
                </div>
              </div>
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${node.level}%` }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 pointer-events-none">
        {Object.entries(skills).map(([key, category]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <span className="text-xs text-muted-foreground">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
