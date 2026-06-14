import type { PortfolioData } from "@/features/portfolio/types";

export const portfolio: PortfolioData = {
  hero: {
    name: "Claudio Iván Hribernik",
    role: "Full Stack Developer especializado en Agro, Fintech y Banca",
    summary:
      "Más de 10 años creando soluciones escalables con Python, JavaScript y tecnologías modernas. Consultoría y desarrollo freelance, con fuerte enfoque en automatización y visualización de datos.",
    image: {
      src: "/assets/images/hero.jpg",
      srcSet: "/assets/images/hero.jpg 1x, /assets/images/hero.jpg 2x",
      webpSrc: "/assets/images/hero.webp",
      alt: "Foto de Claudio Iván Hribernik, desarrollador full stack",
    },
  },
  navigation: [
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
  ],
  socialLinks: [
    { href: "mailto:cihribernik@gmail.com", label: "Contáctame", kind: "email" },
    { href: "https://github.com/ihribernik", label: "GitHub", kind: "github" },
    {
      href: "https://linkedin.com/in/claudio-ivan-hribernik-492255b8",
      label: "LinkedIn",
      kind: "linkedin",
    },
  ],
  technologies: [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Go",
    "gin-gonic/gin",
    "Node.js",
    "React",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
  ],
  experience: [
    {
      title: "Software Engineer - Mercado Libre (2025 - presente)",
      body: "",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Software Engineer - Adviters (2023 - 2025)",
      body:
        "Desarrollo de aplicaciones en Python (Flask, Anvil), automatización de procesos, dashboards y visualización de datos en planta industrial.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Full-Stack Developer - Grupo IEB (2023)",
      body:
        "Full-Stack Developer dentro del equipo de soluciones algorítmicas. Mantenimiento y mejora de la plataforma de trading algorítmico y bots algorítmicos.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Full-Stack Developer - Origino (2022 - 2023)",
      body:
        "Desarrollo de funcionalidades para la plataforma Tokenize & Trace usando ReactJS y Express. Implementación de tokenización de cadenas de suministro con NFTs.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Back-end Developer - Telecentro (2021 - 2022)",
      body:
        "Integrante del equipo de middleware de configuración de dispositivos de red utilizando Express y Flask. Migración de servicios de PHP a microservicios.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Full-Stack Developer - Kenwin (2020 - 2021)",
      body:
        "Desarrollo de nuevas funcionalidades y mejoras de seguridad en una aplicación SaaS usando Django y Pyramid. Implementación de aislamiento multicliente (multi-tenant).",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Software Engineer - Grupo Assa (2019 - 2020)",
      body:
        "Participación en la migración de una plataforma de scoring crediticio a microservicios en Python. Análisis y resolución de errores en la plataforma legada para una transición sólida.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Software Engineer - Atos (2018 - 2019)",
      body:
        "Mantenimiento y mejora de aplicaciones internas para una empresa automotriz. Optimización de rendimiento, refactorización de código COBOL y resolución de incidencias.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Software Engineer - Accenture (2018)",
      body:
        "Mantenimiento y mejora de aplicaciones bancarias en COBOL. Análisis de procesos de cancelación y propuesta de mejoras funcionales y técnicas.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Developer - Tecnosoftware (2017 - 2018)",
      body:
        "Desarrollo de sistema de reportería para entidad bancaria, integrando soluciones con Core Bancario T24 de Temenos usando InfoBasic/JBasic.",
      duration: [{ start: new Date(), end: null }]
    },
    {
      title: "Developer - CDA (2015 - 2017)",
      body:
        "Mejoras y desarrollo de nuevas funcionalidades para el sistema de leasing de una entidad bancaria, optimizando procesos y adaptando la plataforma a nuevos requerimientos.",
      duration: [{ start: new Date(2015, 8, 15), end: new Date(2017,5,15)}]
    },
  ],
  education: [
    {
      title: "Licenciatura en Ciencia de Datos - Universidad Siglo 21 (cursando)",
      body: "En curso (66% completado)",
    },
    {
      title: "Tecnicatura en Análisis de Sistemas - ISTEA",
      body: "Promedio: 8.47",
    },
  ],
};
