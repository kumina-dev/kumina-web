import type { Dictionary } from "@/lib/i18n";
import styles from "./FeaturedProject.module.css";

type FeaturedProjectProps = {
  dict: Dictionary["featured"];
};

const stack = ["Next.js", "TypeScript", "Navidrome"];

export function FeaturedProject({ dict }: FeaturedProjectProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className={styles.heading}>
        {dict.heading}
      </h2>

      <article className={styles.card}>
        <div className={styles.top}>
          <h3>{dict.title}</h3>
          <span className={styles.status}>{dict.status}</span>
        </div>
        <p className={styles.description}>{dict.description}</p>
        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <a
        href="https://github.com/kumina-dev"
        className={styles.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {dict.githubLink} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
