import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from "@/components/ui/section-header";

export default function InfographySection() {
  return (
    <section 
      id="infografia" 
      className="scroll-mt-20 relative overflow-hidden w-full bg-background px-5 py-20 md:py-24 flex flex-col justify-center items-center border-t border-white/10"
    >
      <div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 25px 55px, hsl(var(--foreground)) 0.5px, transparent 1.5px), radial-gradient(circle at 150px 150px, hsl(var(--foreground)) 0.5px, transparent 1.5px)', backgroundSize: '200px 200px', opacity: 0.1}}/>

      <div className="relative z-10 container mx-auto">
        <SectionHeader
          tag="Módulo IV · Semanas 13–15"
          title="Infografía
"
          subtitle="Dos representaciones visuales que abordan el cuidado de las personas vulnerables y la responsabilidad con las generaciones futuras.."
        />

        <div className="max-w-3xl mx-auto mt-12 px-4">
          <Link href="/infografia" className="block group">
            <div className="relative h-96 md:h-[28rem] rounded-2xl overflow-hidden border border-white/10 shadow-xl group-hover:border-emerald-500/50 transition-all duration-300">
              <Image
                src="/images/infografia-cosmica.jpg"
                alt="Infografía de Integridad y Sostenibilidad"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <p className="font-body text-emerald-400 font-semibold uppercase tracking-widest text-xs mb-3">SEMANA 13 & 14</p>
                <h3 className="font-headline text-3xl md:text-4xl text-white leading-tight">ÉTICA DEL CUIDADO Y ECOÉTICA DIGITAL</h3>
                <p className="mt-3 font-body text-white/80 text-sm md:text-base line-clamp-3">
                  Una representación visual de nuestro compromiso con la inclusión digital, la responsabilidad ética y el desarrollo sostenible desde la Ingeniería Empresarial y de Sistemas.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
