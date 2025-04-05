'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import AddressForm from "./sections/addressForm"
import { useContext, useEffect, useState } from "react"
import { AddressContext, initialFormFields } from "@/contextApi/addressProvider"

const AddressEditPopup = () => {
    const { addressData } = useContext(AddressContext)
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <p className="cursor-pointer text-blue-600 font-medium">Change</p>
                </DialogTrigger>
                <DialogContent
                    // onOpenAutoFocus={(e) => e.preventDefault()}
                    className="rounded-md max-w-[850px]"
                >
                    <DialogHeader>
                        <DialogTitle>Shipping address</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-5">
                        {
                            addressData.map(({ apt, city, country, id, isDefault, name, phoneNumber, state, street, zipCode }) => {
                                return (
                                    <div key={id} className="border rounded-md p-3 flex justify-between">
                                        <div>
                                            <p className="font-semibold mb-0.5 capitalize">{name}</p>
                                            <p className="text-sm text-accent-foreground">{phoneNumber}</p>
                                            <p className="text-sm text-accent-foreground capitalize">{apt ? <span>{apt}, </span> : ''} {street}</p>
                                            <p className="text-sm text-accent-foreground capitalize">{city}, {state}, {country}, {zipCode}</p>
                                            {
                                                isDefault &&
                                                <p className="text-xs text-primary-foreground bg-[#fff1f1] inline-block px-3 py-1 rounded-full mt-1.5">Default</p>
                                            }
                                        </div>
                                        <FromEditModal id={id} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <FromAddNewAddressModal />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddressEditPopup


const FromEditModal = ({ id }: { id: number | string }) => {
    const { setEditId, setFormFields } = useContext(AddressContext)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) {
            setFormFields(initialFormFields);
            setEditId(0);
        }
        if (open) {
            setTimeout(() => {
                setEditId(id)
            }, 30);
        }
    }, [open])


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <p className="text-blue-600 cursor-pointer">Edit</p>
            </DialogTrigger>
            <DialogContent
                // onOpenAutoFocus={(e) => e.preventDefault()}
                className="rounded-md max-w-[850px]"
            >
                <DialogHeader>
                    <DialogTitle>Edit shipping address</DialogTitle>
                </DialogHeader>
                <AddressForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}

const FromAddNewAddressModal = () => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size={"sm"} className="w-full 3xl:h-11 mt-15">Add New Address</Button>
            </DialogTrigger>
            <DialogContent
                // onOpenAutoFocus={(e) => e.preventDefault()}
                className="rounded-md max-w-[850px]"
            >
                <DialogHeader>
                    <DialogTitle>Edit shipping address</DialogTitle>
                </DialogHeader>
                <AddressForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}