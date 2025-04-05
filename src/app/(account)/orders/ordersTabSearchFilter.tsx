import React from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from 'lucide-react'

const OrdersTabSearchFilter = () => {
    return (
        <div className="mt-5 flex justify-between">
            <div className="flex w-1/2">
                <Select>
                    <SelectTrigger className="shrink-0 w-32 rounded-tr-none rounded-br-none focus:ring-0 focus:border-black">
                        <SelectValue placeholder="Order" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Order">Order</SelectItem>
                        <SelectItem value="Track">Track</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex w-full">
                    <Input placeholder="Order ID, Product OR Store Name" className="w-full text-sm rounded-none focus-visible:ring-0 focus:border-black" />
                    <div className="shrink-0 bg-secondary text-white flex items-center justify-center px-10 cursor-pointer rounded-tr-md rounded-br-md">
                        <Search size={18} />
                    </div>
                </div>
            </div>
            <Select>
                <SelectTrigger className="w-[230px]">
                    <SelectValue placeholder="All / Last year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All / Last year" className="py-3">All / Last year</SelectItem>
                    <SelectItem value="Last 6 month" className="py-3">Last 6 month</SelectItem>
                    <SelectItem value="Last 1 year" className="py-3">Last 1 year</SelectItem>
                    <SelectItem value="Last 2 year" className="py-3">Last 2 year</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default OrdersTabSearchFilter