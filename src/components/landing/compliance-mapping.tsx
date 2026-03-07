"use client";

import { Activity, FileCheck, Scale, Shield } from "lucide-react";
import { motion } from "motion/react";

const COMPLIANCE_ITEMS = [
  {
    icon: Shield,
    standard: "EU AI Act",
    requirement: "Article 14: Human Oversight. Requires high-risk AI to be overseen by natural persons to prevent risks.",
    mechanism: "Conditional Approval Triggers: Automatically pauses high-stakes tool calls (e.g., financial or data deletion) for human sign-off via Slack/Dashboard.",
  },
  {
    icon: Activity,
    standard: "NIST AI 600-1",
    requirement: "Continuous Monitoring & Incident Response. Mandates tracking AI system behavior to mitigate systemic risks.",
    mechanism: "Execution Gateway: Provides real-time interception and \"Kill Switch\" capabilities to isolate compromised or malfunctioning agents instantly.",
  },
  {
    icon: FileCheck,
    standard: "ISO/IEC 42001",
    requirement: "Operational Boundaries. Organizations must define and enforce the \"scope of autonomy\" for AI systems.",
    mechanism: "Policy-as-Code (YAML): Transforms abstract governance goals into deterministic, version-controlled rules that limit agents to \"Least Privilege\" access.",
  },
  {
    icon: Scale,
    standard: "SOC2 / HIPAA",
    requirement: "Auditability & Data Sovereignty. Requires immutable logs of who (or what) accessed sensitive data and why.",
    mechanism: "Forensic Audit Trail: Cryptographically signed logs of every agentic \"Chain of Thought\" and subsequent tool execution for complete legal defensibility.",
  },
] as const;

export function ComplianceMapping() {
  return (
    <section
      id="compliance"
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
          Regulatory & Enterprise Compliance
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Enterprise Trust
        </h2>
        <p className="mb-12 max-w-2xl text-lg italic text-muted-foreground">
          Anchor turns the CISO&apos;s &quot;No&quot; into a &quot;Safe Yes&quot;.
        </p>
        <div
          className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPLIANCE_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.standard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
                className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 transition-colors hover:border-[#ff4f00]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff4f00]/20">
                  <Icon className="h-6 w-6 text-[#ff4f00]" aria-hidden />
                </div>
                <h3 className="mb-2 font-mono text-lg font-bold text-foreground">
                  {item.standard}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {item.requirement}
                </p>
                <p className="text-sm font-medium text-emerald-400/90">
                  {item.mechanism}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
