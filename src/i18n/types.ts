export type Locale = "es" | "en";

type NavigationItem = {
  href: string;
  label: string;
};

type SocialLink = NavigationItem & {
  kind: "email" | "github" | "linkedin";
};

type ContentItem = {
  title: string;
  body: string;
};

export type PortfolioCopy = {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    role: string;
    summary: string;
    imageAlt: string;
  };
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  sections: {
    technologies: string;
    experience: string;
    education: string;
  };
  technologies: string[];
  experience: ContentItem[];
  education: ContentItem[];
  interface: {
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    switchLanguage: string;
  };
};
