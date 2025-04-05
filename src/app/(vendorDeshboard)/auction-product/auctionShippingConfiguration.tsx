import React, { useEffect, useState } from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionShippingConfiguration = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const [isFlatRateChecked, setisFlatRateChecked] = useState(false)
    const [isFreeShippingChecked, setisFreeShippingChecked] = useState(true)
    useEffect(() => {
        setFromValue((prev) => ({ ...prev, 'isFreeShipping': isFreeShippingChecked }))
    }, [isFreeShippingChecked])
    return (
        <AuctionProductBlogLayout
            title='Shipping Configuration'
        >
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="free-shipping" className='capitalize text-sm inline-block mb-1'>Free Shipping</label>
                <Switch id='free-shipping' checked={isFreeShippingChecked} onCheckedChange={(value) => { setisFreeShippingChecked(value), setisFlatRateChecked(!value) }} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="flat-rate" className='capitalize text-sm inline-block mb-1'>Flat Rate</label>
                <Switch id='flat-rate' checked={isFlatRateChecked} onCheckedChange={(value) => { setisFlatRateChecked(value), setisFreeShippingChecked(!value) }} />
            </div>
            {
                isFlatRateChecked &&
                <div className='grid grid-cols-[30%_auto]'>
                    <label htmlFor="shipping-cost" className='capitalize text-sm inline-block mb-1'>Shipping cost</label>
                    <Input id='shipping-cost' name='shipping_cost' value={fromValue.shipping_cost} onChange={handleChangeEvent} />
                </div>
            }
        </AuctionProductBlogLayout>
    )
}

export default AuctionShippingConfiguration