import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import React, { useEffect, useState } from 'react'
import { ProductUploadTabPropsType } from './uploadProductGeneralTab'

const UploadProductShippingTab = ({ handleChangeEvent, setFromValue, fromValue }: ProductUploadTabPropsType) => {
    const [isFreeShippingChecked, setIsFreeShippingChecked] = useState(true);
    const [isFlatRateChecked, setIsFlatRateChecked] = useState(false);

    useEffect(() => {
        setFromValue((prev) => ({ ...prev, 'isFreeShipping': isFreeShippingChecked }))
    }, [isFreeShippingChecked])

    return (
        <div className='flex flex-col gap-7'>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="cash-delivery" className='capitalize text-sm inline-block mb-1'>Cash on Delivery</label>
                <Switch id='cash-delivery' checked={fromValue.isCashOnDelivery} onCheckedChange={(value) => setFromValue((prev) => ({ ...prev, 'isCashOnDelivery': value }))} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="free-shipping" className='capitalize text-sm inline-block mb-1'>Free Shipping</label>
                <Switch id='free-shipping' checked={isFreeShippingChecked} onCheckedChange={(value) => { setIsFreeShippingChecked(value), setIsFlatRateChecked(!value) }} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="flat-rate" className='capitalize text-sm inline-block mb-1'>Flat Rate</label>
                <Switch id='flat-rate' checked={isFlatRateChecked} onCheckedChange={(value) => { setIsFlatRateChecked(value), setIsFreeShippingChecked(!value) }} />
            </div>
            {
                isFlatRateChecked &&
                <div className='grid grid-cols-[30%_auto]'>
                    <label htmlFor="flat-rate-input" className='capitalize text-sm inline-block mb-1'>Shipping cost</label>
                    <Input className='h-11 text-sm text-accent-foreground rounded-tr-none rounded-br-none' id='flat-rate-input' type='number' name='shipping_cost' value={fromValue.shipping_cost} onChange={handleChangeEvent} />
                </div>
            }
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="quantity-mulitiply" className='capitalize text-sm inline-block mb-1'>Is Product Quantity Mulitiply</label>
                <Switch id='quantity-mulitiply' checked={fromValue.isProductQuantityMulitiply} onCheckedChange={(value) => setFromValue((prev) => ({ ...prev, 'isProductQuantityMulitiply': value }))} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="shipping-days" className='capitalize text-sm inline-block mb-1'>Shipping Days</label>
                <div className='flex items-center'>
                    <Input className='h-11 text-sm text-accent-foreground rounded-tr-none rounded-br-none' id='shipping-days' type='number' name='shipping_days' value={fromValue.shipping_days} onChange={handleChangeEvent} />
                    <div className='bg-destructive text-accent-foreground text-sm h-11 px-5 flex items-center border rounded-tr-sm rounded-br-sm'>
                        Days
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadProductShippingTab