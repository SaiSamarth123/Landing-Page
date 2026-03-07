"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WaitlistFormProps {
  className?: string;
  variant?: "inline" | "stacked";
}

export function WaitlistForm({ className, variant = "inline" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-md",
        variant === "stacked" && "flex flex-col gap-3",
        variant === "inline" && "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2",
        className
      )}
    >
      <div className="relative flex-1">
        <Mail
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          className={cn(
            "h-11 border-white/10 bg-white/5 pl-10 font-mono text-foreground placeholder:text-muted-foreground focus-visible:ring-[#ff4f00]/50",
            status === "error" && "border-red-500/50 focus-visible:ring-red-500/50"
          )}
          aria-invalid={status === "error"}
          aria-describedby={message ? "waitlist-message" : undefined}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
      className="h-11 shrink-0 bg-[#ff4f00] font-semibold text-white shadow-[0_0_20px_rgba(255,79,0,0.3)] transition-all hover:bg-[#ff6b2a] hover:shadow-[0_0_30px_rgba(255,79,0,0.4)] disabled:opacity-60 sm:px-8"
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </Button>
      {message && (
        <p
          id="waitlist-message"
          className={cn(
            "text-sm",
            status === "success" && "text-emerald-400",
            status === "error" && "text-red-400"
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
