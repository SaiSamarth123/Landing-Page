"use client";

import { CheckCircle2, Clock } from "lucide-react";
import { motion } from "motion/react";

const AVAILABLE_NOW = [
  "Org isolation",
  "API key hashing",
  "Multi-user org",
  "Audit history",
  "Policy versioning",
  "Tool CRUD",
  "Agent lifecycle control",
  "Execution trace storage",
] as const;

const COMING_SOON = [
  "SSO",
  "SCIM",
  "SOC2 controls",
  "Rate limiting",
  "Budget caps",
  "Approval workflows",
  "Anomaly detection",
  "Private deployment",
] as const;

export function EnterpriseFeatures() {
  return (
    <section
      id="enterprise"
      className="relative scroll-mt-20 border-t border-white/5 px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Enterprise Ready
        </h2>
        <div
          className="mb-16 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Built for teams scaling from startup to enterprise. Org isolation,
          audit trails, and policy versioning today. SSO, SOC2, and more on the
          roadmap.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Available Now */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-lg font-bold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden />
              Available Now
            </h3>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_NOW.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm text-emerald-400/90"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-lg font-bold text-foreground">
              <Clock className="h-5 w-5 text-muted-foreground" aria-hidden />
              Coming Soon
            </h3>
            <div className="flex flex-wrap gap-2">
              {COMING_SOON.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-muted-foreground"
                >
                  <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
