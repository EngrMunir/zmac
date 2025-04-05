import React, { ReactNode } from 'react'

const AuctionProductBlogLayout = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className='bg-background rounded-md px-5 py-5'>
            <h6 className='border-b pb-3 mb-5 font-medium'>{title}</h6>
            <div className='w-full flex-1 flex flex-col gap-4'>
                {children}
            </div>
        </div>
    )
}

export default AuctionProductBlogLayout