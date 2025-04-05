import AddPaymentMethodPopup from "@/components/addPaymentMethodPopup"
import AddressEditPopup from "@/components/addressEditPopup"
import dynamic from "next/dynamic"

const CheckoutProductsList = dynamic(() => import("./checkoutProductsList"), { ssr: false })
const CheckoutSummary = dynamic(() => import("./checkoutSummary"), { ssr: false })

const Checkout = () => {
    return (
        <section className="container max-w-[1124px] mt-11 mb-15">
            <div className='grid grid-cols-[auto_35%] items-start gap-5'>
                <div>
                    <div className="border px-5 py-5 rounded-md">
                        <div className="flex items-center justify-between">
                            <h6 className="text-xl font-semibold">Shipping address</h6>
                            <AddressEditPopup />
                        </div>
                        <div className="mt-2">
                            <p className="font-semibold mb-0.5">Mostafizar Rahman</p>
                            <p className="text-sm text-accent-foreground">+880 01575699193</p>
                            <p className="text-sm text-accent-foreground">Dahagram</p>
                            <p className="text-sm text-accent-foreground">Lalmonirhat, Bangladesh, 5540</p>
                        </div>
                    </div>

                    <div className="border px-5 py-5 rounded-md mt-5">
                        <h6 className="text-xl font-semibold mb-3">Payment Methods</h6>
                        <AddPaymentMethodPopup isCheckoutPageTriggerBtn={true} />
                    </div>

                    <CheckoutProductsList />

                </div>
                <CheckoutSummary/>
            </div>


        </section>
    )
}

export default Checkout