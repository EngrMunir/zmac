import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productsData } from "@/db/productsData"
import { Star } from "lucide-react"

const SimilarItemPopup = ({ isDialogOpen, setIsDialogOpen }: { isDialogOpen: boolean, setIsDialogOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
            {/* <DialogTrigger className="bg-secondary text-secondary-foreground font-bold text-xs rounded-3xl h-9 w-full px-5 hover:opacity-90">
                Similar items
            </DialogTrigger> */}
            <DialogContent className="max-w-[1020px] max-h-[640px] overflow-auto rounded-2xl p-4">

                <Tabs defaultValue="account" className="">
                    <TabsList className="bg-transparent gap-7 p-0 h-auto pb-5">
                        <TabsTrigger value="account" className="text-xl font-bold data-[state=active]:shadow-none rounded-none px-0 py-0 text-foreground relative after:absolute after:w-[80%] after:h-1 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 data-[state=active]:after:bg-secondary ">Similar items</TabsTrigger>
                        <TabsTrigger value="password" className="text-xl font-bold data-[state=active]:shadow-none rounded-none px-0 py-0 text-foreground relative after:absolute after:w-[80%] after:h-1 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 data-[state=active]:after:bg-secondary ">Similar items</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="mt-0">
                        <ul className="border border-[rgb(235,235,235)] rounded-[21px] flex absolute right-[35px] top-[13px]">
                            <li className="text-[15px] leading-9 text-[rgb(253,56,79)] px-4 cursor-pointer border-r border-r-[rgb(235,235,235)]">
                                <img src="https://ae01.alicdn.com/kf/S03af898f346a46ab80fc497af4d2b4a6j/18x48.png" className="h-3 w-[5px] inline-block" />
                                <span className="inline-block ml-0.5">Best matches</span>
                            </li>
                            <li className="text-[15px] leading-9 text-[rgba(0,0,0,0.9)] px-4 cursor-pointer border-r border-r-[rgb(235,235,235)]">
                                <img src="https://ae01.alicdn.com/kf/S0e8ceb5d9e8f4da3b85e0b388e547d6bQ/18x48.png" className="h-3 w-[5px] inline-block" />
                                <span className="inline-block ml-0.5">Popular</span>
                            </li>
                            <li className="text-[15px] leading-9 text-[rgba(0,0,0,0.9)] px-4 cursor-pointer">
                                <img src="https://ae01.alicdn.com/kf/S0e8ceb5d9e8f4da3b85e0b388e547d6bQ/18x48.png" className="h-3 w-[5px] inline-block" />
                                <img src="https://ae01.alicdn.com/kf/S0e8ceb5d9e8f4da3b85e0b388e547d6bQ/18x48.png" className="h-3 w-[5px] inline-block rotate-180 ml-0.5" />
                                <span className="inline-block ml-0.5">Price</span>
                            </li>
                        </ul>
                        <div className="grid grid-cols-5 gap-4">
                            {
                                productsData.map(({ id, thumbnail }) => <Card key={id} thumbnail={thumbnail} />)
                            }
                        </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog >

    )
}

export default SimilarItemPopup


const Card = ({ thumbnail }: { thumbnail: string }) => {
    return (
        <div>
            <Link href={"#"} className="relative block mb-2.5">
                <img src={thumbnail} alt="img" className="rounded-[16px]" />
                <div className="absolute left-0 top-0 bg-[rgba(0,0,0,.04)] rounded-[16px]"> </div>
            </Link>
            <Link href="#" className="line-clamp-1 text-sm">Men Shoes Sneakers man casual Men's Shoes tenis Luxury shoes Trainer Race Breathable Shoes fashion running Shoes for women</Link>

            <div className="flex items-center mt-0.5">
                <ul className="flex gap-0.5">
                    <li><Star fill="black" size={10} /></li>
                    <li><Star fill="black" size={10} /></li>
                    <li><Star fill="black" size={10} /></li>
                    <li><Star fill="black" size={10} /></li>
                    <li><Star fill="black" size={10} /></li>
                </ul>
                <span className="text-accent text-xs ml-1.5">6 sold</span>
            </div>

            <p className="font-bold inline-block">
                <span className="text-xs">US </span>
                <span className="text-2xl">213</span>
                <span className="text-xs">.12</span>
            </p>
        </div>
    )
}