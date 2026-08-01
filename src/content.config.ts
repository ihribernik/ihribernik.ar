import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonFields = {
  locale: z.enum(["es", "en"]),
  title: z.string().min(1),
  description: z.string().min(1),
  translationKey: z.string().min(1).optional(),
  draft: z.boolean().default(true),
};

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    ...commonFields,
    cover: image().optional(),
    date: z.coerce.date(),
    technologies: z.array(z.string()).min(1),
    repositoryUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    ...commonFields,
    cover: image().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, writing };
