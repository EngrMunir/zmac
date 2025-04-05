'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { AddToCartContext } from '@/contextApi/addToCartProvider'
import { ChevronRight } from 'lucide-react'
import ShippingPricePopup from '@/app/(innerPage)/checkout/shippingPricePopup'
import Image from 'next/image'

const CheckoutProductsList = () => {
    const [openShippingPrice, setOpenShippingPrice] = useState(false)
    const { cartProducts, handleIncrementProductQuantity, handleDecrementProductQuantity } = useContext(AddToCartContext)
    return (
        <>

            <div className='flex flex-col gap-5 border px-5 py-5 rounded-md mt-5'>
                {
                    cartProducts.map(({ id, quantity, thumbnail, title }) => {
                        return (
                            <div key={id} className="flex items-center gap-2.5 border-b pb-4 last:border-b-0">
                                <Image width={100} height={100} src={thumbnail} alt="img" className="rounded-xl w-25 h-25 object-cover" />

                                <div className='w-full'>
                                    <Link href={"#"} className="line-clamp-1">{title}</Link>
                                    <div className='text-xs text-accent-foreground flex items-center gap-5 mt-0.5'>
                                        <p>Color: <span>black</span> </p>
                                        <p>Size: <span>Xl</span> </p>
                                    </div>

                                    <div className='flex items-center gap-5 mt-1.5'>
                                        <strong className="inline-block">US 250</strong>
                                        <div className="flex items-center">
                                            <div onClick={() => handleDecrementProductQuantity(1)} className={`w-6 h-6 rounded-full  bg-popover text-[#a8a8a8] flex justify-center items-center text-lg ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</div>
                                            <input type="text" value={quantity} readOnly className="bg-transparent outline-none border-none w-8 text-center text-sm font-bold" />
                                            <div onClick={() => handleIncrementProductQuantity(1)} className="w-6 h-6 rounded-full  bg-popover flex justify-center items-center cursor-pointer">+</div>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenShippingPrice(true)} className='mt-2 text-xs flex justify-between items-center cursor-pointer'>
                                        <div>
                                            <p className="font-semibold">Shipping: US $26.69</p>
                                            <p>Estimated delivery on Feb. 15</p>
                                        </div>
                                        <p><ChevronRight size={16} /></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <ShippingPricePopup open={openShippingPrice} setOpen={setOpenShippingPrice} />

        </>
    )
}

export default CheckoutProductsList