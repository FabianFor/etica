import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PodcastSection() {
  return (
    <section id="podcast" className="min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col items-center justify-center border-t border-white/10">
      <div className="container mx-auto">
        <SectionHeader
          tag="Análisis Auditivo"
          title="Episodio de Podcast"
          subtitle="Exploramos un complejo dilema ético a través del diálogo, confrontando dos de las corrientes filosóficas más influyentes."
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Podcast Player */}
          <div className="w-full">
            <div className="bg-primary text-primary-foreground rounded-t-lg p-4 flex items-center gap-4">
              <Mic className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Episodio 1: El Dilema de [Nombre del Caso]</p>
                <p className="text-xs opacity-80">Brújula Ética Podcast</p>
              </div>
            </div>
            <div className="border border-dashed border-t-0 rounded-b-lg p-8 text-center bg-card/50">
              <p className="font-body text-muted-foreground mb-4">
                [Área para el reproductor de podcast embebido]
              </p>
              <div className="w-full h-24 bg-muted/50 rounded-md flex items-center justify-center">
                <p className="font-semibold text-muted-foreground">[Embed Player Here]</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                <Badge className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30">Dilema Ético</Badge>
                <Badge className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30">Análisis Filosófico</Badge>
                <Badge className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30">Deontología</Badge>
              </div>
            </div>
          </div>

          {/* Dilemma and Analysis */}
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-headline text-xl font-semibold text-primary">El Dilema</h3>
              <p className="font-body italic text-muted-foreground mt-2 text-justify">
                "[Descripción concisa del dilema ético presentado en el podcast. Por ejemplo: ¿Debería un profesional revelar información confidencial de un cliente si cree que podría prevenir un daño mayor a terceros?]"
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-center">Perspectiva Kantiana</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground text-justify">
                    Análisis desde el imperativo categórico. El deber de no mentir o romper la confidencialidad es universal, sin importar las consecuencias.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg text-center">Perspectiva de Mill</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground text-justify">
                    Análisis utilitarista. La acción correcta es la que maximiza la felicidad o el bienestar general para el mayor número de personas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
