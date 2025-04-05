import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Feedback = () => {
    return (
        <div>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">FeedbackView</h6>
            </div>
            <div className="bg-background py-5 px-5 rounded-md mt-5">
                <p className="text-sm mb-2 text-accent-foreground">Guidelines</p>
                <ol className="list-decimal list-inside grid gap-2">
                    <li className="text-sm text-accent-foreground">You can leave feedback for sellers within 30 days in "Orders Awaiting My Feedback".</li>
                    <li className="text-sm text-accent-foreground">Feedback will be published when both you and the seller have left feedback, or at the end of the 30 days.</li>
                    <li className="text-sm text-accent-foreground"><Link href={"#"} className="hover:text-primary-foreground transition-all duration-300">Learn more about our Feedback Rating Policies</Link></li>
                </ol>
            </div>
            <div className="mt-5">
                <Tabs defaultValue="Orders Awaiting My Feedback">
                    <TabsList className="bg-background px-0 py-0 h-auto">
                        <TabsTrigger value="Orders Awaiting My Feedback" className="data-[state=active]:bg-[#999]  data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none py-3 px-4">Orders Awaiting My Feedback</TabsTrigger>
                        <TabsTrigger value="Reviews About You" className="data-[state=active]:bg-[#999]  data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none py-3 px-4">Reviews About You</TabsTrigger>
                        <TabsTrigger value="Reviews By You" className="data-[state=active]:bg-[#999]  data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none py-3 px-4">Reviews By You</TabsTrigger>
                    </TabsList>
                    <div className="bg-background py-5 px-5">
                        <div className="flex max-w-[400px]">
                            <Input className="focus-visible:ring-0 rounded-tr-none rounded-br-none" />
                            <Button variant={"secondary"} size={"xs"} className="px-8 -ml-2 rounded-tl-none rounded-bl-none">Search</Button>
                        </div>
                    </div>
                    <TabsContent value="Orders Awaiting My Feedback" className="rounded-md bg-background px-5 pb-5 mt-0">
                        <Table>
                            <TableHeader className="bg-popover">
                                <TableRow>
                                    <TableHead className="w-[300px]">Order Details</TableHead>
                                    <TableHead>Feedback</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>No orders waiting for feedback</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="Reviews About You" className="rounded-md bg-background px-5 pb-5 mt-0">
                        <Table>
                            <TableHeader className="bg-popover">
                                <TableRow>
                                    <TableHead className="w-[300px]">Order Details</TableHead>
                                    <TableHead>Feedback</TableHead>
                                    <TableHead className="w-[180px]">Feedback Status</TableHead>
                                    <TableHead className="w-[150px]">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>No orders waiting for feedback</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="Reviews By You" className="rounded-md bg-background px-5 pb-5 mt-0">
                        <Table>
                            <TableHeader className="bg-popover">
                                <TableRow>
                                    <TableHead className="w-[300px]">Order Details</TableHead>
                                    <TableHead>Feedback</TableHead>
                                    <TableHead className="w-[180px]">Feedback Status</TableHead>
                                    <TableHead className="w-[150px]">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>No orders waiting for feedback</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabsContent>

                </Tabs>

            </div>
        </div>
    )
}

export default Feedback