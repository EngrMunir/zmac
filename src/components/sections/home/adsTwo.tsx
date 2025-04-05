import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AdsTwo = () => {
    return (
        <section className="bg-popover relative overflow-hidden flex justify-center z-10">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-[25deg] origin-left w-[750px] z-[-1]">
                <Image width={800} height={700} sizes="100vw" src="/images/products/phone-samsung.png" alt="phone" />
            </div>
            <div className="mt-20">
                <Image width={144} height={41} sizes="100vw" src="/images/logo.png" alt="logo" className="3xl:max-w-36 max-w-32" />
                <h2 className="3xl:text-5xl text-[40px] font-bold mt-5">Top Selling Smartphones</h2>
                <p className="text-xl mt-3 text-[rgb(153,153,153)]">Latest Technology, Best Brands</p>
                <Button asChild className="rounded-none 2xl:text-xl font-medium mt-6">
                    <Link href={"#"}>Shop now</Link>
                </Button>
            </div>
        </section>
    )
}

export default AdsTwo