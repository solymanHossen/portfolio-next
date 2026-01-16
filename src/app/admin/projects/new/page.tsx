"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Save, X, ImageIcon, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Form Schema
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  slug: z.string().min(2, "Slug is required."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  content: z.string().optional(),
  techStack: z.string().refine(val => val.split(',').length > 0, "Add at least one tech."),
  liveUrl: z.string().url("Must be a valid URL.").optional().or(z.literal("")),
  repoUrl: z.string().url("Must be a valid URL.").optional().or(z.literal("")),
  featured: z.boolean().default(false),
});

export default function NewProjectPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      techStack: "",
      featured: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      router.push("/admin/projects");
    }, 1000);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Create Project</h2>
          <p className="text-muted-foreground mt-1">Add a new case study to your portfolio.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/admin/projects">
              Cancel
            </Link>
          </Button>
          <Button onClick={form.handleSubmit(onSubmit)}>
            <Save className="mr-2 h-4 w-4" /> Save Project
          </Button>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Main Form Area */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. E-Commerce Platform" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="e-commerce-platform" {...field} className="font-mono text-sm" />
                      </FormControl>
                      <FormDescription>
                        URL friendly identifier.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        {/* Fallback to standard textarea if UI component missing */}
                        <textarea
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="A brief summary for the preview card..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="liveUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Live URL</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <GlobeIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="https://" {...field} className="pl-9" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="repoUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Repository URL</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <GithubIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="https://github.com/..." {...field} className="pl-9" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="techStack"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tech Stack</FormLabel>
                      <FormControl>
                        <Input placeholder="React, Node.js, TypeScript..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Comma separated list of technologies.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4">Case Study Content</h3>
            <div className="min-h-[300px] border border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center bg-muted/5">
              <p className="text-muted-foreground">Markdown Editor Placeholder</p>
            </div>
          </GlassCard>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Publishing</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-0.5 text-xs font-semibold text-yellow-500">
                  Draft
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Visibility</span>
                <span className="text-sm font-medium">Public</span>
              </div>
              <div className="pt-4 border-t border-border/50">
                <Button className="w-full" variant="secondary">
                  Schedule Publish
                </Button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Media</h3>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/5 transition-colors cursor-pointer">
              <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Upload Thumbnail</p>
              <p className="text-xs text-muted-foreground mt-1"> Drag & drop or click to browse</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.2 3-1.2 0 0-1 0-3 .28-2.35 0-3.5 1-3.5-3-5.5-3-2.5-1-.28-2.35 0-3.5.28 0 0 0 1 0 3 1.2 3 1.2 0 0 1 0 3 .28 2.35 0 3.5 1 3.5-2.5 0-1 0 3 1.2 3 1.2 0 0 1 0 3 .28-2.35 0-3.5 1-3.5 3-5.5-3-2.5-.28-1.15-.28-2.35-.91-1.23C7.34 2.024 10.02 0 12 0c1.98 0 4.66 2.024 6.91 4.77.63 1.12.63 2.32 1 3.5 0 .08.27 1.25 1 3.5 2 0 5 2 5 5.5s-3 5.5-6 5.5" />
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
    </svg>
  )
}
