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
          1
        </div>
        <div className={styles.card}>
          2
        </div>
        <div className={styles.card}>
          3
        </div>
      </div>
    </main>
  )
}
