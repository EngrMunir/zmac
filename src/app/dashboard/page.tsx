import React from 'react'
import DashboardStatistics from '@/components/dashboardComponents/dashboardStatistics'
import { CreditCard, Plus, Settings, ShoppingBag, SquareCheck, SquareX, Truck } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DashboardSalesChart from '@/components/dashboardComponents/dashboardSalesChart'
import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'


const page = () => {

    return (
        <div className='grid grid-cols-4 gap-7.5'>
            <DashboardStatistics />
            <div>
                <DashboardCardLayout
                    className='bg-popover'
                >
                    <DashboardCardLayout.Title title='Total Sold' />
                    <DashboardSalesChart />
                </DashboardCardLayout>
                <DashboardCardLayout
                    className='mt-7.5'
                >
                    <DashboardCardLayout.Title title='Sold Amount' />
                    <div className='mt-5'>
                        <p className='text-sm text-muted-foreground'>Your sold amount (current month)</p>
                        <h4 className='text-3xl font-semibold mb-5 mt-4'>$888.990</h4>
                        <p className='text-sm text-muted-foreground'>Last Month: $2,405.990</p>
                    </div>
                </DashboardCardLayout>
            </div>
            <DashboardCardLayout>
                <DashboardCardLayout.Title title='Category wise product count' />
                <ul className='text-sm mt-5 flex flex-col gap-5'>
                    <li className='flex justify-between'>
                        <span>Men Clothing & Fashion</span>
                        <span>9</span>
                    </li>
                    <li className='flex justify-between'>
                        <span>Computer & Accessories</span>
                        <span>20</span>
                    </li>
                    <li className='flex justify-between'>
                        <span>Software</span>
                        <span>3</span>
                    </li>
                </ul>
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    title={`Orders <small class=' text-muted-foreground font-normal text-xs'>(This Month)</small>`}
                />
                <div className='mt-5 flex flex-col gap-5'>
                    <div className='flex items-center gap-5'>
                        <span><ShoppingBag size={30} strokeWidth={1} /></span>
                        <div>
                            <p className='text-sm font-medium mb-1'>New Order</p>
                            <strong className='text-xl text-muted-foreground'>0</strong>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span><SquareX size={30} strokeWidth={1} /></span>
                        <div>
                            <p className='text-sm font-medium mb-1'>Cancelled</p>
                            <strong className='text-xl text-muted-foreground'>0</strong>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span><Truck size={30} strokeWidth={1} /></span>
                        <div>
                            <p className='text-sm font-medium mb-1'>On Delivery</p>
                            <strong className='text-xl text-muted-foreground'>0</strong>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span><SquareCheck size={30} strokeWidth={1} /></span>
                        <div>
                            <p className='text-sm font-medium mb-1'>Delivered</p>
                            <strong className='text-xl text-muted-foreground'>0</strong>
                        </div>
                    </div>
                </div>
            </DashboardCardLayout >
            <div>
                <DashboardCardLayout>
                    <DashboardCardLayout.Title  title='Purchased Package'/>
                    <div className='mt-5 flex gap-5'>
                        <div className='shrink-0'>
                            <Image width={50} height={50} src={'/images/dashboard/platinum-medal.png'} alt='img' />
                        </div>
                        <div>
                            <strong className='text-xs font-semibold'>Current Package:</strong>
                            <p className='font-semibold text-lg mt-0.5'>Platinum</p>
                            <ul className='mt-5 text-xs text-accent-foreground flex flex-col gap-2.5 list-inside list-disc'>
                                <li>Product Upload Limit: 5000 times</li>
                                <li>Preorder Product Upload Limit: 100 times</li>
                                <li>Package Expires at: 2030-03-01</li>
                            </ul>
                            <Button asChild size={'sm'} variant={"destructive"} className='mt-7 font-normal text-sm'>
                                <Link href={"#"}>Upgrade Package</Link>
                            </Button>
                        </div>
                    </div>
                </DashboardCardLayout>
                <DashboardCardLayout className='mt-7.5'>
                    <div className='flex justify-center items-center py-2'>
                        <Image width={200} height={200} src={'/images/dashboard/verified.png'} alt='img' />
                    </div>
                </DashboardCardLayout>
            </div>
            <DashboardCardLayout>
                <DashboardCardLayout.Title title='Money Withdraw'/>
                <div className='py-10 flex justify-center items-center'>
                    <span><CreditCard size={60} strokeWidth={1} /></span>
                </div>
                <Link href={""} className='bg-secondary text-secondary-foreground text-sm w-full flex justify-center items-center py-3 rounded-sm'>Withdraw Now</Link>
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title title='Money Withdraw'/>
                <div className='py-10 flex justify-center items-center'>
                    <span><Plus size={60} strokeWidth={1} /></span>
                </div>
                <Link href={""} className='bg-secondary text-secondary-foreground text-sm w-full flex justify-center items-center py-3 rounded-sm'>Add Now</Link>
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title title='Shop Settings'/>
                <div className='py-10 flex justify-center items-center'>
                    <span><Settings size={60} strokeWidth={1} /></span>
                </div>
                <Link href={""} className='bg-secondary text-secondary-foreground text-sm w-full flex justify-center items-center py-3 rounded-sm'>Go Settings</Link>
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title title='Payment Settings'/>
                <div className='py-10 flex justify-center items-center'>
                    <span><CreditCard size={60} strokeWidth={1} /></span>
                </div>
                <Link href={""} className='bg-secondary text-secondary-foreground text-sm w-full flex justify-center items-center py-3 rounded-sm'>Go Settings</Link>
            </DashboardCardLayout>
        </div >
    )
}

export default page