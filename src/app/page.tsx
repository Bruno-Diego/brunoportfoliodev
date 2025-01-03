import { Navbar, Hero } from '@/components'


export default function Home() {
  return (
    <div className="flex bg-black">
      <Navbar />
      <Hero />
      {/* <StarsCanvas/> */}
    </div>
  );
}
