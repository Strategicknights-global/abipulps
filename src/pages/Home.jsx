import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <p>Explore our wide range of pulp mill equipment for efficiency and productivity.</p>
      </section>
    </div>
  );
}
