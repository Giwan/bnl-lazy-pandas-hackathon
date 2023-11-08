import styles from './chatinput.module.css'

export default function ChatInput() {
  return (
    <div className={styles.chatContainer}>
      <textarea className={styles.textAreaStyle} placeholder=''></textarea>
      <button className={styles.sendButton}>send</button>
    </div>
  )
}