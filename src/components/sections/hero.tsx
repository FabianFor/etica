"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const metaItems = [
  { label: "Curso", value: "Ética y Deontología Profesional" },
  { label: "Carrera", value: "Ingeniería Empresarial y Sistemas" },
  { label: "Semestre", value: "2026-I" },
  { label: "Docente", value: "Rolando Espiritu Criales" },
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const baseDelay = 150;

  const animationClass = (mounted: boolean) => mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5";

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden px-5 md:px-20 py-24 pt-32 md:pt-24">
      {heroImage && (
        <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
        />
      )}
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 container mx-auto text-center flex flex-col items-center">
        
        <Badge
          className={cn(
            "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500",
            animationClass(isMounted)
            )}
          style={{ transitionDelay: `${baseDelay * 1}ms` }}
        >
          Ética y Deontología Profesional · 2026-I
        </Badge>

        <h1
          className={cn(
            "font-headline mt-6 text-5xl md:text-7xl font-bold text-foreground transition-all duration-500",
            animationClass(isMounted)
          )}
          style={{ transitionDelay: `${baseDelay * 2}ms` }}
        >
          Horizonte Ético
        </h1>

        <p
          className={cn(
            "mt-4 font-body text-xl text-muted-foreground transition-all duration-500",
            animationClass(isMounted)
          )}
          style={{ transitionDelay: `${baseDelay * 3}ms`}}
        >
          Gestionar empresas y sistemas con responsabilidad frente a la sociedad
        </p>

        <div
          className={cn(
            "mt-6 h-0.5 w-16 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500",
            animationClass(isMounted)
          )}
          style={{ transitionDelay: `${baseDelay * 4}ms`}}
        />

        <p
          className={cn(
            "mt-8 max-w-2xl text-justify text-foreground/80 font-body transition-all duration-500",
            animationClass(isMounted)
            )}
          style={{ transitionDelay: `${baseDelay * 5}ms`}}
        >
          Este portafolio documenta nuestro recorrido ético a lo largo del semestre: desde la construcción de nuestra identidad profesional hasta el compromiso con las generaciones futuras y el entorno. Cada sección refleja una etapa de ese proceso colectivo.
        </p>

        <div
          className={cn(
            "mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-left transition-all duration-500",
            animationClass(isMounted)
            )}
          style={{ transitionDelay: `${baseDelay * 6}ms`}}
        >
          {metaItems.map((item, index) => (
            <div key={index} className="font-body">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <a
          href="#equipo"
          className={cn(
            "mt-12 transition-all duration-500",
            animationClass(isMounted)
          )}
          style={{ transitionDelay: `${baseDelay * 7}ms` }}
        >
          <Button size="lg" variant="outline" className="bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
            Explorar el portafolio
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
