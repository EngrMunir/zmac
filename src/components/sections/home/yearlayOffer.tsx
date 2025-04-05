import { productsData } from "@/db/productsData"
import Image from "next/image"
import Link from "next/link"
// import { Link } from "react-router-dom"

const YearlayOffer = () => {
    return (
        <div className="bg-popover p-6">
            <div className="pb-4">
                <h4 className="text-primary-foreground text-2xl font-bold">New Year Specials</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {
                    productsData.slice(0,4).map(({id, thumbnail}) => {
                        return (
                            <Link key={id} href={"#"} className="border block p-4 group">
                                <span className="overflow-hidden max-w-[224px] max-h-[224px] block">
                                    <Image width={195} height={195} sizes="100vw" src={thumbnail} alt="img" className="group-hover:scale-105 transition-all duration-500" />
                                </span>
                                <p className="mt-3">
                                    <span className="block">Men's T-shirts</span>
                                    <span className="block text-primary-foreground font-bold">Min. 50% Off</span>
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default YearlayOffer