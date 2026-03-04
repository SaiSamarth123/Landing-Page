"use client";

import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function MeetingCTA() {
  return (
    <section
      id="schedule-demo"
      className="relative px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-12 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_0_60px_rgba(255,79,0,0.1)] md:p-16"
      >
        <h2 className="font-mono text-4xl font-bold text-foreground">
          Secure Your Fleet
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          See how Anchor gives your team control over every autonomous agent.
        </p>
        <a href="#schedule-demo" className="mt-10 inline-block">
          <Button
            size="lg"
            className="bg-[#ff4f00] px-12 py-6 text-lg font-semibold text-white shadow-[0_0_30px_rgba(255,79,0,0.35)] transition-all hover:scale-[1.02] hover:bg-[#ff6b2a] hover:shadow-[0_0_50px_rgba(255,79,0,0.45)]"
          >
            <Calendar className="mr-2 h-5 w-5" aria-hidden />
            Schedule Demo
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
