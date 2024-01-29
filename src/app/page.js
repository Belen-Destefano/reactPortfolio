"use client";

import Contact from "@/components/contact/index";
import Icons from "@/components/icons/index";
import MainInfo from "@/components/mainInfo/index";
import Navbar from "@/components/navbar/index";
import Presentation from "@/components/presentation/index";
import Projects from "@/components/projects/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Presentation />
      <MainInfo />
      <Icons />
      <Projects />
      <Contact />
    </main>
  );
}
