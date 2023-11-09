import Image from "next/image";
import ChatInput from '@/components/ChatInput/ChatInput';

const index = () => {
    return (
        <div id='empty-room' className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/empty_room5.webp" alt="room-image" height={684} width={1296} />
                <ChatInput  onClick={() => location.href = '/step3'}/>
            </div>
        </div>
    )
}

export default index;
