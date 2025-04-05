'use client'
import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddToCartContext } from "@/contextApi/addToCartProvider"
import { ChevronDown } from "lucide-react"

const CheckoutSummary = () => {
    const [orderInfo, setOrderInfo] = useState({})
    const [showPromoCode, setShowPromoCode] = useState(false)
    const { cartProducts } = useContext(AddToCartContext)
    const subTotalPrice = cartProducts.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
    const shippingFee = 705.92
    const totalPrice = (subTotalPrice + shippingFee)


    const handleSubmitOrder = () => {
        setOrderInfo({
            customerInfo: {
                name: "Mostafizar Rhamn",
                phoneNumber: "",
                email: "",
                address: "Dahagram, Lalmonirhat, Bangladesh, 5540"
            },
            productsInfo: [

                ...cartProducts

            ]
        })
    }
    console.log(orderInfo)
    return (
        <div className='sticky top-0'>
            <div className='border px-5 py-7 rounded-md'>
                <h5 className='text-2xl font-semibold'>Summary</h5>
                <div className='grid gap-4 mt-6'>
                    <div className='text-sm font-semibold flex justify-between'>
                        <p>Subtotal</p>
                        <p className='font-medium'>US {subTotalPrice.toFixed(2)}</p>
                    </div>
                    <div className='text-sm font-semibold flex justify-between'>
                        <p>Shipping fee</p>
                        <p className='font-medium'>US {shippingFee.toFixed(2)}</p>
                    </div>
                    <div className='text-sm font-semibold flex justify-between'>
                        <p>Promo codes</p>
                        <p onClick={() => setShowPromoCode(!showPromoCode)} className='font-medium cursor-pointer'>Enter <ChevronDown size={14} className="inline-block" /> </p>
                    </div>
                    {
                        showPromoCode &&
                        <div>
                            <div className="text-xs">Promo codes are a combination of case sensitive letters and numbers, without spaces. Please be aware that promo codes have limitation and expiration dates. You might find them no longer valid by the time you apply them due to these restrictions.</div>
                            <div className="mt-3 relative">
                                <Input placeholder="Enter Code" className="h-12 pr-28 text-sm focus-visible:ring-0" />
                                <Button size={"sm"} className="font-normal absolute top-0 right-0">Applay</Button>
                            </div>
                        </div>
                    }
                    <div className='pt-2 mt-3 flex justify-between border-t'>
                        <p className='text-lg font-bold'>Total</p>
                        <p className='lg font-semibold'>US {totalPrice.toFixed(2)}</p>
                    </div>

                    <Button onClick={handleSubmitOrder} size={"sm"} className='rounded-full mt-7 text-lg font-semibold'>
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummary