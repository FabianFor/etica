"use client";

import React, { useState, useRef } from 'react';
import { Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// ============================================================================
// INTERFACES Y TIPOS
// ============================================================================
export interface Quote {
  text: string;
  author: string;
  source?: string;
}

export interface TranscriptLine {
  time: number;
  text: string;
  speaker?: string;
}

export interface Video {
  id: string;
  title: string;
  author: string;
  views: string;
  duration: string;
  date: string;
  thumbnail: string;
  description: string;
  aboutText: string;
  reflectionQuestions: string[];
  quote: Quote;
  transcript: TranscriptLine[];
  category: string;
  likes: number;
  videoUrl: string;
}

export interface UserReflection {
  videoId: string;
  questionIndex: number;
  questionText: string;
  response: string;
  savedAt: string;
}

export interface TeammateTimestamp {
  id: string;
  minutes: number;
  seconds: number;
  name: string;
  topic: string;
}

export interface Philosopher {
  name: string;
  era: string;
  concept: string;
  icon: string;
  description: string;
  quote: string;
}

export interface AcademicReading {
  title: string;
  author: string;
  period: string;
  difficulty: string;
  readTime: string;
  summary: string;
}

// ============================================================================
// DATOS DE VIDEOS
// ============================================================================
export const VIDEOS_DATA: Video[] = [
  {
    id: 'la-caverna-digital',
    title: 'Código Ciego Ética profesional frente a la inteligencia artificial',
    author: '',
    views: '124,530',
    duration: '22:15',
    date: '14 de Jun, 2026',
    thumbnail: '/src/assets/images/cave_thumb_1781643518997.jpg',
    category: 'Epistemología & Ética Digital',
    likes: 8532,
    videoUrl: 'https://drive.google.com/file/d/1gbrlZHjLa5WFY3bt2BnDbWiYOXZFa9Us/preview',
    aboutText: 'En esta videorreacción, analizamos la célebre Alegoría de la Caverna de Platón (Libro VII de La República) aplicada de forma crítica a la burbuja algorítmica de las redes sociales. ¿Son los feeds personalizados de Instagram o TikTok las nuevas sombras proyectadas en la pared? Desentrañamos el costo ético de la distorsión colectiva de la realidad.',
    description: '¿Viviríamos felices dentro de una mentira cómoda? Platón nos advirtió sobre la naturaleza del engaño sensorial y la resistencia de las masas ante quien intenta revelarles una verdad superior. En este video conectamos el texto clásico con el fenómeno moderno de la polarización extrema, las cámaras de eco digitales y los sesgos cognitivos. Un viaje intelectual imperdible sobre la soberanía de la mente.',
    reflectionQuestions: [
      '¿De qué manera las sombras digitales (feeds optimizados para el engagement) configuran tu noción personal de lo que es real?',
      '¿Qué costo social y existencial asumimos hoy en día por atrevernos a desafiar el dogma ideológico de nuestra propia burbuja comunitaria?',
      '¿Cómo podemos educar la facultad del discernimiento (Episteme) en una era inundada por la sobreinformación emotiva (Doxa)?'
    ],
    quote: {
      text: 'La ignorancia es el peor de todos los males, porque es la causa de todos los demás.',
      author: 'Platón',
      source: 'Diálogo "Leyes" (IV a.C.)'
    },
    transcript: [
      { time: 0, text: 'Bienvenidos de nuevo. Hoy nos adentramos en las profundidades de la caverna platónica, pero no la de piedra, sino la de fibra óptica.', speaker: 'Anfitrión' },
      { time: 15, text: 'Pensemos por un segundo en la analogía clásica: prisioneros encadenados desde niños, viendo pasar sombras y creyendo que eso es el universo completo.', speaker: 'Anfitrión' },
      { time: 38, text: 'Ahora miren sus teléfonos. El algoritmo optimiza constantemente las imágenes que ven para mantenerlos fascinados y atrapados frente a la pantalla.', speaker: 'Anfitrión' },
      { time: 62, text: '¿No constituye esto un teatro de sombras perfectamente diseñado a la medida de nuestros propios sesgos de confirmación?', speaker: 'Anfitrión' },
      { time: 94, text: 'El gran conflicto ético surge cuando un prisionero se libera. El proceso es doloroso: el fuego real encandila sus ojos desacostumbrados.', speaker: 'Anfitrión' },
      { time: 130, text: 'Al regresar para salvar a sus antiguos compañeros, es rechazado e incluso agredido por perturbar el statu quo reconfortante de la sombra.', speaker: 'Anfitrión' },
      { time: 168, text: 'En una sociedad polarizada, quien dice algo fuera de la cámara de eco es cancelado. La intolerancia a la verdad es un mal antiguo.', speaker: 'Anfitrión' },
      { time: 210, text: '¿Queremos ser libres intelectualmente o preferimos la placentera esclavitud de una ilusión optimizada para nuestra felicidad artificial?', speaker: 'Anfitrión' },
      { time: 260, text: 'Concluiremos esta sección reflexionando sobre qué herramientas críticas tenemos para romper estas nuevas y sutiles cadenas.', speaker: 'Anfitrión' }
    ]
  }
];

// ============================================================================
// DATOS DE TIMESTAMPS DE INTEGRANTES
// ============================================================================
export const INTEGRANTES_TIMESTAMPS: TeammateTimestamp[] = [
  {
    id: '1',
    minutes: 0,
    seconds: 0,
    name: 'FABIAN',
    topic: 'Presentación del codigo ciego'
  },
  {
    id: '2',
    minutes: 1,
    seconds: 1,
    name: 'ELIZABETH',
    topic: 'Extractos importantes del podcast'
  },
  {
    id: '3',
    minutes: 2,
    seconds: 31,
    name: 'ROGELIO',
    topic: 'Vacios eticos y analisis deontologico'
  },
  {
    id: '4',
    minutes: 6,
    seconds: 27,
    name: 'ANGEL',
    topic: 'Humanizacion del codigo'
  },
  {
    id: '5',
    minutes: 6,
    seconds: 27,
    name: 'MARCELO',
    topic: 'Reflexión critica y cierra'
  }
  

];

// ============================================================================
// DATOS DE TEXTOS VARIABLES
// ============================================================================
export const TEXT_VACIO_NORMATIVO = '';
export const TEXT_TENSION_ETICA = '';
export const TEXT_PROPUESTA_HUMAN = '';
export const TEXT_PRESION_DECISION = '';

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function App() {
  const [selectedVideo] = useState(VIDEOS_DATA[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleJumpToTime = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000' }}>

      {/* Imagen de fondo con filtros */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url("/images/bg-videoreaccion.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'brightness(1) saturate(1) contrast(1.1)',
      }} />

      <style>{`
        * {
          scroll-behavior: smooth;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #000000;
          color: #ffffff;
          overflow-x: hidden;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffffff;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e5e5e5;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 2rem;
          overflow: hidden;
        }
      `}</style>

      {/* ========== BOTÓN DE RETROCESO ========== */}
      <Link href="/#manifiesto" className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105">
        <ArrowLeft />
      </Link>

      <main className="relative z-10 text-white">
        
        {/* ========== HERO SECTION: FULL HEIGHT ========== */}
        <section className="hero-section relative">
          
          {/* Title */}
          <div className="text-center mb-8 px-6 select-none">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-wide text-white uppercase leading-tight">
              
              {selectedVideo.title}
            </h1>
          </div>

          {/* Main Content: Video Player + Timestamps */}
          <div className="flex-1 px-6 md:px-12 lg:px-16 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full md:gap-8">
              
              {/* Left Column: Video Player (60%) */}
              <div className="lg:col-span-7 w-full h-full flex items-center justify-center">
                <div className="w-full h-full max-h-[500px] md:max-h-[600px] relative rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-700">
<iframe
  src={selectedVideo.videoUrl}
  className="w-full h-full"
  frameBorder="0"
  allow="autoplay"
/>
                </div>
              </div>

              {/* Right Column: Interactive Timestamps (40%) */}
              <div className="lg:col-span-5 w-full h-full flex items-center">
                <div className="w-full bg-black border border-gray-700 rounded-lg p-6 shadow-xl relative overflow-hidden text-left h-full md:max-h-[600px] flex flex-col">
                  <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-20 border-t-2 border-r-2 border-gray-600" />
                  
                  <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4 select-none">
                    <Clock className="w-5 h-5 text-white" />
                    <h4 className="font-serif text-sm uppercase tracking-widest text-gray-300 font-extrabold">
                      Minutos de los Integrantes
                    </h4>
                  </div>

                  {/* Scrollable list */}
                  <div className="flex flex-col gap-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                    {INTEGRANTES_TIMESTAMPS.map((stamp) => {
                      const formattedTime = `${stamp.minutes}:${stamp.seconds.toString().padStart(2, '0')}`;
                      return (
                        <div
                          key={stamp.id}
                          onClick={() => handleJumpToTime(stamp.minutes * 60 + stamp.seconds)}
                          className="group flex items-start gap-3 p-3 rounded-md bg-black/60 border border-gray-700 hover:border-gray-500 cursor-pointer transition-all duration-300 hover:bg-gray-900/30 shadow-sm select-none flex-shrink-0"
                        >
                          {/* Timestamp badge */}
                          <span className="font-mono text-xs font-black text-black bg-white px-2 py-1 rounded flex items-center shrink-0 border border-gray-400 whitespace-nowrap">
                            {formattedTime}
                          </span>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <span className="font-serif text-xs font-bold text-white flex items-center gap-1.5 mb-1 truncate">
                              <User className="w-3 h-3 text-gray-300 shrink-0" />
                              <span className="truncate">{stamp.name}</span>
                            </span>
                            <p className="font-sans text-xs text-gray-400 leading-snug line-clamp-2">
                              {stamp.topic}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    
                    <button
                      onClick={() => window.open('https://drive.google.com/file/d/1gbrlZHjLa5WFY3bt2BnDbWiYOXZFa9Us/view?usp=sharing', '_blank')}
                      className="mt-4 w-full bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 text-sm"
                    >
                      Abrir en Drive
                    </button>
                  </div>
                    

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========== ANALYSIS SECTIONS (Below Hero) ========== */}
        <section className="py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Title */}
            <div className="mb-16 text-center select-none">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest block mb-3">
                Marco Ético-Filosófico Deontológico
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-wide text-white uppercase">
                Desarrollo Crítico
              </h2>
            </div>

            {/* Analysis Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 1. Vacíos normativos */}
              <div className="bg-black border border-gray-700 rounded-lg p-8 shadow-xl transition-all duration-300 hover:border-gray-500">
                <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-4 select-none">
                  Vacíos normativos identificados
                </h4>
<p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed text-justify bg-black/30 p-4 border-l-2 border-gray-500 rounded-r select-none mb-5">Durante la videoreacción se identificó que los códigos deontológicos actuales no contemplan de manera específica los riesgos de la inteligencia artificial en los procesos de contratación. Aunque existen normas contra la discriminación, estas no regulan adecuadamente los sesgos algorítmicos ni exigen transparencia en la toma de decisiones automatizadas. Como resultado, la empresa puede utilizar una herramienta discriminatoria sin comprender completamente cómo funciona.                </p>
              </div>

              {/* 2. Tensiones ético-legales */}
              <div className="bg-black border border-gray-700 rounded-lg p-8 shadow-xl transition-all duration-300 hover:border-gray-500">
                <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-4 select-none">
                  Tensiones ético-legales
                </h4>
<p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed text-justify bg-black/30 p-4 border-l-2 border-gray-500 rounded-r select-none mb-5">Se observa un conflicto entre los intereses económicos de la empresa y la obligación ética de respetar la igualdad de oportunidades. Aunque la implementación del sistema podría ser legal, sus resultados generan discriminación hacia determinados grupos de personas. Esto demuestra que la legalidad no siempre garantiza una decisión moralmente correcta y que el profesional debe actuar de acuerdo con principios éticos más amplios.                </p>
              </div>

              {/* 3. Propuesta de humanización */}
              <div className="bg-black border border-gray-700 rounded-lg p-8 shadow-xl transition-all duration-300 hover:border-gray-500">
                <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-4 select-none">
                  Propuesta de humanización
                </h4>
<p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed text-justify bg-black/30 p-4 border-l-2 border-gray-500 rounded-r select-none mb-5">En la videoreacción se propuso incorporar un principio de Transparencia y Equidad Algorítmica dentro del código deontológico profesional. Este principio exigiría supervisión humana obligatoria, auditorías periódicas y mecanismos para detectar sesgos discriminatorios. La propuesta busca garantizar que la tecnología respete la dignidad humana y promueva la igualdad de oportunidades.                </p>
              </div>

              {/* 4. Reflexión sobre presión de decisión */}
              <div className="bg-black border border-gray-700 rounded-lg p-8 shadow-xl transition-all duration-300 hover:border-gray-500">
                <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-4 select-none">
                  Reflexión sobre presión de decisión
                </h4>
<p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed text-justify bg-black/30 p-4 border-l-2 border-gray-500 rounded-r select-none mb-5">La presión económica y organizacional puede llevar a los profesionales a aceptar decisiones que saben que son incorrectas. En el caso analizado, el temor a retrasar el proyecto o afectar los resultados de la empresa influye en la toma de decisiones. Desde la perspectiva de Weber, el profesional debe asumir la responsabilidad de las consecuencias de sus actos. Por otro lado, Levinas recuerda que toda decisión debe considerar el impacto que tiene sobre las personas afectadas, priorizando el respeto por el otro antes que la simple eficiencia.                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}