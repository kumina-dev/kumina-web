import { ButtonLink } from "@/components/Button/Button";
import type { Dictionary } from "@/lib/i18n";
import styles from "./Services.module.css";

type ServicesProps = {
  dict: Dictionary["services"];
};

export function Services({ dict }: ServicesProps) {
  return (
    <section
      id="palvelut"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading">{dict.heading}</h2>

      <ul className={styles.grid}>
        {dict.items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <p>{dict.ctaText}</p>
        <ButtonLink href="#yhteys">{dict.ctaButton}</ButtonLink>
      </div>
    </section>
  );
}
