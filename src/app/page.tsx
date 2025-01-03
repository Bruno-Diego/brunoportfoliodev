import { Navbar, Hero } from '@/components'
import { StarsCanvas } from '@/components/canvas';


export default function Home() {
  return (
    <div className="flex relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <StarsCanvas />
    </div>
  );
}
