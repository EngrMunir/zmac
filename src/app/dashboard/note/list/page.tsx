import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import { Input } from '@/components/ui/input'

const page = () => {
    const data = [
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52f",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
        {
            id: "728ed52g",
            user: 'zmic platfrom',
            type: "Shipping",
            description: "Orders are processed within 1-2 business days. Please allow extra time during peak seasons or holidays.",
        },
    ]
    return (
        <DashboardCardLayout>
            <DashboardCardLayout.Title
                title='Notes'
                className='mb-5'
            >
                <Input placeholder='Type Name & Press Enter' className='max-w-60 text-sm h-11'/>
            </DashboardCardLayout.Title>

            <DataTable columns={columns} data={data} />
        </DashboardCardLayout>
    )
}

export default page