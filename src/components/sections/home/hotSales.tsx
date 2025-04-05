import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice";
import { getProducts } from "@/lib/getProducts";
import { productType } from "@/types/productType";
import Image from "next/image"
import Link from "next/link"

const HotSales = async () => {
    const data: productType[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6">
            <div className="pb-4">
                <h5 className="text-primary-foreground text-2xl font-bold">Hot Sales</h5>
            </div>
            <div className="rounded-2xl grid gap-5">
                {
                    data.slice(0, 2).map(({ discountPercentage, id, price, thumbnail }) => (
                        <Card
                            key={id}
                            id={id}
                            discountPercentage={discountPercentage}
                            price={price}
                            thumbnail={thumbnail} />
                    ))
                }
            </div>
        </div>
    )
}

export default HotSales

type CardProps = {
    id: number | string,
    thumbnail: string,
    price: number,
    discountPercentage: number
}
const Card = ({ id, thumbnail, price, discountPercentage }: CardProps) => {
    const calculatePrice = calculateDiscountPrice(price, discountPercentage)
    // divided the price base on .
    const finalPrice = calculatePrice?.toString().match(/^(\d+)\.(\d{2})$/);
    return (
        <div className="group">
            <Link href={`/product-details/${id}`} className="block overflow-hidden max-h-[200px] max-w-[340px] rounded-2xl">
                <Image width={340} height={200} sizes="100vw" src={thumbnail} alt="img" className="rounded-2xl max-h-[200px] max-w-[340px] h-full w-full object-cover group-hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-1.5 flex items-center">
                <p className="font-bold inline-block text-primary-foreground">
                    <span className="text-xs">US </span>
                    <span className="text-xl">{finalPrice && finalPrice[1]}</span>
                    <span className="text-xs">.{finalPrice && finalPrice[2]}</span>
                </p>
                <span className="text-[rgb(153,153,153)] line-through text-sm ml-2">US ${price}</span>
            </div>
        </div>
    )
}