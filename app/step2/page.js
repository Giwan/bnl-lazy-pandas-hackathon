import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Here are <strong>three</strong> recommendations on how to furnish the room
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_100,w_800/lazypandas/c5uwjt8qzidq2ommpczp.png' />
        </div>
        <div className={styles.card}>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_100,w_800/lazypandas/qwxccqxbr4bvoxefq3ek.jpg' />
        </div>
        <div className={styles.card}>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_100,w_800/lazypandas/bfajkvtle5bddkd912hl.png' />
        </div>
      </div>
    </main>
  )
}
