import { Button } from "@/components/ui/button";
import { portfolio } from "@/features/portfolio/data/portfolio";
import { Github, Linkedin } from "lucide-react";

function SocialLinkIcon({ kind }: { kind: "email" | "github" | "linkedin" }) {
  if (kind === "github") {
    return <Github className="w-4 h-4 mr-2" />;
  }

  if (kind === "linkedin") {
    return <Linkedin className="w-4 h-4 mr-2" />;
  }

  return null;
}

export default function HeroSection() {
  const { hero, socialLinks } = portfolio;

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-5xl mx-auto"
      id="inicio"
    >
      <picture>
        <source srcSet={hero.image.webpSrc} type="image/webp" />
        <img
          srcSet={hero.image.srcSet}
          src={hero.image.src}
          alt={hero.image.alt}
          className="w-32 h-32 rounded-full object-cover border-2 border-card shadow-lg"
          loading="lazy"
          width="128"
          height="128"
        />
      </picture>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{hero.name}</h1>
        <h2 className="text-xl text-muted-foreground">{hero.role}</h2>
        <p className="max-w-xl">{hero.summary}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {socialLinks.map((link) => (
            <Button
              asChild
              key={link.href}
              variant={link.kind === "email" ? "default" : "outline"}
            >
              <a
                href={link.href}
                target={link.kind === "email" ? undefined : "_blank"}
                rel={link.kind === "email" ? undefined : "noopener noreferrer"}
              >
                <SocialLinkIcon kind={link.kind} />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
