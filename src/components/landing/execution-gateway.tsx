"use client";

import { ArrowDown, CheckCircle2, Key, FileCode, Layers, Shield, XCircle } from "lucide-react";
import { motion } from "motion/react";

const POLICY_YAML = `# Default-deny policy
default: deny

agents:
  - id: agent-abc-123
    privilege: Editor
    integrations:
      mcp-database: allow
      mcp-slack: allow
      mcp-admin: deny
    tools:
      search_db: allow
      delete_db: deny

  - id: agent-xyz-456
    privilege: Viewer
    integrations:
      mcp-database: allow
    tools:
      search_db: allow`;

const STEPS = [
  { icon: Key, label: "Agent Authentication", desc: "Validate API key, confirm ACTIVE" },
  { icon: FileCode, label: "Policy Load", desc: "Retrieve latest YAML for org" },
  { icon: Layers, label: "Integration Check", desc: "Allowed? Denied? Default?" },
  { icon: Shield, label: "Tool Check", desc: "Allowed? Denied? Default?" },
  { icon: CheckCircle2, label: "Decision", desc: "ALLOW or DENY" },
] as const;

export function ExecutionGateway() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          See the platform in action
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Default-Deny Execution Gateway
        </h2>
        <div
          className="mb-4 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          Every tool invocation is authenticated, authorized, audited, and
          traceable. No tool can run without governance approval.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* YAML policy */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                policy.yaml
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs text-muted-foreground">
              <code>{POLICY_YAML}</code>
            </pre>
          </div>

          {/* Enforcement flow */}
          <div>
            <h3 className="mb-6 font-mono text-lg font-bold text-foreground">
              Enforcement Flow
            </h3>
            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === STEPS.length - 1;
                return (
                  <div key={step.label} className="flex flex-col items-center gap-0">
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex w-full items-center gap-4 rounded-lg border border-white/10 bg-[#0a0a0a] px-4 py-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ff4f00]/20">
                        <Icon className="h-4 w-4 text-[#ff4f00]" aria-hidden />
                      </div>
                      <div>
                        <p className="font-mono text-sm font-bold text-foreground">
                          {step.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                    {!isLast && (
                      <div className="py-1">
                        <ArrowDown
                          className="h-4 w-4 text-muted-foreground"
                          aria-hidden
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                ALLOW
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-red-400">
                <XCircle className="h-4 w-4" aria-hidden />
                DENY
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
