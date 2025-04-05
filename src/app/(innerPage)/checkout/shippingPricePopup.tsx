import { Dispatch, SetStateAction } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const ShippingPricePopup = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="rounded-md max-w-[650px]">
                <DialogHeader>
                    <DialogTitle className="text-start">Delivery</DialogTitle>
                </DialogHeader>
                <RadioGroup defaultValue="ali-shipping">
                    <div className="bg-[#f9f9f9] p-3 rounded-md">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <label htmlFor="ali-shipping" className="font-semibold sm cursor-pointer">Shipping: BDT3,187.68</label>
                            <RadioGroupItem value="ali-shipping" id="ali-shipping" />
                        </div>
                        <div>
                            <p className="text-accent-foreground text-xs"><span>Delivery:</span> <span className="font-semibold text-foreground">Feb. 15</span></p>
                            <p className="text-xs mt-1">via AliExpress standard shipping</p>
                            <p className="text-xs bg-[#f2f2f2] p-2 rounded-md inline-block mt-1 cursor-pointer">Tracking unavailable</p>
                        </div>
                    </div>
                    <div className="bg-[#f9f9f9] p-3 rounded-md">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <label htmlFor="ems" className="font-semibold sm cursor-pointer">Shipping: BDT3,187.68</label>
                            <RadioGroupItem value="ems" id="ems" />
                        </div>
                        <div>
                            <p className="text-accent-foreground text-xs"><span>Delivery:</span> <span className="font-semibold text-foreground">7 - 15 Days</span></p>
                            <p className="text-xs mt-1">via EMS</p>
                            <p className="text-xs bg-[#f2f2f2] p-2 rounded-md inline-block mt-1 cursor-pointer">Tracking unavailable</p>
                        </div>
                    </div>
                    <div className="bg-[#f9f9f9] p-3 rounded-md">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <label htmlFor="fedx" className="font-semibold sm cursor-pointer">Shipping: BDT3,187.68</label>
                            <RadioGroupItem value="fedx" id="fedx" />
                        </div>
                        <div>
                            <p className="text-accent-foreground text-xs"><span>Delivery:</span> <span className="font-semibold text-foreground">7 - 15 Days</span></p>
                            <p className="text-xs mt-1">via EMS</p>
                            <p className="text-xs bg-[#f2f2f2] p-2 rounded-md inline-block mt-1 cursor-pointer">Tracking unavailable</p>
                        </div>
                    </div>
                </RadioGroup>

            </DialogContent>
        </Dialog>

    )
}

export default ShippingPricePopup