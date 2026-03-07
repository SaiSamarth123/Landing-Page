"use client";

import { motion } from "motion/react";
import { AuditExplorer } from "@/components/landing/audit-explorer";
import { ExecutionGateway } from "@/components/landing/execution-gateway";
import { FleetDashboard } from "@/components/landing/fleet-dashboard";
import { TraceVisualizer } from "@/components/landing/trace-visualizer";

export function PlatformDeepDives() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-20 border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="px-6 pt-24 pb-12 md:px-12"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff4f00]">
          See the platform in action
        </p>
        <h2 className="mb-4 font-mono text-3xl font-bold text-foreground md:text-4xl">
          Platform Deep-Dives
        </h2>
        <div
          className="mb-0 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
      </motion.div>
      <ExecutionGateway />
      <FleetDashboard />
      <TraceVisualizer />
      <AuditExplorer />
    </section>
  );
}
