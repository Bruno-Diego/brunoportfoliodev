import { Navbar, Hero } from '@/components'


export default function Home() {
  return (
    <div className="flex bg-primary">
      <Navbar />
      <Hero />
      {/* <StarsCanvas/> */}
    </div>
  );
}
