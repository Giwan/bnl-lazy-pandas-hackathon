"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Upload from '@/components/Upload';

const Ask = () => {
    return (
        <div id="ask-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 ask-bg'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>How can I help you?</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Can you help me furnish my room?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Yes, I can help you furnish your room. Please upload a picture of your room and I will get back to you with a design.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Upload />
                </div>

            </div>
        </div>
    )
}

export default Ask;