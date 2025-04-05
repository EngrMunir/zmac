

import React from 'react'
import AuctionProductContainer from './auctionProductContainer'

const page = () => {
    return (
        <section>
            <div className='bg-background rounded-md px-5 py-5 mb-5'>
                <h5 className='font-medium text-lg capitalize'>Add New auction product</h5>
            </div>
            <AuctionProductContainer />
        </section>
    )
}

export default page