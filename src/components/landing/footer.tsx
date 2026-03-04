import { Anchor } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Features", href: "#product-pillars" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Enterprise", href: "#enterprise" },
] as const;

const RESOURCE_LINKS = [
  { label: "Documentation", href: "#" },
  { label: "SDK", href: "#" },
  { label: "API Reference", href: "#" },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#schedule-demo" },
  { label: "Blog", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo + tagline */}
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-mono text-xl font-bold text-foreground transition-colors hover:text-[#ff4f00]"
            >
              <Anchor className="h-6 w-6 text-[#ff4f00]" aria-hidden />
              Anchor
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The control plane for AI agents. Observability, governance, and
              policy enforcement.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {RESOURCE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          © 2026 Anchor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
