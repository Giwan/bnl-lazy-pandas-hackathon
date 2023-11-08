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
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/c5uwjt8qzidq2ommpczp.png' />
        </div>
        <div className={styles.card}>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/qwxccqxbr4bvoxefq3ek.jpg' />
        </div>
        <div className={styles.card}>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/bfajkvtle5bddkd912hl.png' />
        </div>
      </div>
      <div className={styles.chat}>
        <div className={styles.chat_question}>
          <div className={styles.message_text}>
            Can you make it more green?
          </div>
        </div>
        <div className={styles.chat_message}>
          <div className={styles.message_text}>
            Of course. Here are some more options...
          </div>
        </div>
      </div>
    </main>
  )
}
