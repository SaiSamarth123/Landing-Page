"use client";

import {
  Activity,
  Building2,
  FileCode,
  Layers,
  ScrollText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PILLARS: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
}> = [
  {
    title: "Fleet Management",
    description:
      "Monitor and orchestrate thousands of agents from a single pane.",
    icon: Layers,
    features: [
      "Register agents and issue API keys",
      "Track heartbeat and runtime state (ONLINE/OFFLINE)",
      "Activate, pause, or revoke agents",
      "View privilege levels and last seen timestamps",
    ],
  },
  {
    title: "Tool Governance",
    description: "Approve, deny, or scope every tool call an agent makes.",
    icon: ShieldCheck,
    features: [
      "Register integrations (e.g., MCP servers) and tools",
      "Assign privilege requirements per tool",
      "Enforcement through execution gateway",
      "Structured tool inventory across the org",
    ],
  },
  {
    title: "Policy-as-Code",
    description:
      "Define guardrails in code. Version, test, and deploy policies like software.",
    icon: FileCode,
    features: [
      "Versioned YAML policies",
      "Integration, tool, and agent-level rules",
      "Policy change history and impact tracking",
      "Future: rate limiting, time-based restrictions",
    ],
  },
  {
    title: "Tracing & Replay",
    description:
      "Full execution traces with step-by-step replay for debugging.",
    icon: Activity,
    features: [
      "Span-based traces (LLM + tool spans)",
      "Model name, token usage, latency per call",
      "Tool calls with args, duration, ALLOW/DENY",
      "Cost analysis and performance debugging",
    ],
  },
  {
    title: "Audit Logging",
    description: "Immutable, queryable logs for compliance and forensics.",
    icon: ScrollText,
    features: [
      "Agent lifecycle events",
      "Tool invocation decisions and policy changes",
      "Payload hashes for tamper evidence",
      "Per-agent views and compliance export",
    ],
  },
  {
    title: "Multi-Tenancy",
    description:
      "Isolate workloads, teams, and data across organizational boundaries.",
    icon: Building2,
    features: [
      "Orgs with multiple users",
      "Groups and agent sharing",
      "Role-based permissions (Admin, Editor, Viewer)",
      "Org-scoped audit logs and traces",
    ],
  },
];

export function ProductPillars() {
  return (
    <section
      id="product-pillars"
      className="relative scroll-mt-20 px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Built for Enterprise Control
        </h2>
        <div
          className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <Card className="h-full border-white/10 bg-[#0a0a0a] transition-colors hover:border-white/20">
                  <CardHeader>
                    <Icon
                      className="h-10 w-10 text-[#ff4f00]"
                      aria-hidden
                    />
                    <CardTitle className="font-mono text-lg font-bold text-foreground">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
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
