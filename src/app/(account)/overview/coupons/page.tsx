import { AlertCircle } from "lucide-react"
import Link from "next/link"

const Coupons = () => {
    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5 ">
                <div className="flex justify-between items-center">
                    <h6 className="font-semibold text-2xl">Coupon/code history</h6>
                    <Link href={"#"} className="hover:text-primary-foreground transition-all duration-500">History</Link>
                </div>
                <p className="text-xs mt-5 text-[#222]"> <span><AlertCircle size={14} className="inline-block" /></span> <Link href={"#"} className="underline">The minimum spend amount excludes shipping fees and tax.</Link></p>
            </div>
            <div className="rounded-md bg-background px-5 py-5 mt-5">
                <div className="flex flex-col justify-center items-center py-12">
                    <img className="max-w-[158px]" src="//ae01.alicdn.com/kf/He4c2ebc651114098a04486ff6ce5f8e7d/158x175.png" />
                    <div className="text-xs mt-5 text-[#666]">You haven't earned any coupons.</div>
                    <a className="bg-primary text-secondary-foreground rounded-full px-15 py-3 inline-block mt-10" href="#" target="_blank">Get coupon codes</a>
                </div>
            </div>
        </section>
    )
}

export default Coupons