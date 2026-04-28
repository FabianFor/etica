"use client";

import { Button } from "@/components/ui/button";
import { Compass, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [shareUrl, setShareUrl] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setShareUrl(window.location.href);
  }, []);

  return (
    <footer className="bg-background text-muted-foreground border-t border-white/10">
      <div className="container mx-auto px-5 md:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-headline font-bold text-lg leading-tight text-foreground">Horizonte Ético</h3>
                <p className="text-xs font-body">Portafolio Digital · HUM-010</p>
              </div>
            </Link>
            <p className="mt-4 text-sm max-w-xs text-balance">
              Un proyecto de reflexión y aplicación de la ética profesional.
            </p>
          </div>
          
          <div className="text-sm">
            <h4 className="font-headline font-semibold tracking-wider uppercase text-foreground/80 mb-4">Metadatos</h4>
            <div className="space-y-2 font-body">
              <p><strong>Curso:</strong> Ética y Deontología Profesional</p>
              <p><strong>Institución:</strong> Universidad Científica del Sur</p>
              <p><strong>Semestre:</strong> 2026-I</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <h4 className="font-headline font-semibold tracking-wider uppercase text-foreground/80 mb-4">Compartir</h4>
             {isMounted && (
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-linkedin text-white hover:bg-linkedin/90" disabled={!shareUrl}>
                    <Linkedin className="mr-2 h-4 w-4" />
                    Compartir en LinkedIn
                  </Button>
                </a>
             )}
            <p className="text-xs text-muted-foreground/60 mt-4">© 2026 Equipo Horizonte Ético.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
