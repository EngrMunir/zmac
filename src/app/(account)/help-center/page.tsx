import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Headset, Search } from "lucide-react"
import TopicsAccordion from "./topicsAccordion"

const HelpCenter = () => {
    return (
        <section>
            <div className="bg-background px-5 py-5 rounded-md">
                <h6 className="text-2xl">Hi, what can we help you with?</h6>
                <div className="relative mt-3 max-w-[650px]">
                    <Input className="border-primary focus-visible:ring-0 h-12.5 text-sm pr-20" placeholder="Search for question" />
                    <div className="bg-primary absolute top-1/2 -translate-y-1/2 right-0.5 text-white h-[46px] w-20 cursor-pointer flex justify-center items-center rounded-md">
                        <Search />
                    </div>
                </div>
            </div>
            <div className="bg-background rounded-md py-5 px-5 mt-5">
                <h6 className="text-xl pb-3">Topics</h6>
                <TopicsAccordion />
            </div>

            <div className="bg-background rounded-md py-5 px-5 mt-5">
                <h6 className="text-xl pb-3">Frequently Asked Questions</h6>
                <div>
                    <ul className="list-inside list-disc grid grid-cols-2">
                        <li className="py-2 text-accent-foreground hover:text-primary-foreground transition-all duration-500">
                            <Link href={"#"}>When will I receive my order?</Link>
                        </li>
                        <li className="py-2 text-accent-foreground hover:text-primary-foreground transition-all duration-500">
                            <Link href={"#"}>When will I receive my order?</Link>
                        </li>
                        <li className="py-2 text-accent-foreground hover:text-primary-foreground transition-all duration-500">
                            <Link href={"#"}>When will I receive my order?</Link>
                        </li>
                        <li className="py-2 text-accent-foreground hover:text-primary-foreground transition-all duration-500">
                            <Link href={"#"}>When will I receive my order?</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-background rounded-md py-5 px-5 mt-5">
                <h6 className="text-xl pb-5">Need more help?</h6>
                <div className="inline-flex  items-center gap-2">
                    <Link href={"#"}>
                        <Headset size={30} />
                    </Link>
                    <Link href={"#"}>
                        <p className="font-semibold">Online Service</p>
                        <small className="text-accent-foreground">7 * 24 hours</small>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HelpCenter