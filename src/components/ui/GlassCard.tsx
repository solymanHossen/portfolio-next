import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "gradient";
  hover?: boolean;
}

export const GlassCard = ({
  className,
  variant = "default",
  hover = true,
  children,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        variant === "default" && "bg-background/40 border-border/50 backdrop-blur-sm",
        variant === "strong" && "bg-background/80 border-border backdrop-blur-md",
        variant === "gradient" && "bg-gradient-to-br from-background/60 to-background/30 border-border/50 backdrop-blur-md",
        hover && "hover:border-primary/20 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
