import {
  ArchitectureFlow,
  AuditExplorer,
  ExecutionGateway,
  EnterpriseFeatures,
  FleetDashboard,
  Footer,
  Hero,
  HowItWorks,
  MeetingCTA,
  Navbar,
  ProblemSection,
  ProductPillars,
  TraceVisualizer,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      {/* What we're solving + why */}
      <ProblemSection />
      {/* Basic how: where Anchor fits */}
      <ArchitectureFlow />
      {/* Basic how: 3 steps to get started */}
      <HowItWorks />
      {/* What we offer */}
      <ProductPillars />
      {/* Feature deep-dives */}
      <FleetDashboard />
      <ExecutionGateway />
      <TraceVisualizer />
      <AuditExplorer />
      <EnterpriseFeatures />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
