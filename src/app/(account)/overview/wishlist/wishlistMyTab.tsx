import React from 'react'
import { List, Plus } from "lucide-react"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button'

const WishlistMyTab = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex items-center gap-1 font-semibold absolute right-20 -top-10 cursor-pointer">
                        <span><Plus size={17} /></span>
                        Create a new list
                    </div>
                </DialogTrigger>
                <DialogContent className="rounded-md max-w-[380px]">
                    <DialogHeader>
                        <DialogTitle className="text-start inline-block">Create a wishlist</DialogTitle>
                    </DialogHeader>
                    <div className="mt-7">
                        <p className="font-semibold">Enter a name for your list then choose if you want it to set it to private or leave as public</p>
                        <Input placeholder="Your list name" className="h-12.5 mt-5" />
                        <div className="mt-5 flex justify-between items-center">
                            <div>
                                <b className="block leading-none">Set as private</b>
                                <small className="text-[#999]">Only you can see items in your list</small>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex justify-between gap-5 mt-5">
                            <Button size={"sm"} variant={"outline"} className="w-full">Cancel</Button>
                            <Button size={"sm"} className="w-full">Create list</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>


            <Drawer>
                <DrawerTrigger asChild>
                    <div className="flex items-center gap-1 font-semibold absolute right-0 -top-10 cursor-pointer">
                        <span><List size={17} /></span>
                        Edit
                    </div>
                </DrawerTrigger>
                <DrawerContent className="pb-5">
                    <div className="max-w-[800px] w-full mx-auto flex justify-between items-center">
                        <RadioGroup>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="all" id="all" />
                                <label id="all" className="font-semibold">All</label>
                            </div>
                        </RadioGroup>
                        <div className="flex gap-5">
                            <Button size={"sm"} className="3xl:h-11 font-semibold">Delete</Button>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>

            <div className="w-full flex flex-col items-center justify-center pt-10 pb-3">
                <img className="max-w-30 pb-8" src="https://ae01.alicdn.com/kf/Sc700e14fefac4cf8bb47ec2f9da0d6det/720x720.png" alt="img" />
                <div className="text-lg font-bold">Lists for all your shopping needs</div>
                <div className="pt-6 grid gap-5">
                    <div className="flex items-center gap-2">
                        <img className="max-w-6" src="https://ae01.alicdn.com/kf/S84914e77326347e696a9ebec3e48b8c4I/96x96.png" alt="img" />
                        <span className="text-sm text-muted">Save time by adding your items and ideas in one convenient location</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="max-w-6" src="https://ae01.alicdn.com/kf/S3767f1dbff8042f08b4d011fe4a7ba94E/96x96.png" alt="img" />
                        <span className="text-sm text-muted">Give great gifts to remember your friend's lists and share yours</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="max-w-6" src="https://ae01.alicdn.com/kf/S623bacad4cb141c689279f701cf4c9d6e/96x96.png" alt="img" />
                        <span className="text-sm text-muted">Check price changes when items from your lists drop in price</span>
                    </div>
                </div>
                <Button className="3xl:text-lg mt-10">
                    <h5>Explore more </h5>
                </Button>
            </div>
        </>
    )
}

export default WishlistMyTab