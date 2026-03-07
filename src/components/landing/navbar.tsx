"use client";

import { Anchor, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { ScheduleDemoButton } from "@/components/landing/schedule-demo-button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Compliance", href: "#compliance" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Demo", href: "#schedule-demo" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [1, 0.95]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.header
      style={{ opacity: navOpacity }}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-white/5 px-6 backdrop-blur-xl md:px-12"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-xl font-bold text-foreground transition-colors hover:text-[#ff4f00]"
        >
          <Anchor className="h-6 w-6 text-[#ff4f00]" aria-hidden />
          Anchor
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="hidden shrink-0 sm:inline-flex h-9 items-center justify-center rounded-md bg-[#ff4f00] px-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,79,0,0.3)] transition-all hover:bg-[#ff6b2a] hover:shadow-[0_0_30px_rgba(255,79,0,0.4)]"
          >
            Join Waitlist
          </a>
          <div className="hidden sm:block">
            <ScheduleDemoButton
              className="border-white/20 bg-transparent font-medium text-foreground shadow-none hover:bg-white/10 hover:text-foreground"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed left-0 right-0 top-16 z-40 border-b border-white/10 bg-[#050505]/98 backdrop-blur-xl transition-all duration-200 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="#hero"
              onClick={handleNavClick}
              className="flex h-10 w-full items-center justify-center rounded-md bg-[#ff4f00] font-semibold text-white"
            >
              Join Waitlist
            </a>
            <ScheduleDemoButton
              className="w-full border-white/20 bg-transparent font-medium text-foreground shadow-none hover:bg-white/10"
              onClick={handleNavClick}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
