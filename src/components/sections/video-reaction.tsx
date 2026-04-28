import SectionHeader from "@/components/ui/section-header";
import { Play, Film } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const analysisItems = [
    { label: "Contexto del Caso", description: "Breve descripción del video o situación analizada, estableciendo el escenario para el dilema ético." },
    { label: "Identificación de Actores y Valores", description: "Quiénes son los implicados y qué valores (autonomía, justicia, etc.) están en conflicto." },
    { label: "Aplicación del Código Deontológico", description: "Cómo los artículos específicos del código profesional se aplican (o no) a esta situación." },
    { label: "Resolución y Reflexión Personal", description: "La conclusión a la que llega el equipo y una reflexión sobre el aprendizaje obtenido del análisis." },
];

export default function VideoReactionSection() {
    const videoPlaceholder = PlaceHolderImages.find(p => p.id === 'video-placeholder');
  return (
    <section id="video-reaccion" className="min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col items-center justify-center border-t border-white/10">
      <div className="container mx-auto">
        <SectionHeader
          tag="Análisis de Caso"
          title="Video-Reacción"
          subtitle="Desglosamos un caso práctico en formato de video para examinar sus implicaciones éticas y aplicar nuestro marco de análisis."
        />
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Video Player */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg group bg-primary">
              {videoPlaceholder ? (
                 <Image
                    src={videoPlaceholder.imageUrl}
                    alt={videoPlaceholder.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={videoPlaceholder.imageHint}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Film className="w-24 h-24 text-primary-foreground/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                  <Play className="w-10 h-10 ml-1" />
                  <span className="sr-only">Reproducir video</span>
                </button>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground font-body">
              <p><strong>Título del Video:</strong> [Título del material audiovisual]</p>
              <p><strong>Fuente:</strong> [Plataforma, autor o contexto del video]</p>
            </div>
          </div>

          {/* Analysis */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-2xl text-primary mb-6">Puntos de Análisis</h3>
            <div className="space-y-6">
                {analysisItems.map((item, index) => (
                    <div key={item.label}>
                        <div className="font-body">
                            <p className="text-sm font-bold text-accent uppercase tracking-wider">{item.label}</p>
                            <p className="text-foreground/80 mt-2 text-justify">{item.description}</p>
                        </div>
                        {index < analysisItems.length -1 && <Separator className="mt-6"/>}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
