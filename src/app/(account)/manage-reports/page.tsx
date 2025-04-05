import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReportTable from "./reportTable"
import ReportsList from "./reportsList"


const ManageReports = () => {
    return (
        <div>
            <Tabs defaultValue="Submit a Report">
                <TabsList className="bg-background px-0 py-0 h-auto rounded-bl-none rounded-br-none">
                    <TabsTrigger value="Submit a Report" className="data-[state=active]:shadow-none py-4 px-6">Submit a Report</TabsTrigger>
                    <TabsTrigger value="My Reports" className="data-[state=active]:shadow-none py-4 px-6">My Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="Submit a Report" className="rounded-md rounded-tl-none bg-background px-5 py-5 mt-0">
                    <div className="bg-[rgba(253,56,79,.08)] px-3 py-3 rounded-md">
                        <p className="text-sm text-accent-foreground">Please describe the situation as clearly and objectively as possibile. All reports will remain anonymous and will be processed by AliExpress as soon as possible. Please do not re-submit your report(s).</p>
                    </div>
                    <ReportsList/>
                </TabsContent>
                <TabsContent value="My Reports" className="rounded-md rounded-tl-none bg-background px-5 py-5 mt-0">
                    <ReportTable />
                    <div className="border-t-4 mt-3 h-[450px] grid items-center">
                        <p className="text-accent-foreground text-center">No case record under current filter, you could search for other time period, case status or category.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ManageReports