import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import ImgUpload, { ImgUploadType } from '@/components/ui/img-upload'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionProductImages = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const handleImgChange = (e: ImgUploadType[], filedName: string) => {
        if (filedName === 'gallery') {
            setFromValue((prev) => ({ ...prev, 'gallery': e }))
        }
        if (filedName === 'thumbnail') {
            setFromValue((prev) => ({ ...prev, 'thumbnail': e }))
        }
    }
    return (
        <AuctionProductBlogLayout title='Product Images'>
            <div className='grid grid-cols-[30%_auto]'>
                <label className='capitalize text-sm inline-block mb-1'>Gallery Images <span className='text-xs text-accent-foreground'>(600x600)</span> <span className='text-red-600'>*</span></label>
                <ImgUpload
                    inputId='gallery'
                    isMultiple={true}
                    description='These images are visible in product details page gallery. Use 600x600 sizes images.'
                    onImgChange={handleImgChange}
                />
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label className='capitalize text-sm inline-block mb-1'>Thumbnail Image <span className='text-xs text-accent-foreground'>(300x300)</span></label>
                <ImgUpload
                    inputId='thumbnail'
                    // isMultiple={true}
                    onImgChange={handleImgChange}
                    description='This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around main object of your image as we had to crop some edge in different devices to make it responsive.'
                />
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionProductImages