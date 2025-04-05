import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const ChangePasswordPopup = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Change password</span>
                </DialogTrigger>
                <DialogContent className="rounded-md ">
                    <DialogHeader className="text-start">
                        <DialogTitle className="mb-2">Change password</DialogTitle>
                    </DialogHeader>
                    <form action="#" className="grid gap-5">
                        <div className="w-full">
                            <label htmlFor="current" className="text-sm font-medium">Current Password:</label>
                            <Input type="password" defaultValue={"mostafizurdh2000@gmail.com"} id="current" className="text-sm h-12 mt-0.5 text-[#666]" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="new" className="text-sm font-medium">New Password:</label>
                            <Input type="password" defaultValue={"mostafizurdh2000@gmail.com"} id="new" className="text-sm h-12 mt-0.5 text-[#666]" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="confr" className="text-sm font-medium">Confirm Password:</label>
                            <Input type="password" defaultValue={"mostafizurdh2000@gmail.com"} id="confr" className="text-sm h-12 mt-0.5 text-[#666]" />
                        </div>
                        <Button className="text-lg">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ChangePasswordPopup