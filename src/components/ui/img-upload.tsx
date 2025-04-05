'use client'
import { File, X } from 'lucide-react'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

export type ImgUploadType = {
  name: string,
  img: string,
  size: number
}
type PropsType = {
  accept?: string,
  description?: string,
  inputId: string,
  isMultiple?: boolean,
  isPDFShow?: boolean,
  onImgChange?: (e: ImgUploadType[], filedName: string) => void
}
const ImgUpload = ({ description, isMultiple, inputId, isPDFShow, accept, onImgChange }: PropsType) => {
  const [selectedImages, setSelectedImages] = useState<ImgUploadType[]>([])

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      const imgArray = filesArray.map((file) => (
        {
          img: URL.createObjectURL(file),
          name: file.name,
          size: file.size
        }
      ))

      let currentImg
      if (isMultiple) {
        currentImg = [...selectedImages, ...imgArray]
      }
      else {
        currentImg = imgArray
      }

      setSelectedImages(currentImg)
      if (onImgChange) {
        onImgChange(currentImg, inputId)
      }
    }
  }

  const handleRemoveselectedImages = (value: string) => {
    const currentImg = selectedImages.filter(({ img }) => img !== value)
    setSelectedImages(currentImg)
    if (onImgChange) {
      onImgChange(currentImg, inputId)
    }
  }


  return (
    <div>
      <label htmlFor={inputId} className='flex border rounded-sm h-11 cursor-pointer'>
        <span className='bg-destructive text-sm text-accent-foreground px-5 flex items-center justify-center'>Browser</span>
        <span className='text-sm text-accent-foreground px-5 flex items-center'>{selectedImages.length ? `${selectedImages.length} File Selected` : 'Choose File'}</span>
        <input type="file" accept={accept} multiple={isMultiple} hidden onChange={handleImgChange} id={inputId} name={inputId} />
      </label>
      {
        selectedImages.length ?
          <div className='mt-3 flex gap-3 flex-wrap'>
            {
              selectedImages.map(({ img, name, size }) => {
                return (
                  <div key={img} className='border rounded-[4px] max-w-[120px] relative flex flex-col justify-between'>
                    <div onClick={() => handleRemoveselectedImages(img)} className='absolute -right-1 -top-1 w-7 h-7 rounded-full flex justify-center items-center bg-destructive cursor-pointer hover:text-primary-foreground transition-all duration-500'>
                      <X size={14} />
                    </div>
                    <div>
                      {
                        isPDFShow ?
                          <span className='flex justify-center items-center h-20 w-[120px] text-accent-foreground'><File size={30} /></span>
                          :
                          <Image width={120} height={80} src={img} alt='img' className='max-h-20 object-contain' />
                      }
                    </div>
                    <div className='bg-destructive px-2 py-0.5'>
                      <span className='text-sm line-clamp-1'>{name}</span>
                      <span className='block text-[10px] text-accent-foreground'>{size} bytes</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          :
          null
      }
      <small className='text-[10px] text-accent-foreground'>{description}</small>
    </div>
  )
}

export default ImgUpload