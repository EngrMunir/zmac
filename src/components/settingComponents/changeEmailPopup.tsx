import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const ChangeEmailPopup = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Change email address</span>
                </DialogTrigger>
                <DialogContent className="rounded-md ">
                    <DialogHeader className="text-start">
                        <DialogTitle className="mb-2">Change email address</DialogTitle>
                    </DialogHeader>
                    <form action="#" className="grid gap-5">
                        <div className="w-full">
                            <label htmlFor="email" className="text-sm font-medium">Emai:</label>
                            <Input type="email" defaultValue={"mostafizurdh2000@gmail.com"} id="email" className="text-sm h-12 mt-1.5 text-[#666]" />
                        </div>
                        <Button className="text-lg">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ChangeEmailPopup