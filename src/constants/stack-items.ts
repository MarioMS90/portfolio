import TypescriptIcon from '@/components/icons/technologies/Typescript.astro';
import JavascriptIcon from '@/components/icons/technologies/Javascript.astro';
import PythonIcon from '@/components/icons/technologies/Python.astro';
import PhpIcon from '@/components/icons/technologies/PHP.astro';
import HtmlIcon from '@/components/icons/technologies/HTML.astro';
import CssIcon from '@/components/icons/technologies/CSS.astro';
import NextJSIcon from '@/components/icons/technologies/Next.js.astro';
import ReactIcon from '@/components/icons/technologies/React.astro';
import AngularIcon from '@/components/icons/technologies/Angular.astro';
import NestJSIcon from '@/components/icons/technologies/NestJS.astro';
import AstroIcon from '@/components/icons/technologies/AstroIcon.astro';
import FlaskIcon from '@/components/icons/technologies/Flask.astro';
import LaravelIcon from '@/components/icons/technologies/Laravel.astro';
import TailwindIcon from '@/components/icons/technologies/Tailwind.astro';
import SupabaseIcon from '@/components/icons/technologies/Supabase.astro';
import FigmaIcon from '@/components/icons/technologies/Figma.astro';
import NetlifyIcon from '@/components/icons/technologies/Netlify.astro';
import type { Stack } from '@/types/stack';

const STACK: Record<string, Stack[]> = {
  LANGUAGES: [
    { name: 'Typescript', icon: TypescriptIcon },
    { name: 'Javascript', icon: JavascriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'PHP', icon: PhpIcon },
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
  ],
  FRAMEWORKS: [
    { name: 'Next.js', icon: NextJSIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Angular', icon: AngularIcon },
    { name: 'NestJS', icon: NestJSIcon },
    { name: 'Astro', icon: AstroIcon },
    { name: 'Flask', icon: FlaskIcon },
    { name: 'Laravel', icon: LaravelIcon },
  ],
  TOOLS: [
    {
      name: 'Tailwind',
      icon: TailwindIcon,
    },
    {
      name: 'Supabase',
      icon: SupabaseIcon,
    },
    {
      name: 'Figma',
      icon: FigmaIcon,
    },
    {
      name: 'Netlify',
      icon: NetlifyIcon,
    },
  ],
} as const;

export default STACK;
