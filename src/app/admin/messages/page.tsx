"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"; // Reusing badge conceptually, or simple div
import { Search, Mail, Archive, Trash2, Reply, Star, MoreVertical } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const messages = [
  { id: 1, sender: "Sarah Johnson", email: "sarah.j@techrecruits.com", subject: "Senior React Developer Opportunity", preview: "Hi Solyman, I came across your portfolio and was impressed by your work with...", date: "10:42 AM", read: false, starred: true },
  { id: 2, sender: "Mike Chen", email: "mike@startup.io", subject: "Project collaboration inquiry", preview: "Hey, we're looking for a freelancer to help us architect our new...", date: "Yesterday", read: true, starred: false },
  { id: 3, sender: "Github Notifications", email: "noreply@github.com", subject: "[solymanhossen/portfolio-v2] Security alert", preview: "We found a potential security vulnerability in one of your dependencies...", date: "Jan 14", read: true, starred: false },
  { id: 4, sender: "David Smith", email: "david.smith@gmail.com", subject: "Question about your DevOps blog post", preview: "Great article on CI/CD pipelines! I had a quick question about the...", date: "Jan 12", read: true, starred: false },
];

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
      {/* Message List */}
      <div className={cn("w-full md:w-1/3 flex flex-col gap-4", selectedMessage ? "hidden md:flex" : "flex")}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Inbox</h2>
          <Badge className="bg-primary text-primary-foreground rounded-full px-2">2 New</Badge>
        </div>

        <GlassCard className="flex items-center p-2 gap-2">
          <Search className="h-4 w-4 ml-2 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="border-none bg-transparent focus-visible:ring-0 shadow-none h-8"
          />
        </GlassCard>

        <div className="flex-1 overflow-auto space-y-2 pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMessage(msg.id)}
              className={cn(
                "cursor-pointer rounded-lg p-3 border transition-all duration-200",
                selectedMessage === msg.id
                  ? "bg-primary/10 border-primary/50 ring-1 ring-primary/20"
                  : "bg-background/40 hover:bg-muted/40 border-transparent hover:border-border/50",
                !msg.read && "font-medium"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={cn("text-sm truncate", !msg.read ? "text-foreground font-semibold" : "text-muted-foreground")}>
                  {msg.sender}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{msg.date}</span>
              </div>
              <div className="text-sm truncate text-foreground/90">{msg.subject}</div>
              <div className="text-xs text-muted-foreground truncate">{msg.preview}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className={cn("w-full md:w-2/3 flex flex-col", !selectedMessage ? "hidden md:flex" : "flex")}>
        {selectedMessage ? (
          <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden h-full">
            {/* Toolbar */}
            <div className="p-4 border-b border-border/40 flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSelectedMessage(null)}>
                  <Reply className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="ghost" size="icon"><Archive className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                <div className="h-4 w-px bg-border/50 mx-2" />
                <Button variant="ghost" size="icon"><Mail className="h-4 w-4" /></Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon"><Star className={cn("h-4 w-4", messages.find(m => m.id === selectedMessage)?.starred ? "fill-yellow-500 text-yellow-500" : "")} /></Button>
                <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1 overflow-auto">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{messages.find(m => m.id === selectedMessage)?.subject}</h1>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {messages.find(m => m.id === selectedMessage)?.sender[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{messages.find(m => m.id === selectedMessage)?.sender}</div>
                      <div className="text-sm text-muted-foreground">{messages.find(m => m.id === selectedMessage)?.email}</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {messages.find(m => m.id === selectedMessage)?.date}, 2024
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>Hi Solyman,</p>
                <p>I hope this email finds you well.</p>
                <p>{messages.find(m => m.id === selectedMessage)?.preview} building scalable cloud infrastructures using AWS and Terraform. We are currently looking for a Senior DevOps Engineer to lead our new platform team.</p>
                <p>Would you be available for a quick 15-minute chat sometime this week to discuss this further?</p>
                <p>Best regards,<br />{messages.find(m => m.id === selectedMessage)?.sender.split(' ')[0]}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Quick Reply</label>
                <textarea
                  className="w-full h-32 rounded-lg bg-background/50 border border-input p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none placeholder:text-muted-foreground/50"
                  placeholder="Type your reply here..."
                />
                <div className="mt-2 flex justify-end">
                  <Button size="sm">
                    <Reply className="mr-2 h-4 w-4" /> Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ) : (
          <GlassCard className="flex-1 flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
            <Mail className="h-16 w-16 mb-4 opacity-20" />
            <h3 className="text-lg font-medium">No message selected</h3>
            <p>Select a conversation from the list to view details.</p>
          </GlassCard>
        )}
      </div>
    </div>
  );
}

