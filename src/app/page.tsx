"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Image alt="image" src="/images/sleep.png" width={100} height={100} />
      </div>
    </main>
  );
}
