import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n-config";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
};

const names: Record<Locale, string> = {
  fi: "Suomi",
  en: "English",
};

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label}>
      <ul className={styles.list}>
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              title={names[locale]}
              aria-current={locale === current ? "page" : undefined}
              className={styles.link}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
