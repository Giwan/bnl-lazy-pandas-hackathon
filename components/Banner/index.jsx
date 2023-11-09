import Image from "next/image";
import ChatInput from '@/components/ChatInput/ChatInput';

const Banner = () => {
    const handleOnClick = () => {
        const element = document.querySelector('#ask-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='mx-auto max-w-7xl sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>The Decorator</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                            Dedicated to <br /> bring your <br /> ideas to life.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        {/* <button onClick={() => location.hash = '#ask-section'} className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button> */}
                        
                    </div>
                    
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.png" alt="hero-image" width={700} height={542} />
                </div>

            </div>
            <div className='my-32'>
            <ChatInput  onClick={handleOnClick}/>
            </div>
        </div>
    )
}

export default Banner;
