"use client";

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import TeamSection from '@/components/sections/team';
import ManifestoSection from '@/components/sections/manifesto';

const sections = [
  { id: 'inicio', name: 'Inicio' },
  { id: 'equipo', name: 'Equipo' },
  { id: 'manifiesto', name: 'Manifiesto' },
];

export function PortfolioClient() {
  const [activeSection, setActiveSection] = useState('inicio');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sections.map(section => document.getElementById(section.id));

    const handleScroll = () => {
      // Offset for the fixed header + some breathing room
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      <Header activeSection={activeSection} sections={sections} />
      <main>
        <HeroSection />
        <TeamSection />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}
