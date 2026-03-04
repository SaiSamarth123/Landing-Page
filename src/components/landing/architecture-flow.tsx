"use client";

import {
  Bot,
  ChevronDown,
  ChevronRight,
  Database,
  FileCode,
  Key,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

const NODES = [
  {
    id: "agents",
    icon: Bot,
    label: "AI Agents",
    description: "Your agents connect via SDK",
  },
  {
    id: "sdk",
    icon: Key,
    label: "Anchor SDK",
    description: "Authenticate and route calls",
  },
  {
    id: "gateway",
    icon: Shield,
    label: "Anchor Gateway",
    description: "Central enforcement point",
  },
  {
    id: "policy",
    icon: FileCode,
    label: "Policy Engine",
    description: "Every call evaluated against policy",
  },
  {
    id: "store",
    icon: Database,
    label: "Audit + Trace Store",
    description: "Full trace and audit stored",
  },
] as const;

export function ArchitectureFlow() {
  return (
    <section className="relative px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          How we solve it
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Anchor Sits in the Middle
        </h2>
        <div
          className="mb-4 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          Every tool call flows through Anchor—from your agents, via the SDK,
          to the gateway and policy engine. Nothing runs without governance.
        </p>

        {/* Desktop: horizontal flow */}
        <div className="hidden items-stretch gap-2 overflow-x-auto pb-4 lg:flex lg:justify-between">
          {NODES.map((node, i) => {
            const Icon = node.icon;
            const isLast = i === NODES.length - 1;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex min-w-0 flex-1 items-center"
              >
                <div className="flex flex-1 flex-col items-center rounded-xl border border-white/10 bg-[#0a0a0a] p-6 text-center transition-colors hover:border-[#ff4f00]/30">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff4f00]/20">
                    <Icon className="h-6 w-6 text-[#ff4f00]" aria-hidden />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-foreground">
                    {node.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {node.description}
                  </p>
                </div>
                {!isLast && (
                  <div className="flex shrink-0 px-1">
                    <ChevronRight
                      className="h-6 w-6 text-muted-foreground"
                      aria-hidden
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex flex-col gap-4 lg:hidden">
          {NODES.map((node, i) => {
            const Icon = node.icon;
            const isLast = i === NODES.length - 1;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4"
              >
                <div className="flex flex-1 items-center gap-4 rounded-xl border border-white/10 bg-[#0a0a0a] p-4 transition-colors hover:border-[#ff4f00]/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff4f00]/20">
                    <Icon className="h-5 w-5 text-[#ff4f00]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-mono text-sm font-bold text-foreground">
                      {node.label}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {node.description}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex shrink-0 justify-center">
                    <ChevronDown
                      className="h-5 w-5 text-muted-foreground"
                      aria-hidden
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Execution path note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-center font-mono text-sm text-emerald-400/90"
        >
          Policy Engine → Execute or Deny → Audit Log + Trace Store
        </motion.div>
      </motion.div>
    </section>
  );
}
