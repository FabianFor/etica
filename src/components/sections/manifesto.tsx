import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeader from "@/components/ui/section-header";
import { manifestoItems } from "@/lib/manifesto-data";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ManifestoSection() {
  const getImageForId = (id: string) => {
    let imageId: string;
    switch (id) {
      case 'valores':
        imageId = 'valores-visual';
        break;
      case 'metafora':
        imageId = 'qeswachaka-landscape';
        break;
      case 'proposito':
        imageId = 'proposito-visual';
        break;
      case 'poblaciones':
        imageId = 'poblaciones-visual';
        break;
      case 'mapa':
        imageId = 'mapa-visual';
        break;
      default:
        return null;
    }
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  return (
    <section id="manifiesto" className="relative overflow-hidden min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col justify-center items-center border-t border-white/10">
       <div 
        className="absolute inset-0 z-0"
        style={{backgroundImage: 'radial-gradient(circle at 25px 55px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 150px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 50px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 100px 20px, hsl(var(--foreground)) 1px, transparent 2px), radial-gradient(circle at 150px 80px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 175px 120px, hsl(var(--foreground)) 1px, transparent 2px)', backgroundSize: '200px 200px', opacity: 0.1}}
      />
      <div className="relative z-10 container mx-auto">
        <SectionHeader
          tag="Módulo I · Semana 5"
          title="Manifiesto de Identidad Ética"
          subtitle="Nuestra declaración de propósito profesional: quiénes somos, qué valores guían nuestro ejercicio y a quiénes nos comprometemos a proteger."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {manifestoItems.map((item) => {
            const image = getImageForId(item.id);
            const href = item.id === 'proposito' ? '/manifesto/proposito' : item.id === 'poblaciones' ? '/manifesto/poblaciones' : item.id === 'valores' ? '/manifesto/valores' : item.id === 'mapa' ? '/manifesto/mapa' : `/manifesto/${item.id}`;
            return (
              <Link key={item.id} href={href} className="block group">
                <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row items-center overflow-hidden">
                  
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto md:align-stretch self-stretch">
                     {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>

                  <div className="flex-grow flex items-center gap-6 p-8">
                    <div className="flex-grow">
                      <h3 className="font-headline text-2xl md:text-3xl text-primary">{item.title}</h3>
                      <p className="mt-2 font-body text-foreground/80 text-justify">{item.description}</p>
                    </div>
                    <div className="text-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 -translate-x-4">
                      <ArrowRight className="w-10 h-10" />
                    </div>
                  </div>

                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
