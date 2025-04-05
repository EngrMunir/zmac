import { Dispatch, SetStateAction } from "react"
import { Plus, ShieldCheck } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


const AddPaymentMethodPopup = ({ isCheckoutPageTriggerBtn }: { isCheckoutPageTriggerBtn: boolean }) => {

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {
                        isCheckoutPageTriggerBtn ?
                            <div>
                                <p className="font-semibold text-sm cursor-pointer">Add New Card</p>
                                <div className="flex gap-2 mt-1">
                                    <img src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" className="max-h-4 cursor-pointer" alt="" />
                                    <img src="https://ae01.alicdn.com/kf/S2da8aa6ecf334395adbfa7d7c7664bd1w/216x144.png" className="max-h-4 cursor-pointer" alt="" />
                                    <img src="https://ae01.alicdn.com/kf/Sb834596a8be84a8ca6b30423341d4dack/216x144.png" className="max-h-4 cursor-pointer" alt="" />
                                    <img src="https://ae01.alicdn.com/kf/S4cb4b1cf9aab44b0a7ac31a9df1d615dY/216x144.png" className="max-h-4 cursor-pointer" alt="" />
                                </div>
                            </div>
                            :
                            <div className="bg-[#f0f3f7] max-w-[448px] w-full px-5">
                                <div className="h-[262px] text-center flex justify-center items-center gap-3 cursor-pointer">
                                    <span className="w-6 h-6 p-0.5 rounded-full border border-secondary flex justify-center items-center">
                                        <Plus />
                                    </span>
                                    <strong className="text-lg block">Add New Card</strong>
                                </div>
                            </div>
                    }
                </DialogTrigger>
                <DialogContent className="rounded-md max-w-[800px]">
                    <DialogHeader className="mb-5">
                        <DialogTitle>Provide further information</DialogTitle>
                        <p className="text-xs text-[#01a971] font-light"> <ShieldCheck size={14} className="inline-block" /> Your payment information is safe with us</p>
                    </DialogHeader>
                    <div className="flex gap-3 bg-[#fff7f4] py-3 px-3 rounded-md">
                        <b>Add new card</b>
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/Sfa75aa3fa300480d8639fb482fd3bac5N/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S83890fb8e2a042e8ae12613785382752q/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/Sf14f351eb8754ed29274ff420aae88b4y/216x144.png" />
                        <img className="max-h-5" src="https://img.alicdn.com/tfs/TB10xg6dq1s3KVjSZFAXXX_ZXXa-77-48.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/Sf128191cf8b142d793460cbae9dc5d14d/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/Sea5aa5f7a6fa467ea0f5309ca984c7ccz/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S158e69bc3a2f497c8401adc1ee219df7j/216x144.png" />
                        <img className="max-h-5" src="https://ae01.alicdn.com/kf/S8331b2acbf4a439f960a474048fb401fv/216x144.png" />
                    </div>
                    <form action="" className="grid gap-5 mt-3">
                        <div className="grid grid-cols-2 gap-5">
                            <Input placeholder="Card number" className="text-sm h-11" />
                            <Input placeholder="Name on card" className="text-sm h-11" />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="grid grid-cols-2 gap-5">
                                <Input placeholder="MM" className="text-sm h-11" />
                                <Input placeholder="YY" className="text-sm h-11" />
                            </div>
                            <Input placeholder="CVV" className="text-sm h-11" />
                        </div>
                        <span className="text-sm text-[#999] leading-relaxed">After you add a card, a small amount (€1 or US $1, depending on the card issuing country) will make the pre-authorization to your card for verification purposes only. It will be refunded within 1-7 business days.</span>
                        <div>
                            <Button variant={"secondary"} className="px-11">Submit</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default AddPaymentMethodPopup