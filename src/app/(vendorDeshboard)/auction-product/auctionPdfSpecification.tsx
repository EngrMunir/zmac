import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import ImgUpload, { ImgUploadType } from '@/components/ui/img-upload'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionPdfSpecification = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
        const handleImgChange = (e: ImgUploadType[], filedName: string) => {
            if (filedName === 'pdf-specification') {
                setFromValue((prev) => ({ ...prev, 'pdf_specification': e }))
            }
        }
    return (
        <AuctionProductBlogLayout
            title='PDF Specification'
        >
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="pdf-specification" className='capitalize text-sm inline-block mb-1'>PDF Specification</label>
                <ImgUpload
                    inputId='pdf-specification'
                    isPDFShow={true}
                    isMultiple={true}
                    accept="application/pdf"
                    onImgChange={handleImgChange}
                />
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionPdfSpecification