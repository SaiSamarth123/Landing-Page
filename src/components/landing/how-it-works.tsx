"use client";

import {
  Activity,
  Building2,
  Code2,
  FileCode,
  Layers,
  LineChart,
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

const STEPS = [
  {
    number: "01",
    icon: Code2,
    title: "Integrate the SDK",
    description:
      "Add the Anchor SDK to your agent runtime. Register your agent and route tool calls through the gateway.",
    snippet: `import { Anchor } from '@anchor/sdk';

const anchor = new Anchor({ apiKey });
await anchor.register(agent);
// Tool calls now flow through Anchor`,
  },
  {
    number: "02",
    icon: FileCode,
    title: "Define Policies",
    description:
      "Declare who can call what in versioned YAML. Integration-level, tool-level, and agent-level rules.",
    snippet: `policies:
  - agent_id: agent-123
    integrations:
      - mcp-database: allow
    tools:
      search_db: allow
      delete_db: deny`,
  },
  {
    number: "03",
    icon: LineChart,
    title: "Monitor & Enforce",
    description:
      "View agent status, trace every execution, and audit every decision. Default-deny enforcement at the gateway.",
    visual: "Dashboard with agents, traces, and audit logs",
  },
] as const;

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

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          Get started in three steps
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <div
          className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
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
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff4f00]/20 font-mono text-xs font-bold text-[#ff4f00]">
                        {step.number}
                      </span>
                      <Icon
                        className="h-5 w-5 text-[#ff4f00]"
                        aria-hidden
                      />
                    </div>
                    <CardTitle className="font-mono text-lg font-bold text-foreground">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {"snippet" in step ? (
                      <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-xs text-muted-foreground">
                        <code>{step.snippet}</code>
                      </pre>
                    ) : (
                      <div className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-black/40">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <LineChart className="h-5 w-5" aria-hidden />
                          <span className="text-sm">{step.visual}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* What You Get: 6 pillars */}
        <p className="mt-20 mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          What you get
        </p>
        <h3 className="mb-8 font-mono text-2xl font-bold text-foreground md:text-3xl">
          Built for Enterprise Control
        </h3>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Six pillars that give you visibility, governance, and control across
          your entire agent fleet.
        </p>
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
