"use client";

import { CheckCircle, Play, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TRACE_LINES = [
  {
    prefix: "[POLICY]",
    text: "CHECKING POLICY...",
    color: "text-[#ff4f00]",
    icon: ShieldCheck,
    delay: 0,
  },
  {
    prefix: "[AUTH]",
    text: "ACCESS GRANTED",
    color: "text-emerald-400",
    icon: CheckCircle,
    delay: 1.2,
  },
  {
    prefix: "[EXEC]",
    text: "EXECUTING TOOL: search_database",
    color: "text-cyan-400",
    icon: Play,
    delay: 2.4,
  },
] as const;

const CYCLE_DURATION_MS = 6000;

export function TraceVisualizer() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), CYCLE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="mx-auto max-w-2xl"
      >
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-6 shadow-[0_0_40px_rgba(255,79,0,0.08)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.3)_100%)] before:opacity-30">
          {/* Scan line effect */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )`,
            }}
            aria-hidden
          />

          <div className="relative font-mono text-sm">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">
                agent_trace.log
              </span>
            </div>

            {TRACE_LINES.map((line, i) => (
              <TraceLine key={`${cycle}-${i}`} {...line} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TraceLine({
  prefix,
  text,
  color,
  icon: Icon,
  delay,
}: (typeof TRACE_LINES)[number]) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      className="flex items-center gap-3 py-2"
    >
      <Icon className={`h-4 w-4 shrink-0 ${color}`} aria-hidden />
      <span className="text-muted-foreground">{prefix}</span>
      <span className={color}>
        {prefix === "[POLICY]" ? (
          <span className="inline-flex items-center gap-2">
            {text}
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </span>
        ) : (
          text
        )}
      </span>
    </motion.div>
  );
}
