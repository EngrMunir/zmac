'use client'
import { useContext } from "react"
import { singleProductData } from "./singleProductData"
import { ProductDetailsContext } from "@/contextApi/productDetailsProvider"
import { Star } from "lucide-react"
import Image from "next/image"

type ProductShortInfo = {
    price: number,
    title: string,
    description?: string
}
const ProductShortInfo = ({ price, title, description }: ProductShortInfo) => {
    const { setSelectColor, setSelectSize, selectColor, selectSize } = useContext(ProductDetailsContext)
    return (
        <div>
            <div className="mt-4">
                <h3 className="text-[40px] font-bold leading-none inline-block">${price}</h3>
                <span className="text-xl leading-6 line-through text-[rgb(117,117,117)] inline-block px-1">BDT1,629.45</span>
                <span className="text-xl leading-6 text-[rgb(211,3,28)] inline-block px-1">50% off</span>
                <p className="leading-4 text-xs text-[rgb(117,117,117)]">
                    <span>Tax excluded, add at checkout if applicable. </span>
                    <span>Extra 5% off with coins</span>
                </p>
            </div>
            <div className="mt-2 p-2 bg-[linear-gradient(270deg,_rgb(255,245,245)_48.93%,_rgb(255,229,232)_100%)]">
                <div className="flex items-center gap-2">
                    <img className="h-[18px]" src="https://ae01.alicdn.com/kf/S98a18bcd33c34d28a0e5276b0aa20f48e/64x64.png" alt="img" />
                    <span className="text-primary-foreground text-sm leading-[18px]">BDT131.41 off over BDT6,570.36</span>
                </div>
            </div>
            <p className="pt-4 font-bold leading-[19px] text-[15px]">{description}</p>
            <div className="flex items-center gap-3 mt-4 ">
                <div className="flex items-center gap-2.5">
                    <ul className="flex gap-1">
                        <li><Star fill="black" size={14} /></li>
                        <li><Star fill="black" size={14} /></li>
                        <li><Star fill="black" size={14} /></li>
                        <li><Star fill="black" size={14} /></li>
                        <li><Star fill="black" size={14} /></li>
                    </ul>
                    <p className="text-sm">
                        <strong>5.0</strong>
                        <span> 2 Reviews</span>
                    </p>
                </div>
                <span className="inline-block h-2 w-px bg-[rgba(0,0,0,0.43)]"></span>
                <p className="text-sm">3 sold</p>
            </div>
            <div className="mb-4 mt-5 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
            <div>
                <strong className="text-[15px] capitalize">Color: {selectColor.colorName}</strong>

                <div className="mt-2 flex flex-wrap gap-2">
                    {
                        singleProductData.images.map(({ img, colorName }, index) => {
                            return (
                                <div
                                    key={img}
                                    onClick={() => setSelectColor({ colorName, index, img: img })}
                                    className={`w-[58px] h-[65px] flex justify-center items-center bg-[rgba(0,0,0,0.04)] cursor-pointer border ${selectColor.index === index ? "border-black" : "border-transparent"} hover:border-black`}
                                >
                                    <Image width={44} height={58} src={img} alt="img" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mt-4">
                <strong className="text-[15px] capitalize">Size: {selectSize}</strong>
                <div className="mt-2 flex flex-wrap gap-2">
                    {
                        singleProductData.sizes.map((size, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectSize(size)}
                                    className={`w-[60px] h-9 flex justify-center items-center cursor-pointer border uppercase ${selectSize === size ? "border-black" : "border-[rgb(204,204,204)]"} hover:border-black`}
                                >
                                    <span>{size}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default ProductShortInfo