import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

import styles from "../styles/Home.module.css";

export default function Home({ dealsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neo-Amaca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Today's Deals</h2>
        </section>
      </main>
    </div>
  );
}
