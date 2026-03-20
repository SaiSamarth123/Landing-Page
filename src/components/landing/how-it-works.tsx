"use client";

import { Code2, FileCode, LineChart } from "lucide-react";
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
      </motion.div>
    </section>
  );
}
