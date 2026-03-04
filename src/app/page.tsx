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
      <ArchitectureFlow />
      <ProblemSection />
      <HowItWorks />
      <ProductPillars />
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
