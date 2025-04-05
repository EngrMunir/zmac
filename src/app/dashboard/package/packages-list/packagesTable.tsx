import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PackagesTable = () => {
    return (
        <section className='max-w-5xl mx-auto grid grid-cols-3 gap-7.5'>
            <DashboardCardLayout className='py-12'>
                <div className='flex justify-center mb-8 max-h-32 h-full'>
                    <Image width={70} height={70} src={'/images/dashboard/silver-medal.png'} alt='img' className='object-contain' />
                </div>
                <h4 className='text-xl font-bold text-center'>Silver</h4>
                <ul className='text-center text-sm mt-7 mb-10'>
                    <li className='flex items-center justify-center gap-2'> <span className='text-green-600'><Check size={16} /></span> 100 Product Upload Limit</li>
                </ul>
                <h5 className='text-3xl font-bold text-center'>$10.000 <sub className='text-xs font-normal text-muted-foreground'>90 days</sub> </h5>
                <div className='flex justify-center'>
                    <Button size={'sm'} variant={"secondary"} className='mt-12 rounded-sm 3xl:h-11'>Purchase Package</Button>
                </div>
            </DashboardCardLayout>
            <DashboardCardLayout className='py-12'>
                <div className='flex justify-center mb-8 max-h-32 h-full'>
                    <Image width={70} height={70} src={'/images/dashboard/gold-medal.png'} alt='img' className='object-contain' />
                </div>
                <h4 className='text-xl font-bold text-center'>Gold</h4>
                <ul className='text-center text-sm mt-7 mb-10'>
                    <li className='flex items-center justify-center gap-2'> <span className='text-green-600'><Check size={16} /></span> 500 Product Upload Limit</li>
                </ul>
                <h5 className='text-3xl font-bold text-center'>$10.000 <sub className='text-xs font-normal text-muted-foreground'>90 days</sub> </h5>
                <div className='flex justify-center'>
                    <Button size={'sm'} variant={"secondary"} className='mt-12 rounded-sm 3xl:h-11'>Purchase Package</Button>
                </div>
            </DashboardCardLayout>
            <DashboardCardLayout className='py-12'>
                <div className='flex justify-center mb-8 max-h-32 h-full'>
                    <Image width={70} height={70} src={'/images/dashboard/platinum-medal.png'} alt='img' className='object-contain' />
                </div>
                <h4 className='text-xl font-bold text-center'>Platinum</h4>
                <ul className='text-center text-sm mt-7 mb-10'>
                    <li className='flex items-center justify-center gap-2'> <span className='text-green-600'><Check size={16} /></span> 1000 Product Upload Limit</li>
                </ul>
                <h5 className='text-3xl font-bold text-center'>$10.000 <sub className='text-xs font-normal text-muted-foreground'>90 days</sub> </h5>
                <div className='flex justify-center'>
                    <Button size={'sm'} variant={"secondary"} className='mt-12 rounded-sm 3xl:h-11'>Purchase Package</Button>
                </div>
            </DashboardCardLayout>
        </section>
    )
}

export default PackagesTable