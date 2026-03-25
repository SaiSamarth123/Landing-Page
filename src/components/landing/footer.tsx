import { Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 font-mono text-xl font-bold text-foreground transition-colors hover:text-[#ff4f00]"
        >
          <Anchor className="h-6 w-6 text-[#ff4f00]" aria-hidden />
          Anchor
        </a>
        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
          Every agent. Every tool call. Under control.
        </p>
        <div className="mt-12 border-t border-white/10 pt-8 w-full text-sm text-muted-foreground">
          © 2026 Anchor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
