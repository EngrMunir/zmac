import React from 'react'
import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import { Input } from '@/components/ui/input'
import { columns } from './columns'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DataTable } from './data-table'

const WholesaleProducts = () => {
    const data = [
        {
            id: "728ed52f",
            name: 'Accutime Kids Microsoft Minecraft Green Educational Touchscreen Smart Watch Toy for Boys, Girls, Toddlers - Selfie Cam, Learning Games, Alarm, Calculator, Pedometer & More (Model: MIN4045AZ)',
            info: "Accutime Kids Microsoft Minecraft Green Educational Touchscreen Smart Watch Toy for Boys, Girls, Toddlers - Selfie Cam, Learning Games, Alarm, Calculator, Pedometer & More (Model: MIN4045AZ) ",
            totalStock: "Online payment",
            approved: true,
            published: "Online payment",
            featured: true,
        },]
    return (
        <DashboardCardLayout>
            <DashboardCardLayout.Title
                title='All Wholesale Product'
                className='mb-5'
            >
                <div className='flex gap-5 shrink'>
                    <div className='w-[240px]'>
                        <Select>
                            <SelectTrigger className="h-11 rounded-sm capitalize w-full">
                                <SelectValue placeholder="sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rating-high-low" className='py-3'>Rating (High to Low)</SelectItem>
                                <SelectItem value="rating-low-high" className='py-3'>Rating (Low to High)</SelectItem>
                                <SelectItem value="num-sale-high-low" className='py-3'>Num Of Sale (High to Low)</SelectItem>
                                <SelectItem value="num-sale-low-high" className='py-3'>Num Of Sale (Low to High)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='w-[240px]'>
                        <Input placeholder='Type Name & Press Enter' className='w-full text-sm h-11' />
                    </div>
                </div>
            </DashboardCardLayout.Title>
            <DataTable columns={columns} data={data} />
        </DashboardCardLayout>
    )
}

export default WholesaleProducts