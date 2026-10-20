import type { Lang } from '@/i18n/ui';

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
}

export const EXPERIENCES: Record<Lang, Experience[]> = {
  es: [
    {
      position: 'Full Stack Developer',
      company: 'Grupo LPA',
      period: 'Marzo 2026 - Octubre 2026',
      description: [
        'Mantenimiento y nuevas funcionalidades en PHP para el portal de proveedores OSPIM.',
        'Desarrollo de aplicaciones con SAP Fiori para integrar en entornos SAP.',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Banco Santander (vía RHT)',
      period: 'Febrero 2025 - Marzo 2026',
      description: [
        'Desarrollo de una plataforma de soporte para atención telefónica que permite operar compra y venta de acciones, bonos y CEDEARs (React, Nest JS).',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Banco Galicia (vía Grupo LPA)',
      period: 'Marzo 2022 - Febrero 2025',
      description: [
        'Referente técnico de front-end en seis proyectos de comercio exterior desarrollados desde cero, del MVP a su segunda fase: cartas de crédito, financiaciones y cobranzas de importación y exportación.',
        'Desarrollo y mantenimiento de nuevos productos en Office Banking, Plataforma Galicia Comex (PGC) y BFF para el consumo de clientes externos.',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Ai Core IT',
      period: 'Septiembre 2021 - Marzo 2022',
      description: [
        'Desarrollo y mantenimiento de Bukest, marketplace de servicios.',
        'Desarrollo y mantenimiento de aplicaciones web para terceros como AON.',
      ],
    },
  ],
  en: [
    {
      position: 'Full Stack Developer',
      company: 'Grupo LPA',
      period: 'March 2026 - October 2026',
      description: [
        'Maintenance and new features in PHP for the OSPIM supplier portal.',
        'Development of SAP Fiori applications integrated into SAP environments.',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Banco Santander (via RHT)',
      period: 'February 2025 - March 2026',
      description: [
        'Built a support platform for phone-based customer service to trade stocks, bonds and CEDEARs (React, Nest JS).',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Banco Galicia (via Grupo LPA)',
      period: 'March 2022 - February 2025',
      description: [
        'Front-end technical lead on six foreign trade projects built from scratch, from MVP to their second phase: letters of credit, financing and import/export collections.',
        'Development and maintenance of new products in Office Banking, Plataforma Galicia Comex (PGC) and a BFF for external clients.',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Ai Core IT',
      period: 'September 2021 - March 2022',
      description: [
        'Development and maintenance of Bukest, a services marketplace.',
        'Development and maintenance of web applications for third parties such as AON.',
      ],
    },
  ],
};
