import { ButtonLink } from "@/components/Button/Button";
import type { Dictionary } from "@/lib/i18n";
import styles from "./Hero.module.css";

type HeroProps = {
  dict: Dictionary["hero"];
};

export function Hero({ dict }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.eyebrow}>{dict.eyebrow}</p>
      <h1 id="hero-title" className={styles.title}>
        {dict.title}
      </h1>
      <p className={styles.lead}>{dict.lead}</p>
      <div className={styles.actions}>
        <ButtonLink href="#yhteys">{dict.contact}</ButtonLink>
        <ButtonLink href="#palvelut" variant="secondary">
          {dict.services}
        </ButtonLink>
      </div>
    </section>
  );
}
