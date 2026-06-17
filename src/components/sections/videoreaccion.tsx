import Link from 'next/link';
import React from 'react';
import { ArrowRight, Film } from 'lucide-react';
import SectionHeader from "@/components/ui/section-header";

export default function VideoReaccionSection() {
  return (
    <section id="video-reaccion" className="relative overflow-hidden min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col justify-center items-center border-t border-white/10">
      <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 25px 55px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 150px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px)', backgroundSize: '200px 200px', opacity: 0.1}}/>
      
      <div className="relative z-10 container mx-auto">
        <SectionHeader
          tag="Módulo III · Semana 12"
          title="Video-reacción Crítico"
          subtitle="Miramos nuestro propio podcast con ojos más maduros: ¿qué vacíos éticos identificamos? ¿Qué artículos del código deontológico deben humanizarse?"
        />
        
        <div className="max-w-4xl mx-auto">
          <Link href="/video-reaccion" className="block group">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-secondary/20 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Film className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-secondary font-semibold uppercase tracking-wider text-sm">Módulo III</p>
                      <h3 className="font-headline text-2xl md:text-3xl text-secondary">Video-reacción Crítico</h3>
                    </div>
                  </div>
                  
                  <p className="mt-6 font-body text-foreground/80 text-justify">
                    Después de semanas de reflexión y aprendizaje, revisitamos nuestro podcast de dilema moral con una perspectiva más madura y crítica. Identificamos los vacíos éticos que dejamos sin resolver, cuestionamos si nuestro análisis fue suficientemente profundo, y reflexionamos sobre qué artículos del código deontológico profesional necesitan ser humanizados para responder mejor a la complejidad de la realidad peruana.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">Análisis Crítico</span>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">Reflexión Profunda</span>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">Humanización Ética</span>
                  </div>
                </div>
                
                <div className="text-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 -translate-x-4 flex-shrink-0">
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
