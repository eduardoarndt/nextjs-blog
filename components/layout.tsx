import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Countries Index";
export const siteTitle = name;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={name} />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </Link>
      </header>
      <main>{children}</main>
      <br />
      <br />
      <Link href="/">← Back to home</Link>
    </div>
  );
}
