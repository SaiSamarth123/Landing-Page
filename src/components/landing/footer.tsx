import { Anchor } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Features", href: "#product-pillars" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Enterprise", href: "#enterprise" },
] as const;

const DOCS_URL =
  "https://docs.google.com/document/d/1bScTERfZ4Th27wemauZ6o5lL3zgjYR6nGxw90jdLhMk/edit?usp=sharing";

const RESOURCE_LINKS = [
  { label: "Documentation", href: DOCS_URL, external: true, inProgress: false },
  { label: "SDK", href: "#", external: false, inProgress: true },
  { label: "API Reference", href: "#", external: false, inProgress: true },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "#", inProgress: true },
  { label: "Contact", href: "#schedule-demo", inProgress: true },
  { label: "Blog", href: "#", inProgress: true },
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
            <p className="mt-1 text-xs text-muted-foreground/70">
              SDK, API Reference — in progress
            </p>
            <ul className="mt-4 space-y-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external === true && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    {link.inProgress === true && (
                      <span className="ml-1.5 text-xs text-muted-foreground/60">
                        (in progress)
                      </span>
                    )}
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
            <p className="mt-1 text-xs text-muted-foreground/70">
              About, Contact, Blog — in progress
            </p>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    {link.inProgress === true && (
                      <span className="ml-1.5 text-xs text-muted-foreground/60">
                        (in progress)
                      </span>
                    )}
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
