import ContentCard from "@/features/portfolio/components/content-card";
import SectionHeading from "@/features/portfolio/components/section-heading";
import { portfolio } from "@/features/portfolio/data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="mt-16 max-w-4xl mx-auto" id="experiencia">
      <SectionHeading title="Experiencia Destacada" />
      <div className="space-y-6">
        {portfolio.experience.map((item, idx) => (
          <ContentCard key={item.title + idx} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
}
