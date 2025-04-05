import Footer from '@/components/sections/footer'
import TopHeader from '@/components/sections/header/topHeader'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="container">
                <TopHeader isCategoryMenuShow={true} />
            </div>
            {children}
            <Footer />
        </>
    )
}

export default layout