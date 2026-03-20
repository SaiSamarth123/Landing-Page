"use client";

import { motion } from "motion/react";
// import { AuditExplorer } from "@/components/landing/audit-explorer";
import { ExecutionGateway } from "@/components/landing/execution-gateway";
// import { FleetDashboard } from "@/components/landing/fleet-dashboard";
// import { TraceVisualizer } from "@/components/landing/trace-visualizer";

export function PlatformDeepDives() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-20 border-t border-white/5"
    >
      <ExecutionGateway />
      {/* <FleetDashboard /> */}
      {/* <TraceVisualizer /> */}
      {/* <AuditExplorer /> */}
    </section>
  );
}
