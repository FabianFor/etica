import Link from 'next/link';
import React from 'react';
import { ArrowRight, Mic } from 'lucide-react';
import SectionHeader from "@/components/ui/section-header";
import { Button } from '@/components/ui/button';

export default function PodcastSection() {
  return (
    <section id="podcast" className="relative overflow-hidden min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col justify-center items-center border-t border-white/10">
      <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 25px 55px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 150px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px)', backgroundSize: '200px 200px', opacity: 0.1}}/>
      
      <div className="relative z-10 container mx-auto">
        <SectionHeader
          tag="Módulo II · Semanas 6–7"
          title="Podcast de Dilema Moral"
          subtitle="Un caso real del contexto peruano analizado desde dos marcos filosóficos contrapuestos: el deber kantiano y el utilitarismo de Mill."
        />
        
        <div className="max-w-4xl mx-auto">
          <Link href="/podcast" className="block group">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mic className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-primary font-semibold uppercase tracking-wider text-sm">Módulo II</p>
                      <h3 className="font-headline text-2xl md:text-3xl text-primary">Podcast de Dilema Moral</h3>
                    </div>
                  </div>
                  
                  <p className="mt-6 font-body text-foreground/80 text-justify">
                    Exploramos un dilema ético complejo extraído de situaciones reales en el Perú, confrontando dos de las corrientes filosóficas más influyentes: el imperativo categórico de Kant versus el utilitarismo de John Stuart Mill. A través del diálogo y el análisis profundo, examinamos cómo diferentes marcos éticos pueden llegar a conclusiones completamente opuestas ante el mismo problema.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">Dilema Ético</span>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">Análisis Filosófico</span>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">Deontología vs Utilitarismo</span>
                  </div>
                </div>
                
                <div className="text-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 -translate-x-4 flex-shrink-0">
                  <ArrowRight className="w-10 h-10" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
