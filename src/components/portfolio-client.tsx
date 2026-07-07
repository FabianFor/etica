"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import TeamSection from '@/components/sections/team';
import ManifestoSection from '@/components/sections/manifesto';
import PodcastSection from '@/components/sections/podcast';
import InfographySection from '@/components/sections/infography';

const sections = [
  { id: 'inicio', name: 'Inicio' },
  { id: 'equipo', name: 'Equipo' },
  { id: 'manifiesto', name: 'Manifiesto' },
  { id: 'podcast', name: 'Podcast & Video' },
  { id: 'infografia', name: 'Infografía' },
];

export function PortfolioClient() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Compensación visual

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      <Header activeSection={activeSection} sections={sections} />
      <main>
        <section id="inicio"><HeroSection /></section>
        <section id="equipo"><TeamSection /></section>
        <section id="manifiesto"><ManifestoSection /></section>
        <PodcastSection />
        <InfographySection />
      </main>
      <Footer />
    </div>
  );
}