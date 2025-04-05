'use client'
import React, { ChangeEventHandler, useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import AuctionProductInfo from './auctionProductInfo'
import AuctionProductImages from './auctionProductImages'
import AuctionProductVideos from './auctionProductVideos'
import AuctionBiddingPrice from './auctionBiddingPrice'
import AuctionPdfSpecification from './auctionPdfSpecification'
import AuctionSeoMeta from './auctionSeoMeta'
import AuctionProductCategory from './auctionProductCategory'
import AuctionShippingConfiguration from './auctionShippingConfiguration'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import AuctionVatTAX from './auctionVatTAX'
import { AuctionProductUploadType } from '@/types/auctionProductUploadType'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
const AuctionProductDescription = dynamic(() => import('./auctionProductDescription'), { ssr: false })

const AuctionProductContainer = () => {
    const [auctionProductFromValue, setAuctionProductFromValue] = useState<AuctionProductUploadType>({
        product_name: '',
        description: '',
        thumbnail: '',
        gallery: [],
        pdf_specification: [],
        brand: '',
        unit: '',
        weight: 0,
        min_purchase: 0,
        tags: [],
        categories: [],
        video_provider: 'youtube',
        video_link: '',
        price: 0,
        tax: 0,
        tax_type: '',
        bidding_date_range: '',
        bidding_price: 0,
        meta_title: '',
        meta_description: '',
        meta_banner_img: [],
        isCashOnDelivery: false,
        shipping_days: 0,
        shipping_cost: 0,
        isFreeShipping: true,
    })

    const handleChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { value, name } = e.target
        setAuctionProductFromValue({ ...auctionProductFromValue, [name]: value })
    }

    console.log(auctionProductFromValue)
    return (
        <div className='grid gap-5'>
            <AuctionProductInfo fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionProductImages fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionProductVideos fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionBiddingPrice fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionProductDescription fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionPdfSpecification fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <AuctionSeoMeta fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <div className='grid grid-cols-2 gap-5'>
                <AuctionProductCategory fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
                <AuctionShippingConfiguration fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <AuctionProductBlogLayout
                    title='Cash on Delivery'
                >
                    <div className='grid grid-cols-[30%_auto]'>
                        <label htmlFor="cash-on-delivery" className='capitalize text-sm inline-block mb-1'>Status</label>
                        <Switch id='cash-on-delivery' onCheckedChange={((value) => (setAuctionProductFromValue({ ...auctionProductFromValue, isCashOnDelivery: value })))} />
                    </div>
                </AuctionProductBlogLayout>

                <AuctionProductBlogLayout
                    title='Estimate Shipping Time'
                >
                    <div>
                        <label htmlFor="shipping-days" className='capitalize text-sm inline-block mb-1'>Shipping Days</label>
                        <div className='flex items-center'>
                            <Input className='h-10 text-sm text-accent-foreground rounded-tr-none rounded-br-none' id='shipping-days' type='number' name='shipping_days' value={auctionProductFromValue.shipping_days} onChange={handleChangeEvent} />
                            <div className='bg-destructive text-accent-foreground text-sm h-10 px-5 flex items-center border rounded-tr-sm rounded-br-sm'>
                                Days
                            </div>
                        </div>
                    </div>
                </AuctionProductBlogLayout>
            </div>
            <AuctionVatTAX fromValue={auctionProductFromValue} setFromValue={setAuctionProductFromValue} handleChangeEvent={handleChangeEvent} />
            <Button className='text-lg'>Submit</Button>
        </div>
    )
}

export default AuctionProductContainer