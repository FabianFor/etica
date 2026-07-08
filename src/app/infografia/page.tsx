"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Leaf } from 'lucide-react';
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

export default function InfografiaCosmicaPage() {
  const [activeTab, setActiveTab] = useState<'capa1' | 'capa2'>('capa1');
  const [stars, setStars] = useState<Star[]>([]);

  // Generamos las estrellas SOLO en el cliente, después del montaje.
  // Esto evita el error de hidratación: el servidor renderiza el array
  // vacío y el cliente lo llena después, en vez de que servidor y
  // cliente generen valores de Math.random() distintos.
  useEffect(() => {
    setStars(
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.6,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 6}s`,
        opacity: Math.random() * 0.75 + 0.25,
      }))
    );
  }, []);

  const data = {
    capa1: {
      pdf: '/infografia/integridad.pdf',
      canva: 'https://canva.link/ttk82ddvna5a1dh',
      tag: 'Semana 13 · Ética del cuidado',
      title: '✦ El Rostro del Otro en Nuestra Práctica Profesional',
      text: 'Esta infografía presenta la situación de vulnerabilidad de los adultos mayores frente a la brecha digital y nuestro compromiso ético como futuros profesionales de Ingeniería Empresarial y de Sistemas para desarrollar soluciones tecnológicas inclusivas, accesibles y humanas que fortalezcan su autonomía y calidad de vida.',
    },
    capa2: {
      pdf: '/infografia/sostenibilidad.pdf',
      canva: 'https://canva.link/ttk82ddvna5a1dh',
      tag: 'Semana 14 · Ecoética Digital',
      title: '✦ Ética del cuidado y ecoética digital',
      text: 'Esta infografía relaciona la inclusión digital con la sostenibilidad ambiental, promoviendo la gestión responsable de los residuos electrónicos (RAEE), el uso ético de la tecnología y el desarrollo de soluciones innovadoras que beneficien tanto a las personas como al medio ambiente y a las generaciones futuras..',
    },
  };

  const current = data[activeTab];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-slate-100 relative overflow-hidden`}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes shoot1 {
          0% { opacity: 0; transform: translate(-60px,-60px) rotate(35deg) scaleX(0); }
          3% { opacity: 1; transform: translate(0,0) rotate(35deg) scaleX(1); }
          14% { opacity: 0; transform: translate(480px,340px) rotate(35deg) scaleX(0.3); }
          100% { opacity: 0; }
        }
        @keyframes shoot2 {
          0% { opacity: 0; transform: translate(60px,-60px) rotate(-35deg) scaleX(0); }
          3% { opacity: 0.9; transform: translate(0,0) rotate(-35deg) scaleX(1); }
          16% { opacity: 0; transform: translate(-420px,300px) rotate(-35deg) scaleX(0.2); }
          100% { opacity: 0; }
        }
      `}</style>

      {/* Fondo cósmico */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute bg-white rounded-full"
            style={{
              top: s.top, left: s.left, width: s.size, height: s.size,
              opacity: s.opacity,
              animation: `twinkle ${s.duration} infinite ease-in-out`,
              animationDelay: s.delay,
            }}
          />
        ))}
        <div
          className="absolute rounded-full blur-[110px]"
          style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.10), transparent 70%)' }}
        />
        <div
          className="absolute rounded-full blur-[110px]"
          style={{ bottom: '-15%', left: '5%', width: 700, height: 500, background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.07), transparent 70%)' }}
        />
        <div className="absolute rounded-full" style={{ top: '14%', left: '15%', width: 160, height: 2, background: 'linear-gradient(90deg, transparent, #34d399, white)', animation: 'shoot1 11s infinite linear' }} />
        <div className="absolute rounded-full" style={{ top: '40%', right: '10%', width: 160, height: 2, background: 'linear-gradient(90deg, transparent, #34d399, white)', animation: 'shoot2 16s infinite linear', animationDelay: '4s' }} />
        <div className="absolute rounded-full" style={{ top: '68%', left: '8%', width: 160, height: 2, background: 'linear-gradient(90deg, transparent, #34d399, white)', animation: 'shoot1 13s infinite linear', animationDelay: '7s' }} />
      </div>

      {/* Botón de retroceso */}
      <Link
        href="/#infografia"
        className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <header className="text-center mb-10">
          <h1
            className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-emerald-100 via-teal-50 to-white bg-clip-text text-transparent`}
          >
            ÉTICA DEL CUIDADO Y ECOÉTICA DIGITAL
          </h1>
<p className="mt-6 max-w-5xl mx-auto text-justify text-slate-400 text-lg leading-8">
  Esta infografía presenta la situación de vulnerabilidad de los adultos mayores frente a la brecha digital y nuestro compromiso ético como futuros profesionales de Ingeniería Empresarial y de Sistemas para desarrollar soluciones tecnológicas inclusivas, accesibles y humanas que fortalezcan su autonomía y calidad de vida.
</p>
        </header>

        {/* Visor de PDF */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.05)] mb-8">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Vista previa del documento PDF
            </div>
            <a
              href={current.pdf}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white px-4 py-2 rounded-lg border border-zinc-800 transition-all"
            >
              ⤢ Pantalla completa
            </a>
          </div>
          <div className="bg-black">
            <embed
              key={activeTab}
              src={`${current.pdf}#toolbar=1&navpanes=0&scrollbar=1`}
              type="application/pdf"
              className="w-full h-[640px] md:h-[780px]"
            />
          </div>
        </div>

        {/* Selector de capas */}
        <div className="grid grid-cols-2 gap-3 mb-7">
          <button
            onClick={() => setActiveTab('capa1')}
            className={`flex items-center justify-center gap-2 py-5 px-5 rounded-2xl border font-bold text-base transition-all ${
              activeTab === 'capa1'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                : 'bg-white/[0.015] border-zinc-800 text-slate-300 hover:bg-white/[0.03]'
            }`}
          >
            <Shield className={`w-5 h-5 ${activeTab === 'capa1' ? 'text-emerald-400' : 'opacity-60'}`} />
            Capa 1: Ética del Cuidado
          </button>
          <button
            onClick={() => setActiveTab('capa2')}
            className={`flex items-center justify-center gap-2 py-5 px-5 rounded-2xl border font-bold text-base transition-all ${
              activeTab === 'capa2'
                ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                : 'bg-white/[0.015] border-zinc-800 text-slate-300 hover:bg-white/[0.03]'
            }`}
          >
            <Leaf className={`w-5 h-5 ${activeTab === 'capa2' ? 'text-emerald-400' : 'opacity-60'}`} />
            Capa 2: Ecoética digital
          </button>
        </div>

        {/* Tarjeta de info */}
        <div className="bg-white/[0.015] border border-zinc-900 border-l-[3px] border-l-emerald-500 rounded-2xl p-7 mb-7">
          <span className="block text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2">{current.tag}</span>
          <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold text-white mb-3`}>{current.title}</h2>
          <p className="text-base text-slate-300 leading-relaxed">{current.text}</p>
        </div>

        {/* Botón Canva */}
        <a
          href={current.canva}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-extrabold text-base shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-0.5 transition-all"
        >
          <span className="bg-white/20 px-2.5 py-1 rounded text-xs uppercase tracking-widest">Canva</span>
          Ver diseño en Canva ↗
        </a>
      </main>
    </div>
  );
}