import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GetInvolved from '@/components/GetInvolved'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full scroll-smooth">
      <Navbar />
      <HeroSection />
      <FAQ />
      <GetInvolved />
      <Contact />
      <About />
      <Footer />
    </main>
  )
}
