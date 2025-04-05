import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionVatTAX = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    return (
        <AuctionProductBlogLayout
            title='Vat & TAX'
        >
            <div className='flex justify-between gap-5'>
                <div className='w-full'>
                    <label htmlFor="Tax" className='capitalize text-sm inline-block mb-1'>Tax</label>
                    <Input type='number' defaultValue={0} className='h-11 text-sm text-accent-foreground' id='Tax' name='tax' value={fromValue.tax} onChange={handleChangeEvent} />
                </div>
                <div className='w-full'>
                    <label htmlFor="Tax-type" className='capitalize text-sm inline-block mb-1'>Tax Type</label>
                    <Select onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'tax_type': value }))}>
                        <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground" id='Tax-type'>
                            <SelectValue placeholder="Choose Tax Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="flat" className='py-3'>Flat</SelectItem>
                            <SelectItem value="percent" className='py-3'>Percent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionVatTAX