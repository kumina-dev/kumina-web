import type fi from "@/dictionaries/fi.json";
import type { Locale } from "./i18n-config";

export * from "./i18n-config";

export type Dictionary = typeof fi;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fi: () => import("@/dictionaries/fi.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
