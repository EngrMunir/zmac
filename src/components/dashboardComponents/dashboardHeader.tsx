import { Bell, Globe, Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'
import LanguageSelect from './languageSelect'


const DashboardHeader = () => {
    return (
        <div className='h-20 sticky top-0 z-50 bg-secondary text-secondary-foreground flex justify-between items-center px-5'>
            <div className='flex gap-5 items-center'>
                <span className='cursor-pointer'><Menu size={30} /></span>
                <Link href={""} className='cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-[#292929]'>
                    <Globe size={20} strokeWidth={1} />
                </Link>
            </div>
            <div className='flex gap-10 items-center'>
                <Popover>
                    <PopoverTrigger className='relative'>
                        <Bell />
                        <span className='absolute w-2.5 h-2.5 top-0 right-0 rounded-full bg-green-600 block after:absolute after:top-0 after:left-0  after:w-full after:h-full after:rounded-full after:bg-green-500 after:animate-ping'></span>
                    </PopoverTrigger>
                    <PopoverContent align='end' className='max-w-md w-full p-0 rounded-sm relative'>
                        <ul className='max-h-[500px] overflow-y-auto'>
                            <li>
                                <Link href={""} className='border-b py-3 pl-5 pr-10 block group'>
                                    <p className='text-sm mb-1.5 group-hover:text-primary-foreground transition-all duration-500'>Order: 20250130-20591751 has been picked up</p>
                                    <small className='text-xs text-muted-foreground'>2-Feb-2024, 8:14am</small>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className='border-b py-3 pl-5 pr-10 block group'>
                                    <p className='text-sm mb-1.5 group-hover:text-primary-foreground transition-all duration-500'>Order: 20250130-20591751 has been picked up</p>
                                    <small className='text-xs text-muted-foreground'>2-Feb-2024, 8:14am</small>
                                </Link>
                            </li>

                            <li className='text-xs text-center py-3 absolute bottom-0 bg-destructive w-full'>
                                <Link href={""} className='hover:text-primary-foreground transition-all duration-500'>View All Notification</Link>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>


                <LanguageSelect />

                <div className='flex gap-3 items-center'>
                    <div className='w-12 h-12 rounded-full bg-destructive flex justify-center items-center'>
                        <Image width={50} height={50} src={''} alt='img' className='rounded-full' />
                    </div>
                    <div>
                        <p className=' mb-0.5'>Mostafizar Rahman</p>
                        <p className='text-xs text-muted-foreground'>Seller</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader