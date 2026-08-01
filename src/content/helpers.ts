import { getCollection, type CollectionEntry } from "astro:content";
import { contentBasePath } from "@/i18n/routes";
import type { Locale } from "@/i18n/types";

export type ContentCollection = "projects" | "writing";
export type SiteEntry = CollectionEntry<ContentCollection>;

export const entrySlug = (entry: SiteEntry) => entry.id.replace(/^(es|en)\//, "").replace(/\.(md|mdx)$/, "");

export const entryPath = (collection: ContentCollection, entry: SiteEntry) =>
  `${contentBasePath[entry.data.locale][collection]}/${entrySlug(entry)}/`;

export async function publishedEntries(collection: ContentCollection, locale: Locale) {
  const entries = await getCollection(collection);
  for (const entry of entries) {
    const directoryLocale = entry.id.split("/")[0];
    if (directoryLocale !== entry.data.locale) {
      throw new Error(`Content locale mismatch: ${entry.id} declares ${entry.data.locale}`);
    }
  }
  return entries.filter((entry) => entry.data.locale === locale && !entry.data.draft);
}

export async function translatedEntryPath(collection: ContentCollection, entry: SiteEntry) {
  if (!entry.data.translationKey) return undefined;
  const entries = await getCollection(collection);
  const translation = entries.find((candidate) =>
    !candidate.data.draft &&
    candidate.data.locale !== entry.data.locale &&
    candidate.data.translationKey === entry.data.translationKey
  );
  return translation ? entryPath(collection, translation) : undefined;
}
