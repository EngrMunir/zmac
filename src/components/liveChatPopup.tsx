'use client'
import { Link2, MessageCircleMore, Send, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const LiveChatPopup = () => {
    const [showDisplay, setShowDiaplay] = useState(false)
    return (
        <div>
            <div className={`rounded-md h-[500px] w-[350px] fixed right-2 bottom-20 z-50 bg-background border border-destructive shadow-3xl transition-all duration-500 ${showDisplay ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                <div className='bg-destructive px-3 py-2'>
                    <div className='flex items-center gap-1'>
                        <div className='relative'>
                            <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-[3px] border-background' />
                            <span className='absolute bottom-1 right-0 w-2.5 h-2.5 rounded-full block bg-green-500 border-2 border-background'></span>
                        </div>
                        <b>HubBot</b>
                    </div>
                </div>
                <div className='px-3 py-5 flex flex-col gap-5 overflow-y-auto max-h-[390px]'>
                    <div className='flex items-start gap-2 justify-start'>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>Hi! I'm Apollo, an AI Assistant. Ask me anything about tawk.to!</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2 justify-end'>
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>How can i order</p>
                        </div>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                    </div>
                    <div className='flex items-start gap-2 justify-start'>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>Your order process like this</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2 justify-start'>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa mollitia iure sunt minus architecto. Earum recusandae itaque fugiat accusamus!</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2 justify-end'>
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>How can i order</p>
                        </div>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                    </div>
                    <div className='flex items-start gap-2 justify-end'>
                        <div className='bg-destructive rounded-[4px] text-sm px-2 py-3'>
                            <p>How can i order</p>
                        </div>
                        <Image width={40} height={40} src="/images/user-img.png" alt="img" className='rounded-full border-2 shrink-0' />
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 border-t w-full flex justify-between items-center pr-3'>
                    <input type="text" placeholder='Type and press enter' className='text-sm px-3 py-4 outline-none w-full' />
                    <div className='text-accent-foreground flex items-center gap-3'>
                        <span className='cursor-pointer hover:text-foreground transition-all duration-500'>
                            <Link2 size={17} />
                        </span>
                        <span className='cursor-pointer hover:text-green-500 transition-all duration-500'>
                            <Send size={16} />
                        </span>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowDiaplay(!showDisplay)} className='fixed right-2 bottom-2 z-50 w-16 h-16 rounded-full shadow-4xl bg-background flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-500'>
                {
                    showDisplay ?
                        <X size={37} />
                        :
                        <MessageCircleMore size={35} />
                }
            </div>
        </div>
    )
}

export default LiveChatPopup