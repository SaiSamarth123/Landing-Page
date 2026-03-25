"use client";

import { CheckCircle2, Code2, FileCode, LineChart } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

// ─── Widget: Agent Fleet ──────────────────────────────────────────────────────

const MOCK_AGENTS = [
  { name: "Jira Agent",        id: "agent_f93b18", status: "ACTIVE", online: false },
  { name: "Slack Agent",       id: "agent_1a18df", status: "ACTIVE", online: false },
  { name: "Personal Assistant Agent", id: "agent_2875ab", status: "PAUSED", online: false },
  { name: "Code Review Agent", id: "agent_cb07bc", status: "ACTIVE", online: false },
  { name: "Weather Agent",     id: "agent_3780d6", status: "ACTIVE", online: true  },
];

function AgentFleetWidget() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
      <div className="grid grid-cols-4 border-b border-white/10">
        {[
          { label: "Total Agents", value: "7",       color: "text-foreground"  },
          { label: "Online Now",   value: "1",       color: "text-emerald-400" },
          { label: "Total Traces", value: "2",       color: "text-foreground"  },
          { label: "Est. Cost",    value: "$0.0183", color: "text-emerald-400" },
        ].map((stat, i) => (
          <div key={stat.label} className={`p-4 ${i < 3 ? "border-r border-white/10" : ""}`}>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="divide-y divide-white/5">
        {MOCK_AGENTS.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors">
            <div>
              <p className="text-sm font-medium text-foreground">{agent.name}</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{agent.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                agent.status === "ACTIVE"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
              }`}>
                {agent.status}
              </span>
              <span className={`text-xs font-mono ${agent.online ? "text-emerald-400" : "text-muted-foreground"}`}>
                {agent.online ? "● ONLINE" : "○ OFFLINE"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Widget: Policy Builder (4 phases) ───────────────────────────────────────

const INTEGRATIONS_LIST = [
  { name: "Chrome Agent",      tools: 2, selected: false },
  { name: "Google Calendar",   tools: 3, selected: false },
  { name: "Google Docs",       tools: 4, selected: true  },
  { name: "Jira",              tools: 3, selected: false },
  { name: "Slack",             tools: 3, selected: true  },
  { name: "Weather Integration", tools: 2, selected: true },
];

const TOOLS_LIST = [
  { integration: "Google Docs", name: "Post",   allowed: false },
  { integration: "Google Docs", name: "Read",   allowed: true  },
  { integration: "Google Docs", name: "Delete", allowed: true  },
  { integration: "Google Docs", name: "Update", allowed: true  },
  { integration: "Slack",       name: "Read",         allowed: true  },
  { integration: "Slack",       name: "Get User",     allowed: true  },
  { integration: "Slack",       name: "Send message", allowed: false },
];

const WIZARD_STEPS = ["Agent", "Integrations", "Tools", "Rules"] as const;
type WizardStep = typeof WIZARD_STEPS[number];

function PolicyBuilderWidget() {
  const [activeStep, setActiveStep] = useState<WizardStep>("Rules");
  const [selectedAgent, setSelectedAgent] = useState("Personal Assistant Agent - agent_2875ab");
  const [integrations, setIntegrations] = useState(INTEGRATIONS_LIST);
  const [tools, setTools] = useState(TOOLS_LIST);

  const stepIndex = WIZARD_STEPS.indexOf(activeStep);

  function toggleIntegration(name: string) {
    setIntegrations((prev) =>
      prev.map((i) => (i.name === name ? { ...i, selected: !i.selected } : i))
    );
  }

  function toggleTool(idx: number) {
    setTools((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, allowed: !t.allowed } : t))
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
      {/* Step tabs */}
      <div className="flex border-b border-white/10">
        {WIZARD_STEPS.map((step, i) => {
          const done = i < stepIndex;
          const active = step === activeStep;
          return (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`flex-1 py-2.5 text-center text-xs font-semibold border-r border-white/10 last:border-r-0 transition-colors cursor-pointer ${
                active
                  ? "text-[#ff4f00] bg-[#ff4f00]/5"
                  : done
                  ? "text-emerald-400 hover:bg-white/5"
                  : "text-muted-foreground/50 hover:bg-white/5"
              }`}
            >
              {done ? "✓ " : ""}{step}
            </button>
          );
        })}
      </div>

      {/* Phase: Agent */}
      {activeStep === "Agent" && (
        <div className="p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Select Agent</p>
          <p className="text-xs text-muted-foreground mb-4">Choose the agent you want to configure access policies for.</p>
          <div className="relative">
            <select
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:border-[#ff4f00]/40"
            >
              {MOCK_AGENTS.map((a) => (
                <option key={a.id} value={`${a.name} - ${a.id}`} className="bg-[#0a0a0a]">
                  {a.name} — {a.id}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">▼</span>
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Summary</p>
            <p className="text-sm font-semibold text-foreground">{selectedAgent.split(" - ")[0]}</p>
            <p className="text-xs text-muted-foreground mt-0.5">No integrations selected yet</p>
          </div>
          <button
            onClick={() => setActiveStep("Integrations")}
            className="mt-4 w-full rounded-lg bg-[#ff4f00]/10 border border-[#ff4f00]/20 py-2 text-sm font-semibold text-[#ff4f00] hover:bg-[#ff4f00]/20 transition-colors"
          >
            Select Integrations →
          </button>
        </div>
      )}

      {/* Phase: Integrations */}
      {activeStep === "Integrations" && (
        <div className="p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Select Integrations</p>
          <p className="text-xs text-muted-foreground mb-4">Choose which integrations this agent may access. All tools are allowed by default.</p>
          <div className="grid grid-cols-2 gap-2">
            {integrations.map((integ) => (
              <button
                key={integ.name}
                onClick={() => toggleIntegration(integ.name)}
                className={`relative rounded-lg border p-3 text-left transition-colors cursor-pointer ${
                  integ.selected
                    ? "border-[#ff4f00]/40 bg-[#ff4f00]/5"
                    : "border-white/10 bg-black/20 hover:border-white/20"
                }`}
              >
                {integ.selected && (
                  <span className="absolute top-2 right-2 text-[#ff4f00] text-xs">✓</span>
                )}
                <p className="text-xs font-semibold text-foreground pr-4">{integ.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{integ.tools} tools</p>
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveStep("Tools")}
            className="mt-4 w-full rounded-lg bg-[#ff4f00]/10 border border-[#ff4f00]/20 py-2 text-sm font-semibold text-[#ff4f00] hover:bg-[#ff4f00]/20 transition-colors"
          >
            Configure Tools →
          </button>
        </div>
      )}

      {/* Phase: Tools */}
      {activeStep === "Tools" && (
        <div className="p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Tool Access</p>
          <p className="text-xs text-muted-foreground mb-4">All tools are allowed by default. Toggle any tool to Deny.</p>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {["Google Docs", "Slack"].map((integration) => (
              <div key={integration}>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{integration}</p>
                <div className="space-y-1.5">
                  {tools
                    .map((t, i) => ({ ...t, idx: i }))
                    .filter((t) => t.integration === integration)
                    .map((tool) => (
                      <div key={tool.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/5">
                        <span className="text-sm text-muted-foreground font-mono">{tool.name}</span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => !tool.allowed && toggleTool(tool.idx)}
                            className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                              tool.allowed
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "text-muted-foreground border border-white/10 hover:border-white/20"
                            }`}
                          >
                            ALLOW
                          </button>
                          <button
                            onClick={() => tool.allowed && toggleTool(tool.idx)}
                            className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                              !tool.allowed
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : "text-muted-foreground border border-white/10 hover:border-white/20"
                            }`}
                          >
                            DENY
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setActiveStep("Rules")}
            className="mt-4 w-full rounded-lg bg-[#ff4f00]/10 border border-[#ff4f00]/20 py-2 text-sm font-semibold text-[#ff4f00] hover:bg-[#ff4f00]/20 transition-colors"
          >
            Add Custom Rules →
          </button>
        </div>
      )}

      {/* Phase: Rules */}
      {activeStep === "Rules" && (
        <div className="p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Custom Rules</p>
          <p className="text-xs text-muted-foreground mb-4">Add condition-based rules — e.g. deny when payload exceeds a threshold.</p>
          <div className="rounded-lg border border-white/10 bg-black/20 p-4 space-y-3">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rule Name</label>
              <div className="mt-1 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-foreground font-mono">do not delete important docs</div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">IF — Conditions</label>
              <div className="mt-1 space-y-1.5">
                <div className="flex gap-2">
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-muted-foreground flex-1">Payload</div>
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-muted-foreground w-24">contains</div>
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-foreground flex-1 font-mono truncate">Engineering onboarding doc</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-semibold text-muted-foreground">OR</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="flex gap-2">
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-muted-foreground flex-1">Payload</div>
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-muted-foreground w-24">contains</div>
                  <div className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-foreground flex-1 font-mono truncate">2025 QBR report</div>
                </div>
              </div>
              <div className="mt-2 rounded-md border border-white/5 bg-black/20 px-3 py-2 text-xs text-muted-foreground font-mono leading-relaxed">
                If payload contains &quot;Engineering onboarding doc&quot; OR &quot;2025 QBR report&quot; THEN deny
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">THEN — Action</label>
              <div className="mt-1 rounded-md border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm text-red-400 font-semibold">Deny</div>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-[#ff4f00]/10 border border-[#ff4f00]/20 py-2 text-sm font-semibold text-[#ff4f00] hover:bg-[#ff4f00]/20 transition-colors">
            Save Policy →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Widget: Monitoring / Trace ───────────────────────────────────────────────

function MonitoringWidget() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
      <div className="grid grid-cols-4 border-b border-white/10">
        {[
          { label: "Status",     value: "ACTIVE",  color: "text-emerald-400" },
          { label: "Allow Rate", value: "90%",     color: "text-emerald-400" },
          { label: "Deny Rate",  value: "10%",     color: "text-red-400"     },
          { label: "Est. Cost",  value: "$0.0117", color: "text-foreground"  },
        ].map((s, i) => (
          <div key={s.label} className={`p-4 ${i < 3 ? "border-r border-white/10" : ""}`}>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
            <p className={`text-sm font-bold font-mono ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-muted-foreground font-mono">TRACE · 3100 ms · 2240 tokens</span>
          <span className="text-xs text-[#ff4f00] font-semibold">Inspect →</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-amber-500/5 border-l-2 border-amber-400/40">
            <span className="text-base leading-none mt-0.5">👤</span>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-0.5">Human</p>
              <p className="text-sm text-foreground italic">"delete old docs from google docs"</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-[#ff4f00]/5 border-l-2 border-[#ff4f00]/25">
            <span className="text-base leading-none mt-0.5">🧠</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-foreground truncate">claude-sonnet-4-5</p>
                <span className="text-xs font-mono text-muted-foreground shrink-0">1041 ms</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">912 in / 148 out</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-emerald-500/5 border-l-2 border-emerald-500/25 ml-6">
            <span className="text-base leading-none mt-0.5">🔧</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-foreground font-mono truncate">get_docs</p>
                <span className="text-xs font-mono text-muted-foreground shrink-0">52 ms</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">filter: older_than=1y · 4 docs returned</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-[#ff4f00]/5 border-l-2 border-[#ff4f00]/25">
            <span className="text-base leading-none mt-0.5">🧠</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-foreground truncate">claude-sonnet-4-5</p>
                <span className="text-xs font-mono text-muted-foreground shrink-0">1440 ms</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">1104 in / 195 out</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-red-500/5 border-l-2 border-red-500/40 ml-6">
            <span className="text-base leading-none mt-0.5">🚫</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-foreground font-mono truncate">delete_doc</p>
                <span className="text-xs font-mono text-red-400 font-semibold shrink-0">DENIED</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">doc: &quot;Engineering onboarding doc&quot;</p>
              <p className="text-xs text-red-400/60 mt-0.5 font-mono">rule: do not delete important docs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Copy ─────────────────────────────────────────────────────────────────────

const INTEGRATE_BULLETS = [
  "Zero changes to your existing agent logic",
  "Works with any LangChain-compatible agent",
  "Heartbeat, tracing, and policy checks are automatic",
];

const POLICY_BULLETS = [
  "Per-agent, per-integration, per-tool control",
  "Allow or deny individual tools with a single click",
  "Add condition-based custom rules without writing code",
];

const MONITOR_BULLETS = [
  "Real-time agent status, allow/deny rates, and estimated cost",
  "Full execution traces with span timelines and token counts",
  "Immutable audit log for every policy decision",
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
          Get started in three steps
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <div className="mb-24 h-1 w-24 rounded-full bg-[#ff4f00]" aria-hidden />

        <div className="divide-y divide-white/5">

          {/* Step 01 — Integrate */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-16 py-24 lg:grid-cols-2"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4f00]/20 font-mono text-sm font-bold text-[#ff4f00]">01</span>
                <Code2 className="h-5 w-5 text-[#ff4f00]" aria-hidden />
              </div>
              <h3 className="mb-3 font-mono text-2xl font-bold text-foreground md:text-3xl">
                Two lines of code. Full governance.
              </h3>
              <p className="mb-6 text-muted-foreground md:text-lg">
                Wrap your agent with the Anchor SDK and every tool call is automatically routed through the governance gateway. No middleware to manage, no infrastructure to configure, just two lines of code.
              </p>
              <pre className="mb-8 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-5 font-mono text-sm text-muted-foreground">
                <code>{`import anchor\n\nagent = anchor.wrap(agent)\n`}</code>
              </pre>
              <ul className="space-y-3">
                {INTEGRATE_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4f00]" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AgentFleetWidget />
          </motion.div>

          {/* Step 02 — Define Policies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-16 py-24 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
              <PolicyBuilderWidget />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4f00]/20 font-mono text-sm font-bold text-[#ff4f00]">02</span>
                <FileCode className="h-5 w-5 text-[#ff4f00]" aria-hidden />
              </div>
              <h3 className="mb-3 font-mono text-2xl font-bold text-foreground md:text-3xl">
                Set rules, not exceptions.
              </h3>
              <p className="mb-8 text-muted-foreground md:text-lg">
                Use the built-in wizard to control exactly what each agent can access — down to the individual tool. No YAML to hand-write, no code to deploy. Configure once, enforce everywhere.
              </p>
              <ul className="space-y-3">
                {POLICY_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4f00]" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Step 03 — Monitor & Enforce */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-16 py-24 lg:grid-cols-2"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4f00]/20 font-mono text-sm font-bold text-[#ff4f00]">03</span>
                <LineChart className="h-5 w-5 text-[#ff4f00]" aria-hidden />
              </div>
              <h3 className="mb-3 font-mono text-2xl font-bold text-foreground md:text-3xl">
                See everything. Stop anything.
              </h3>
              <p className="mb-8 text-muted-foreground md:text-lg">
                Every tool call is traced, every decision is audited. Watch agents execute in real time, inspect individual spans, and replay any trace to debug exactly what happened in production.
              </p>
              <ul className="space-y-3">
                {MONITOR_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4f00]" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MonitoringWidget />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
