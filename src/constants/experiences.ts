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
    description: `Comencé realizando tareas de maquetación, y durante 
                  mi trayectoria fui asumiendo desarrollos completos
                  tanto de frontend como de backend en un motor de 
                  reservas para establecimientos, desarrollos que a 
                  día de hoy se utilizan en numerosas cadenas 
                  hoteleras. 
                  <br /> <br />
                  Por último llegúe a tener mi primera experiencia 
                  como responsable de equipo.`,
  },
] as const;

export default EXPERIENCES;
