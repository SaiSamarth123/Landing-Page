import {
  Footer,
  Hero,
  MeetingCTA,
  Navbar,
  ProductPillars,
  TraceVisualizer,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <TraceVisualizer />
      <ProductPillars />
      <MeetingCTA />
      <Footer />
    </main>
  );
}
