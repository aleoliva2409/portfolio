import {
  siNestjs,
  siReact,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import type { Lang } from '@/i18n/ui';

export interface Technology {
  name: string;
  icon?: SimpleIcon;
}

export interface Project {
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: Technology[];
  isPrivate?: boolean;
  illustration: 'chart' | 'globe';
  image?: string;
  platform?: string;
  codeUrl?: string;
  demoUrl?: string;
}

const REACT = { name: 'React', icon: siReact };
const NEST = { name: 'Nest JS', icon: siNestjs };
const TYPESCRIPT = { name: 'TypeScript', icon: siTypescript };

export const PROJECTS: Record<Lang, Project[]> = {
  es: [
    {
      title: 'Plataforma de inversiones',
      company: 'Banco Santander',
      period: '2025 – 2026',
      role: 'Full Stack Developer',
      description:
        'Plataforma de soporte para atención telefónica que permite operar compra y venta de acciones, bonos y CEDEARs.',
      technologies: [REACT, NEST, TYPESCRIPT],
      isPrivate: true,
      illustration: 'chart',
      platform: 'Online Banking Santander',
    },
    {
      title: 'Comercio exterior',
      company: 'Banco Galicia',
      period: '2022 – 2025',
      role: 'Referente técnico de front-end',
      description:
        'Uno de los seis proyectos de comercio exterior construidos desde cero, del MVP a su segunda fase.',
      technologies: [REACT, TYPESCRIPT],
      isPrivate: true,
      illustration: 'globe',
      platform: 'Office Banking Galicia',
    },
  ],
  en: [
    {
      title: 'Investment platform',
      company: 'Santander Bank',
      period: '2025 – 2026',
      role: 'Full Stack Developer',
      description:
        'Support platform for phone-based customer service to trade stocks, bonds and CEDEARs.',
      technologies: [REACT, NEST, TYPESCRIPT],
      isPrivate: true,
      illustration: 'chart',
      platform: 'Online Banking Santander',
    },
    {
      title: 'Foreign trade',
      company: 'Galicia Bank',
      period: '2022 – 2025',
      role: 'Front-end technical lead',
      description:
        'One of six foreign trade projects built from scratch, from MVP to their second phase.',
      technologies: [REACT, TYPESCRIPT],
      isPrivate: true,
      illustration: 'globe',
      platform: 'Office Banking Galicia',
    },
  ],
};
