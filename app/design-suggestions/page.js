import Link from 'next/link';
import styles from '../page.module.css'
import ChatInput from '@/components/ChatInput/ChatInput';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        Here are <strong>three</strong> recommendations on how to furnish the room
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href='/step3'>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/c5uwjt8qzidq2ommpczp.png' />
          </Link>
        </div>
        <div className={styles.card}>
        <Link href='/step3'>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/qwxccqxbr4bvoxefq3ek.jpg' />
          </Link>
        </div>
        <div className={styles.card}>
        <Link href='/step3'>
          <img src='https://res.cloudinary.com/drerw82nm/image/upload/c_thumb,g_auto,h_200,w_800/lazypandas/bfajkvtle5bddkd912hl.png' />
          </Link>
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
      <ChatInput />
    </main>
  )
}
