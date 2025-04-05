import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
const ReportTable = () => {
    return (
        <div className="flex gap-5">
            <Select>
                <SelectTrigger className="border-none shadow-none focus:ring-0">
                    <SelectValue placeholder="Case category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Non-Rights" className="py-2">Report (For Non-Rights Holders)</SelectItem>
                    <SelectItem value="Restricted" className="py-2">Restricted or Prohibited Products</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="border-none shadow-none focus:ring-0">
                    <SelectValue placeholder="Case status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="waiting process" className="py-2">waiting process</SelectItem>
                    <SelectItem value="processing" className="py-2">processing</SelectItem>
                    <SelectItem value="case been established" className="py-2">case closed(has been established)</SelectItem>
                    <SelectItem value="case not been established" className="py-2">case closed(has not been established)</SelectItem>
                    <SelectItem value="case withdraw" className="py-2">case withdraw</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="border-none shadow-none focus:ring-0">
                    <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Non-Rights" className="py-2">The last 1 month</SelectItem>
                    <SelectItem value="Restricted" className="py-2">The last 3 month</SelectItem>
                    <SelectItem value="Restricted" className="py-2">The last 6 month</SelectItem>
                    <SelectItem value="Restricted" className="py-2">The last 12 month</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default ReportTable