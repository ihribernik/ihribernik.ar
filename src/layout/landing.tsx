import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function LandingHribernik() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Claudio Iván Hribernik</h1>
        <h2 className="text-xl text-gray-400">
          Full Stack Developer especializado en Agro, Fintech y Banca
        </h2>
        <p className="max-w-2xl mx-auto">
          Más de 9 años creando soluciones escalables con Python, JavaScript y
          tecnologías modernas. Consultoría y desarrollo freelance, con fuerte
          enfoque en automatización y visualización de datos.
        </p>
        <div className="flex justify-center space-x-4">
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
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Tecnologías</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
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
          ].map((tech) => (
            <Card key={tech} className="bg-gray-800 border-none">
              <CardContent className="p-4 text-center font-medium">
                {tech}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Experiencia Destacada
        </h3>
        <div className="space-y-6">
          <Card className="bg-gray-800 border-none">
            <CardContent className="p-4">
              <h4 className="font-semibold">
                Software Engineer – Adviters (2023 – 2025)
              </h4>
              <p>
                Desarrollo de aplicaciones en Python (Flask, Anvil),
                automatización de procesos, dashboards y visualización de datos
                en planta industrial.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-none">
            <CardContent className="p-4">
              <h4 className="font-semibold">
                Full Stack – Origino (2022 – 2023)
              </h4>
              <p>
                Ecosistema Tokenize & Trace usando blockchain Algorand.
                Desarrollo y liderazgo técnico de librerías internas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-none">
            <CardContent className="p-4">
              <h4 className="font-semibold">
                Full Stack – Telecentro (2021 – 2022)
              </h4>
              <p>
                Microservicios para middleware, migración de legacy PHP,
                despliegue en Kubernetes y soporte DevOps.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">Formación Académica</h3>
        <p>Licenciatura en Ciencia de Datos – Universidad Siglo 21 (35%)</p>
        <p>Tecnicatura en Análisis de Sistemas – ISTEA (Promedio: 8.47)</p>
      </section>
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
