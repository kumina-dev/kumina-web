import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Header.module.css";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href={`/${lang}`}
          className={styles.logo}
          aria-label={dict.header.homeLabel}
        >
          Kumina
        </Link>
        <LanguageSwitcher current={lang} label={dict.languageSwitcher.label} />
      </div>
    </header>
  );
}
