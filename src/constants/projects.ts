import AngularIcon from '@/components/icons/technologies/Angular.astro';
import AstroIcon from '@/components/icons/technologies/AstroIcon.astro';
import TypescriptIcon from '@/components/icons/technologies/Typescript.astro';
import JavascriptIcon from '@/components/icons/technologies/Javascript.astro';
import ReactIcon from '@/components/icons/technologies/React.astro';
import NextJSIcon from '@/components/icons/technologies/Next.js.astro';
import LaravelIcon from '@/components/icons/technologies/Laravel.astro';
import PythonIcon from '@/components/icons/technologies/Python.astro';
import TailwindIcon from '@/components/icons/technologies/Tailwind.astro';
import type { Project, Tag } from '@/types/Project';
import pictopeerImage from '../assets/pictopeer.webp';
import portfolioImage from '../assets/astro.webp';

const TAGS: Record<string, Tag> = {
  ANGULAR: {
    name: 'Angular',
    className: 'dark:bg-[#DD003160] bg-[#DD003133] text-[#DD0031]',
    icon: AngularIcon,
  },
  ASTRO: {
    name: 'Astro',
    className: 'dark:bg-[#1E1B4460] bg-[#1E1B4433] text-[#1E1B44]',
    icon: AstroIcon,
  },
  TYPESCRIPT: {
    name: 'Typescript',
    className: 'dark:bg-[#3178C660] bg-[#3178C633] text-[#3178C6]',
    icon: TypescriptIcon,
  },
  JAVASCRIPT: {
    name: 'Javascript',
    className: 'dark:bg-[#F7DF1E0] bg-[#F7DF1E33] text-[#F7DF1E]',
    icon: JavascriptIcon,
  },
  REACT: {
    name: 'React',
    className: 'dark:bg-[#149ECA60] bg-[#149ECA33] text-[#149ECA]',
    icon: ReactIcon,
  },
  NEXTJS: {
    name: 'Next.js',
    className: 'dark:bg-[#00000060] bg-[#00000033] text-[#000000]',
    icon: NextJSIcon,
  },
  LARAVEL: {
    name: 'Laravel',
    className: 'dark:bg-[#FF2D2060] bg-[#FF2D2033] text-[#FF2D20]',
    icon: LaravelIcon,
  },
  PYTHON: {
    name: 'Python',
    className: 'dark:bg-[#5A9FD460] bg-[#5A9FD433] text-[#5A9FD4]',
    icon: PythonIcon,
  },
  TAILWIND: {
    name: 'Tailwind',
    className: 'dark:bg-[#38BDF860] bg-[#38BDF833] text-[#38BDF8]',
    icon: TailwindIcon,
  },
} as const;

const PROJECTS: Project[] = [
  {
    name: 'Pictopeer',
    description: `Una red social para publicar y compartir imágenes, 
                  con características basadas en Instagram como el feed 
                  o el algoritmo de sugerencias de amistad y publicaciones.`,
    picture: pictopeerImage,
    tags: [TAGS.ANGULAR, TAGS.LARAVEL],
    source: 'https://github.com/MarioMS90/Pictopeer',
  },
  {
    name: 'Portfolio',
    description: `Un template de portfolio personal para mostrar proyectos, 
                  habilidades y experiencia laboral, creado con Astro y Tailwind CSS.`,
    picture: portfolioImage,
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    source: 'https://github.com/MarioMS90/portfolio',
  },
  /* {
    name: 'Proyecto 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: pictopeerImage,
    tags: [TAGS.NEXTJS, TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    demo: '/',
    source: 'https://github.com/MarioMS90/Pictopeer',
  },
  {
    name: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: pictopeerImage,
    tags: [TAGS.PYTHON, TAGS.ASTRO],
    demo: '/',
    source: 'https://github.com/MarioMS90/Pictopeer',
  }, */
] as const;

export default PROJECTS;
