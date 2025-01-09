import { Navbar, Hero, Footer, Works, Contact } from '@/components'
import { StarsCanvas } from '@/components/canvas';


export default function Home() {
  return (
    <div className="flex flex-col relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Works />
      <Contact />
      <StarsCanvas />
      <Footer />
    </div>
  );
}
