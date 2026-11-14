import { Button, ButtonLink } from "@/components/Button/Button";
import styles from "./page.module.css";

const colors = [
  { name: "bg", value: "#0F1218" },
  { name: "surface", value: "#161B24" },
  { name: "border", value: "#252B36" },
  { name: "text", value: "#E6E8EC" },
  { name: "text-muted", value: "#868B96" },
  { name: "accent", value: "#E0A458" },
  { name: "accent-hover", value: "#EBB873" },
];

// Temporary style test page (KUM-43). Replaced by app/[lang] in KUM-44.
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <p className={styles.eyebrow}>Tyylitesti</p>
        <h1>Kumina</h1>
        <p className={styles.lead}>
          Rakennan verkkosivuja ja sovelluksia, ja olen aloittamassa niiden
          tekemistä myös yrityksille.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="#yhteys">Ota yhteyttä</ButtonLink>
          <Button variant="secondary">Palvelut</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Värit</h2>
        <ul className={styles.swatches}>
          {colors.map((c) => (
            <li key={c.name} className={styles.swatch}>
              <span
                className={styles.chip}
                style={{ backgroundColor: c.value }}
              />
              <span>{c.name}</span>
              <span className={styles.muted}>{c.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Typografia</h2>
        <div className={styles.card}>
          <h1>Otsikko 1</h1>
          <h2>Otsikko 2</h2>
          <h3>Otsikko 3</h3>
          <p>
            Leipäteksti. Rauhallinen ja luettava, rivinkorkeus 1.6. Tässä on{" "}
            <a href="#">linkki tekstin seassa</a>, joka vaihtaa sävyä
            hoverilla.
          </p>
          <p className={styles.muted}>Himmeä teksti toissijaiselle tiedolle.</p>
        </div>
      </section>

      <section className={styles.section} id="yhteys">
        <h2>Napit</h2>
        <div className={styles.actions}>
          <Button>Ensisijainen</Button>
          <Button variant="secondary">Toissijainen</Button>
          <Button disabled>Ei käytössä</Button>
        </div>
      </section>
    </main>
  );
}
