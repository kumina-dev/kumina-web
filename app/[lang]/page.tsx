import { notFound } from "next/navigation";
import { FeaturedProject } from "@/components/FeaturedProject/FeaturedProject";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { getDictionary, isLocale } from "@/lib/i18n";
import styles from "./page.module.css";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  
  return (
    <main className={styles.main}>
      <Hero dict={dict.hero} />
      <FeaturedProject dict={dict.featured} />
      <Services dict={dict.services} />
    </main>
  );
}
