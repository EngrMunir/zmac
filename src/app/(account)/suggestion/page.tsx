import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const Suggestion = () => {
    return (
        <section className="bg-background px-5 py-5 rounded-md">
            <div className="bg-[rgba(253,56,79,.08)] px-3 py-3 rounded-md">
                <p className="text-sm text-accent-foreground">
                    This page is to collect your suggestions so we can always improve AliExpress. To receive help with any recent or current problems related to your order, shipment, refund process, etc., please go to
                    <Link href={"#"} className="text-blue-600"> Help Center</Link>
                </p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-lg">Any suggestions for us?</h4>
                <small>Submit your suggestions or feedback here. We read all of them, so we could constantly improve our services.</small>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="block font-semibold px-20 rounded-full mt-2">Submit suggestions</Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-md max-w-[720px]">
                        <DialogHeader>
                            <DialogTitle>Add new suggestion</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-5 mt-4 relative">
                            <div>
                                <label htmlFor="bug" className="text-sm inline-block mb-2">Please first let us know what you'd like to do:</label>
                                <Select>
                                    <SelectTrigger id="bug" className="h-11">
                                        <SelectValue placeholder="Report a bug" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Report a bug">Report a bug</SelectItem>
                                        <SelectItem value="Request a feature">Request a feature</SelectItem>
                                    </SelectContent>
                                </Select>
                                <textarea
                                    className="border w-full rounded-md min-h-[200px] mt-5 px-3 py-3 text-sm"
                                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere porro, eveniet aut quas deserunt harum."

                                />
                                <div className="mt-4">
                                    <input type="file" name="" id="img-update" hidden />
                                    <label htmlFor="img-update" className="w-20 h-[70px] flex justify-center items-center text-sm text-accent-foreground border cursor-pointer rounded-sm">
                                        <Camera size={30} />
                                    </label>
                                    <div className="text-xs text-accent-foreground mt-2">You can upload a maximum 5 files, individual image size should not exceed 1MB and supported file formats are PNG and JPG.</div>
                                </div>
                                <Input defaultValue={"mostafizurdh2000@gmail.com"} className="text-sm h-11 mt-5" />
                            </div>
                            <div>
                                <img src="/images/suggestions.png" alt="suggestions" />
                                <div className="absolute bottom-0 right-0">
                                    <Button className="rounded-full w-[200px] font-semibold" size={"sm"}>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
            <div className="mt-5">
                <p className="font-semibold border-b pb-1">Suggestion list</p>
                <small className="text-xs text-accent-foreground block mt-1">You haven't submitted any suggestions yet. We would like to hear from you!</small>
            </div>
        </section>
    )
}

export default Suggestion