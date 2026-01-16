"use client";

import { Terminal } from "@/components/ui/Terminal";
import { StatWidget } from "@/components/ui/StatWidget";
import { Code2, GitMerge, Layout, Terminal as TerminalIcon, ArrowRight, User, Cpu, Briefcase, FileText, Send } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

const heroCommands = [
  { prompt: "whoami", output: "DevOps Engineer & Full Stack Architect", delay: 0 },
  { prompt: "cat stack.json", output: JSON.stringify({ languages: ["TypeScript", "Go", "Python"], cloud: ["AWS", "Kubernetes"], iac: ["Terraform", "Ansible"] }, null, 2), delay: 1000 },
  { prompt: "echo 'Let's build.'", output: "Initializing development environment...", delay: 2500 }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 py-12 lg:py-24">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)] py-12">
        <div className="space-y-6 animate-in slide-in-from-left duration-700 fade-in">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Available for hire
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient-primary">DevOps Engineer</span>
            <br />
            & Full Stack Dev
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Architecting scalable infrastructure, automating robust pipelines, and crafting intuitive user experiences with modern web technologies.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
            <StatWidget icon={GitMerge} label="PRs Merged" value="1,240+" delay={0.1} />
            <StatWidget icon={TerminalIcon} label="Deployments" value="850+" delay={0.2} />
            <StatWidget icon={Code2} label="Commits" value="15k+" delay={0.3} />
            <StatWidget icon={Layout} label="Projects" value="40+" delay={0.4} />
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              View Work
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-input bg-transparent px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative animate-in slide-in-from-right duration-700 fade-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full opacity-50" />
          <Terminal commands={heroCommands} className="w-full shadow-2xl shadow-primary/5 border border-primary/10" />
        </div>
      </section>

      {/* Quick Navigation / Overview Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        <Link href="/about" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors">
            <User className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">About Me</h3>
            <p className="text-muted-foreground">From Bangla literature to DevOps architecture. Discover my unconventional journey.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">Read Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
        <Link href="/projects" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors">
            <Briefcase className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Featured Projects</h3>
            <p className="text-muted-foreground">Case studies of full-stack applications and infrastructure solutions I've built.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">View Portfolio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
        <Link href="/skills" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors">
            <Cpu className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Technical Stack</h3>
            <p className="text-muted-foreground">Interactive visualization of my expertise across Frontend, Backend, and DevOps.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">Explore Skills <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
        <Link href="/devops" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors">
            <TerminalIcon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">DevOps Laboratory</h3>
            <p className="text-muted-foreground">See how I automate pipelines and manage cloud infrastructure.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">View Pipelines <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
        <Link href="/blog" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors">
            <FileText className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Engineering Notes</h3>
            <p className="text-muted-foreground">Thoughts on software engineering, complexity, and team culture.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">Read Articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
        <Link href="/contact" className="group">
          <GlassCard className="h-full p-6 hover:border-primary/50 transition-colors bg-primary/5">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Send className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Get Started</h3>
            <p className="text-muted-foreground">Ready to collaborate? Let's discuss your next big project.</p>
            <div className="mt-4 flex items-center text-sm text-primary font-medium">Contact Me <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </GlassCard>
        </Link>
      </section>
    </div>
  );
}
