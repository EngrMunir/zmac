import AddressForm from "@/components/sections/addressForm"
import AddressTable from "./addressTable"

const ShippingAddress = () => {
    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">Shipping address</h6>
            </div>
            <div className="rounded-md bg-background px-5 py-5 mt-5">
                <AddressForm />
            </div>
            <div className="bg-background rounded-md px-5 py-5 mt-5">
               <AddressTable/>
            </div>
        </section>
    )
}

export default ShippingAddress