import type { Locale } from "@/i18n/types";

export const homePath: Record<Locale, string> = {
  es: "/",
  en: "/en/",
};

export const contentBasePath = {
  es: { projects: "/proyectos", writing: "/articulos" },
  en: { projects: "/en/projects", writing: "/en/writing" },
} as const;
