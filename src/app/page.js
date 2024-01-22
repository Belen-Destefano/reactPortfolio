"use client";

import Portfolio from "@/components/projects/index";
import Navbar from "@/components/navbar/index";
import Presentation from "@/components/presentation/index";
import MainInfo from "@/components/mainInfo/index";
import Contact from "@/components/contact/index";
import Icons from "@/components/icons/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Presentation />
      <MainInfo />
      <Icons />
      <Portfolio />
      <Contact />
    </main>
  );
}
