import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type FilterCardProps = {
    id: string | number,
    discountPercentage: number,
    price: number,
    thumbnail: string,
    imgSize?: string,
}
const FilterCard = ({ id, thumbnail, imgSize, discountPercentage, price }: FilterCardProps) => {
    const calculatePrice = calculateDiscountPrice(price, discountPercentage)
    // divided the price base on .
    const finalPrice = calculatePrice?.toString().match(/^(\d+)\.(\d{2})$/);
    return (
        <div className="group">
            <Link href={`/product-details/${id}`} className={cn("block overflow-hidden rounded-2xl", imgSize)}>
                <Image width={213} height={172} sizes="100vw" src={thumbnail} alt="img" className={cn("rounded-2xl max-w-[184px] max-h-[184px] w-full h-full object-cover group-hover:scale-105 transition-all duration-300", imgSize)} />
            </Link>
            <div className="mt-3 flex justify-between items-center flex-wrap">
                <div className="flex items-center">
                    <p className="font-bold inline-block text-primary-foreground">
                        <span className="text-xs">US </span>
                        <span className="text-xl">${finalPrice && finalPrice[1]}</span>
                        <span className="text-xs">.{finalPrice && finalPrice[2]}</span>
                    </p>

                    <span className="text-[rgb(153,153,153)] line-through text-sm ml-2 custom-clamp-line max-w-[53px]">US ${price}</span>
                </div>
                {/* {
                    discountPercentage &&
                    <div className="bg-[#ffe6e7] text-primary-foreground font-bold px-1 text-sm">
                        -{discountPercentage}%
                    </div>
                } */}
            </div>
        </div>
    )
}
export default FilterCard