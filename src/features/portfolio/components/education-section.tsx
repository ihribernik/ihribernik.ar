import ContentCard from "@/features/portfolio/components/content-card";
import SectionHeading from "@/features/portfolio/components/section-heading";
import { portfolio } from "@/features/portfolio/data/portfolio";

export default function EducationSection() {
  return (
    <section id="formacion" className="mt-16 max-w-4xl mx-auto">
      <SectionHeading title="Formación Académica" />
      <div className="space-y-4">
        {portfolio.education.map((item, idx) => (
          <ContentCard key={item.title + idx} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
}
