import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import styles from "./page.module.css";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>{dict.home.title}</h1>
        <p className={styles.lead}>{dict.home.lead}</p>
      </section>
    </main>
  );
}
