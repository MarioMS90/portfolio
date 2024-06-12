import GithubIcon from '@/components/icons/Github.astro';
import LinkedinIcon from '@/components/icons/Linkedin.astro';
import EmailIcon from '@/components/icons/Email.astro';
import type { SocialButton } from '@/types/SocialButton';

const SOCIAL_BUTTONS: SocialButton[] = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/MarioMS90',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/mario-m-5903a4a6/',
  },
  {
    name: 'Email',
    icon: EmailIcon,
    url: 'mailto:j.mario.msx@gmail.com',
    iconClass: 'size-[1.2rem]',
  },
] as const;

export default SOCIAL_BUTTONS;
