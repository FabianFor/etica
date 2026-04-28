"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Data for panels
const panelsData = [
    {
      id: 'metafora-historia',
      tag: "Historia · 600 años de tradición",
      title: "HISTORIA",
      subtitle: "Este es nuestro origen",
      meta: "Legado",
      desc: "El puente Q’eswachaka es una estructura ancestral inca, considerada la última de su tipo, que se mantiene viva gracias al trabajo comunitario de pobladores andinos. Cada año es reconstruido con técnicas tradicionales para preservar la conexión entre comunidades y su identidad cultural.",
      iconPath: `<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      id: 'metafora-puente',
      tag: "Patrimonio Cultural Inmaterial · UNESCO",
      title: "PUENTE COLGANTE INCA\nQ'ESWACHAKA",
      subtitle: "Este es mi estructura",
      meta: "Metáfora",
      desc: "Construimos puentes entre los objetivos organizacionales, las comunidades y las soluciones tecnológicas que hacen posible su desarrollo.",
      iconPath: `<path d="M3 17h18M3 12l9-9 9 9M5 15v4h14v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    },
    {
      id: 'metafora-proposito',
      tag: "Propósito · Conexión · Valor",
      title: "CONEXIÓN CON\nEL PROPÓSITO",
      subtitle: "Este es nuestro norte",
      meta: "Compromiso",
      desc: "Esta metáfora expresa nuestro compromiso profesional de diseñar soluciones tecnológicas con enfoque humano, orientadas a cerrar brechas digitales y promover el bienestar social, integrando innovación, responsabilidad y sentido ético en cada decisión.",
      iconPath: `<path d="M12 21C12 21 4 14 4 9a8 8 0 0 1 16 0c0 5-8 12-8 12z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/>`,
    }
];

const getImageById = (id: string) => PlaceHolderImages.find(p => p.id === id);


// Main Component
export default function MetaforaCollage() {
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

    const handleOpenFs = useCallback((index: number) => {
        setFullscreenIndex(index);
    }, []);

    const handleCloseFs = useCallback(() => {
        setFullscreenIndex(null);
    }, []);
    
    const handleNavigateFs = useCallback((direction: number) => {
        setFullscreenIndex(prev => {
            if (prev === null) return null;
            const newIndex = (prev + direction + panelsData.length) % panelsData.length;
            return newIndex;
        });
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
          if (fullscreenIndex === null) return;
          if (e.key === 'ArrowRight') handleNavigateFs(1);
          if (e.key === 'ArrowLeft') handleNavigateFs(-1);
          if (e.key === 'Escape') handleCloseFs();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [fullscreenIndex, handleNavigateFs, handleCloseFs]);
    
    const currentFsData = fullscreenIndex !== null ? panelsData[fullscreenIndex] : null;
    const currentFsImage = currentFsData ? getImageById(currentFsData.id) : null;

    return (
        <div className="h-screen w-screen bg-background overflow-hidden font-garamond">
            <Link href="/#manifiesto" className="fixed top-6 left-6 z-[201] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-card/80 border border-border text-foreground backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:scale-105">
                <ArrowLeft />
            </Link>

            {/* Collage */}
            <main className="flex w-full h-full relative">
                {panelsData.map((p, i) => {
                    const image = getImageById(p.id);
                    return (
                    <div 
                        key={i} 
                        className="group relative flex-1 overflow-hidden cursor-pointer transition-[flex] duration-500 ease-in-out border-r border-border/20 last:border-r-0 hover:grow-[1.18]"
                        onClick={() => handleOpenFs(i)}
                    >
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                fill
                                priority={i === 1}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out brightness-[.7] saturate-[.9] group-hover:scale-105 group-hover:brightness-[.8] group-hover:saturate-100"
                            />
                        )}
                        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/50 via-transparent to-transparent bg-no-repeat [background-size:100%_38%] [background-position:top], bg-gradient-to-t from-background/70 via-transparent to-transparent bg-no-repeat [background-position:bottom] [background-size:100%_45%]" />
                        
                        <div
                            className="absolute inset-0 z-[2] opacity-20 bg-repeat pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
                                backgroundSize: '180px',
                            }}
                        />
                        
                        <div className="absolute inset-0 z-[3] flex flex-col justify-between p-4 md:p-8">
                            <div className="text-center">
                                <p className="font-cinzel text-accent text-[clamp(11px,1.4vw,14px)] tracking-[0.22em] uppercase mb-2">{p.tag.split('·')[0].trim()}</p>
                                <h2 className="font-cinzel text-[clamp(16px,2vw,26px)] font-black text-foreground uppercase leading-tight tracking-wider [text-shadow:0_2px_18px_rgba(0,0,0,0.4)]">
                                    {p.title.split('\n').map((line, idx) => <span key={idx} className="block">{line}</span>)}
                                </h2>
                                {p.subtitle && <p className="font-crimson text-[clamp(13px,1.6vw,18px)] text-accent mt-1">{p.subtitle}</p>}
                                {p.meta && (
                                    <>
                                        <p className="font-crimson italic text-[clamp(18px,2.4vw,30px)] text-foreground mt-1 flex items-center justify-center gap-2">
                                            <span className="text-accent not-italic">—</span>{p.meta}<span className="text-accent not-italic">—</span>
                                        </p>
                                        <div className="flex justify-center items-center gap-1.5 mt-2 text-accent text-[10px] tracking-[4px] opacity-70">
                                            <span className="text-[8px] opacity-50">────</span>✦<span className="text-[8px] opacity-50">────</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="bg-card/60 border border-border/50 rounded-sm p-4 flex gap-3 items-start backdrop-blur-sm">
                                <svg className="w-8 h-8 flex-shrink-0 text-accent opacity-85" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: p.iconPath }} />
                                <p className="font-crimson text-[clamp(11px,1.25vw,13.5px)] leading-relaxed text-foreground/80">{p.desc}</p>
                            </div>
                        </div>
                    </div>
                )})}
            </main>
            
            {/* Fullscreen Overlay */}
            <div 
                className={cn("fixed inset-0 z-[200] pointer-events-none bg-transparent transition-colors duration-400 ease-in-out", fullscreenIndex !== null && "pointer-events-auto bg-background/95 backdrop-blur-sm")}
                onClick={handleCloseFs}
            >
                {currentFsData && currentFsImage && (
                     <div 
                        className={cn(
                            "absolute inset-0 flex flex-col lg:flex-row items-stretch opacity-0 scale-95 transition-all duration-400 ease-in-out",
                            fullscreenIndex !== null && "opacity-100 scale-100"
                        )}
                        onClick={e => e.stopPropagation()}
                     >
                        <div className="relative w-full h-[50vh] lg:h-full lg:flex-[1.2] overflow-hidden">
                            <Image src={currentFsImage.imageUrl} alt={currentFsImage.description} data-ai-hint={currentFsImage.imageHint} fill className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background" />
                        </div>

                        <div className="relative w-full h-auto lg:h-full lg:w-[42%] flex-shrink-0 flex flex-col justify-center p-8 lg:p-14 overflow-y-auto bg-background lg:bg-transparent">
                            <button 
                                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-accent/10 border border-accent/40 text-accent text-lg hover:bg-accent/25 z-10"
                                onClick={handleCloseFs}
                            >
                                ✕
                            </button>
                            
                            <p className="font-cinzel text-xs tracking-[0.3em] text-accent uppercase mb-5">{currentFsData.tag}</p>
                            <h1 className="font-cinzel text-3xl lg:text-4xl font-black text-foreground uppercase leading-none tracking-wider mb-2">
                               {currentFsData.title.split('\n').map((line, idx) => <span key={idx} className="block">{line}</span>)}
                            </h1>
                            {currentFsData.subtitle && <p className="font-crimson text-lg lg:text-xl text-accent mb-1">{currentFsData.subtitle}</p>}
                            
                            {currentFsData.meta && 
                                <p className="font-crimson italic text-3xl lg:text-4xl text-foreground flex items-center gap-2 mb-8">
                                    <span className="text-accent not-italic">—</span>{currentFsData.meta}<span className="text-accent not-italic">—</span>
                                </p>
                            }

                            <div className="w-12 h-0.5 bg-accent mb-7 opacity-60" />
                            
                            <p className="font-crimson text-base lg:text-lg leading-relaxed text-foreground/70 max-w-md">{currentFsData.desc}</p>
                            
                            <div className="absolute bottom-8 right-8 lg:right-14 flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-accent/10 border border-accent/40 text-accent text-base hover:bg-accent/20" onClick={(e) => { e.stopPropagation(); handleNavigateFs(-1); }}>&#8249;</div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-accent/10 border border-accent/40 text-accent text-base hover:bg-accent/20" onClick={(e) => { e.stopPropagation(); handleNavigateFs(1); }}>&#8250;</div>
                            </div>
                        </div>
                    </div>
                )}
                 {fullscreenIndex !== null && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                        {panelsData.map((_, i) => (
                            <div
                                key={`dot-${i}`}
                                className={cn(
                                    "w-2 h-2 rounded-full cursor-pointer transition-all bg-accent/30 border border-accent/50",
                                    fullscreenIndex === i && "bg-accent scale-125"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFullscreenIndex(i);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
