// Placeholder component since user code for this wasn't fully provided, implemented based on usage in Index page.
"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerminalCommand {
  prompt: string;
  output: string;
  delay: number;
}

interface TerminalProps {
  commands: TerminalCommand[];
  onComplete?: () => void;
  className?: string;
}

export const Terminal = ({ commands, onComplete, className }: TerminalProps) => {
  const [lines, setLines] = useState<Array<{ type: "prompt" | "output"; text: string }>>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typing, setTyping] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      if (onComplete) setTimeout(onComplete, 500);
      return;
    }

    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < command.prompt.length) {
        setTyping((prev) => prev + command.prompt[charIndex]);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { type: "prompt", text: command.prompt },
            { type: "output", text: command.output },
          ]);
          setTyping("");
          setCurrentCommandIndex((prev) => prev + 1);
        }, 500);
      }
    }, 50); // Typing speed

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, typing]);

  return (
    <div className={cn("bg-slate-950 rounded-xl overflow-hidden border border-slate-800 font-mono text-sm shadow-2xl", className)}>
      <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="flex-1 text-center text-slate-400 text-xs">solyman-dev — -zsh</div>
      </div>
      <div
        ref={scrollRef}
        className="p-4 h-[300px] overflow-y-auto text-slate-300 space-y-2 custom-scrollbar"
      >
        {lines.map((line, i) => (
          <div key={i} className={cn(line.type === "prompt" ? "text-blue-400" : "text-emerald-400")}>
            {line.type === "prompt" && <span className="text-pink-500 mr-2">➜ ~</span>}
            {line.text}
          </div>
        ))}
        {currentCommandIndex < commands.length && (
          <div className="text-blue-400">
            <span className="text-pink-500 mr-2">➜ ~</span>
            {typing}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-slate-400 ml-1 align-sub"
            />
          </div>
        )}
      </div>
    </div>
  );
};
