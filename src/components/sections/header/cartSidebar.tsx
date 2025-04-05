'use client'
import { useContext } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { AddToCartContext } from "@/contextApi/addToCartProvider"
import { AlShopCart } from "@/lib/icon"
import Image from "next/image"

const CartSidebar = () => {
    const { cartProducts, handleDecrementProductQuantity, handleIncrementProductQuantity } = useContext(AddToCartContext)
    const totalProducts = cartProducts.reduce((accumulator, currentValue)=>accumulator + currentValue.quantity, 0)
    const totalPrice = cartProducts.reduce((accumulator, currentValue)=>accumulator + (currentValue.quantity * currentValue.price), 0)
    return (
        <div>
            <Sheet>
                <SheetTrigger className="flex items-center gap-1">
                    <span>
                        <AlShopCart className="size-8" />
                    </span>
                    <p>
                        <span className="bg-[#191919] text-white w-6 h-[14px] flex items-center justify-center text-xs font-bold rounded-2xl">{totalProducts}</span>
                        <b className="font-bold text-xs  leading-4 block">Cart</b>
                    </p>
                </SheetTrigger>
                <SheetContent className="max-w-[380px]">
                    <div className="relative h-full">
                        <p className="border-b text-xl font-bold pb-3">Your Cart</p>
                        <div className="mt-10 grid gap-5 overflow-y-auto max-h-[600px]">
                            {
                                cartProducts.map(({ id, thumbnail, price, quantity, title }) => {
                                    return (
                                        <div key={id} className="flex items-center gap-2.5">
                                            <Image width={100} height={100} src={thumbnail} alt="img" className="rounded-xl w-25 h-25 object-cover" />
                                            <div>
                                                <Link href={"#"} className="line-clamp-1">{title}</Link>
                                                <strong className="inline-block mt-0.5">US {price}</strong>
                                                <div className="mt-1.5 flex items-center">
                                                    <div onClick={() => handleDecrementProductQuantity(id)} className={`w-6 h-6 rounded-full  bg-popover text-[#a8a8a8] flex justify-center items-center text-lg ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</div>
                                                    <input type="text" value={quantity} readOnly className="bg-transparent outline-none border-none w-8 text-center text-sm font-bold" />
                                                    <div onClick={() => handleIncrementProductQuantity(id)} className="w-6 h-6 rounded-full  bg-popover flex justify-center items-center cursor-pointer">+</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="absolute bottom-4 w-full">
                            <div className="flex justify-between border-t pt-2.5 pb-10">
                                <strong className="text-xl">Total</strong>
                                <span className="font-semibold">US {totalPrice.toFixed(2)}</span>
                            </div>
                            <Button size={"sm"} asChild className="w-full rounded-full font-bold text-lg">
                                <Link href={"/checkout"}>Checkout</Link>
                            </Button>
                            <Button asChild size={"sm"} variant={"outline"} className="w-full rounded-full font-bold text-lg mt-5">
                                <Link href={"/products-cart"}>Go To Cart</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default CartSidebar