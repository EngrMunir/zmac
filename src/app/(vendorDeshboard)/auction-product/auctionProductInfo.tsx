import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Input } from '@/components/ui/input'
import TagsInput from '@/components/ui/tags-input'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { AuctionProductUploadType } from '@/types/auctionProductUploadType'


export type AuctionProductUploadPropsType = {
    handleChangeEvent: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setFromValue: Dispatch<SetStateAction<AuctionProductUploadType>>;
    fromValue: AuctionProductUploadType
}

const AuctionProductInfo = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const handleTagChange = (e: string[]) => {
        setFromValue((prev) => ({ ...prev, 'tags': e }))
    }
    return (
        <AuctionProductBlogLayout title='Product Information'>

            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="title" className='capitalize text-sm inline-block mb-1'>product name <span className='text-red-600'>*</span></label>
                <Input className='h-11 text-sm text-accent-foreground' id='title' name='product_name' value={fromValue.product_name} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="brand" className='capitalize text-sm inline-block mb-1'>Brand</label>
                <div>
                    <Input className='h-11 text-sm text-accent-foreground' id='brand' name='brand' value={fromValue.brand} onChange={handleChangeEvent} />
                    <small className='text-[10px] text-accent-foreground'>You can choose a brand if you'd like to display your product by brand.</small>
                </div>
            </div>

            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="unit" className='capitalize text-sm inline-block mb-1'>Unit <span className='text-red-600'>*</span></label>
                <Input className='h-11 text-sm text-accent-foreground' id='unit' placeholder='Unit (e. g. KG, Pc etc)' name='unit' value={fromValue.unit} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="weight" className='capitalize text-sm inline-block mb-1'>Weight <span className='text-accent-foreground text-xs'>(In Kg)</span></label>
                <Input className='h-11 text-sm text-accent-foreground' id='weight' type='number' defaultValue={0} name='weight' value={fromValue.weight} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="min-purchase" className='capitalize text-sm inline-block mb-1'>Minimum Purchase Qty</label>
                <Input className='h-11 text-sm text-accent-foreground' id='min-purchase' type='number' defaultValue={1} required name='min-purchase' value={fromValue.min_purchase} onChange={handleChangeEvent} />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="tags" className='capitalize text-sm inline-block mb-1'>Tags</label>
                <div>
                    <TagsInput onTagChange={handleTagChange} placeholder='Type and hit enter to add a tag' />
                    <small className='text-[10px] text-accent-foreground'>This is used for search. Input those words by which cutomer can find this product.</small>
                </div>
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionProductInfo