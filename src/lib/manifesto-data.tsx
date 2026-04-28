import React from 'react';
import { HeartHandshake, Scaling, Goal, ShieldCheck, GitCompareArrows } from "lucide-react";

// Data only - no components that need the client
export const vulnerablePopulations = ["Personas sin acceso a tecnología", "Pequeños emprendedores", "Adultos mayores", "Usuarios de datos personales"];

export type ManifestoItem = {
  id: string;
  title: string;
  description: string;
};

export const manifestoItems: ManifestoItem[] = [
  {
    id: "metafora",
    title: "Metáfora Artística",
    description: "El Puente Q’eswachaka como símbolo de conexión y responsabilidad social en nuestra carrera.",
  },
  {
    id: "proposito",
    title: "Propósito Profesional",
    description: "Nuestro telos, areté y eudaimonía: la búsqueda de la excelencia con impacto positivo.",
  },
  {
    id: "poblaciones",
    title: "Poblaciones Vulnerables",
    description: "Nuestro compromiso de proteger a quienes son más susceptibles a la brecha digital.",
  },
  {
    id: "valores",
    title: "Jerarquía de Valores",
    description: "Nuestra brújula moral, basada en la filosofía de Scheler, para priorizar nuestras acciones.",
  },
  {
    id: "mapa",
    title: "Mapa Crítico",
    description: "Un análisis de los códigos deontológicos existentes y nuestra propuesta de mejora.",
  },
];
