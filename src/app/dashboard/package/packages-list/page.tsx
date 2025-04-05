import React from 'react'
import PackagesTable from './packagesTable'

const page = () => {
    return (
        <>
            <section className='bg-destructive py-25 text-center mb-20'>
                <h2 className='text-3xl font-bold'>Premium Packages for Sellers</h2>
            </section>
            <PackagesTable />
        </>
    )
}

export default page