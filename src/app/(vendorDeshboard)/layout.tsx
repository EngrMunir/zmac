import React, { ReactNode } from 'react'
import Footer from '@/components/sections/footer'
import TopHeader from '@/components/sections/header/topHeader'
import VendorLayoutSidebar from '@/components/vendorLayoutSidebar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-popover">
            <div className="container">
                <TopHeader isCategoryMenuShow={true} />
            </div>
            <section className="py-20 bg-page-header-liner">
                <h2 className="text-4xl text-center">Vendor Deshboard</h2>
            </section>
            <div className="container grid grid-cols-[23%_auto] gap-5 items-start pt-20 pb-25 max-w-[1280px] mx-auto">
                <VendorLayoutSidebar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout