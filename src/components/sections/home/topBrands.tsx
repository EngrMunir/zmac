import FilterCard from "./filterCard"
import { getProducts } from "@/lib/getProducts"
import { productType } from "@/types/productType"

const TopBrands = async () => {
    const data: productType[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6">
            <div className="pb-5">
                <h5 className="text-primary-foreground text-2xl font-bold">Top Brands</h5>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    data.slice(0, 3).map(({ id, thumbnail, discountPercentage, price }) =>
                        <FilterCard
                            id={id}
                            key={id}
                            thumbnail={thumbnail}
                            discountPercentage={discountPercentage}
                            price={price}
                        />)
                }
            </div>
        </div>
    )
}

export default TopBrands

