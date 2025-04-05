import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"
import Link from "next/link"

const PenaltiesInformation = () => {
    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">Violation and Penalties</h6>
                <div className="flex items-center gap-5 mt-4">
                    <div className="flex items-center border rounded-md w-full max-w-[224px]">
                        <span className="text-sm border-r px-3 h-full inline-flex items-center text-accent-foreground min-w-fit">Status</span>
                        <Select>
                            <SelectTrigger className="border-none shadow-none focus:ring-0">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All" className="py-2">All</SelectItem>
                                <SelectItem value="Appeal pending" className="py-2">Appeal pending</SelectItem>
                                <SelectItem value="Appeal under review" className="py-2">Appeal under review</SelectItem>
                                <SelectItem value="Cancelled" className="py-2">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center border rounded-md w-full max-w-[262px]">
                        <span className="text-sm border-r px-3 h-full inline-flex items-center text-accent-foreground min-w-fit">Penalty time</span>
                        <Select>
                            <SelectTrigger className="border-none shadow-none focus:ring-0">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All" className="py-2">All</SelectItem>
                                <SelectItem value="Last 30 days" className="py-2">Last 30 days</SelectItem>
                                <SelectItem value="Last 60 days" className="py-2">Last 60 days</SelectItem>
                                <SelectItem value="Last 90 days" className="py-2">Last 90 days</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center border rounded-md w-full">
                        <span className="text-sm border-r px-3 h-full inline-flex items-center text-accent-foreground min-w-fit">Violation ID</span>
                        <Input placeholder="Please input violation id" className="border-none shadow-none focus-visible:ring-0 text-sm" />
                        <span className="text-accent-foreground border-l h-full inline-flex items-center px-3 cursor-pointer"><Search size={14} /></span>
                    </div>
                    <span className="text-blue-600 text-sm cursor-pointer">Reset</span>
                </div>
            </div>
            <div className="bg-background rounded-md px-5 py-5 mt-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-medium text-foreground">Violation type</TableHead>
                            <TableHead className="font-medium text-foreground">Violation ID</TableHead>
                            <TableHead className="font-medium text-foreground">Penalty time</TableHead>
                            <TableHead className="font-medium text-foreground">Status</TableHead>
                            <TableHead className="font-medium text-foreground">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="py-4 text-[#666]">Account security</TableCell>
                            <TableCell className="py-4 text-[#666]">33174350015</TableCell>
                            <TableCell className="py-4 text-[#666]">2024/12/23 11:05:10</TableCell>
                            <TableCell className="py-4 text-[#666]">
                                <button className="px-3 py-1 border rounded-md">Cancelled</button>
                            </TableCell>
                            <TableCell className="py-4 text-[#666]">
                                <Link href={"#"} className="text-blue-600">View details</Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default PenaltiesInformation