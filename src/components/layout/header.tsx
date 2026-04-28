"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Linkedin, Compass, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type Section = {
  id: string;
  name: string;
};

interface HeaderProps {
  activeSection: string;
  sections: Section[];
}

export default function Header({ activeSection, sections }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    setShareUrl(window.location.href);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const headerOffset = 96;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  setIsMobileMenuOpen(false);
};

  const navLinks = (
    <>
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => handleScrollTo(section.id)}
          className={cn(
            'font-body text-base font-medium transition-colors hover:text-primary',
            'py-2 md:py-0',
            activeSection === section.id ? 'text-primary' : 'text-foreground'
          )}
        >
          {section.name}
        </button>
      ))}
    </>
  );
  
  const finalShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`;

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-card/80 backdrop-blur-sm shadow-sm border-b' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-5 md:px-20 h-24 flex items-center justify-between">
        <Link href="#inicio" onClick={(e) => {e.preventDefault(); handleScrollTo('inicio')}} className="flex items-center gap-3 text-primary">
          <Compass className="h-10 w-10" />
          <div>
            <h1 className="font-headline font-bold text-xl leading-tight">Horizonte Ético</h1>
            <p className="text-sm text-muted-foreground font-body">Portafolio Digital · HUM-010</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks}
        </nav>

        <div className="flex items-center gap-2">
            <a
              href={finalShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='hidden md:block'
            >
            <Button size="lg" className="bg-linkedin text-white hover:bg-linkedin/90" disabled={!shareUrl}>
                <Linkedin className="mr-2 h-4 w-4" />
                Compartir
            </Button>
            </a>

            <div className="md:hidden">
            {isMounted && (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                  </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px]">
                  <div className="flex flex-col items-start gap-6 p-6">
                      <h2 className="font-headline text-xl font-semibold">Navegación</h2>
                      <nav className="flex flex-col gap-4 w-full">
                          {navLinks}
                      </nav>
                       <a
                          href={finalShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='w-full'
                      >
                      <Button size="lg" className="bg-linkedin text-white hover:bg-linkedin/90 w-full" disabled={!shareUrl}>
                          <Linkedin className="mr-2 h-4 w-4" />
                          Compartir en LinkedIn
                      </Button>
                      </a>
                  </div>
                  </SheetContent>
              </Sheet>
            )}
            </div>
        </div>
      </div>
    </header>
  );
}
