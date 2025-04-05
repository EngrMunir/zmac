import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WishlistAllTab from "./wishlistAllTab"
import WishlistMyTab from "./wishlistMyTab"
const Wishlist = () => {
    return (
        <div className="bg-background rounded-md px-5 py-5">
            <Tabs defaultValue="All items">
                <TabsList className="bg-transparent gap-5">
                    <TabsTrigger value="All items" className="data-[state=active]:shadow-none font-medium px-0 py-0 text-lg">All items(0)</TabsTrigger>
                    <TabsTrigger value="My lists" className="data-[state=active]:shadow-none font-medium px-0 py-0 text-lg">My lists(0)</TabsTrigger>
                </TabsList>
                <TabsContent value="All items" className="w-full relative">
                    <WishlistAllTab />
                </TabsContent>
                <TabsContent value="My lists" className="w-full relative">
                    <WishlistMyTab />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default Wishlist
