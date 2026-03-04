import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://getanchor.vercel.app";
const description =
  "Centralized observability, tool-call authorization, and policy-as-code for autonomous agents. The governance layer for AI agent fleets.";
const title = "Anchor | AI Agent Control Plane";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Anchor",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Fleet Management for AI agents",
    "Tool Governance and authorization",
    "Policy-as-Code",
    "Tracing and Replay",
    "Audit Logging",
    "Multi-Tenancy",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Anchor",
  },
  description,
  keywords: [
    "AI agent control plane",
    "AI governance",
    "agent fleet management",
    "tool authorization",
    "policy-as-code",
    "LLM observability",
    "autonomous agents",
    "AI compliance",
  ],
  authors: [{ name: "Anchor", url: siteUrl }],
  creator: "Anchor",
  publisher: "Anchor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anchor",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anchor - AI Agent Control Plane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-space`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
