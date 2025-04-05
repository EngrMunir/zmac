import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { Input } from '@/components/ui/input'

const page = () => {
    const data = [
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52f",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
        {
            id: "728ed52g",
            package: 'Platinum',
            packagePrice: "$50",
            paymentType: "Online payment",
        },
    ]
    return (
        <DashboardCardLayout>
            <DashboardCardLayout.Title
                title='Purchase Package List'
                className='mb-5'
            >
                <Input placeholder='Type Name & Press Enter' className='max-w-60 text-sm h-11' />
            </DashboardCardLayout.Title>
            <DataTable columns={columns} data={data} />
        </DashboardCardLayout>
    )
}

export default page