import { Card, CardContent } from "@/components/ui/card";
import { portfolio } from "@/features/portfolio/data/portfolio";
import SectionHeading from "@/features/portfolio/components/section-heading";

export default function TechnologiesSection() {
  return (
    <section className="mt-16" id="tecnologias">
      <SectionHeading title="Tecnologías" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {portfolio.technologies.map((tech) => (
          <Card key={tech} className="bg-card text-card-foreground">
            <CardContent className="p-4 text-center font-medium">
              {tech}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
