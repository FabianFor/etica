"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Scale,
  Play,
  Pause,
  Compass,
  FileText,
  Award,
  Volume2,
  VolumeX,
  Music,
  ChevronDown,
  Mic,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// CONFIGURACIÓN DE RECURSOS LOCALES
// ==========================================
const AUDIO_FILE_PATH = "/images/codigo-ciego.mp3";
const AUDIO_FILE_NAME = "Episodio 01 - Código Ciego";

const IMAGEN_LADY_JUSTICE = "/images/lady-justice.jpg";
const IMAGEN_DISCO_CENTRO = "/images/disco-centro.png";
const IMAGEN_CROSSROADS = "/images/crossroads.jpg";
const IMAGEN_KANT = "/images/kant.jpg";
const IMAGEN_MILL = "/images/mill.jpg";
// ==========================================
// INTERFACES
// ==========================================
export interface AudioState {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  audioUrl: string;
  audioName: string;
}

// ==========================================
// IMAGE WITH FALLBACK
// ==========================================
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
  fallbackIcon: React.ComponentType<{ className?: string; size?: number }>;
  fallbackText: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackIcon: Icon,
  fallbackText,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center gap-2 text-center select-none`}
        style={{ background: "rgba(10,5,25,0.6)" }}
      >
        <Icon className="opacity-30" size={32} />
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.15em",
            opacity: 0.4,
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

// ==========================================
// VINYL PLAYER
// ==========================================
interface VinylPlayerProps {
  episodeNumber: string;
  episodeTitle: string;
}

export function VinylPlayer({ episodeNumber, episodeTitle }: VinylPlayerProps) {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    volume: 0.8,
    isMuted: false,
    audioUrl: AUDIO_FILE_PATH,
    audioName: AUDIO_FILE_NAME,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [bars, setBars] = useState<number[]>(
    Array.from({ length: 40 }, (_, i) =>
      Math.round(4 + Math.abs(Math.sin(i * 0.5)) * 18)
    )
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioState.isMuted ? 0 : audioState.volume;
    }
  }, [audioState.volume, audioState.isMuted]);
useEffect(() => {
  if (!audioRef.current || !audioState.audioUrl) return;
  const audio = audioRef.current;
  
  const onDuration = () => {
    if (isFinite(audio.duration) && audio.duration > 0) {
      setAudioState((prev) => ({ ...prev, duration: audio.duration }));
    }
  };

  audio.addEventListener("durationchange", onDuration);
  audio.addEventListener("loadedmetadata", onDuration);
  audio.addEventListener("canplay", onDuration);
  audio.load();

  return () => {
    audio.removeEventListener("durationchange", onDuration);
    audio.removeEventListener("loadedmetadata", onDuration);
    audio.removeEventListener("canplay", onDuration);
  };
}, [audioState.audioUrl]);
  useEffect(() => {
    if (!audioState.isPlaying) {
      setBars(
        Array.from({ length: 40 }, (_, i) =>
          Math.round(4 + Math.abs(Math.sin(i * 0.5)) * 18)
        )
      );
      return;
    }
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((v) => {
          const delta = Math.round((Math.random() - 0.5) * 8);
          return Math.max(4, Math.min(34, v + delta));
        })
      );
    }, 110);
    return () => clearInterval(interval);
  }, [audioState.isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current || !audioState.audioUrl) return;
    if (audioState.isPlaying) {
      audioRef.current.pause();
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
    } else {
      audioRef.current
        .play()
        .then(() => setAudioState((prev) => ({ ...prev, isPlaying: true })))
        .catch(() => setAudioState((prev) => ({ ...prev, isPlaying: false })));
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setAudioState((prev) => ({
      ...prev,
      currentTime: audioRef.current!.currentTime,
    }));
  };

const handleLoadedMetadata = () => {
  if (!audioRef.current) return;
  const audio = audioRef.current;
  
  const tryGetDuration = () => {
    if (audio.readyState >= 1 && isFinite(audio.duration) && audio.duration > 0) {
      setAudioState((prev) => ({ ...prev, duration: audio.duration }));
    } else {
      setTimeout(tryGetDuration, 300);
    }
  };
  tryGetDuration();
};

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!audioRef.current) return;
    audioRef.current.currentTime = val;
    setAudioState((prev) => ({ ...prev, currentTime: val }));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setAudioState((prev) => ({ ...prev, volume: val, isMuted: val === 0 }));
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || !isFinite(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progress = audioState.duration
    ? (audioState.currentTime / audioState.duration) * 100
    : 0;

  const volPct = (audioState.isMuted ? 0 : audioState.volume) * 100;

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{
          background: "rgba(15,7,35,0.95)",
          border: "1px solid rgba(139,92,246,0.18)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,246,0.7), rgba(236,72,153,0.5), transparent)",
          }}
        />

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 xl:gap-12 p-8 xl:p-12">
          {/* VINYL DISK */}
          <div className="relative shrink-0 flex items-center justify-center select-none">
            <div
              className="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, rgba(139,92,246,0.08), transparent 60%)",
                boxShadow: "0 0 0 1px rgba(139,92,246,0.1)",
              }}
            >
              {/* Record */}
              <div
                className={`relative w-56 h-56 lg:w-68 lg:h-68 xl:w-76 xl:h-76 rounded-full flex items-center justify-center ${audioState.isPlaying ? "animate-spin" : ""}`}
                style={{
                  width: "calc(100% - 16px)",
                  height: "calc(100% - 16px)",
                  background:
                      "radial-gradient(circle, #2c2b6e 0%, #1b1a6b 60%, #000000 100%)",

                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.03)",
                  animationDuration: "3s",
                  animationTimingFunction: "linear",
                }}
              >
                {/* Grooves */}
                {[22, 40, 58, 76, 94, 112].map((r) => (
                  <div
                    key={r}
                    className="absolute rounded-full"
                    style={{
                      inset: `${r}px`,
                      border: "1px solid rgba(255,255,255,0.025)",
                    }}
                  />
                ))}

                {/* Sheen */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
                  }}
                />

                {/* Center label */}
                <div
                  className="relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center z-10"
                  style={{
                    background: "#0d0628",
                    boxShadow: "0 0 0 2px rgba(139,92,246,0.3)",
                  }}
                >
                  <ImageWithFallback
                    src={IMAGEN_DISCO_CENTRO}
                    alt="Etiqueta central"
                    fallbackIcon={Music}
                    fallbackText="Arte"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  {/* Spindle */}
                  <div
                    className="relative z-10 w-3 h-3 rounded-full"
                    style={{
                      background: "#050110",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.15)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Tonearm */}
            <div className="absolute top-2 right-2 w-24 h-40 pointer-events-none z-20">
              <div
                className="absolute right-1 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(20,10,45,0.9)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: audioState.isPlaying
                      ? "#a855f7"
                      : "rgba(139,92,246,0.4)",
                    transition: "background 0.5s",
                    boxShadow: audioState.isPlaying
                      ? "0 0 8px #a855f7"
                      : "none",
                  }}
                />
              </div>
              <div
                className="absolute right-[15px] top-[15px] origin-[6px_6px] transition-transform duration-700 ease-in-out"
                style={{
                  transform: audioState.isPlaying
                    ? "rotate(5deg)"
                    : "rotate(-12deg)",
                  width: 12,
                  height: 120,
                }}
              >
                <div
                  className="w-[2px] h-[100px] mx-auto rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(200,200,220,0.7), rgba(160,160,180,0.5))",
                  }}
                />
                <div
                  className="w-[2px] h-5 mx-auto rounded-sm"
                  style={{
                    background: "rgba(180,180,200,0.5)",
                    transform: "rotate(12deg) translateX(-2px)",
                    transformOrigin: "top",
                    marginTop: -2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex-1 flex flex-col justify-between gap-6 w-full">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: audioState.isPlaying
                      ? "#a855f7"
                      : "rgba(139,92,246,0.4)",
                    transition: "background 0.4s",
                    boxShadow: audioState.isPlaying ? "0 0 8px #a855f7" : "none",
                  }}
                />
                {episodeNumber}
              </span>

              <h2
                className="mt-2 font-mono font-bold tracking-wide uppercase leading-tight"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                {episodeTitle}
              </h2>

              <p
                className="mt-1.5 text-sm font-mono truncate"
                style={{ color: "rgba(139,92,246,0.5)" }}
              >
                {audioState.audioUrl
                  ? audioState.audioName
                  : "Asigna AUDIO_FILE_PATH para reproducir"}
              </p>
            </div>

            {/* Visualizer */}
            <div
              className="w-full rounded-xl flex items-center px-4 overflow-hidden gap-[2px]"
              style={{
                height: "clamp(48px, 6vh, 72px)",
                background: "rgba(5,2,15,0.7)",
                border: "1px solid rgba(139,92,246,0.1)",
              }}
            >
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}px`,
                    background: audioState.isPlaying
                      ? `rgba(168,85,247,${0.35 + (h / 34) * 0.65})`
                      : "rgba(139,92,246,0.12)",
                    transitionDuration: "110ms",
                  }}
                />
              ))}
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div
                className="relative h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(139,92,246,0.12)" }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                    transition: "width 0.2s",
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max={audioState.duration || 100}
                  value={audioState.currentTime}
                  onChange={handleSeekChange}
                  disabled={!audioState.audioUrl}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-default"
                />
              </div>
              <div
                className="flex justify-between text-xs font-mono"
                style={{ color: "rgba(139,92,246,0.5)" }}
              >
                <span>{formatTime(audioState.currentTime)}</span>
                <span>{formatTime(audioState.duration)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={togglePlay}
                disabled={!audioState.audioUrl}
                className="flex items-center gap-3 disabled:opacity-40 transition-all active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(109,40,217,0.25))",
                  border: "1px solid rgba(139,92,246,0.35)",
                  borderRadius: 14,
                  padding: "12px 24px",
                  cursor: audioState.audioUrl ? "pointer" : "default",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.25)" }}
                >
                  {audioState.isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white translate-x-0.5" />
                  )}
                </div>
                <span
                  className="text-sm font-mono font-bold tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {audioState.isPlaying ? "Pausar" : "Reproducir"}
                </span>
              </button>

              {/* Volume */}
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-full"
                style={{
                  background: "rgba(5,2,15,0.6)",
                  border: "1px solid rgba(139,92,246,0.12)",
                }}
              >
                <button
                  onClick={() =>
                    setAudioState((p) => ({ ...p, isMuted: !p.isMuted }))
                  }
                  style={{ color: "rgba(139,92,246,0.7)" }}
                >
                  {audioState.isMuted || audioState.volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <div
                  className="relative w-20 h-[3px] rounded-full"
                  style={{ background: "rgba(139,92,246,0.15)" }}
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${volPct}%`,
                      background: "rgba(168,85,247,0.7)",
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={audioState.isMuted ? 0 : audioState.volume}
                    onChange={handleVolumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(236,72,153,0.25), transparent)",
          }}
        />
      </div>

{audioState.audioUrl && (
<audio
  ref={audioRef}
  src={audioState.audioUrl}
  onTimeUpdate={handleTimeUpdate}
  onLoadedMetadata={handleLoadedMetadata}
  onDurationChange={handleLoadedMetadata}
onCanPlay={handleLoadedMetadata}
onLoadedData={handleLoadedMetadata}
  onEnded={() => setAudioState((p) => ({ ...p, isPlaying: false }))}
  preload="auto"
/>
)}
    </div>
  );
}

// ==========================================
// PHILOSOPHER CARD
// ==========================================
interface PhilosopherCardProps {
  name: string;
  accent: string;
  dotColor: string;
  imgSrc: string;
  imgAlt: string;
  fallbackIcon: React.ComponentType<{ className?: string; size?: number }>;
  text: string;
}

const PhilosopherCard: React.FC<PhilosopherCardProps> = ({
  name,
  accent,
  dotColor,
  imgSrc,
  imgAlt,
  fallbackIcon,
  text,
}) => (
  <div
    className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-10 p-8 sm:p-10 xl:p-12 group transition-all duration-300"
    style={{
      background: "rgba(12,5,30,0.85)",
      border: "1px solid rgba(139,92,246,0.12)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}35`;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor =
        "rgba(139,92,246,0.12)";
    }}
  >
    {/* Ambient glow */}
    <div
      className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
      style={{ background: `${accent}07`, filter: "blur(50px)" }}
    />

    {/* Portrait */}
    <div
      className="w-36 h-48 lg:w-44 lg:h-56 xl:w-52 xl:h-64 rounded-2xl overflow-hidden shrink-0 relative select-none"
      style={{
        border: `1px solid ${accent}22`,
        background: "rgba(8,3,20,0.8)",
      }}
    >
      <ImageWithFallback
        src={imgSrc}
        alt={imgAlt}
        fallbackIcon={fallbackIcon}
        fallbackText={name}
        className="w-full h-full object-cover filter saturate-0 contrast-110 brightness-90 transition-all duration-500 group-hover:brightness-100 group-hover:saturate-50"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${accent}20, transparent 60%)`,
        }}
      />
    </div>

    {/* Content */}
    <div className="flex-1 space-y-5">
      <div className="space-y-1.5">
        <span
          className="text-sm font-mono tracking-[0.18em] uppercase"
          style={{ color: accent, opacity: 0.75 }}
        >
        </span>
        <div className="flex items-center gap-2.5 mt-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: dotColor,
              boxShadow: `0 0 12px ${dotColor}`,
            }}
          />
          <h3
            className="font-mono font-bold uppercase tracking-wider"
            style={{ color: accent, fontSize: "clamp(20px, 1.8vw, 26px)" }}
          >
            {name}
          </h3>
        </div>
      </div>

      <div
        className="w-16 h-px rounded-full"
        style={{ background: `${accent}45` }}
      />

      {/* DESCRIPCIÓN con fuente normal y tamaño legible */}
      <p
        className="text-justify"
        style={{
          color: "rgba(220, 205, 245, 0.88)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "clamp(15px, 1.1vw, 17px)",
          fontWeight: 400,
          lineHeight: 1.75,
        }}
      >
        {text}
      </p>
    </div>
  </div>
);

// ==========================================
// NAV DOTS
// ==========================================
const slides = [
  { id: "slide-hero", name: "hero", label: "Inicio" },
  { id: "slide-player", name: "player", label: "Reproductor" },
  { id: "slide-dilemma", name: "dilemma", label: "Caso" },
  { id: "slide-contrast", name: "contrast", label: "Contraste" },
];

// ==========================================
// MAIN PAGE
// ==========================================
export default function PodcastPage() {
  const [episodeTitle] = useState(
    "Uso de inteligencia artificial para contratar personal"
  );
  const [activeSlide, setActiveSlide] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const map: Record<string, string> = {
              "slide-hero": "hero",
              "slide-player": "player",
              "slide-dilemma": "dilemma",
              "slide-contrast": "contrast",
            };
            if (map[e.target.id]) setActiveSlide(map[e.target.id]);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    slides.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string, name: string) => {
    setActiveSlide(name);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="scroll-container"
      className="min-h-screen md:h-screen w-full md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth relative selection:bg-purple-800 selection:text-white"
      style={{ background: "#0a0318", color: "#e2d9f3" }}
    >
      {/* ========== BOTÓN DE RETROCESO ========== */}
      <Link href="/#podcast" className="fixed top-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all user-select-none bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-105">
        <ArrowLeft />
      </Link>

      {/* Global ambient glows */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "5%",
          left: "10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.055)",
          filter: "blur(130px)",
          zIndex: 0,
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "10%",
          right: "5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(236,72,153,0.035)",
          filter: "blur(110px)",
          zIndex: 0,
        }}
      />

      {/* Side navigation dots */}
      <div className="hidden sm:flex fixed right-7 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 select-none">
        {slides.map((s) => (
          <button
            key={s.id}
            onClick={() => goTo(s.id, s.name)}
            className="group flex items-center justify-end gap-2 focus:outline-none"
            title={s.label}
          >
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded-md"
              style={{
                color: "rgba(200,180,230,0.8)",
                background: "rgba(10,3,25,0.85)",
                border: "1px solid rgba(139,92,246,0.22)",
              }}
            >
              {s.label}
            </span>
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: activeSlide === s.name ? 10 : 7,
                height: activeSlide === s.name ? 10 : 7,
                background:
                  activeSlide === s.name
                    ? "#a855f7"
                    : "rgba(139,92,246,0.28)",
                boxShadow:
                  activeSlide === s.name ? "0 0 10px #a855f7" : "none",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── SLIDE 1: HERO ─────────────────────────────────── */}
      <div
        id="slide-hero"
        className="w-full min-h-screen md:h-screen md:snap-start flex flex-col justify-center relative z-10 overflow-hidden"
        style={{ padding: "clamp(28px, 5vw, 96px)" }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono tracking-widest uppercase select-none"
              style={{
                background: "rgba(139,92,246,0.09)",
                border: "1px solid rgba(139,92,246,0.22)",
                color: "rgba(196,168,255,0.85)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#ec4899" }}
              />
              Episodio actual
            </div>

            <div className="space-y-5">
              <h1
                className="font-mono font-black uppercase leading-none tracking-tight"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  color: "rgba(255,255,255,0.97)",
                }}
              >
                Código
                <br />
                <span style={{ color: "rgba(168,85,247,0.92)" }}>Ciego</span>{" "}
                y
                <br />
                dilemas éticos
              </h1>

              {/* Accent bar */}
              <div className="flex items-center gap-3">
                <div
                  className="h-px flex-1 max-w-[90px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #7c3aed, transparent)",
                  }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#ec4899" }}
                />
              </div>
            </div>

            {/* Descripción hero con fuente normal */}
            <p
              style={{
                color: "rgba(210,190,240,0.78)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "clamp(15px, 1.15vw, 18px)",
                lineHeight: 1.75,
                maxWidth: "520px",
                fontWeight: 400,
              }}
            >
              Exploramos un caso de inteligencia artificial que optimiza la contratación 
              de personal, pero discrimina a ciertos postulantes. 
              ¿Debe prevalecer la eficiencia empresarial 
              o la responsabilidad ética del profesional?
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => goTo("slide-player", "player")}
                className="flex items-center gap-2.5 active:scale-95 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  borderRadius: 14,
                  padding: "clamp(12px, 1.2vw, 16px) clamp(20px, 2vw, 30px)",
                  color: "rgba(255,255,255,0.96)",
                  fontFamily: "monospace",
                  fontSize: "clamp(11px, 0.85vw, 13px)",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.38)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Play className="w-4 h-4 fill-white" />
                Escuchar episodio
              </button>

              <button
                type="button"
                onClick={() => goTo("slide-dilemma", "dilemma")}
                className="active:scale-95 transition-all"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(139,92,246,0.32)",
                  borderRadius: 14,
                  padding: "clamp(12px, 1.2vw, 16px) clamp(20px, 2vw, 30px)",
                  color: "rgba(196,168,255,0.88)",
                  fontFamily: "monospace",
                  fontSize: "clamp(11px, 0.85vw, 13px)",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Ver caso analizado
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex items-center gap-8 xl:gap-10 pt-2"
              style={{
                borderTop: "1px solid rgba(139,92,246,0.12)",
                paddingTop: 24,
              }}
            >
              {[
                { label: "Episodio", value: "01" },
                { label: "Perspectivas", value: "02" },
                { label: "Dilemas", value: "03+" },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div
                    className="font-mono font-bold"
                    style={{
                      fontSize: "clamp(20px, 2vw, 28px)",
                      color: "rgba(168,85,247,0.92)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: "rgba(139,92,246,0.52)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cover image */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div
              className="relative w-full max-w-sm xl:max-w-md overflow-hidden rounded-[28px]"
              style={{
                border: "none",
                background: "rgba(10,3,25,0.6)",
                aspectRatio: "3/4",
              }}
            >
              <ImageWithFallback
                src={IMAGEN_LADY_JUSTICE}
                alt="Estatua de la Justicia"
                fallbackIcon={Scale}
                fallbackText="Portada"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(10,3,25,0.85) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
              >
                <div
                  className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
                  style={{ color: "rgba(168,85,247,0.65)" }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}

      </div>

      {/* ── SLIDE 2: PLAYER ───────────────────────────────── */}
      <div
        id="slide-player"
        className="w-full min-h-screen md:h-screen md:snap-start flex flex-col justify-center relative z-10 overflow-hidden"
        style={{
          padding: "clamp(28px, 5vw, 96px)",
          background: "rgba(8,2,22,0.6)",
          borderTop: "1px solid rgba(139,92,246,0.07)",
        }}
      >
        <div className="max-w-5xl xl:max-w-6xl mx-auto w-full space-y-8">
          <div className="space-y-1.5">
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase"
              style={{ color: "rgba(139,92,246,0.52)" }}
            >
              Ahora reproduciendo
            </span>
            <h2
              className="font-mono font-black uppercase tracking-wide"
              style={{
                fontSize: "clamp(22px, 3vw, 38px)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Código Ciego
            </h2>
          </div>

          <VinylPlayer
            episodeNumber="Episodio 01"
            episodeTitle={episodeTitle}
          />
        </div>
      </div>

      {/* ── SLIDE 3: CASE ─────────────────────────────────── */}
      <div
        id="slide-dilemma"
        className="w-full min-h-screen md:h-screen md:snap-start flex flex-col justify-center relative z-10 overflow-hidden"
        style={{
          padding: "clamp(28px, 5vw, 96px)",
          borderTop: "1px solid rgba(139,92,246,0.07)",
        }}
      >
        <div className="max-w-5xl xl:max-w-6xl mx-auto w-full space-y-8">
          <div className="space-y-1.5">
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase"
              style={{ color: "rgba(236,72,153,0.65)" }}
            >
              Caso destacado
            </span>
            <h2
              className="font-mono font-black uppercase tracking-wide"
              style={{
                fontSize: "clamp(22px, 3vw, 38px)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              El dilema analizado
            </h2>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(12,5,30,0.88)",
              border: "1px solid rgba(139,92,246,0.14)",
            }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-8 bottom-8 w-[1.5px]"
              style={{
                background:
                  "linear-gradient(180deg, transparent, #7c3aed, #ec4899, transparent)",
              }}
            />

            <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-12 p-8 sm:p-12 xl:p-14">
              {/* Image circle */}
              <div
                className="relative w-56 h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shrink-0 select-none"
                style={{
                  border: "1px solid rgba(139,92,246,0.22)",
                  background: "rgba(8,3,20,0.8)",
                }}
              >
                <ImageWithFallback
                  src={IMAGEN_CROSSROADS}
                  alt="Encrucijada corporativa"
                  fallbackIcon={Compass}
                  fallbackText="Dilema"
                  className="w-full h-full object-cover filter brightness-80 contrast-110"
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, transparent 40%, rgba(12,5,30,0.7) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <p
                  className="font-mono font-bold uppercase tracking-wide leading-snug"
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 24px)",
                    color: "rgba(255,255,255,0.93)",
                  }}
                >
                 ¿Debe un profesional de Ingeniería Empresarial y de Sistemas implementar una inteligencia artificial que mejora la eficiencia en la contratación, aun cuando discrimina a ciertos postulantes?{" "}
                </p>

                <div
                  className="w-16 h-px rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #7c3aed, #ec4899)",
                  }}
                />

                {/* Descripción del dilema con fuente normal */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDE 4: CONTRAST ─────────────────────────────── */}
      <div
        id="slide-contrast"
        className="w-full min-h-screen md:h-screen md:snap-start flex flex-col justify-center relative z-10 overflow-hidden"
        style={{
          padding: "clamp(28px, 5vw, 96px)",
          background: "rgba(6,2,18,0.5)",
          borderTop: "1px solid rgba(139,92,246,0.07)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full space-y-6">
          <div className="text-center space-y-1">
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase"
              style={{ color: "rgba(139,92,246,0.52)" }}
            >
              Fundamentos filosóficos
            </span>
            <h2
              className="font-mono font-black uppercase tracking-wide"
              style={{
                fontSize: "clamp(28px, 3.5vw, 52px)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Contraste{" "}
              <span style={{ color: "rgba(168,85,247,0.92)" }}>teórico</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-7">
            <PhilosopherCard
              name="Kant"
              accent="#a855f7"
              dotColor="#a855f7"
              imgSrc={IMAGEN_KANT}
              imgAlt="Immanuel Kant"
              fallbackIcon={FileText}
              text="El profesional debe rechazar la implementación del sistema porque discrimina personas injustamente. La igualdad y el respeto a la dignidad humana son principios que deben cumplirse siempre, independientemente de los beneficios económicos obtenidos."
            />

            <PhilosopherCard
              name="Mill"
              accent="#ec4899"
              dotColor="#ec4899"
              imgSrc={IMAGEN_MILL}
              imgAlt="John Stuart Mill"
              fallbackIcon={Award}
              text="La decisión debe evaluarse según sus consecuencias. Si la inteligencia artificial genera beneficios para la empresa y para la mayoría de trabajadores, podría justificarse su uso, siempre considerando si esos beneficios superan el daño causado a los postulantes afectados."
            />
          </div>
        </div>
      </div>
    </div>
  );
}