import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

const RefundAndReturn = () => {
    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">Returns/refunds</h6>
            </div>

            <Tabs defaultValue="In progress" className="mt-5">
                <div className="bg-background px-5 py-5 rounded-md ">
                    <TabsList className="bg-transparent w-full justify-start gap-8">
                        <TabsTrigger value="In progress" className="data-[state=active]:shadow-none text-base px-0 py-0">In progress(0)</TabsTrigger>
                        <TabsTrigger value="Awaiting returns" className="data-[state=active]:shadow-none text-base px-0 py-0">Awaiting returns(0)</TabsTrigger>
                    </TabsList>
                    <div className='flex items-center gap-5 mt-3'>
                        <Input placeholder='Order Number' className="w-full h-11 text-sm" />
                        <Input placeholder='Store Name' className="w-full h-11 text-sm" />
                        <Select>
                            <SelectTrigger className="w-full h-11 rounded-tr-none rounded-br-none focus:ring-0 focus:border-black">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="In Progress">In Progress</SelectItem>
                                <SelectItem value="Awaiting Returns">Awaiting Returns</SelectItem>
                                <SelectItem value="Complete">Complete</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="w-full flex justify-end">
                            <Button size={"xs"} className="rounded-full px-8">Search</Button>
                        </div>
                    </div>
                </div>
                <TabsContent value="In progress" className="bg-background px-5 py-5 mt-5 rounded-md">
                    <div className="grid grid-cols-2 items-start">
                        <div>
                            <p className="border-b pb-2 mb-4">Order information</p>
                            <p>No results for this term. Please try another.</p>
                        </div>
                        <div>
                            <p className="border-b pb-2 mb-4">Current status</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="Awaiting returns" className="bg-background px-5 py-5 mt-5 rounded-md">
                    <div className="grid grid-cols-2 items-start">
                        <div>
                            <p className="border-b pb-2 mb-4">Order information</p>
                        </div>
                        <div>
                            <p className="border-b pb-2 mb-4">Current status</p>
                        </div>
                    </div>
                </TabsContent>

            </Tabs>

        </section>
    )
}

export default RefundAndReturn