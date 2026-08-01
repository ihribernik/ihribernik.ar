import type { Locale, PortfolioCopy } from "@/i18n/types";

const shared = {
  name: "Claudio Iván Hribernik",
  technologies: [
    "Python", "Django", "FastAPI", "Flask", "Go", "gin-gonic/gin",
    "Node.js", "React", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL",
  ],
  socialLinks: [
    { href: "mailto:cihribernik@gmail.com", label: "Email", kind: "email" as const },
    { href: "https://github.com/ihribernik", label: "GitHub", kind: "github" as const },
    {
      href: "https://linkedin.com/in/claudio-ivan-hribernik-492255b8",
      label: "LinkedIn",
      kind: "linkedin" as const,
    },
  ],
};

const es = {
  locale: "es",
  seo: {
    title: "Portfolio - Claudio Iván Hribernik",
    description: "Portfolio personal de Claudio Iván Hribernik, desarrollador full stack especializado en Agro, Fintech y Banca. Proyectos, experiencia y contacto.",
  },
  hero: {
    name: shared.name,
    role: "Full Stack Developer especializado en Agro, Fintech y Banca",
    summary: "Más de 10 años creando soluciones escalables con Python, JavaScript y tecnologías modernas. Consultoría y desarrollo freelance, con fuerte enfoque en automatización y visualización de datos.",
    imageAlt: "Foto de Claudio Iván Hribernik, desarrollador full stack",
  },
  navigation: [
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
  ],
  socialLinks: shared.socialLinks.map((link) => link.kind === "email" ? { ...link, label: "Contáctame" } : link),
  sections: {
    technologies: "Tecnologías",
    experience: "Experiencia Destacada",
    education: "Formación Académica",
  },
  technologies: shared.technologies,
  experience: [
    { title: "Software Engineer - Mercado Libre (2025 - presente)", body: "" },
    { title: "Software Engineer - Adviters (2023 - 2025)", body: "Desarrollo de aplicaciones en Python (Flask, Anvil), automatización de procesos, dashboards y visualización de datos en planta industrial." },
    { title: "Full-Stack Developer - Grupo IEB (2023)", body: "Full-Stack Developer dentro del equipo de soluciones algorítmicas. Mantenimiento y mejora de la plataforma de trading algorítmico y bots algorítmicos." },
    { title: "Full-Stack Developer - Origino (2022 - 2023)", body: "Desarrollo de funcionalidades para la plataforma Tokenize & Trace usando ReactJS y Express. Implementación de tokenización de cadenas de suministro con NFTs." },
    { title: "Back-end Developer - Telecentro (2021 - 2022)", body: "Integrante del equipo de middleware de configuración de dispositivos de red utilizando Express y Flask. Migración de servicios de PHP a microservicios." },
    { title: "Full-Stack Developer - Kenwin (2020 - 2021)", body: "Desarrollo de nuevas funcionalidades y mejoras de seguridad en una aplicación SaaS usando Django y Pyramid. Implementación de aislamiento multicliente (multi-tenant)." },
    { title: "Software Engineer - Grupo Assa (2019 - 2020)", body: "Participación en la migración de una plataforma de scoring crediticio a microservicios en Python. Análisis y resolución de errores en la plataforma legada para una transición sólida." },
    { title: "Software Engineer - Atos (2018 - 2019)", body: "Mantenimiento y mejora de aplicaciones internas para una empresa automotriz. Optimización de rendimiento, refactorización de código COBOL y resolución de incidencias." },
    { title: "Software Engineer - Accenture (2018)", body: "Mantenimiento y mejora de aplicaciones bancarias en COBOL. Análisis de procesos de cancelación y propuesta de mejoras funcionales y técnicas." },
    { title: "Developer - Tecnosoftware (2017 - 2018)", body: "Desarrollo de sistema de reportería para entidad bancaria, integrando soluciones con Core Bancario T24 de Temenos usando InfoBasic/JBasic." },
    { title: "Developer - CDA (2015 - 2017)", body: "Mejoras y desarrollo de nuevas funcionalidades para el sistema de leasing de una entidad bancaria, optimizando procesos y adaptando la plataforma a nuevos requerimientos." },
  ],
  education: [
    { title: "Licenciatura en Ciencia de Datos - Universidad Siglo 21 (cursando)", body: "En curso (66% completado)" },
    { title: "Tecnicatura en Análisis de Sistemas - ISTEA", body: "Promedio: 8.47" },
  ],
  interface: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToLight: "Cambiar al tema claro",
    switchToDark: "Cambiar al tema oscuro",
    switchLanguage: "View in English",
  },
} satisfies PortfolioCopy;

const en = {
  locale: "en",
  seo: {
    title: "Portfolio - Claudio Iván Hribernik",
    description: "Claudio Iván Hribernik's portfolio: a full-stack developer specializing in agriculture, fintech, and banking. Projects, experience, and contact information.",
  },
  hero: {
    name: shared.name,
    role: "Full Stack Developer specializing in Agriculture, Fintech, and Banking",
    summary: "Over 10 years building scalable solutions with Python, JavaScript, and modern technologies. Freelance consulting and development with a strong focus on automation and data visualization.",
    imageAlt: "Claudio Iván Hribernik, full-stack developer",
  },
  navigation: [
    { href: "#technologies", label: "Technologies" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ],
  socialLinks: shared.socialLinks.map((link) => link.kind === "email" ? { ...link, label: "Contact me" } : link),
  sections: {
    technologies: "Technologies",
    experience: "Selected Experience",
    education: "Education",
  },
  technologies: shared.technologies,
  experience: [
    { title: "Software Engineer - Mercado Libre (2025 - present)", body: "" },
    { title: "Software Engineer - Adviters (2023 - 2025)", body: "Built Python applications with Flask and Anvil, automated processes, and developed dashboards and data visualizations for an industrial plant." },
    { title: "Full-Stack Developer - Grupo IEB (2023)", body: "Worked on the algorithmic solutions team, maintaining and improving the algorithmic trading platform and trading bots." },
    { title: "Full-Stack Developer - Origino (2022 - 2023)", body: "Developed features for the Tokenize & Trace platform using React and Express, including NFT-based supply-chain tokenization." },
    { title: "Back-end Developer - Telecentro (2021 - 2022)", body: "Worked on network-device configuration middleware with Express and Flask and migrated PHP services to microservices." },
    { title: "Full-Stack Developer - Kenwin (2020 - 2021)", body: "Delivered features and security improvements for a Django and Pyramid SaaS application, including multi-tenant isolation." },
    { title: "Software Engineer - Grupo Assa (2019 - 2020)", body: "Helped migrate a credit-scoring platform to Python microservices and resolved issues in the legacy platform to support a reliable transition." },
    { title: "Software Engineer - Atos (2018 - 2019)", body: "Maintained internal automotive applications, improving performance, refactoring COBOL code, and resolving production incidents." },
    { title: "Software Engineer - Accenture (2018)", body: "Maintained COBOL banking applications, analyzed cancellation processes, and proposed functional and technical improvements." },
    { title: "Developer - Tecnosoftware (2017 - 2018)", body: "Developed a bank reporting system integrated with the Temenos T24 core banking platform using InfoBasic/JBasic." },
    { title: "Developer - CDA (2015 - 2017)", body: "Built and improved leasing-system functionality for a bank, optimizing processes and adapting the platform to new requirements." },
  ],
  education: [
    { title: "BSc in Data Science - Universidad Siglo 21 (in progress)", body: "In progress (66% complete)" },
    { title: "Systems Analysis Technical Degree - ISTEA", body: "Grade average: 8.47/10" },
  ],
  interface: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchLanguage: "Ver en español",
  },
} satisfies PortfolioCopy;

export const portfolioByLocale: Record<Locale, PortfolioCopy> = { es, en };
