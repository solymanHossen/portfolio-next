"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Settings,
  LogOut,
  TerminalSquare,
  MessageSquare,
  User,
  Cpu
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const adminRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    variant: "default",
  },
  {
    label: "Projects",
    icon: FolderOpen,
    href: "/admin/projects",
    variant: "ghost",
  },
  {
    label: "Blog Posts",
    icon: FileText,
    href: "/admin/blog",
    variant: "ghost",
  },
  {
    label: "Skills & Stack",
    icon: Cpu,
    href: "/admin/skills",
    variant: "ghost",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/admin/messages",
    variant: "ghost",
  },
  {
    label: "Profile",
    icon: User,
    href: "/admin/profile",
    variant: "ghost",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    variant: "ghost",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-8 flex items-center px-4 py-2">
          <TerminalSquare className="mr-2 h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">Admin<span className="text-primary">.sh</span></span>
        </div>

        <div className="flex-1 space-y-1">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-primary/10",
                pathname === route.href
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <route.icon className={cn("mr-3 h-4 w-4 transition-colors", pathname === route.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
              {route.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto border-t border-border/40 p-4">
          <GlassCard
            variant="default"
            hover={false}
            className="flex items-center gap-3 p-3 bg-red-500/5 border-red-500/20 cursor-pointer hover:bg-red-500/10 transition-colors"
          >
            <div className="flex items-center justify-center rounded-full bg-red-500/10 p-1.5">
              <LogOut className="h-4 w-4 text-red-500" />
            </div>
            <div className="text-xs font-medium text-red-500">
              System Logout
            </div>
          </GlassCard>
        </div>
      </div>
    </aside>
  );
}
