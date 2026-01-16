"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal } from "@/components/ui/Terminal";
import { StatWidget } from "@/components/ui/StatWidget";
import {
  Activity,
  GitCommit,
  Users,
  Eye,
  ArrowUpRight,
  Clock,
  CircleDot,
  Server
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
          <p className="text-muted-foreground mt-1 text-sm font-mono">
            root@solyman-portfolio:~/admin# ./dashboard.sh
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-sm text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Systems Operational
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Views</p>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">45.2K</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +12%
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
            <GitCommit className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center text-xs text-muted-foreground">
              Updated 2h ago
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Messages</p>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">573</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +4 this week
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Uptime</p>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">99.9%</div>
            <div className="flex items-center text-xs text-green-500">
              Stable
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-8 md:grid-cols-7">
        {/* Main Chart Area (Using Terminal as placeholder for logs) */}
        <div className="col-span-4 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">System Logs</h2>
          <Terminal
            className="h-[400px] border-border/50 shadow-none bg-black/40"
            commands={[
              { prompt: "tail -f /var/log/syslog", output: "Monitoring system events...", delay: 0 },
              { prompt: "", output: "[INFO] New visitor from 192.168.1.1 (Bangladesh)", delay: 800 },
              { prompt: "", output: "[SUCCESS] Project 'Portfolio V2' deployment successful", delay: 1500 },
              { prompt: "", output: "[WARN] High memory usage on Node process #4", delay: 2400 },
              { prompt: "", output: "[INFO] Contact form submission received: 'Job Inquiry'", delay: 3200 },
              { prompt: "", output: "[INFO] Database backup completed (2.4MB)", delay: 4000 },
            ]}
          />
        </div>

        {/* Recent Activity */}
        <div className="col-span-3 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { title: "New Project Added", desc: "Added 'E-Commerce Platform' to portfolio", time: "2 hours ago", icon: GitCommit },
              { title: "Message Received", desc: "From: Sarah Miller (Recruiter)", time: "5 hours ago", icon: Users },
              { title: "Skill Updated", desc: "Increased Next.js proficiency to 95%", time: "1 day ago", icon: CircleDot },
              { title: "System Update", desc: "Updated dependencies to latest versions", time: "2 days ago", icon: Server },
            ].map((item, i) => (
              <GlassCard key={i} className="flex items-start gap-4 p-4 hover:bg-muted/40 transition-colors cursor-default">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <div className="text-xs text-muted-foreground font-mono">{item.time}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
