import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Upload a photo to start furnishing</h1>
      <img src="" alt="plus icon" />
    </main>
  )
}
