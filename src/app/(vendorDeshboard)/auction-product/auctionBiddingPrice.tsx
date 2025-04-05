import React, { useEffect, useState } from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Input } from '@/components/ui/input'
import DateTimePickPicker from '../../../components/sections/upload-products/dateTimePickPicker'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionBiddingPrice = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const [selectedDateTime, setSelectedDateTime] = useState({})
    useEffect(() => {
        setFromValue((prev) => ({ ...prev, 'bidding_date_range': selectedDateTime }))
    }, [selectedDateTime])
    return (
        <AuctionProductBlogLayout
            title='Product Bidding Price + Date Range'
        >
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="bidding-price" className='capitalize text-sm inline-block mb-1'>Starting bidding price <span className='text-primary-foreground'>*</span></label>
                <Input className='h-11 text-sm text-accent-foreground' id='bidding-price' type='number' defaultValue={1} name='bidding_price' value={fromValue.bidding_price} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="bidding-date" className='capitalize text-sm inline-block mb-1'>Auction Date Range  <span className='text-primary-foreground'>*</span></label>
                <DateTimePickPicker setSelectedDateTime={setSelectedDateTime} />
            </div>

        </AuctionProductBlogLayout>
    )
}

export default AuctionBiddingPrice