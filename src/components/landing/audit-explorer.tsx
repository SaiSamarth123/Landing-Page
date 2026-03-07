"use client";

import { Filter } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const AUDIT_ROWS = [
  {
    timestamp: "2026-03-04 14:32:01",
    agentId: "support-agent-01",
    tool: "search_database",
    reqPriv: "Editor",
    agentPriv: "Editor",
    decision: "ALLOW" as const,
    reason: "Policy match",
  },
  {
    timestamp: "2026-03-04 14:31:58",
    agentId: "research-agent-alpha",
    tool: "send_slack_message",
    reqPriv: "Editor",
    agentPriv: "Viewer",
    decision: "DENY" as const,
    reason: "Insufficient privilege",
  },
  {
    timestamp: "2026-03-04 14:31:55",
    agentId: "docs-generator",
    tool: "write_file",
    reqPriv: "Editor",
    agentPriv: "Editor",
    decision: "ALLOW" as const,
    reason: "Policy match",
  },
  {
    timestamp: "2026-03-04 14:31:50",
    agentId: "qa-runner",
    tool: "delete_database",
    reqPriv: "Admin",
    agentPriv: "Viewer",
    decision: "DENY" as const,
    reason: "Tool explicitly denied",
  },
  {
    timestamp: "2026-03-04 14:31:45",
    agentId: "support-agent-01",
    tool: "read_file",
    reqPriv: "Viewer",
    agentPriv: "Editor",
    decision: "ALLOW" as const,
    reason: "Policy match",
  },
];

export function AuditExplorer() {
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
          Audit & Compliance
        </h2>
        <div
          className="mb-8 h-1 w-24 rounded-full bg-[#ff4f00]"
          aria-hidden
        />
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Immutable logs for every tool invocation decision. Filter by agent,
          integration, or decision. Export for compliance and forensics.
        </p>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3">
            <Filter className="h-4 w-4 text-muted-foreground" aria-hidden />
            <select
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              aria-label="Filter by agent"
            >
              <option>All Agents</option>
              <option>support-agent-01</option>
              <option>research-agent-alpha</option>
              <option>docs-generator</option>
              <option>qa-runner</option>
            </select>
            <select
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              aria-label="Filter by integration"
            >
              <option>All Integrations</option>
              <option>mcp-database</option>
              <option>mcp-slack</option>
              <option>mcp-files</option>
            </select>
            <select
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              aria-label="Filter by decision"
            >
              <option>All Decisions</option>
              <option>ALLOW</option>
              <option>DENY</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Agent
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Tool
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Req. Priv
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Agent Priv
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Decision
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                {AUDIT_ROWS.map((row) => (
                  <tr
                    key={`${row.timestamp}-${row.agentId}-${row.tool}`}
                    className="border-b border-white/5 transition-colors last:border-b-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {row.timestamp}
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-foreground">
                      {row.agentId}
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-foreground">
                      {row.tool}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {row.reqPriv}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {row.agentPriv}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={row.decision === "ALLOW" ? "success" : "destructive"}
                        className={
                          row.decision === "DENY"
                            ? "border-red-500/30 bg-red-500/10 text-red-400"
                            : ""
                        }
                      >
                        {row.decision}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {row.reason}
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
