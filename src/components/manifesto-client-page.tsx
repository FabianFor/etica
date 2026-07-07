"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import Image from "next/image";

import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import type { ManifestoItem } from '@/lib/manifesto-data';
import { vulnerablePopulations } from '@/lib/manifesto-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ManifestoClientPageProps {
  item: ManifestoItem;
}

const PoblacionesContent = () => (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed text-justify">
                Reconocemos que el avance tecnológico puede ampliar las desigualdades si no se diseña con un enfoque inclusivo. Por ello, nos comprometemos activamente a proteger y empoderar a las poblaciones vulnerables ante la brecha digital y el manejo irresponsable de información.
            </p>
            <Card>
                <CardHeader><CardTitle className="font-headline text-primary">Grupos de Enfoque</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                    {vulnerablePopulations.map(pop => (
                        <Badge key={pop} className="text-base font-medium" variant="secondary">{pop}</Badge>
                    ))}
                </CardContent>
            </Card>
            <p className="text-lg text-foreground/80 leading-relaxed text-justify">
               Nos comprometemos a diseñar sistemas inclusivos y seguros, considerando la autonomía de los adultos mayores y la justicia social para quienes tienen menos recursos tecnológicos, evitando su exclusión del entorno moderno.
            </p>
        </div>
         <div className="relative w-full aspect-1 rounded-lg overflow-hidden shadow-xl border">
            <Image 
              src={PlaceHolderImages.find(p => p.id === 'poblaciones-visual')?.imageUrl || ''}
              alt={PlaceHolderImages.find(p => p.id === 'poblaciones-visual')?.description || ''}
              fill
              className="object-cover"
              data-ai-hint="community diversity"
            />
        </div>
      </div>
);

const MapaContent = () => (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="prose prose-lg prose-invert max-w-none text-foreground/80 text-justify">
            <p>
            Hemos analizado los códigos deontológicos del Colegio de Ingenieros del Perú y otras asociaciones internacionales. Si bien establecen una base sólida, identificamos ciertas áreas de mejora para el contexto digital actual:
            </p>
            <ul>
                <li><strong>Falta de Especificidad en IA:</strong> Los códigos actuales son a menudo demasiado generales respecto a la inteligencia artificial, el machine learning y la ética de los algoritmos.</li>
                <li><strong>Protección de Datos en la Nube:</strong> La responsabilidad sobre los datos de los usuarios en entornos de nube y arquitecturas de microservicios no está claramente delimitada.</li>
                <li><strong>Sostenibilidad Tecnológica:</strong> Hay una mención insuficiente sobre el impacto ambiental del hardware y el consumo energético del software (eco-ética).</li>
            </ul>
            <p>
            Nuestro manifiesto busca abordar estos vacíos al proponer una jerarquía de valores que pone la justicia y el bienestar humano por encima de la eficiencia, y al adoptar un compromiso explícito con las poblaciones vulnerables y la eco-ética, ofreciendo una perspectiva más completa y contextualizada para el ingeniero de sistemas del siglo XXI.
            </p>
        </div>
        <div className="relative w-full aspect-1 rounded-lg overflow-hidden shadow-xl border">
            <Image 
            src={PlaceHolderImages.find(p => p.id === 'mapa-visual')?.imageUrl || ''}
            alt={PlaceHolderImages.find(p => p.id === 'mapa-visual')?.description || ''}
            fill
            className="object-cover"
            data-ai-hint="blueprint analysis"
            />
        </div>
      </div>
);

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

const ManifestoContentWrapper = ({ children, item }: { children: React.ReactNode, item: ManifestoItem }) => (
  <div className="max-w-7xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-2xl border">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <StarIcon className="w-10 h-10 text-primary" />
          </div>
          <div>
              <p className="font-body text-primary font-semibold uppercase tracking-wider text-sm">Manifiesto</p>
              <h1 className="font-headline text-4xl md:text-5xl text-primary mt-1">{item.title}</h1>
          </div>
      </div>
      <Separator className="my-8" />
      <div className="min-h-[60vh] flex flex-col justify-center">
        {children}
      </div>
  </div>
);


const ManifestoContent = ({ id, item }: { id: string, item: ManifestoItem }) => {
    switch (id) {
        // The cases below are likely obsolete as these sections now have their own pages,
        // but leaving them doesn't harm anything as 'proposito' is the only one being routed here.
        case 'poblaciones': return <ManifestoContentWrapper item={item}><PoblacionesContent /></ManifestoContentWrapper>;
        case 'mapa': return <ManifestoContentWrapper item={item}><MapaContent /></ManifestoContentWrapper>;
        default: return null;
    }
}


export default function ManifestoClientPage({ item }: ManifestoClientPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 bg-card/80 backdrop-blur-sm shadow-sm border-b z-40">
          <div className="container mx-auto px-5 md:px-20 h-20 flex items-center">
                <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 hover:text-primary/40">
                  <Link href="/#manifiesto">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Volver al Portafolio
                  </Link>
                </Button>
          </div>
      </header>

      <main className='container mx-auto px-5 md:px-20 py-16 md:py-24'>
          <ManifestoContent id={item.id} item={item} />
      </main>
      
      <Footer />
    </div>
  );
}
