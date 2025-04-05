'use client'
import { useContext, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ProductDetailsContext } from "@/contextApi/productDetailsProvider"
import { AlHeart, AlShare } from "@/lib/icon"
import { MapPin } from "lucide-react"
import ProductSmallPopup from "./productSmallPopup"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card"
import { AddToCartContext } from "@/contextApi/addToCartProvider"
import Link from "next/link"

type PropsType = {
    id: string | number,
    title: string,
    thumbnail: string,
    price: number,
    color: string,
    isProductDetailsPage?: boolean
}

const PurchaseSideSection = ({ id, title, thumbnail, price, color, isProductDetailsPage }: PropsType) => {
    const { isScrollPriceShow, selectSize, selectColor } = useContext(ProductDetailsContext)
    const { handleAddToCart } = useContext(AddToCartContext)
    const [isSmallPopupShow, setIsSmallPopupShow] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsSmallPopupShow(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [])

    useEffect(() => {
        if (!isScrollPriceShow) {
            setIsSmallPopupShow(false);
        }
    }, [isScrollPriceShow])

    const handlePopupOpen = (e: any) => {
        e.stopPropagation()
        setIsSmallPopupShow(!isSmallPopupShow)
    }

    const handleDecrementQuantity = (e: string) => {
        if (e === "decrement") {
            if (quantity === 1) {
                return
            }
            setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className="w-[25%] py-4 border border-[#ebebeb] shrink-0 sticky top-0">
            {
                (isProductDetailsPage && isScrollPriceShow) &&
                <>
                    <div className="px-4">
                        <h3 className="text-[40px] font-bold leading-none block mb-1">BDT814.73</h3>
                        <span className="text-xl leading-6 line-through text-[rgb(117,117,117)] inline-block px-1">BDT1,629.45</span>
                        <span className="text-xl leading-6 text-[rgb(211,3,28)] inline-block px-1">50% off</span>
                        <p className="leading-4 text-xs text-[rgb(117,117,117)] tracking-[0.5px]">
                            <span>Tax excluded, add at checkout if applicable. </span>
                            <span>Extra 5% off with coins</span>
                        </p>
                    </div>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                    <div className="flex gap-4 justify-between px-4">
                        <span className="font-bold text-sm capitalize">Color: {selectColor.colorName}, Shoe Size: {selectSize}</span>
                        <span onClick={handlePopupOpen} className="text-sm font-bold text-[#3170ee] cursor-pointer">Edit</span>
                    </div>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                </>
            }
            <div className="flex gap-4 justify-between px-4">
                <span className="font-bold text-sm">Sold by</span>
                <HoverCard openDelay={50} closeDelay={50}>
                    <HoverCardTrigger asChild className="text-sm font-normal text-[rgb(34,34,34)] cursor-pointer">
                        <p>
                            <span>Fashions Men Clothes Store</span>
                            <span>(Trader)</span>
                        </p>
                    </HoverCardTrigger>
                    <HoverCardContent className="delay-0 flex gap-12 w-auto">
                        <div>
                            <strong className="text-xl text-foreground">Store info</strong>
                            <table className="mt-1.5">
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 w-25">Name:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">Shop1103790102 Store</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Store no.:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">1103790102</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Location:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap"> China</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Open since:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">May 21, 2024</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <strong className="text-xl text-foreground">Detailed seller ratings</strong>
                            <table className="mt-1.5">
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 w-25">Name:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">Shop1103790102 Store</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Store no.:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">1103790102</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Location:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap"> China</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap w-25">Open since:</td>
                                    <td className="text-sm text-[rgb(34,34,34)] py-1 whitespace-nowrap">May 21, 2024</td>
                                </tr>
                            </table>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            {
                isProductDetailsPage &&
                <>
                    <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
                    <div className="flex gap-4 justify-between px-4">
                        <span className="font-bold text-sm">Ship to</span>
                        <Link href={"#"} className="text-sm font-normal text-[rgb(34,34,34)]">
                            <MapPin size={14} className="inline-block mr-1.5" />
                            <span>Bangladesh</span>
                        </Link>
                    </div>
                </>
            }
            <div className="mt-5 h-10 px-4 flex items-center bg-cover bg-no-repeat bg-top bg-[url('https://ae-pic-a1.aliexpress-media.com/kf/Sf9d607003da2464ab3e02681f5651609e/1500x180.png_.avif')]">
                <span className="font-bold text-sm">ZMAC commitment</span>
            </div>
            <div className="px-4 mt-1.5">
                <div className="flex">
                    <img className="h-4 w-4 mt-0.5 shrink-0" src="https://ae01.alicdn.com/kf/Sda4e3004cce04df59c03b833a9e26165f/64x64.png" alt="img" />
                    <div className="leading-5 text-[15px] px-1">
                        <p className="text-[#191919] font-bold">Shipping: BDT3,211.92</p>
                        <p>
                            <span className="text-[#666666]">Delivery:</span>
                            <strong className="text-[#191919] inline-block py-0.5">Feb. 06</strong>
                        </p>
                    </div>
                </div>
                <div className="flex mt-3">
                    <img className="h-4 w-4 mt-0.5 shrink-0" src="https://ae01.alicdn.com/kf/S20dd40d7c15a41169efc247da38b1460b/64x64.png" alt="img" />
                    <div className="leading-5 text-[15px] px-1">
                        <p className="text-[#191919] font-bold">Security & Privacy</p>
                        <p className="text-[#666666] text-xs pt-0.5 max-w-[260px] line-clamp-1">Safe payments: We do not share your personal details with any third parties without your consent. </p>
                        <p className="text-[#666666] text-xs pt-0.5 max-w-[260px] line-clamp-1">Secure personal details: We protect your privacy and keep your personal details safe and secure.</p>
                    </div>
                </div>
            </div>
            <div className="my-4 bg-[rgba(0,0,0,0.1)] h-px w-full"></div>
            <div className="px-4">
                <strong className="text-[#191919] inline-block">Quantity</strong>
                <div className="mt-2 flex items-center">
                    <div onClick={() => handleDecrementQuantity("decrement")} className={`w-6 h-6 rounded-full  bg-popover text-[#a8a8a8] flex justify-center items-center  text-lg ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</div>
                    <input type="text" value={quantity} readOnly className="bg-transparent outline-none border-none w-8 text-center text-sm font-bold" />
                    <div onClick={() => handleDecrementQuantity("increment")} className="w-6 h-6 rounded-full  bg-popover flex justify-center items-center cursor-pointer">+</div>
                </div>
                <p className="text-sm mt-2">755 available</p>
                <Button
                    onClick={() => handleAddToCart({ id, storeName: "abc", title, thumbnail, quantity: quantity, price, color: selectColor.colorName, size: selectSize })}
                    className="mt-3 3xl:h-12 font-bold w-full rounded-none"
                >
                    Add to cart
                </Button>
                {
                    isProductDetailsPage &&
                    <Button variant={"outline"} className="mt-3 3xl:h-12 font-bold w-full rounded-none">Buy Now</Button>
                }
                <div className="flex gap-4 mt-2.5 ">

                    {
                        isProductDetailsPage ?
                            <Button variant={"destructive"} className="text-[rgb(58,62,74)] 3xl:h-11 rounded-none flex-[2] [&_svg]:size-6">
                                <AlShare />
                                Share
                            </Button>
                            :
                            <Link href={"#"} className="text-[rgb(58,62,74)] bg-[rgb(245,245,245)] h-11 flex justify-center items-center flex-[2]">View details</Link>

                    }

                    <div className="text-[rgb(58,62,74)] bg-[rgb(245,245,245)] h-11 flex justify-center items-center gap-1 flex-1 px-3 cursor-pointer">
                        <span className="text-[22px]"><AlHeart /> </span>
                        <span> 16</span>
                    </div>
                </div>
            </div>
            {
                isSmallPopupShow &&
                <ProductSmallPopup ref={ref} />
            }
        </div>
    )
}

export default PurchaseSideSection