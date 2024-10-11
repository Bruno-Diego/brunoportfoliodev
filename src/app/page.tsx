import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex bg-primary">
      <Navbar />
      <Hero />
    </div>
  );
}
