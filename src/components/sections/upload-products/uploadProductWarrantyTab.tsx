import React from 'react'
import { Switch } from '@/components/ui/switch'
import { ProductUploadTabPropsType } from './uploadProductGeneralTab'

const UploadProductWarrantyTab = ({ handleChangeEvent, setFromValue, fromValue }: ProductUploadTabPropsType) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="quantity-mulitiply" className='capitalize text-sm inline-block mb-1'>Warranty</label>
                <Switch id='quantity-mulitiply' checked={fromValue.isWarranty} onCheckedChange={(value) => setFromValue((prev) => ({ ...prev, 'isWarranty': value }))} />
            </div>
        </div>
    )
}

export default UploadProductWarrantyTab