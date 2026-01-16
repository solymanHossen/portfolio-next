"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";

// Helper to map string to icon component
const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Let's Build Something Together
          </h3>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <GlassCard className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </GlassCard>

          <GlassCard className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground">{personalInfo.location}</p>
            </div>
          </GlassCard>

          <GlassCard className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Timezone</p>
              <p className="text-foreground">{personalInfo.timezone}</p>
            </div>
          </GlassCard>
        </div>

        {/* Availability Status */}
        <div className="p-4 rounded-xl bg-success/10 border border-success/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-success font-medium">Currently Available</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Open to full-time opportunities, freelance projects, and consulting engagements.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <GlassCard className="p-8" hover={false}>
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h4 className="font-display font-semibold text-foreground">Send a Message</h4>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
            <input
              type="text"
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              placeholder="Project inquiry..."
              required
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Message</label>
            <textarea
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Message
          </motion.button>
        </form>
      </GlassCard>
    </div>
  );
};
