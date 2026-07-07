import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../proposito.css';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImageById = (id: string) => PlaceHolderImages.find(p => p.id === id);

export default function PropositoPage() {
    const heroBg = getImageById('proposito-hero');
    const telosBg = getImageById('proposito-telos');
    const areteBg = getImageById('proposito-arete');
    const eudaimoniaBg = getImageById('proposito-eudaimonia');

  return (
    <div className="proposito-page-container">
        <Link href="/#manifiesto" className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105">
            <ArrowLeft />
        </Link>
        <div className="page">
            {/* ── HERO ── */}
            <section className="hero">
                <div className="hero-bg" style={{ backgroundImage: heroBg ? `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.82) 70%, #000 100%), url('${heroBg.imageUrl}')` : '' }}></div>
                <div className="hero-content">
                    <div className="hero-eyebrow">Ingeniería Empresarial y de Sistemas</div>
                    <h1>Propósito <em>Profesional</em></h1>
                    <div className="hero-line"></div>
                    <p className="hero-desc text-justify">
                        Aspiramos a integrar excelencia técnica con un compromiso ético inquebrantable, orientando la tecnología hacia el bienestar social y generando valor real y sostenible para las personas.
                    </p>
                </div>
            </section>

            {/* ── TRES CONCEPTOS ── */}
            <div className="concepts">
                <div className="concept-card">
                    <div className="card-bg" style={{ backgroundImage: telosBg ? `linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.55) 100%), url('${telosBg.imageUrl}')` : '' }}></div>
                    <div className="card-hover-line"></div>
                    <div className="card-content">
                        <div className="concept-greek">Telos</div>
                        <div className="concept-tag">Nuestro fin último</div>
                        <p className="concept-desc">Orientar la tecnología al bienestar común, reduciendo brechas digitales y construyendo puentes de integración en el Perú.</p>
                    </div>
                </div>

                <div className="concept-card">
                    <div className="card-bg" style={{ backgroundImage: areteBg ? `linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.55) 100%), url('${areteBg.imageUrl}')` : '' }}></div>
                    <div className="card-hover-line"></div>
                    <div className="card-content">
                        <div className="concept-greek">Areté</div>
                        <div className="concept-tag">Nuestra excelencia</div>
                        <p className="concept-desc">El hábito constante de actuar con prudencia, justicia y responsabilidad en cada decisión profesional, buscando siempre el bien de las personas.</p>
                    </div>
                </div>

                <div className="concept-card">
                    <div className="card-bg" style={{ backgroundImage: eudaimoniaBg ? `linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.55) 100%), url('${eudaimoniaBg.imageUrl}')` : '' }}></div>
                    <div className="card-hover-line"></div>
                    <div className="card-content">
                        <div className="concept-greek">Eudaimonía</div>
                        <div className="concept-tag">Nuestro florecimiento</div>
                        <p className="concept-desc">Alcanzamos la plenitud profesional cuando la excelencia técnica se armoniza con el impacto social, promoviendo inclusión y respeto a la dignidad humana.</p>
                    </div>
                </div>
            </div>

            {/* ── CITA FINAL ── */}
            <div className="bottom-quote">
                <blockquote>"La ética no es una restricción de la técnica — es su <strong>más alta expresión</strong>."</blockquote>
            </div>
        </div>
    </div>
  );
}
