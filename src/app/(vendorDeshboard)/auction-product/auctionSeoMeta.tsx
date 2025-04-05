import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Input } from '@/components/ui/input'
import ImgUpload, { ImgUploadType } from '@/components/ui/img-upload'
import { Textarea } from '@/components/ui/textarea'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionSeoMeta = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
  const handleImgChange = (e: ImgUploadType[], filedName: string) => {
    if (filedName === 'meta-img') {
      setFromValue((prev) => ({ ...prev, 'meta_banner_img': e }))
    }
  }
  return (
    <AuctionProductBlogLayout
      title='SEO Meta Tags'
    >
      <div className='grid grid-cols-[30%_auto]'>
        <label htmlFor="title" className='capitalize text-sm inline-block mb-1'>title</label>
        <Input className='h-11 text-sm text-accent-foreground' id='title' name='meta_title' value={fromValue.meta_title} onChange={handleChangeEvent} />
      </div>
      <div className='grid grid-cols-[30%_auto]'>
        <label htmlFor="description" className='capitalize text-sm inline-block mb-1'>Description</label>
        <Textarea className='min-h-[200px] text-sm text-accent-foreground border' id='description' name='meta_description' value={fromValue.meta_description} onChange={handleChangeEvent} />
      </div>
      <div className='grid grid-cols-[30%_auto]'>
        <label htmlFor="meta-img" className='capitalize text-sm inline-block mb-1'>Meta Image</label>
        <ImgUpload
          inputId='meta-img'
          onImgChange={handleImgChange}
        />
      </div>
    </AuctionProductBlogLayout>
  )
}

export default AuctionSeoMeta