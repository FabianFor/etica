'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Landmark, Shield, Timer, ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import '../../poblaciones.css';

const getImageById = (id: string) => PlaceHolderImages.find(p => p.id === id);

const panelsData = [
  {
    id: "poblaciones-conectividad",
    tag: "Personas sin acceso a\ntecnología",
    title: "Hogares sin conectividad",
    stat: "13%",
    statLabel: "sin internet",
    desc: "El 13% de los hogares carece de acceso a internet y solo 3 de cada 10 cuentan con una computadora, afectando principalmente a las zonas rurales del país.",
    quote: "La falta de acceso a la tecnología en zonas rurales no es solo un problema técnico, sino un factor que perpetúa la pobreza al limitar el acceso a educación y servicios esenciales del Estado.",
    author: "INEI (2024)",
    source: "Fuente: ComexPerú — Cierre de brechas digitales",
    sourceUrl: "https://www.comexperu.org.pe/articulo/cierre-de-brechas-digitales-para-potenciar-la-productividad-peruana"
  },
  {
    id: "poblaciones-empresas",
    tag: "Empresas pequeñas",
    title: "Pequeñas empresas sin\nherramientas digitales",
    stat: "35%",
    statLabel: "usa alguna herramienta digital",
    desc: "Solo el 35% de las MYPE utiliza alguna herramienta digital para la gestión de sus ventas, lo que les impide competir con las grandes empresas que tienen mayor acceso a recursos tecnológicos.",
    quote: "La digitalización en la pequeña empresa no debe ser vista como un costo, sino como la única ruta para asegurar su supervivencia en un entorno de alta competitividad.",
    author: "Juan José Marthans",
    source: "Fuente: ComexPerú — Informe Anual MYPE 2024",
    sourceUrl: "https://www.comexperu.org.pe/articulo/informe-anual-mype-2024"
  },
  {
    id: "poblaciones-mayores",
    tag: "Adultos mayores",
    title: "Adultos mayores sin\nconocimiento digital",
    stat: "51.7%",
    statLabel: "sin conocimientos tecnológicos",
    desc: "El 51.7% de los adultos mayores no tiene conocimientos tecnológicos, lo que dificulta su vida cotidiana al no poder acceder a servicios digitales esenciales de manera independiente.",
    quote: "La digitalización sin capacitación se convierte en una barrera que vulnera el derecho de las personas mayores a acceder a servicios esenciales de manera independiente.",
    author: "Defensoría del Pueblo (2024)",
    source: "Fuente: INEI — Población adulta mayor que usa internet",
    sourceUrl: "https://www.gob.pe/institucion/inei/noticias/1031021-aumenta-a-47-0-la-poblacion-adulta-mayor-que-hace-uso-de-internet"
  }
];

const commitmentIcons = [
    { icon: <Users size={22} />, label: 'Inclusión' },
    { icon: <Landmark size={22} />, label: 'Puente' },
    { icon: <Shield size={22} />, label: 'Ética' },
    { icon: <Timer size={22} />, label: 'Impacto' }
];

export default function PoblacionesPage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openFs = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOverlayOpen(true);
  }, []);

  const closeFs = useCallback(() => {
    setIsOverlayOpen(false);
  }, []);

  const navigateFs = useCallback((dir: number) => {
    setActiveIndex(prev => (prev + dir + panelsData.length) % panelsData.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOverlayOpen) return;
      if (e.key === 'ArrowRight') navigateFs(1);
      if (e.key === 'ArrowLeft') navigateFs(-1);
      if (e.key === 'Escape') closeFs();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOverlayOpen, navigateFs, closeFs]);
  
  const activePanel = panelsData[activeIndex];
  const activeImage = getImageById(activePanel.id);

  return (
    <div className="poblaciones-page">
      <Link href="/#manifiesto" className="fixed top-4 left-4 z-[201] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-card/80 border border-border text-foreground backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:scale-105">
          <ArrowLeft size={24} />
      </Link>
      
      <div className="header">
        <h1 className="header-title">Poblaciones Vulnerables</h1>
        <div className="header-line"></div>
      </div>

      <div className="collage">
        {panelsData.map((panel, index) => {
          const image = getImageById(panel.id);
          return (
          <div key={index} className="panel" onClick={() => openFs(index)}>
            {image && <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} fill className="bg" />}
            <div className="pcontent">
              <div>
                <p className="ptag">{panel.tag.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}</p>
                <h2 className="ptitle">{panel.title.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}</h2>
              </div>
              <div className="pbottom">
                 <p className="pstat">
                  {panel.stat} <span style={{fontSize: 'clamp(8px, 0.9vw, 11px)', fontWeight: 400, color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.1em'}}>{panel.statLabel}</span>
                </p>
                <p className="pdesc">{panel.desc}</p>
              </div>
            </div>
          </div>
        )})}
      </div>

      <section className="compromiso">
        <div className="comp-left">
          <h2 className="comp-title">Compromiso Profesional</h2>
          <div className="comp-line"></div>
          <div className="comp-icons">
            {commitmentIcons.map((item, index) => (
              <div key={index} className="comp-icon-item">
                <div className="comp-icon-circle">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="comp-right">
          <p className="comp-text">
              Como futuros profesionales asumimos el compromiso de ejercer nuestra carrera con responsabilidad ética y sentido social, reconociendo que la tecnología no es neutral y que cada decisión profesional impacta directamente en la vida de las personas. Nos comprometemos a actuar como un puente entre la tecnología y las poblaciones vulnerables, promoviendo soluciones digitales inclusivas, accesibles y comprensibles para personas sin acceso a tecnología, pequeños emprendedores y adultos mayores.
          </p>
        </div>
      </section>

      <div className={`fs-overlay ${isOverlayOpen ? 'open' : ''}`} onClick={closeFs}>
        <div className="fs-inner" onClick={(e) => e.stopPropagation()}>
          <div className="fs-img-wrap">
            {activeImage && <Image src={activeImage.imageUrl} alt={activeImage.description} data-ai-hint={activeImage.imageHint} fill />}
          </div>
          <div className="fs-info">
            <button className="fs-close" onClick={closeFs}>✕</button>
            <p className="fs-tag">{activePanel.tag.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}</p>
            <h2 className="fs-title">{activePanel.title.split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}</h2>
            <p className="fs-stat">{activePanel.stat}</p>
            <div className="fs-divider"></div>
            <p className="fs-desc">{activePanel.desc}</p>
            <p className="fs-quote">"{activePanel.quote}" — {activePanel.author}</p>
            <a href={activePanel.sourceUrl} target="_blank" rel="noopener noreferrer" className="fs-source hover:underline hover:opacity-100 transition-opacity">
              {activePanel.source}
            </a>
            <div className="fs-nav">
              <div className="fs-nav-btn" onClick={() => navigateFs(-1)}>&#8249;</div>
              <div className="fs-nav-btn" onClick={() => navigateFs(1)}>&#8250;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
