import {
  ComplianceMapping,
  EnterpriseFeatures,
  EnterprisePillars,
  Footer,
  Hero,
  HowItWorks,
  MeetingCTA,
  Navbar,
  PlatformDeepDives,
  ProblemSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <PlatformDeepDives />
      <ComplianceMapping />
      <EnterprisePillars />
      <EnterpriseFeatures />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
