"use client";

import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GetInvolved from '@/components/GetInvolved'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'

export default function Home() {
  const timelineRef = useRef(null); // Create a ref to store the timeline

  
  useLayoutEffect(() => {
    gsap.timeline()
      .from('.main', { duration: 0.3, opacity: 0})
      .from('.icon', { duration: 0.3, opacity: 0, y: -50 })
      .from('.list', { duration: 0.3, opacity: 0, y: -50 })
      .from('.header', { duration: 0.3, opacity: 0, y: -50 })
      .from('.hero', { duration: 0.3, opacity: 0})
      .from('.text', { duration: 0.3, opacity: 0, y: -50 })
      .from('.img', { duration: 0.3, opacity: 0, y: 50 })
      .from('.icons', { duration: 0.3, opacity: 0, y: 50 })
  }, []);

  return (
    <main className="w-full h-full scroll-smooth">
      <Navbar timeline={timelineRef}/>
      <HeroSection />
      <FAQ />
      <GetInvolved />
      <Contact />
      <About />
      <Footer />
    </main>
  )
}
