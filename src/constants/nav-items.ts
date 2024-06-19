import type { NavItem } from '@/types/NavItem';

const NAV_ITEMS: NavItem[] = [
  /* {
    title: 'Inicio',
    url: '/#hero',
    class: 'hidden md:block',
  }, */
  {
    title: 'Experiencia',
    url: '/#experience',
  },
  {
    title: 'Stack',
    url: '/#stack',
  },
  {
    title: 'Proyectos',
    url: '/#projects',
  },
  {
    title: 'Sobre mí',
    url: '/#about-me',
  },
  {
    title: 'Contacto',
    url: 'mailto:j.mario.msx@gmail.com',
    class: 'hidden md:block',
  },
] as const;

export default NAV_ITEMS;
