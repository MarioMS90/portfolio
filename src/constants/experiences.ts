import type { Experience } from '@/types/Experience';

const EXPERIENCES: Experience[] = [
  {
    title: 'Desarrollador freelancer',
    date: 'Marzo 2024 - Actualidad',
    description: `Desarrollo e implementación de aplicaciones web
                  completas con varias tecnologías y frameworks. 
                  <br /> <br /> Diseño de UI/UX.`,
  },
  {
    title: 'Frontend developer en Paraty Tech',
    date: 'Marzo 2021 - Marzo 2024',
    description: `Comencé realizando tareas de maquetación en un 
                  motor de reservas para establecimientos hoteleros, 
                  a medida que fui ganando experiencia fui asumiendo 
                  desarrollos más complejos, los cuales a día de hoy 
                  se utilizan en numerosas cadenas hoteleras.`,
  },
] as const;

export default EXPERIENCES;
