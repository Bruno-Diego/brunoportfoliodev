import { Navbar, Hero, Footer, Works, Contact, Blogposts } from '@/components'
import { StarsCanvas } from '@/components/canvas';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Blogposts />
      <Works />
      <Contact />
      <StarsCanvas />
      <Footer />
    </div>
  );
}
