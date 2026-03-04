"use client";

import {
  AlertTriangle,
  CheckCircle2,
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
    text: "No consistent audit trail for compliance",
  },
  {
    icon: HardDrive,
    text: "Hardcoded tool access in scripts",
  },
  {
    icon: ShieldX,
    text: "No structured policy enforcement",
  },
  {
    icon: Gauge,
    text: "No cost or token visibility",
  },
] as const;

const SOLUTIONS = [
  {
    icon: CheckCircle2,
    text: "Unified control plane for all agents",
  },
  {
    icon: ScrollText,
    text: "Immutable audit logs and trace storage",
  },
  {
    icon: KeyRound,
    text: "Policy-as-code with version control",
  },
  {
    icon: FileWarning,
    text: "Every tool invocation authenticated and authorized",
  },
  {
    icon: ShieldX,
    text: "Token-level analytics and cost visibility",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          AI Agents Are Scaling. Governance Isn&apos;t.
        </h2>
        <div
          className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]"
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
