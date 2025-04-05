import AddPaymentMethodPopup from "@/components/addPaymentMethodPopup"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const Payment = () => {
    return (
        <div>
            <div>
                <div className="rounded-md bg-background px-5 py-5 flex justify-between items-center">
                    <h6 className="font-semibold text-2xl">Payment</h6>
                    <Dialog>
                        <DialogTrigger>
                            <span className="flex items-center gap-1">Settings
                                <span><ChevronRight size={17} /></span>
                            </span>
                        </DialogTrigger>
                        <DialogContent className="rounded-md max-w-[420px] h-[300px]">
                            <div>
                                <DialogHeader>
                                    <DialogTitle>Settings</DialogTitle>
                                </DialogHeader>
                                <div className="h-full w-full flex justify-center mt-5">
                                    <Button size={'sm'} className="px-15 rounded-full">Confirm</Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
                <div className="rounded-md bg-background px-5 py-5 mt-5">
                    <h6 className="font-semibold text-2xl border-b w-full pb-4">Bonus <span className="text-base font-medium">Payment information is encrypted</span></h6>
                    <div className="mt-4 ">
                        <p className="font-semibold">Bonus balance</p>
                        <div className="bg-[#f0f3f7] max-w-[448px] mt-2 px-5 py-5">
                            <span className="border-b border-b-[#dedee9] block pb-2">Bonus</span>
                            <div className="text-center mt-5">
                                <span>Total</span>
                                <strong className="text-[#ccc] text-[28px] block">BDT0.00</strong>
                            </div>
                            <div className="mt-6 bg-[#ffe4e6] p-3 rounded-md flex items-center gap-2">
                                <p className="text-xs font-semibold">Bonus is an amount of virtual funds from Zmac.</p>
                                <Button variant={"secondary"} size={"xs"} className="rounded-full">Learn more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-md bg-background px-5 py-5 mt-5">
                <h6 className="font-semibold text-2xl border-b w-full pb-4">Cards</h6>
                <div className="mt-4">
                    <AddPaymentMethodPopup isCheckoutPageTriggerBtn={false}/>
                    <span className="block mt-1.5 text-sm">No cards saved. Add one below to get started.</span>
                </div>
            </div>

            <div className="rounded-md bg-background px-5 py-5 mt-5">
                <h6 className="font-semibold text-lg border-b w-full pb-4">Zmac protects your payment information</h6>
                <ul className="list-disc list-inside grid gap-1.5 mt-5">
                    <li className="text-sm text-[#666]">We follow the Payment Card Industry Data Security Standard ( PCI DSS ) when handing card data</li>
                    <li className="text-sm text-[#666]">All information remains secure and uncompromised</li>
                    <li className="text-sm text-[#666]">All data is encrypted</li>
                    <li className="text-sm text-[#666]">Your card information will never be mishandled or sold</li>
                </ul>
                <div className="mt-5">
                    <img src="https://ae01.alicdn.com/kf/S2c993e9f3e3a4b3ab4219cbbca02a6997/670x66.png" alt="payment method" className="max-h-[33px]" />
                </div>
            </div>


        </div>
    )
}

export default Payment


