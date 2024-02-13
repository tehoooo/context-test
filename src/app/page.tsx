"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext } from "react";
import styles from "./page.module.css";
import { CountContext } from "./provider/CountProvider";

export default function Home() {
  const { count, setCount } = useContext(CountContext);
  const handleClickPlusButton = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Count : {count}</h1>
      <button onClick={handleClickPlusButton}>PLUS</button>
      <div className={styles.description}>
        <Link href="/test">
          <h2>Test Page</h2>
        </Link>
      </div>
    </main>
  );
}
