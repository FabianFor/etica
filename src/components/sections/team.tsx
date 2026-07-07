import { Linkedin, User } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    firstName: "Elizabeth Yanina",
    lastName: "Muñico Marquiño",
    career: "Contabilidad y Finanzas",
    bio: "Estudiante de Contabilidad y Finanzas interesada en la gestión transparente y responsable de los recursos. Su enfoque ético se centra en la integridad financiera y el impacto social sostenible..",
    linkedinUrl: "https://www.linkedin.com/in/elizabeth-yanina-muñico-marquiño-412957403",
    imageUrl: PlaceHolderImages.find(img => img.id === 'team-1')?.imageUrl || '',
  },
  {
    firstName: "Fabian Hector",
    lastName: "Huaytalla Guevara",
    career: "Ingenieria Empresarial y Sistemas",
    bio: "Estudiante de Ingeniería Empresarial y de Sistemas orientado a la innovación tecnológica con responsabilidad social. Aporta pensamiento estratégico y compromiso ético en la toma de decisiones.",
    linkedinUrl: "https://www.linkedin.com/in/fabian-hector-huaytalla-guevara-98a2b7405",
    imageUrl: PlaceHolderImages.find(img => img.id === 'team-2')?.imageUrl || '',
  },
  {
    firstName: "Marcelo Carlos",
    lastName: "Huaytalla Guevara",
    career: "Ingenieria Empresarial y Sistemas",
    bio: "Interesado en la optimización de procesos y transformación digital con enfoque humano. Promueve soluciones eficientes alineadas con principios de justicia y sostenibilidad.",
    linkedinUrl: "https://www.linkedin.com/in/huaytalla-guevara-marcelo-carlos-a276823ba",
    imageUrl: PlaceHolderImages.find(img => img.id === 'team-3')?.imageUrl || '',
  },
  {
    firstName: "Luis Angel",
    lastName: "Carbajal Torre",
    career: "Ingenieria Empresarial y Sistemas",
    bio: "Enfocado en el desarrollo de sistemas que generen impacto positivo en organizaciones y comunidades. Su motivación ética prioriza inclusión, responsabilidad y mejora continua.",
    linkedinUrl: "https://www.linkedin.com/in/luis-angel-carbajal-torre-61592a20a",
    imageUrl: PlaceHolderImages.find(img => img.id === 'team-4')?.imageUrl || '',
  },
  {
    firstName: "Rogelio",
    lastName: "Herrera Enciso",
    career: "Ingenieria Empresarial y Sistemas",
    bio: "Interesado en la gestión tecnológica aplicada al desarrollo empresarial responsable. Aporta visión analítica y compromiso con decisiones éticas orientadas al bien común.",
    linkedinUrl: "#",
    imageUrl: PlaceHolderImages.find(img => img.id === 'team-5')?.imageUrl || '',
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="min-h-screen w-full bg-background px-5 md:px-20 py-24 flex flex-col items-center justify-center border-t border-white/10">
      <div className="container mx-auto">
        <SectionHeader
          tag="Quiénes somos"
          title="Nuestro Equipo"
          subtitle="Conoce a los estudiantes detrás de este proyecto, unidos por un compromiso con la ética profesional."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col text-center items-center bg-card p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 shadow-inner bg-muted">
                {member.imageUrl ? (
                    <Image
                    src={member.imageUrl}
                    alt={`Foto del estudiante ${member.firstName} ${member.lastName}`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    data-ai-hint="student portrait"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                         <User className="w-16 h-16 text-muted-foreground" />
                    </div>
                )}
              </div>
              <h3 className="font-headline text-xl text-primary">
                <span className="block">{member.firstName}</span>
                <span className="block">{member.lastName}</span>
              </h3>
              <p className="font-body text-xs text-primary uppercase font-semibold tracking-wider mt-2">{member.career}</p>
              <p className="font-body text-sm text-muted-foreground mt-3 text-justify" style={{minHeight: '40px'}}>{member.bio}</p>
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button variant="outline" size="icon" className="bg-linkedin text-white hover:bg-linkedin/90 border-transparent hover:border-transparent rounded-full">
                  <span className='sr-only'>Perfil de LinkedIn de {member.firstName} {member.lastName}</span>
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
