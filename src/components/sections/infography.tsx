import SectionHeader from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Map } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfographySection() {
  return (
    <section id="infografia" className="min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col items-center justify-center border-t border-white/10">
      <div className="container mx-auto">
        <SectionHeader
          tag="Síntesis Visual"
          title="Infografía Crítica"
          subtitle="Una representación visual de las capas de responsabilidad ética en nuestra profesión, desde el cuidado individual hasta el impacto ambiental."
        />
        <Card className="max-w-4xl mx-auto w-full shadow-lg overflow-hidden">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle className="font-headline text-2xl text-primary">Mapa de Responsabilidad Ética</CardTitle>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">Capa 1 · Cuidado</Badge>
                <Badge className="bg-eco-green text-white hover:bg-eco-green/90 border-transparent">Capa 2 · Ambiente</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-[16/7] w-full rounded-md flex items-center justify-center bg-gradient-to-br from-secondary/80 to-eco-green/80 text-white">
              <div className="text-center p-4">
                <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="font-body font-semibold text-lg">[Área para la infografía interactiva o imagen estática]</p>
                <p className="text-sm opacity-80 mt-1">Este mapa visualiza la interconexión de nuestras decisiones.</p>
              </div>
              <div className="absolute top-4 left-4 text-xs font-semibold p-2 bg-black/20 rounded-full backdrop-blur-sm">Capa 1</div>
              <div className="absolute bottom-4 right-4 text-xs font-semibold p-2 bg-black/20 rounded-full backdrop-blur-sm">Capa 2</div>
            </div>
          </CardContent>
          <CardFooter className="bg-background/50 grid md:grid-cols-2 gap-8 p-8">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-body text-primary text-sm font-bold tracking-wider uppercase">Capa 1 · Ética del Cuidado</p>
              <p className="font-body text-sm text-foreground/80 mt-2 text-justify">
                [Descripción del compromiso con la ética del cuidado, centrada en el bienestar, la autonomía y la dignidad de las personas.]
              </p>
              <p className="font-body text-xs font-semibold text-primary/80 mt-3">Compromiso: [Acción específica]</p>
            </div>
            <div className="border-l-4 border-eco-green pl-4">
              <p className="font-body text-eco-green text-sm font-bold tracking-wider uppercase">Capa 2 · Ecoética</p>
              <p className="font-body text-sm text-foreground/80 mt-2 text-justify">
                [Descripción del compromiso con la ecoética, abordando la responsabilidad de nuestras prácticas profesionales sobre el medio ambiente.]
              </p>
              <p className="font-body text-xs font-semibold text-eco-green/80 mt-3">Compromiso: [Acción específica]</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
