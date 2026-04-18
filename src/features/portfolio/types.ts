export type PortfolioData = {
  hero: {
    name: string;
    role: string;
    summary: string;
    image: {
      src: string;
      srcSet: string;
      webpSrc: string;
      alt: string;
    };
  };
  navigation: Array<{
    href: string;
    label: string;
  }>;
  socialLinks: Array<{
    href: string;
    label: string;
    kind: "email" | "github" | "linkedin";
  }>;
  technologies: string[];
  experience: Array<{
    title: string;
    body: string;
  }>;
  education: Array<{
    title: string;
    body: string;
  }>;
};
