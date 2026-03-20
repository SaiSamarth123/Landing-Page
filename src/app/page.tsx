import {
  ArchitectureFlow,
  ExecutionGateway,
  EnterpriseFeatures,
  Footer,
  Hero,
  HowItWorks,
  MeetingCTA,
  Navbar,
  ProblemSection,
  ProductPillars,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ArchitectureFlow />
      <HowItWorks />
      <ExecutionGateway />
      <ProductPillars />
      <EnterpriseFeatures />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
