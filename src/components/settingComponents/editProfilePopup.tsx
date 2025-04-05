import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const EditProfilePopup = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Edit profile</span>
                </DialogTrigger>
                <DialogContent className="rounded-md ">
                    <DialogHeader className="text-start">
                        <DialogTitle className="mb-2">Edit Member Profile</DialogTitle>
                    </DialogHeader>
                    <form action="#" className="grid gap-5">
                        <div className="flex gap-5">
                            <div className="w-full">
                                <label htmlFor="f_name" className="text-sm font-medium">First Name:</label>
                                <Input value={"Mostafizar"} id="f_name" className="text-sm text-[#666]" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="l_name" className="text-sm font-medium">Last Name:</label>
                                <Input value={"Rahman"} id="l_name" className="text-sm text-[#666]" />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full">
                                <label htmlFor="f_name" className="text-sm font-medium">Gender:</label>
                                <RadioGroup defaultValue="male" className="flex">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="male" />
                                        <label htmlFor="male" className="text-sm text-[#666]">Male</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="female" />
                                        <label htmlFor="female" className="text-sm text-[#666]">Female</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="other" id="other" />
                                        <label htmlFor="other" className="text-sm text-[#666]">Other</label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="w-full">
                                <label htmlFor="birthday" className="text-sm font-medium">Birthday:</label>
                                <Input value={"Rahman"} id="birthday" className="text-sm text-[#666]" />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full">
                                <label htmlFor="city" className="text-sm font-medium">City:</label>
                                <Input value={"Lalmonirhat"} id="city" className="text-sm text-[#666]" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="street" className="text-sm font-medium">Street Address:</label>
                                <Input value={"Dahagram"} id="street" className="text-sm text-[#666]" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="zip" className="text-sm font-medium">Zip/Postal Code:</label>
                            <Input value={"5544"} id="zip" className="text-sm text-[#666]" />
                        </div>
                        <Button className="text-lg">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditProfilePopup