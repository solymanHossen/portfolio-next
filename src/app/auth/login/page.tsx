"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"user" | "pass">("user");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Design Side */}
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-muted/20 p-10 border-r border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
          <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-2xl shadow-primary/20">
            <TerminalIcon className="h-12 w-12 text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Admin Console</h1>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Secure access point for system configuration and portfolio management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs pt-8">
            <div className="rounded-lg border border-border/50 bg-background/50 p-4 text-center">
              <div className="text-2xl font-bold font-mono">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Secure</div>
            </div>
            <div className="rounded-lg border border-border/50 bg-background/50 p-4 text-center">
              <div className="text-2xl font-bold font-mono">24/7</div>
              <div className="text-xs text-muted-foreground mt-1">Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form Side */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access the terminal.
            </p>
          </div>

          <GlassCard className="p-0 border-none shadow-none bg-transparent">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase text-muted-foreground">Identity</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <Input
                    id="email"
                    placeholder="admin@solyman.dev"
                    className="pl-9 font-mono bg-background/50 border-input/50 focus:border-primary/50"
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-mono text-xs uppercase text-muted-foreground">Access Key</Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    Forgot key?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••••••"
                    className="pl-9 font-mono bg-background/50 border-input/50 focus:border-primary/50"
                    disabled={isLoading}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className={cn("w-full transition-all duration-300", isLoading ? "bg-primary/80" : "")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                    Authenticating...
                  </>
                ) : (
                  "Init System"
                )}
              </Button>
            </form>
          </GlassCard>

          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary underline underline-offset-4">
              Return to public site
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
