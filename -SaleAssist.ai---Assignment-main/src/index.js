import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Reviews from '../components/Reviews'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hospital Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Reviews />
      </main>
    </div>
  )
}
