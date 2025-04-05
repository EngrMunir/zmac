// import CartProductsList from './cartProductsList'
// import CartSummary from './cartSummary'

import dynamic from "next/dynamic"

const CartProductsList = dynamic(() => import("./cartProductsList"), { ssr: false })
const CartSummary = dynamic(() => import("./cartSummary"), { ssr: false })
const ProductsCart = () => {

    return (
        <div className='container max-w-[1024px] mt-11 mb-15'>
            <div className='grid grid-cols-[auto_35%] items-start gap-10'>
                <CartProductsList />
                <CartSummary />
            </div>
        </div>
    )
}

export default ProductsCart