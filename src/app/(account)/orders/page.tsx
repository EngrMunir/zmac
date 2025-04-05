import { Suspense } from "react"
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlNoteBook } from "@/lib/icon"
import { Trash } from "lucide-react"
import OrdersTabs from "./ordersTabs"
import OrdersTabSearchFilter from "./ordersTabSearchFilter"

const page = () => {
    const tabList = [
        { value: "view-all", title: "View all" },
        { value: "to-pay", title: "To pay" },
        { value: "to-ship", title: "To ship" },
        { value: "shipped", title: "Shipped" },
        { value: "processed", title: "Processed" },
    ]
    return (
        <Suspense>
            <OrdersTabs>
                <div className="bg-background px-5 py-5 rounded-md ">
                    <div className="flex justify-between items-center">
                        <TabsList className="bg-transparent w-full justify-start gap-8">
                            {
                                tabList.map(({ title, value }) => <TabsTrigger key={value} value={value} className="data-[state=active]:shadow-none text-base px-0 py-0">{title}</TabsTrigger>)
                            }
                        </TabsList>
                        <div className="flex items-center cursor-pointer text-accent-foreground hover:text-primary-foreground transition-all duration-500">
                            <span><Trash size={14} className="inline-block mr-1" /></span>
                            <span className="text-xs  whitespace-nowrap">Deleted orders</span>
                        </div>
                    </div>
                    <OrdersTabSearchFilter/>
                </div>
                {
                    tabList.map(({ value }) => (
                        <TabsContent key={value} value={value} className="bg-background px-5 py-8 rounded-md">
                            <div className="flex flex-col justify-center items-center min-h-[400px]">
                                <span><AlNoteBook className="size-12" /></span>
                                <p>No orders yet Please switch account or feedback</p>
                            </div>
                        </TabsContent>
                    ))
                }
            </OrdersTabs>
        </Suspense>
    )
}

export default page