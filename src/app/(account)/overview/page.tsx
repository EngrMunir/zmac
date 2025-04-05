import { AlClock, AlCoupons, AlCreaditCard, AlDollerRound, AlHeart, AlNoteBook, AlUser } from "@/lib/icon"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const Overview = () => {
    return (
        <div>
            <section className="bg-background px-5 py-10">
                <h6 className="font-semibold text-2xl">Mostafizur Rahman</h6>
                <div className="flex justify-between mt-8">
                    <Link href={"/overview/wishlist"} className="text-center flex flex-col justify-center items-center">
                        <AlHeart className="size-8" />
                        <p className="mt-1.5">Wish List</p>
                    </Link>
                    <Link href={"/overview/following"} className="text-center flex flex-col justify-center items-center">
                        <AlUser className="size-8" />
                        <p className="mt-1.5">Following</p>
                    </Link>
                    <Link href={"/overview/viewed"} className="text-center flex flex-col justify-center items-center">
                        <AlClock className="size-8" />
                        <p className="mt-1.5">Viewed</p>
                    </Link>
                    <Link href={"/overview/coupons"} className="text-center flex flex-col justify-center items-center">
                        <AlCoupons className="size-8" />
                        <p className="mt-1.5">Coupons</p>
                    </Link>
                    <Link href={"/overview/shopping-credit"} className="text-center flex flex-col justify-center items-center">
                        <AlCreaditCard className="size-8" />
                        <p className="mt-1.5">Shopping credit</p>
                    </Link>
                </div>
            </section>

            <section className="bg-background px-5 py-10 mt-10">
                <h6 className="font-semibold text-2xl">My Orders</h6>
                <div className="flex justify-between mt-8 mb-10">
                    <Link href={"/orders?tab=to-pay"} className="text-center flex flex-col justify-center items-center">
                        <img src="https://ae01.alicdn.com/kf/H349adf833fca48ab82998712df5ba125c.png" alt="img" className="max-h-[53px]" />
                        <p className="mt-1.5">Unpaid</p>
                    </Link>
                    <Link href={"/orders?tab=to-ship"} className="text-center flex flex-col justify-center items-center">
                        <img src="https://ae01.alicdn.com/kf/H23cba674f64e4821ae38b40ed17f7b42F.png" alt="img" className="max-h-[53px]" />
                        <p className="mt-1.5">To be shipped</p>
                    </Link>
                    <Link href={"/orders?tab=shipped"} className="text-center flex flex-col justify-center items-center">
                        <img src="https://ae01.alicdn.com/kf/Hec4afd05f61648a3831e2e35bcf05ba3X.png" alt="img" className="max-h-[53px]" />
                        <p className="mt-1.5">Shipped</p>
                    </Link>
                    <Link href={"/orders?tab=processed"} className="text-center flex flex-col justify-center items-center">
                        <img src="https://ae01.alicdn.com/kf/H6b216a31f4fa4b72884778014e6c407d0.png" alt="img" className="max-h-[53px]" />
                        <p className="mt-1.5">To be reviewed</p>
                    </Link>
                </div>
                <Link href={"#"} className="flex justify-between items-center border-b border-t py-4">
                    <span className="flex items-center gap-1">
                        <AlNoteBook className="inline-block size-6"/>
                        My appeal
                    </span>
                    <span className="text-muted">
                        <ChevronRight/>
                    </span>
                </Link>
                <Link href={"#"} className="flex justify-between items-center border-b py-4">
                    <span className="flex items-center gap-1">
                        <AlDollerRound className="inline-block size-6"/>
                        In dispute
                    </span>
                    <span className="text-muted">
                        <ChevronRight/>
                    </span>
                </Link>
            </section>
        </div>
    )
}

export default Overview