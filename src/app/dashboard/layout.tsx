import DashboardHeader from '@/components/dashboardComponents/dashboardHeader'
import DashboardSidebar from '@/components/dashboardComponents/dashboardSidebar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='grid grid-cols-[18%_auto] items-start'>
            <DashboardSidebar />
            <div>
                <DashboardHeader />
                <div className='mx-5 mt-5 pb-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout