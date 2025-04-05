import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const ChangNumberPopup = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Change phone number</span>
                </DialogTrigger>
                <DialogContent className="rounded-md ">
                    <DialogHeader className="text-start">
                        <DialogTitle className="mb-2">Change phone number</DialogTitle>
                    </DialogHeader>
                    <form action="#" className="grid gap-5">
                        <div className="w-full">
                            <label htmlFor="email" className="text-sm font-medium">Phone Number:</label>
                            <Input defaultValue={"+8801575699193"} id="email" className="text-sm h-12 mt-1.5 text-[#666]" />
                        </div>
                        <Button className="text-lg">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ChangNumberPopup