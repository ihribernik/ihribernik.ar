type ExperienceDuration = {
  start: Date,
  end: Date | undefined | null
}

type Navigation = {
  href: string;
  label: string
}

type SocialNavitation = Navigation & {
  kind: "email" | "github" | "linkedin";
};

type Experience = {
  title: string;
  body: string;
  duration: Array<ExperienceDuration>
}

type Education = {
  title: string;
  body: string;
}

type Hero = {
  name: string;
  role: string;
  summary: string;
  image: Image;
};

type Image = {
  src: string;
  srcSet: string;
  webpSrc: string;
  alt: string;
};

export type PortfolioData = {
  hero: Hero;
  navigation: Array<Navigation>;
  socialLinks: Array<SocialNavitation>;
  technologies: Array<string>;
  experience: Array<Experience>;
  education: Array<Education>;
};
