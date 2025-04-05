import FilterCard from "./filterCard"
import { getProducts } from "@/lib/getProducts"
import { productType } from "@/types/productType"

const WeeklyDeals = async () => {
    const data: productType[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6 flex justify-between">
            <div className="pb-4">
                <h5 className="text-2xl font-bold">Weekly deals</h5>
                <span>Low prices in the past 30 days</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    data.slice(0, 2).map(({ id, thumbnail, price, discountPercentage }) =>
                        <FilterCard
                            key={id}
                            id={id}
                            thumbnail={thumbnail}
                            discountPercentage={discountPercentage}
                            price={price}
                            imgSize="max-w-[150px] max-h-[150px]"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default WeeklyDeals