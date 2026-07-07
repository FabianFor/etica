import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SectionHeader from "@/components/ui/section-header";

export default function PodcastSection() {
  return (
    <section 
      id="podcast" 
      className="scroll-mt-20 relative overflow-hidden w-full bg-background px-5 py-20 md:py-24 flex flex-col justify-center items-center border-t border-white/10"
    >
      <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 25px 55px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 150px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px)', backgroundSize: '200px 200px', opacity: 0.1}}/>

      <div className="relative z-10 container mx-auto">
        <SectionHeader
          tag="Módulos II & III"
          title="Codigo ciego"
          subtitle="Exploramos dilemas éticos reales desde la filosofía, el análisis crítico y la reflexión profunda."
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-12 px-4">
          
          {/* TARJETA 1: PODCAST */}
          <Link href="/podcast" className="block group">
            <div className="relative h-96 md:h-[28rem] rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:border-primary/50 transition-all duration-300">
              <Image
                src="/images/podcast.jpg"
                alt="Imagen del Podcast"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <p className="font-body text-primary font-semibold uppercase tracking-widest text-xs mb-3">Módulo II · Semanas 6–7</p>
                <h3 className="font-headline text-3xl md:text-4xl text-white leading-tight">Podcast de Dilema Moral</h3>
                <p className="mt-3 font-body text-white/80 text-sm md:text-base line-clamp-3">
                  Un caso real analizado desde el deber kantiano y el utilitarismo de Mill.
                </p>
              </div>
            </div>
          </Link>

          {/* TARJETA 2: VIDEO */}
          <Link href="/video-reaccion" className="block group">
            <div className="relative h-96 md:h-[28rem] rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:border-secondary/50 transition-all duration-300">
              <Image
                src="/images/bg-videoreaccion.jpg"
                alt="Imagen del Video"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <p className="font-body text-secondary font-semibold uppercase tracking-widest text-xs mb-3">Módulo III · Semana 12</p>
                <h3 className="font-headline text-3xl md:text-4xl text-white leading-tight">Video-reacción Crítico</h3>
                <p className="mt-3 font-body text-white/80 text-sm md:text-base line-clamp-3">
                  Revisitamos nuestro podcast con ojos más maduros: vacíos éticos y código deontológico humanizado.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}