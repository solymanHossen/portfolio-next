"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, Globe, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge"; // Check if badge exists or fallback
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.techStack.some((stack) => stack.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground mt-1">Manage your portfolio showcase items.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Filter Bar */}
      <GlassCard className="flex items-center p-2 gap-2">
        <Search className="h-4 w-4 ml-2 text-muted-foreground" />
        <Input
          placeholder="Search projects by name or stack..."
          className="border-none bg-transparent focus-visible:ring-0 shadow-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </GlassCard>

      {/* Projects Grid/Table */}
      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <GlassCard key={project.id} className="p-6 transition-all hover:bg-muted/10 group">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-500/20">
                      <Star className="mr-1 h-3 w-3 fill-yellow-500" /> Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit Project</DropdownMenuItem>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500 focus:text-red-500">
                    Delete Project
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div key={tech} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span className="hover:underline cursor-pointer">Live Demo</span>
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-3 w-3" />
                <span className="hover:underline cursor-pointer">Repository</span>
              </div>
              <div className="ml-auto font-mono text-xs">
                ID: {project.id}
              </div>
            </div>
          </GlassCard>
        ))}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
