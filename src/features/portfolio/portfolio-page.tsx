import Header from "@/features/portfolio/components/header";
import EducationSection from "@/features/portfolio/components/education-section";
import ExperienceSection from "@/features/portfolio/components/experience-section";
import HeroSection from "@/features/portfolio/components/hero-section";
import TechnologiesSection from "@/features/portfolio/components/technologies-section";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground px-4 py-8">
        <HeroSection />
        <TechnologiesSection />
        <ExperienceSection />
        <EducationSection />
      </main>
    </>
  );
}
