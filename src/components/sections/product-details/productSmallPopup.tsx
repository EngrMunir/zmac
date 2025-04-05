'use client'
import InnerImageZoom from "react-inner-image-zoom"
import { singleProductData } from "./singleProductData"
import { forwardRef, Ref, useContext } from "react"
import { ProductDetailsContext } from "@/contextApi/productDetailsProvider"
import Image from "next/image"

const ProductSmallPopup = forwardRef((_, ref: Ref<HTMLDivElement>) => {
    const { setSelectColor, setSelectSize, selectColor, selectSize } = useContext(ProductDetailsContext)
    return (
        <div ref={ref} className="absolute top-10 right-full bg-background shadow-4xl rounded-2xl w-[650px] p-4">
            <div className="overflow-y-auto grid grid-cols-2 gap-2.5 max-h-[352px]">
                <div className="w-full h-full">
                    <InnerImageZoom
                        src={selectColor.img}
                        zoomSrc={selectColor.img}
                        zoomScale={1}
                        zoomType="hover"
                        className="w-full "
                    />
                </div>
                <div>
                    <strong className="text-[15px] capitalize">Color: {selectColor.colorName}</strong>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {
                            singleProductData.images.map(({ img, colorName }, index) => {
                                return (
                                    <div
                                        key={img}
                                        onClick={() => setSelectColor({ colorName, img, index })}
                                        className={`w-[58px] h-[65px] flex justify-center items-center bg-[rgba(0,0,0,0.04)] cursor-pointer border ${selectColor.index === index ? "border-black" : "border-transparent"} hover:border-black`}
                                    >
                                        <Image width={44} height={58} src={img} alt="img" className="w-11 h-[58px]" />
                                    </div>
                                )
                            })
                        }
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
            </div>
        </div>
    )
})

export default ProductSmallPopup