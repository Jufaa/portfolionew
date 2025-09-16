"use client"
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
export function Homes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <div className="bg-[#222831] text-white min-h-screen">
      {loading ? <LoadingScreen /> : <>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </>}
    </div>;
}