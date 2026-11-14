import type { Dictionary } from "@/lib/i18n";
import styles from "./Contact.module.css";

type ContactProps = {
  dict: Dictionary["contact"];
};

const email = "kumina.machine797@passinbox.com";
const github = "https://github.com/kumina-dev";

export function Contact({ dict }: ContactProps) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(dict.emailSubject)}`;

  return (
    <section
      id="yhteys"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">{dict.heading}</h2>
      <p className={styles.text}>{dict.text}</p>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>{dict.emailLabel}</dt>
          <dd>
            <a href={mailto} className={styles.email}>
              {email}
            </a>
          </dd>
        </div>
        <div className={styles.row}>
          <dt>{dict.githubLabel}</dt>
          <dd>
            <a href={github} target="_blank" rel="noopener noreferrer">
              kumina-dev <span aria-hidden="true">↗</span>
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
