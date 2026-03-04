"use client";

import { ArrowRight, Info } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScheduleDemoButton } from "@/components/landing/schedule-demo-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const SDK_STEPS = [
  "Integrate SDK",
  "Begin Tracking",
  "Enforce Policies",
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 md:px-12"
    >
      {/* Background: radial gradient + grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,79,0,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-mono text-5xl font-bold tracking-tight text-foreground md:text-7xl"
        >
          The Control Plane for AI Agents
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Observability, governance, and policy enforcement for autonomous
          agent fleets.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4"
        >
          {SDK_STEPS.map((step, i) => (
            <span key={step} className="flex items-center gap-2 md:gap-4">
              <Badge
                variant="outline"
                className="border-[#ff4f00]/40 bg-[#ff4f00]/10 px-4 py-1.5 font-mono text-sm font-medium text-foreground"
              >
                {step}
              </Badge>
              {i < SDK_STEPS.length - 1 && (
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              )}
            </span>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ScheduleDemoButton
            className="w-full text-base sm:w-auto"
            iconClassName="h-5 w-5"
          />
          <Button
            variant="outline"
            size="lg"
            className="w-full border-white/20 bg-transparent text-base font-medium text-foreground hover:bg-white/10 hover:text-foreground sm:w-auto"
            asChild
          >
            <a href="#product-pillars">
              <Info className="mr-2 h-5 w-5" aria-hidden />
              Learn More
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
