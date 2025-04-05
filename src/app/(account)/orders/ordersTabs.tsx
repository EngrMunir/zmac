'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Tabs } from '@/components/ui/tabs'

const OrdersTabs = ({ children }:{children:any}) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('tab')

    return (
        <Tabs defaultValue={search || "view-all"} >
            {children}
        </Tabs>
    )
}

export default OrdersTabs