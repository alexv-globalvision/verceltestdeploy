import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}

export default function Home() {
  const [isOn, toggleIsOn] = useToggle();



  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Test Deployment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vercel Test Deployment</h1>

        <p className={styles.description}>
          Check out this button, now it's blue.
        </p>

        <div className={styles.grid}>
          <button onClick={toggleIsOn} className={styles.card}>
            <h3>Blue Button</h3>
            <p>I'm blue, dah-boo-dee-dah-boo-dai</p>
          </button>
        </div>

        <>
          {isOn ? <p className={styles.clickText}>You clicked the blue button!</p> : <p className={styles.clickText}>&nbsp;</p>}
        </>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
