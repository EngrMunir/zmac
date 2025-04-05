import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

const UploadPicture = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Upload picture</span>
            </DialogTrigger>
            <DialogContent className="rounded-md">
                <DialogHeader className="text-start">
                    <DialogTitle className="mb-2">Upload Photo</DialogTitle>
                    <DialogDescription><AlertCircle size={16} className="inline-block" /> Your Photo will be displayed within 24 hours.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-[40%_auto] mt-5">
                    <div>
                        <input type="file" name="" id="img-update" hidden />
                        <label htmlFor="img-update" className="w-25 h-25 flex justify-center items-center text-sm text-accent-foreground border cursor-pointer rounded-sm">Upload Photo</label>
                        <Button size={"xs"} className="w-25 h-8 rounded-sm mt-2">Submit</Button>
                    </div>
                    <div>
                        <b className="text-sm">Uploading Rules</b>
                        <ul className="list-disc list-inside mt-1.5 grid gap-2">
                            <li className="text-xs text-accent-foreground">Please upload a photo that matches the gender, age and status details in your personal profile.</li>
                            <li className="text-xs text-accent-foreground">Use a photo that is appropriate for a business setting. Group photos are not allowed.</li>
                            <li className="text-xs text-accent-foreground">Photos violating the rules stated in the <Link href={"#"} className="text-blue-600">Terms of User</Link> will be removed without notice.</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default UploadPicture