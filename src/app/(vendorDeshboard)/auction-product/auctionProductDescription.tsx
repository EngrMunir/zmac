import React from 'react'
import JoditEditor from 'jodit-react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import useJoditEditorConfig from '@/hooks/useJoditEditorConfig'
import { AuctionProductUploadPropsType } from './auctionProductInfo'

const AuctionProductDescription = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const config = useJoditEditorConfig()
    return (
        <AuctionProductBlogLayout
            title='Product Description'
        >
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="description" className='capitalize text-sm inline-block mb-1'>Description</label>
                <JoditEditor
                    value={fromValue.description}
                    config={config}
                    // tabIndex={1}
                    className='text-sm'
                    onBlur={newContent => setFromValue((prev) => ({ ...prev, 'description': newContent }))}
                    onChange={newContent => setFromValue((prev) => ({ ...prev, 'description': newContent }))}
                />
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionProductDescription