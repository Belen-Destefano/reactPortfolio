"use client";

import Portfolio from "@/components/projects/projects";
import Navbar from "@/components/navbar/navbar";
import Presentation from "@/components/presentation/presentation";
import MainInfo from "@/components/mainInfo/mainInfo";
import Contact from "@/components/contact/contact";
import Icons from "@/components/icons/icons";
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
