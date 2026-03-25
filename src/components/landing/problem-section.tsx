"use client";

import {
  AlertTriangle,
  CheckCircle2,
  CircleDollarSign,
  DollarSign,
  EyeOff,
  FileWarning,
  Gauge,
  HardDrive,
  KeyRound,
  ScrollText,
  ShieldX,
} from "lucide-react";
import { motion } from "motion/react";

const PROBLEMS = [
  {
    icon: EyeOff,
    text: "No central visibility across agents and tools",
  },
  {
    icon: ScrollText,
    text: "No audit trail when things go wrong",
  },
  {
    icon: ShieldX,
    text: "Agents can call any tool without restrictions",
  },
  {
    icon: Gauge,
    text: "No cost or token visibility",
  },
  {
    icon: DollarSign,
    text: "No way to stop runaway agents until it's too late",
  },
] as const;

const SOLUTIONS = [
  {
    icon: CheckCircle2,
    text: "Unified control plane for all agents",
  },
  {
    icon: ScrollText,
    text: "Get a complete audit trail for every tool call",
  },
  {
    icon: KeyRound,
    text: "Enforce policies on what agents can and cannot do",
  },
  {
    icon: CircleDollarSign,
    text: "Track token usage and cost across all agents",
  },
  {
    icon: ShieldX,
    text: "Automatically stop runaway behavior before costs explode",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
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
          The problem
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          AI Agents Are Scaling. Governance Isn&apos;t.
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Teams are shipping AI agents fast, but they have no visibility into what those agents are doing, what tools they are calling, or how much they are spending.
        </p>
        <div
          className="mb-12 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Problems */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-400" aria-hidden />
              <h3 className="font-mono text-lg font-bold text-red-400/90">
                The Problem
              </h3>
            </div>
            <ul className="space-y-4">
              {PROBLEMS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" aria-hidden />
              <h3 className="font-mono text-lg font-bold text-emerald-400/90">
                Anchor Solves This
              </h3>
            </div>
            <ul className="space-y-4">
              {SOLUTIONS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
