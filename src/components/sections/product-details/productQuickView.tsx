'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Dialog, DialogContent, } from "@/components/ui/dialog"
import ProductImageGallery from "./productImageGallery"
import ProductShortInfo from "./productShortInfo"
import PurchaseSideSection from "./purchaseSideSection"
import { productType } from "@/types/productType"

type ProductQuickViewType = {
    id: string | number,
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}
const ProductQuickView = ({ id, isDialogOpen, setIsDialogOpen }: ProductQuickViewType) => {
    const [productd, setProductd] = useState<productType>()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProductd(data))
            .catch((error) => console.log(error))

    }, [])
    // const productd = productsData.find((prd) => prd.id === id)
    if (!productd) {
        return null
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
            {/* <DialogTrigger className="bg-secondary text-secondary-foreground font-bold text-xs rounded-3xl h-9 w-full px-5 hover:opacity-90">
                See preview
            </DialogTrigger> */}
            <DialogContent className="max-w-[1440px] rounded-2xl py-6 px-8 flex items-start gap-6 border-none">
                <ProductImageGallery />
                <ProductShortInfo
                    title={productd.title}
                    description={productd.description}
                    price={productd.price}
                />
                <PurchaseSideSection
                    id={productd?.id}
                    price={80.99}
                    thumbnail={productd.thumbnail}
                    title={productd.title}
                    color=""
                />
            </DialogContent>
        </Dialog>

    )
}

export default ProductQuickView