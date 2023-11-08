"use client"

import Image from 'next/image'
import styles from './page.module.css'
// import Link from 'next/link';
import ChatInput from '@/components/ChatInput/ChatInput';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isUploaded, setIsUploaded] = useState(false);
  const handleUpload = () => {
    setIsUploaded(true);
  }
  return (
    <main className={styles.main}>
      <p className={styles.userBubble}>Hey Adevinta can you help me furnish my room?</p>
      <p>Sure. Upload a photo of the room and I'll make some suggestions</p>
      {/* <Link href="/items-list">Items List</Link> */}
      <div className={styles.uploadButtonContainer}>
        {!isUploaded && <button onClick={handleUpload}>
          <Image
            src="/upload_button.png"
            width={50}
            height={50}
            alt="upload button"
          /></button>}
      </div>

      {isUploaded && <EmptyRoomImage />}
      <ChatInput />
    </main>
  )
}


const EmptyRoomImage = function () {
  return (
    <div className={styles.roomImageContainer}>
      <Image
        src="https://res.cloudinary.com/drerw82nm/image/upload/f_auto,q_auto/v1/lazypandas/jbfztsx6odhjowrjwrgg"
        width={500}
        height={500}
        alt="room image"
      />
      <div className={styles.designSuggestionsContainer}>
        <Link href="/design-suggestions">See design suggestions</Link>
      </div>
    </div>
  )
}