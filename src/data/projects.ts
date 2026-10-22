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
      role: 'Full Stack Developer',
      description:
        'Migración y desarrollo desde cero, con un diseño completamente nuevo, de módulos de inversiones para dos aplicaciones del banco. Trabajé en el front-end y en los BFF que consumían las APIs del banco, junto a los equipos de ambas aplicaciones.',
      modules: [
        {
          name: 'PUMA',
          detail:
            'App para operadores que asisten a clientes por teléfono. Desarrollé el flujo transaccional completo de compra y venta de acciones, bonos y CEDEARs: tenencia, mercado y órdenes.',
        },
        {
          name: 'Inversiones (Online Banking)',
          detail:
            'Módulo "Licitaciones" para clientes: suscripción a licitaciones primarias de títulos, antes de que empiecen a cotizar en el mercado.',
        },
      ],
      technologies: [REACT, FLAME, NEST],
      isPrivate: true,
      illustration: 'chart',
      platform: 'Online Banking Santander',
    },
    {
      title: 'Documentarios',
      company: 'Banco Galicia',
      period: '2022 – 2025',
      role: 'Referente técnico Full Stack',
      description:
        'Proyecto de comercio exterior dentro de Office Banking que reúne seis aplicaciones. Me encargué de la arquitectura y del desarrollo desde cero, del MVP a su segunda fase, incluyendo la integración de un gestor de operaciones con autenticación MFA.',
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
      role: 'Full Stack Developer',
      description:
        "Migrated and rebuilt from scratch, with a completely new design, investment modules for two of the bank's applications. I worked on the front-end and on the BFFs that consumed the bank's APIs, alongside both application teams.",
      modules: [
        {
          name: 'PUMA',
          detail:
            'App for operators assisting clients over the phone. I built the full buy and sell transactional flow for stocks, bonds and CEDEARs: holdings, market and orders.',
        },
        {
          name: 'Inversiones (Online Banking)',
          detail:
            '"Auctions" module for clients: subscription to primary auctions of securities, before they start trading on the market.',
        },
      ],
      technologies: [REACT, FLAME, NEST],
      isPrivate: true,
      illustration: 'chart',
      platform: 'Online Banking Santander',
    },
    {
      title: 'Documentarios',
      company: 'Galicia Bank',
      period: '2022 – 2025',
      role: 'Full Stack technical lead',
      description:
        'Foreign trade project within Office Banking made up of six applications. I was responsible for the architecture and development from scratch, from MVP to its second phase, including the integration of an operations manager with MFA authentication.',
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
