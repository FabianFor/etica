import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../mapa-critico.css';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MapaCriticoPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'mapa-critico-bg');
  return (
    <div className="mapa-critico-container" style={{ backgroundImage: bgImage ? `linear-gradient(rgba(5,20,60,0.84), rgba(15, 36, 92, 0.75)), url('${bgImage.imageUrl}')` : ''}}>
      <Link href="/#manifiesto" className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105">
        <ArrowLeft />
      </Link>
      
      {/* ══ HEADER ══ */}
      <div className="header">
        <h1>Mapa Crítico Profesional</h1>
        <p className="h-sub">Negligencias y acciones positivas en nuestra carrera en el Perú</p>
        <div className="badge">Del conocimiento a la conciencia, de la técnica a la ética</div>
        <p className="central-q">¿Qué tipo de profesional y de sociedad estamos construyendo con cada decisión tecnológica que tomamos?</p>
      </div>

      {/* ══ MAP WRAPPER ══ */}
      <div className="map-wrap">

        {/* TÍTULOS DE COLUMNAS */}
        <div className="top-row">
          <div className="col-title-box">
            <div className="arrow-down">↓</div>
            <h2>El Alcance de la<br/>Infraestructura</h2>
            <div className="arrow-down">↓</div>
          </div>
          <div className="col-title-box">
            <div className="arrow-down">↓</div>
            <h2>La Ética en la<br/>Venta de Soluciones</h2>
            <div className="arrow-down">↓</div>
          </div>
          <div className="col-title-box">
            <div className="arrow-down">↓</div>
            <h2>La Inclusión en<br/>el Diseño Digital</h2>
            <div className="arrow-down">↓</div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="content-grid">

          {/* COL 1 */}
          <div className="col-pair">
            <div className="branch">
              <div className="branch-label neg"><span className="dot"></span>Negligencia</div>
              <p className="txt">Centralización tecnológica que asume hiperconectividad, ignorando la brecha digital.</p>
              <hr className="divider"/>
              <div className="block-label orange">Datos que evidencian</div>
              <p className="txt">Solo <strong>23,6%</strong> de hogares en áreas rurales tiene Internet fijo. (INEI – ENAHO, 2024). La brecha digital limita el desarrollo, la educación y el ejercicio de derechos.</p>
              <hr className="divider"/>
              <div className="block-label yellow">Consecuencia ética</div>
              <p className="txt">Se profundiza la inequidad territorial y se niega el acceso justo a la información.</p>
            </div>
            <div className="branch">
              <div className="branch-label pos"><span className="dot"></span>Acción Positiva</div>
              <p className="txt">Desarrollo de arquitecturas Lite u Offline-first que democraticen el acceso a la información.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Impacto positivo</div>
              <p className="txt">Infraestructura distribuida y resiliente que impulsa el desarrollo local y la justicia digital.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Virtud que se practica</div>
              <p className="txt">Solidaridad, justicia y compromiso social.</p>
            </div>
          </div>

          {/* COL 2 */}
          <div className="col-pair">
            <div className="branch">
              <div className="branch-label neg"><span className="dot"></span>Negligencia</div>
              <p className="txt">Venta de software sobredimensionado y costoso que no se ajusta a la realidad del cliente.</p>
              <hr className="divider"/>
              <div className="block-label orange">Datos que evidencian</div>
              <p className="txt"><strong>99,5%</strong> de las empresas en el Perú son MYPES. Aportan el <strong>70%</strong> del empleo formal. (PRODUCE, 2023)</p>
              <hr className="divider"/>
              <div className="block-label yellow">Consecuencia ética</div>
              <p className="txt">Se prioriza el lucro sobre el bien común y se vulnera la justicia conmutativa.</p>
            </div>
            <div className="branch">
              <div className="branch-label pos"><span className="dot"></span>Acción Positiva</div>
              <p className="txt">Consultoría de sistemas honesta y escalable que prioriza la supervivencia económica del negocio.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Impacto positivo</div>
              <p className="txt">Se fortalece el tejido económico desde la ética, generando valor compartido y desarrollo sostenible.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Virtud que se practica</div>
              <p className="txt">Templanza, honestidad y responsabilidad.</p>
            </div>
          </div>

          {/* COL 3 */}
          <div className="col-pair">
            <div className="branch">
              <div className="branch-label neg"><span className="dot"></span>Negligencia</div>
              <p className="txt">Exclusión de servicios por diseño 100% digital, eliminando el soporte humano.</p>
              <hr className="divider"/>
              <div className="block-label orange">Datos que evidencian</div>
              <p className="txt">Solo <strong>48,3%</strong> de personas de 60 años a más usa Internet. (INEI – ENAHO, 2024). Más de la mitad aún está en riesgo de exclusión digital.</p>
              <hr className="divider"/>
              <div className="block-label yellow">Consecuencia ética</div>
              <p className="txt">Se vulnera la dignidad humana y el principio de igualdad de oportunidades.</p>
            </div>
            <div className="branch">
              <div className="branch-label pos"><span className="dot"></span>Acción Positiva</div>
              <p className="txt">Implementación de diseño inclusivo (UX accesible) y soporte omnicanal humano para respetar la dignidad de la información de la persona.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Impacto positivo</div>
              <p className="txt">Mayor inclusión digital, participación social y fortalecimiento de la cohesión humana.</p>
              <hr className="divider"/>
              <div className="block-label cyan">Virtud que se practica</div>
              <p className="txt">Empatía, solidaridad y respeto.</p>
            </div>
          </div>
        </div>

        {/* FLECHAS ABAJO */}
        <div className="footer-arrows">
          <div className="arrow-down" style={{fontSize:'clamp(18px,2vw,30px)'}}>↓</div>
          <div className="arrow-down" style={{fontSize:'clamp(18px,2vw,30px)'}}>↓</div>
          <div className="arrow-down" style={{fontSize:'clamp(18px,2vw,30px)'}}>↓</div>
        </div>

        {/* FOOTER */}
        <div className="footer-banner">
          <div className="f-main">⚖️ &nbsp; LA ÉTICA NO ES UN COSTO, ES NUESTRA IDENTIDAD PROFESIONAL.</div>
          <div className="f-sub">Elegimos conciencia &nbsp;·&nbsp; Elegimos ética &nbsp;·&nbsp; Elegimos construir futuro</div>
        </div>
      </div>
    </div>
  );
}
