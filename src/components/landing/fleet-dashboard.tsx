"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const AGENTS = [
  { name: "support-agent-01", status: "ONLINE" as const, privilege: "Editor", lastSeen: "2s ago" },
  { name: "research-agent-alpha", status: "ONLINE" as const, privilege: "Viewer", lastSeen: "45s ago" },
  { name: "data-sync-worker", status: "OFFLINE" as const, privilege: "Admin", lastSeen: "12m ago" },
  { name: "docs-generator", status: "ONLINE" as const, privilege: "Editor", lastSeen: "1m ago" },
  { name: "qa-runner", status: "OFFLINE" as const, privilege: "Viewer", lastSeen: "3h ago" },
];

export function FleetDashboard() {
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
          Agent Fleet Overview
        </h2>
        <div
          className="mb-8 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Register agents, track runtime state, and control privileges from one
          dashboard. See which agents are online, their privilege levels, and
          last heartbeat.
        </p>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_40px_rgba(255,79,0,0.08)]">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              agents.json
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Agent Name
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Privilege Level
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Last Seen
                  </th>
                </tr>
              </thead>
              <tbody>
                {AGENTS.map((agent) => (
                  <tr
                    key={agent.name}
                    className="border-b border-white/5 transition-colors last:border-b-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-mono text-sm text-foreground">
                      {agent.name}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={agent.status === "ONLINE" ? "success" : "secondary"}
                        className={
                          agent.status === "ONLINE"
                            ? ""
                            : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                      {agent.privilege}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {agent.lastSeen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
