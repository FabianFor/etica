'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../valores.css';

export default function ValoresPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let stars: any[] = [];
    let shooters: any[] = [];

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 360; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + .2,
        t: Math.random() * Math.PI * 2,
        spd: Math.random() * .009 + .003
      });
    }

    function newShooter() {
      return {
        x: Math.random() * W * .6,
        y: Math.random() * H * .28,
        len: Math.random() * 110 + 55,
        speed: Math.random() * 7 + 4,
        angle: Math.PI / 5 + (Math.random() - .5) * .5,
        alpha: 1,
        active: true
      };
    }

    let frame = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H);
      frame++;
      const g = ctx.createRadialGradient(W * .45, H * .38, 0, W * .45, H * .38, W * .55);
      g.addColorStop(0, 'rgba(50,18,100,.15)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      stars.forEach(s => {
        s.t += s.spd;
        const a = .25 + .75 * (.5 + .5 * Math.sin(s.t));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(2)})`;
        ctx.fill();
      });
      if (frame % 180 === 0 && shooters.length < 4) shooters.push(newShooter());
      shooters = shooters.filter(s => s.active);
      shooters.forEach(s => {
        if (!ctx) return;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        const sg = ctx.createLinearGradient(0, 0, s.len, 0);
        sg.addColorStop(0, 'rgba(255,255,255,0)');
        sg.addColorStop(1, `rgba(255,255,255,${s.alpha.toFixed(2)})`);
        ctx.strokeStyle = sg;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(s.len, 0);
        ctx.stroke();
        ctx.restore();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= .013;
        if (s.alpha <= 0 || s.x > W || s.y > H) s.active = false;
      });
      animationFrameId.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="valores-page-container">
      <canvas id="stars-canvas" ref={canvasRef}></canvas>
      <Link href="/#manifiesto" className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105">
        <ArrowLeft />
      </Link>
      <div className="slide">
        <header className="header">
          <h1>Jerarquía de Valores</h1>
          <p className="sub">Max &nbsp; Scheler</p>
          <div className="rule"></div>
        </header>

        <div className="main">
          <div className="pyramid-wrap">
            <svg viewBox="0 0 420 490" xmlns="http://www.w3.org/2000/svg">
              <polygon points="210,10  135,138  285,138" fill="#8b3cf7"/>
              <polygon points="135,143  285,143  332,255  88,255" fill="#3b82f6"/>
              <polygon points="88,260   332,260  374,372  46,372" fill="#06b6d4"/>
              <polygon points="46,377   374,377  412,482  8,482"  fill="#f59e0b"/>

              <line x1="135" y1="140" x2="285" y2="140" stroke="rgba(0,0,0,.25)" strokeWidth="1.5"/>
              <line x1="88"  y1="257" x2="332" y2="257" stroke="rgba(0,0,0,.25)" strokeWidth="1.5"/>
              <line x1="46"  y1="374" x2="374" y2="374" stroke="rgba(0,0,0,.25)" strokeWidth="1.5"/>

              <text x="210" y="83"  textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="11"   fontWeight="700" letterSpacing="2">VALORES</text>
              <text x="210" y="100" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="11"   fontWeight="700" letterSpacing="2">ESPIRITUALES</text>

              <text x="210" y="193" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="2">VALORES</text>
              <text x="210" y="212" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="2">VITALES</text>

              <text x="210" y="308" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="13"   fontWeight="700" letterSpacing="1.8">VALORES DE LO</text>
              <text x="210" y="328" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="13"   fontWeight="700" letterSpacing="1.8">AGRADABLE</text>

              <text x="210" y="421" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="14"   fontWeight="700" letterSpacing="2">VALORES</text>
              <text x="210" y="441" textAnchor="middle" fill="rgba(255,255,255,.95)" fontFamily="'Inter',sans-serif" fontSize="14"   fontWeight="700" letterSpacing="2">ECONÓMICOS</text>
            </svg>
          </div>

          <div className="cards">
            <div className="card">
              <p className="card-name">Valores Espirituales</p>
              <p className="card-bold">Lo que es justo, verdadero y bello.</p>
              <p className="card-desc">Buscamos el camino de lo justo y verdadero para crecer como personas en los pilares de la sociedad.</p>
            </div>
            <div className="card">
              <p className="card-name">Valores Vitales</p>
              <p className="card-bold">Relación con la salud de uno y bienestar físico.</p>
              <p className="card-desc">Buscamos en nuestra salud física el bienestar e integridad que merecemos como personas.</p>
            </div>
            <div className="card">
              <p className="card-name">Valores de lo Agradable</p>
              <p className="card-bold">Lo placentero.</p>
              <p className="card-desc">Nosotros tenemos un lugar agradable en el que trabajar, estamos rodeados de personas que nos ayudan en un ambiente intuitivo.</p>
            </div>
            <div className="card">
              <p className="card-name">Valores Económicos</p>
              <p className="card-bold">Lo útil, lo rentable y lo eficiente.</p>
              <p className="card-desc">El valor más básico que presentamos, buscamos siempre si un proyecto o trabajo sea viable económicamente para la empresa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
