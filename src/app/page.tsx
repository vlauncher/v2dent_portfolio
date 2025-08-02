'use client';

import dynamic from 'next/dynamic';

// Import components with dynamic loading for better performance
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
