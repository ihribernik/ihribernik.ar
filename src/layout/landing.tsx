import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function LandingHribernik() {
  const technologies = [
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Kubernetes",
    "AWS",
  ];
  const experience = [
    {
      title: "Software Engineer – Adviters (2023 – 2025)",
      body: `Desarrollo de aplicaciones en Python (Flask, Anvil),
             automatización de procesos, dashboards y visualización de datos
             en planta industrial.`,
    },
    {
      title: "Full Stack – Origino (2022 – 2023)",
      body: `Ecosistema Tokenize & Trace usando blockchain Algorand.
             Desarrollo y liderazgo técnico de librerías internas.`,
    },
    {
      title: "Full Stack – Telecentro (2021 – 2022)",
      body: `Microservicios para middleware, migración de legacy PHP,
             despliegue en Kubernetes y soporte DevOps.`,
    },
  ];
  const education = [
    {
      title: "Tecnicatura en Análisis de Sistemas - ISTEA",
      body: "Promedio: 8.47",
    },
    {
      title: "Licenciatura en Ciencia de Datos - Universidad Siglo 21",
      body: "En curso (35% completado)",
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8">
      <section
        className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-5xl mx-auto"
        id=""
      >
        <img
          src="/assets/images/hero.jpg"
          alt="Claudio Iván Hribernik"
          className="w-32 h-32 rounded-full object-cover border-2 border-card shadow-lg"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Claudio Iván Hribernik</h1>
          <h2 className="text-xl text-muted-foreground">
            Full Stack Developer especializado en Agro, Fintech y Banca
          </h2>
          <p className="max-w-xl">
            Más de 9 años creando soluciones escalables con Python, JavaScript y
            tecnologías modernas. Consultoría y desarrollo freelance, con fuerte
            enfoque en automatización y visualización de datos.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild variant="default">
              <a href="mailto:cihribernik@gmail.com">Contáctame</a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/ihribernik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://linkedin.com/in/claudio-ivan-hribernik-492255b8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-16" id="tecnologias">
        <h3 className="text-2xl font-semibold mb-6 text-center">Tecnologías</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies &&
            technologies.map((tech) => (
              <Card key={tech} className="bg-card text-card-foreground">
                <CardContent className="p-4 text-center font-medium">
                  {tech}
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto" id="experiencia">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Experiencia Destacada
        </h3>
        <div className="space-y-6">
          {experience &&
            experience.map(({ title, body }) => (
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-4">
                  <h4 className="font-semibold">{title}</h4>
                  <p>{body}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section id="formacion" className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          🎓 Formación Académica
        </h3>
        <div className="space-y-4">
          {education &&
            education.map(({ title, body }) => (
              <Card className="bg-card text-card-foreground">
              <CardContent className="p-4">
                <h4 className="font-semibold">{title}</h4>
                <p>{body}</p>
              </CardContent>
            </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
