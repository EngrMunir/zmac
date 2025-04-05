import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Camera } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='bg-background rounded-md p-5'>
      <form action="" className='flex flex-col gap-5'>
        <div>
          <label htmlFor="banner-img" className='capitalize text-sm border rounded-md h-[220px] flex justify-center items-center cursor-pointer'>
            <p className='text-muted-foreground text-center flex flex-col items-center justify-center'>
              <Camera size={50} strokeWidth={1} />
              <span>Upload Banner</span>
            </p>
          </label>
          <input type='file' id='banner-img' hidden />
        </div>
        <div>
          <label htmlFor="shop-name" className='capitalize text-sm inline-block mb-1'>shop name</label>
          <Input id='shop-name' className='h-10'/>
        </div>
        <div className='flex justify-end'>
          <Button type='submit' className='w-40'>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default page