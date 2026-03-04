"use client";

import { Anchor, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [1, 0.95]);

  return (
    <motion.header
      style={{ opacity: navOpacity }}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-white/5 px-6 backdrop-blur-xl md:px-12"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-xl font-bold text-foreground transition-colors hover:text-[#ff4f00]"
        >
          <Anchor className="h-6 w-6 text-[#ff4f00]" aria-hidden />
          Anchor
        </a>
        <a href="#schedule-demo">
          <Button
            size="lg"
            className="bg-[#ff4f00] font-semibold text-white shadow-[0_0_20px_rgba(255,79,0,0.3)] transition-all hover:bg-[#ff6b2a] hover:shadow-[0_0_30px_rgba(255,79,0,0.4)]"
          >
            <Calendar className="mr-2 h-4 w-4" aria-hidden />
            Schedule Demo
          </Button>
        </a>
      </nav>
    </motion.header>
  );
}
