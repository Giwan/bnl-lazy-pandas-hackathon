import Image from "next/image";
import ChatInput from '@/components/ChatInput/ChatInput';
import styles from './emptyRoom.module.css';
const index = () => {
    return (
        <div id='empty-room' className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
            <div className='grid grid-cols-1 my-16'>
                <Image className={styles.image} src="/images/empty_room5.webp" alt="room-image" height={333} width={600} />
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
                <ChatInput className={styles.chatInput}  onClick={() => location.href = '/step3'}/>
            </div>
        </div>
    )
}

export default index;
