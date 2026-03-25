"use client";

import { Activity, ScrollText, Shield, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TENETS: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
}> = [
  {
    title: "Control Plane",
    description:
      "A single place to register, manage, and control every agent across your org — from onboarding to revocation.",
    icon: Shield,
    features: [
      "Register agents and issue API keys",
      "Activate, pause, or revoke agents instantly",
      "Track runtime state and last-seen heartbeat",
      "Manage integrations and tool inventories",
      "Default-deny enforcement at the gateway",
    ],
  },
  {
    title: "Observability",
    description:
      "Full visibility into every execution — what your agents did, what tools they called, and what it cost.",
    icon: Activity,
    features: [
      "Span-based execution traces with model and tool spans",
      "Token usage, latency, and cost per agent",
      "Replay any trace step-by-step for debugging",
      "Allow and deny rates per agent and integration",
      "Immutable audit log for every decision",
    ],
  },
  {
    title: "Governance",
    description:
      "Define and enforce the rules agents must follow — at the integration, tool, and payload level.",
    icon: ScrollText,
    features: [
      "Per-agent, per-integration, per-tool policies",
      "Condition-based custom rules (payload, model, time)",
      "Policy changes tracked and versioned",
      "Compliance-ready audit export",
      "Multi-tenant org isolation and RBAC",
    ],
  },
];

export function ProductPillars() {
  return (
    <section
      id="product-pillars"
      className="relative scroll-mt-20 border-t border-white/5 px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          What we stand for
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Core Tenets
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Three principles that define how Anchor approaches AI agent management — and how every feature we build earns its place.
        </p>
        <div className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]" aria-hidden />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TENETS.map((tenet, i) => {
            const Icon = tenet.icon;
            return (
              <motion.div
                key={tenet.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <Card className="h-full border-white/10 bg-[#0a0a0a] transition-colors hover:border-white/20">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff4f00]/20">
                      <Icon className="h-6 w-6 text-[#ff4f00]" aria-hidden />
                    </div>
                    <CardTitle className="font-mono text-xl font-bold text-foreground">
                      {tenet.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {tenet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tenet.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4f00]/60" aria-hidden />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
