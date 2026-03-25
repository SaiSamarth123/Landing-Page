import {
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
      <HowItWorks />
      <ProductPillars />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
