'use client'
import React, { Fragment } from 'react'
import { useContext } from 'react'
import { AddToCartContext, CartProductsType } from '@/contextApi/addToCartProvider'
import { Heart, ScanSearch, Trash } from 'lucide-react'
import Link from 'next/link'

const CartProductsList = () => {
    const { cartProducts, handleRemoveToCart, handleIncrementProductQuantity, handleDecrementProductQuantity } = useContext(AddToCartContext)
    function groupProductsByGroup(products: CartProductsType[]) {
        const series = Array.from(new Set(products.map(item => item.storeName)));

        return series.map(item => {
            const storeName = item ? { storeName: item } : null;

            return {
                ...storeName,
                items: products.filter(device => device.storeName === item)
            };
        });
    }
    const x = groupProductsByGroup(cartProducts)

    return (
        <div className='flex flex-col gap-5'>
            {
                x.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Link href={"#"} className='mb-3 inline-block font-bold capitalize hover:text-primary-foreground transition-all duration-500'>{item.storeName} Store</Link>
                            {
                                item.items.map(({ id, thumbnail, title, color, size, price, quantity }) => {
                                    return (
                                        <div className='border-b pb-4 last:border-b-0'>
                                            <div className="flex items-center gap-2.5">
                                                <img src={thumbnail} alt="img" className="rounded-xl w-25 h-25 object-cover" />

                                                <div>
                                                    <Link href={"#"} className="line-clamp-1">{title}</Link>
                                                    <div className='text-xs text-accent-foreground flex items-center gap-5 mt-0.5 capitalize'>
                                                        <p>Color: <span>{color}</span> </p>
                                                        <p>Size: <span>{size}</span> </p>
                                                    </div>

                                                    <div className='flex items-center gap-5 mt-1.5'>
                                                        <strong className="inline-block">US {price}</strong>
                                                        <div className="flex items-center">
                                                            <div onClick={() => handleDecrementProductQuantity(id)} className={`w-6 h-6 rounded-full  bg-popover text-[#a8a8a8] flex justify-center items-center text-lg ${quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>-</div>
                                                            <input type="text" value={quantity} readOnly className="bg-transparent outline-none border-none w-8 text-center text-sm font-bold" />
                                                            <div onClick={() => handleIncrementProductQuantity(id)} className="w-6 h-6 rounded-full  bg-popover flex justify-center items-center cursor-pointer">+</div>
                                                        </div>
                                                    </div>

                                                    <div className='mt-1.5 flex gap-3'>
                                                        <div className='cursor-pointer'>
                                                            <ScanSearch size={14} />
                                                        </div>
                                                        <div className='cursor-pointer'>
                                                            <Heart size={14} />
                                                        </div>
                                                        <div className='cursor-pointer' onClick={() => handleRemoveToCart(id)}>
                                                            <Trash size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default CartProductsList