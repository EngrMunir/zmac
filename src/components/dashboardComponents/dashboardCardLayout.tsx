import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'


const Title = ({ children, titleClass, className, title }: { children?: ReactNode; titleClass?: string; className?: string; title?: string; }) => {
    return (
        <div className={cn('flex justify-between items-center border-b pb-3', className)}>
            {title && <h5 className={cn('font-semibold', titleClass)} dangerouslySetInnerHTML={{ __html: title }}></h5>}
            {children}
        </div>
    )
}

const DashboardCardLayout = ({ className, children }: { className?: string; children: ReactNode }) => {
    return (
        <div className={cn('rounded-sm p-5 border', className)}>
            {children}
        </div>
    )
}

DashboardCardLayout.Title = Title

export default DashboardCardLayout

