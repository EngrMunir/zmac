import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ChevronRight, CircleAlert } from "lucide-react"

const ShoppingCredit = () => {
    const tabsData = [
        { value: "all", title: "All" },
        { value: "pending", title: "Pending" },
        { value: "earned", title: "Earned" },
        { value: "coming-soon", title: "Coming soon" },
        { value: "used", title: "Used" },
        { value: "expired", title: "Expired" }
    ];

    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">Shopping credit</h6>
            </div>
            <div className="bg-background rounded-md px-4 py-4 mt-5">
                <Link href={"#"} className="flex items-center justify-between bg-popover text-[#666] px-3 py-3 rounded-md">
                    <small className="text-xs flex gap-1"><CircleAlert size={14} /> Check the shopping credit Terms & Conditions</small>
                    <span><ChevronRight size={16} /></span>
                </Link>
                <div className="mt-4">
                    <div className="text-xs text-muted leading-3">Total for Bangladesh</div>
                    <div className="mt-1">
                        <span className="text-[25px] leading-8 font-bold">US $0 </span>
                        <span className="font-bold text-xs">
                            ≈BDT0&nbsp;
                            <span className=""><AlertCircle size={12} className="inline-block" /></span>
                        </span>
                    </div>
                </div>
                <Tabs defaultValue="all" >
                    <div className="bg-background pt-5">
                        <TabsList className="bg-transparent w-full justify-start gap-8">
                            {tabsData.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="data-[state=active]:shadow-none text-base px-0 py-0"
                                >
                                    {tab.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {
                        tabsData.map(({ value }) => (
                            <TabsContent key={value} value={value} className="bg-background px-5 py-8 rounded-md">
                                <div className="text-center flex flex-col justify-center items-center pt-10 pb-8">
                                    <img className="max-w-[154px]" src="https://ae01.alicdn.com/kf/S0e6e43d468bc421d903f07f16403cb56V/614x614.png" />
                                    <div className="text-lg font-bold mt-5 pb-5">No records here yet</div>
                                    <div className="text-xs text-muted">Only records within 6 months are shown. Get more shopping credit by playing games, earning cashback, and finding what you love.</div>
                                    <div className="text-xs text-muted">Earn shopping credit by playing games and more! </div>
                                </div>
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>
        </section>
    )
}

export default ShoppingCredit