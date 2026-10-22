import {
  siDotnet,
  siNestjs,
  siNextdotjs,
  siReact,
  type SimpleIcon,
} from 'simple-icons';
import type { Lang } from '@/i18n/ui';

export interface Technology {
  name: string;
  icon?: SimpleIcon;
}

export interface ProjectModule {
  name: string;
  detail?: string;
}

export interface Project {
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  modules?: ProjectModule[];
  technologies: Technology[];
  isPrivate?: boolean;
  illustration: 'chart' | 'globe';
  image?: string;
  platform?: string;
  codeUrl?: string;
  demoUrl?: string;
}

const REACT = { name: 'React', icon: siReact };
const NEXT = { name: 'Next.js', icon: siNextdotjs };
const NEST = { name: 'Nest JS', icon: siNestjs };
const DOTNET = { name: '.NET', icon: siDotnet };
const SQL_SERVER = { name: 'SQL Server' };
const FLAME = { name: 'Flame' };
const BRICK = { name: 'Brick' };

export const PROJECTS: Record<Lang, Project[]> = {
  es: [
    {
      title: 'Plataformas de inversiones',
      company: 'Banco Santander',
      period: '2025 – 2026',
      role: 'Front-end Developer',
      description:
        'Desarrollo de módulos nuevos para dos aplicaciones internas de inversiones, con React y Flame, el framework interno de Santander, sobre un back-end en Nest JS.',
      modules: [
        {
          name: 'PUMA',
          detail:
            'Módulo "Acciones, bonos y CEDEARs": gestión de compra y venta de activos vía telefónica para clientes.',
        },
        {
          name: 'Inversiones',
          detail: 'Módulo "Licitaciones": gestión de licitaciones.',
        },
      ],
      technologies: [REACT, FLAME, NEST],
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
        'Seis aplicaciones del área de Comercio Exterior dentro de Office Banking, construidas desde cero. Me encargué de la arquitectura del front-end, de la creación de los módulos y los BFF, y de la integración de un gestor de operaciones para la seguridad, la autorización y la autenticación con MFA.',
      modules: [
        { name: 'Cartas de crédito de importación' },
        { name: 'Cartas de crédito de exportación' },
        { name: 'Financiaciones de importación' },
        { name: 'Financiaciones de exportación' },
        { name: 'Cobranzas de importación' },
        { name: 'Cobranzas de exportación' },
      ],
      technologies: [NEXT, BRICK, NEST, DOTNET, SQL_SERVER],
      isPrivate: true,
      illustration: 'globe',
      platform: 'Office Banking Galicia',
    },
  ],
  en: [
    {
      title: 'Investment platforms',
      company: 'Santander Bank',
      period: '2025 – 2026',
      role: 'Front-end Developer',
      description:
        "Built new modules for two internal investment applications, using React and Flame, Santander's internal framework, on top of a Nest JS back-end.",
      modules: [
        {
          name: 'PUMA',
          detail:
            '"Stocks, bonds and CEDEARs" module: managing purchases and sales of assets over the phone for clients.',
        },
        {
          name: 'Inversiones',
          detail: '"Tenders" module: management of securities tenders.',
        },
      ],
      technologies: [REACT, FLAME, NEST],
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
        'Six applications for the Foreign Trade area within Office Banking, built from scratch. I was responsible for the front-end architecture, building the modules and BFFs, and integrating an operations manager for security, authorization and MFA authentication.',
      modules: [
        { name: 'Import letters of credit' },
        { name: 'Export letters of credit' },
        { name: 'Import financing' },
        { name: 'Export financing' },
        { name: 'Import collections' },
        { name: 'Export collections' },
      ],
      technologies: [NEXT, BRICK, NEST, DOTNET, SQL_SERVER],
      isPrivate: true,
      illustration: 'globe',
      platform: 'Office Banking Galicia',
    },
  ],
};
