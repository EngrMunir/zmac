import { getProducts } from "@/lib/getProducts"
import FilterCard from "./filterCard"
import { productType } from "@/types/productType"

const BestSelling = async () => {
    const data: productType[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6">
            <div className="pb-4">
                <h5 className="text-primary-foreground text-2xl font-bold">Bestsellers</h5>
                <span>Get discounts on popular items</span>
            </div>
            <div className="bg-background rounded-2xl px-4 py-4 grid grid-cols-2 items-center gap-3">
                {
                    data.slice(3, 7).map(({ id, thumbnail, discountPercentage, price }) =>
                        <FilterCard
                            key={id}
                            id={id}
                            price={price}
                            discountPercentage={discountPercentage}
                            thumbnail={thumbnail}
                            imgSize="max-h-[172px] 2xl:max-w-[220px] max-w-full"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default BestSelling
