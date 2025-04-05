import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { AuctionProductUploadPropsType } from './auctionProductInfo'


const AuctionProductVideos = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    return (
        <AuctionProductBlogLayout
            title='Product Videos'
        >
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="video-provider" className='capitalize text-sm inline-block mb-1'>Video Provider</label>
                <Select value={fromValue.video_provider} onValueChange={(value) => setFromValue((prev) => ({ ...prev, 'video_provider': value }))}>
                    <SelectTrigger className="w-full h-11 rounded-sm text-accent-foreground capitalize" id='video-provider'>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="youtube" className='py-3'>Youtube</SelectItem>
                        <SelectItem value="dailymotion" className='py-3'>Dailymotion</SelectItem>
                        <SelectItem value="vimeo" className='py-3'>vimeo</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="video-link" className='capitalize text-sm inline-block mb-1'>Video Link</label>
                <div>
                    <Input type="url" className='h-11 text-sm text-accent-foreground' id='video-link' name="video_link" value={fromValue.video_link} onChange={handleChangeEvent} />
                    <small className='text-[10px] text-accent-foreground'>Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                </div>
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionProductVideos