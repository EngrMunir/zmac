'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, } from 'lucide-react'
import { AddToCartContext } from '@/contextApi/addToCartProvider'

const CartSummary = () => {
    const { cartProducts } = useContext(AddToCartContext)
    const subTotalPrice = cartProducts.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
    const shippingFee = 705.92
    const offer = 505.92
    const totalPrice = (subTotalPrice + shippingFee) - offer

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
                        <p className='font-medium'>US {shippingFee}</p>
                    </div>
                    <div className='text-sm font-semibold flex justify-between'>
                        <p>Total saved</p>
                        <p className='font-medium text-primary-foreground'>US {offer}</p>
                    </div>

                    <div className='pt-2 mt-3 flex justify-between border-t'>
                        <p className='text-lg font-bold'>Total</p>
                        <p className='lg font-semibold'>US {totalPrice}</p>
                    </div>

                    <Button asChild size={"sm"} className='rounded-full mt-7 text-lg font-semibold'>
                        <Link href={"/checkout"}>Checkout</Link>
                    </Button>
                </div>
            </div>
            <div className='border px-5 py-7 rounded-md mt-4'>
                <b className='text-lg'>Pay with</b>
                <div className="flex gap-3 mt-3">
                    <img className="max-h-6" src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" />
                    <img className="max-h-6" src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" />
                    <img className="max-h-6" src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" />
                    <img className="max-h-6" src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" />
                </div>
                <div className='mt-8'>
                    <b className='text-lg'>Buyer protection</b>
                    <p className='text-sm mt-2'>
                        <ShieldCheck size={20} className='inline-block' />  Get a full refund if the item is not as described or not delivered
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartSummary