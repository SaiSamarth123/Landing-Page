import {
  ComplianceMapping,
  EnterpriseFeatures,
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
      <ComplianceMapping />
      <HowItWorks />
      <PlatformDeepDives />
      <EnterpriseFeatures />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
