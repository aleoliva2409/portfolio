export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Alejandro Oliva | Full Stack Developer',
    'meta.description':
      'Me llamo Alejandro Oliva, soy full stack developer con más de 5 años de experiencia.',
    'meta.locale': 'es_AR',
    'meta.imageAlt': 'Alejandro Oliva, Full Stack Developer',

    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.switchLang': 'Ver en inglés',

    'theme.toggle': 'Cambiar tema',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',

    'hero.available': 'Disponible para trabajar',
    'hero.greeting': 'Hola, soy',
    'hero.intro': '+5 años de experiencia. Desarrollador Full Stack',
    'hero.highlight': 'con experiencia en banca, seguros y ecommerce.',
    'hero.outro':
      'Me gusta crear aplicaciones web útiles, rápidas y fáciles de mantener.',
    'hero.contact': 'Contáctame',

    'section.experience': 'Experiencia laboral',
    'section.skills': 'Habilidades',
    'section.projects': 'Proyectos',
    'section.about': 'Sobre mí',

    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Herramientas e infraestructura',

    'projects.badge': 'En construcción',
    'projects.title': 'Próximamente',
    'projects.description':
      'Estoy preparando esta sección con proyectos propios. Mientras tanto, puedes ver mi código en GitHub.',
    'projects.github': 'Ver mi GitHub',

    'project.screenshot': 'Captura de',
    'project.code': 'Código',
    'project.demo': 'Demo',

    'footer.basedOn': 'Diseño basado en',
    'footer.by': 'de midudev, con modificaciones',
    'footer.contact': 'Contacto',

    'notFound.title': 'Página no encontrada',
    'notFound.description': 'La página que buscas no existe o fue movida.',
    'notFound.back': 'Volver al inicio',
  },
  en: {
    'meta.title': 'Alejandro Oliva | Full Stack Developer',
    'meta.description':
      'My name is Alejandro Oliva, I am a full stack developer with more than 5 years of experience.',
    'meta.locale': 'en_US',
    'meta.imageAlt': 'Alejandro Oliva, Full Stack Developer',

    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.switchLang': 'Ver en español',

    'theme.toggle': 'Change theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    'hero.available': 'Available for work',
    'hero.greeting': "Hi, I'm",
    'hero.intro': '5+ years of experience. Full Stack Developer',
    'hero.highlight': 'with experience in banking, insurance and ecommerce.',
    'hero.outro': 'I enjoy building useful, fast and maintainable web apps.',
    'hero.contact': 'Contact me',

    'section.experience': 'Work experience',
    'section.skills': 'Skills',
    'section.projects': 'Projects',
    'section.about': 'About me',

    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Tools & infrastructure',

    'projects.badge': 'In progress',
    'projects.title': 'Coming soon',
    'projects.description':
      "I'm putting together this section with my own projects. In the meantime, you can check out my code on GitHub.",
    'projects.github': 'See my GitHub',

    'project.screenshot': 'Screenshot of',
    'project.code': 'Code',
    'project.demo': 'Demo',

    'footer.basedOn': 'Design based on',
    'footer.by': 'by midudev, with modifications',
    'footer.contact': 'Contact',

    'notFound.title': 'Page not found',
    'notFound.description': "The page you're looking for doesn't exist or has been moved.",
    'notFound.back': 'Back to home',
  },
} as const;
