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
}> = [
  {
    title: "Fleet Management",
    description:
      "Monitor and orchestrate thousands of agents from a single pane.",
    icon: Layers,
  },
  {
    title: "Tool Governance",
    description: "Approve, deny, or scope every tool call an agent makes.",
    icon: ShieldCheck,
  },
  {
    title: "Policy-as-Code",
    description:
      "Define guardrails in code. Version, test, and deploy policies like software.",
    icon: FileCode,
  },
  {
    title: "Tracing & Replay",
    description:
      "Full execution traces with step-by-step replay for debugging.",
    icon: Activity,
  },
  {
    title: "Audit Logging",
    description: "Immutable, queryable logs for compliance and forensics.",
    icon: ScrollText,
  },
  {
    title: "Multi-Tenancy",
    description:
      "Isolate workloads, teams, and data across organizational boundaries.",
    icon: Building2,
  },
];

export function ProductPillars() {
  return (
    <section
      id="product-pillars"
      className="relative px-6 py-24 md:px-12"
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
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {pillar.description}
                  </CardDescription>
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
