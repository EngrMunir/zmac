'use client'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useEffect, useState } from "react"
import { groupCountriesAlphabetically } from "@/lib/groupCountriesAlphabetically"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Search } from "lucide-react"
import { AddressContext, initialFormFields } from "@/contextApi/addressProvider"

// setOpen props come from addressEditPopup component, 
const AddressForm = ({ setOpen }: { setOpen?: Dispatch<SetStateAction<boolean>> }) => {
    const { formFields, setFormFields, addressData, setAddressData, editId, setEditId } = useContext(AddressContext)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
            .then((res) => res.json())
            .then((data) => setCountries(data.data))
    }, [])

    const groupedCountries = groupCountriesAlphabetically(countries);


    // find the edit address and set the value in  setFormFields hooks the hook is an object 
    useEffect(() => {
        const foundAddress = addressData.find(({ id }) => id === editId);
        if (foundAddress) {
            setFormFields({ ...foundAddress });
        }
    }, [editId, addressData]);

    // get input field value
    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setFormFields({ ...formFields, [name]: value })
    }

    // handle country select value
    const handleCountrayValue = (value: string) => {
        // setSelectCountry(value)
        setFormFields({ ...formFields, country: value })
    }

    const handleCheckboxValue = (value: boolean) => {
        console.log(value)
        setFormFields({ ...formFields, isDefault: value })
    }

    // submit address from
    const handleFromSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (formFields) {
            let updatedData = [...addressData];

            // If the current form is set as default, remove the default flag from other addresses
            if (formFields.isDefault) {
                updatedData = updatedData.map(addr => ({
                    ...addr,
                    isDefault: addr.id === formFields.id ? true : false
                }));
            }

            if (editId) {
                updatedData = updatedData.map((addr) => addr.id === formFields.id ? formFields : addr);
                setAddressData(updatedData);
                setEditId(0);
                if (setOpen) setOpen(false);
            } else {
                setAddressData([...updatedData, { ...formFields, id: addressData.length + 1 }]);
                if (setOpen) setOpen(false);
            }

            setFormFields(initialFormFields);
        }
    }

    // cancle edit from
    const handleCancel = () => {
        setFormFields(initialFormFields);
        // setSelectCountry("Bangladesh");
        setEditId(0);
        if (setOpen) setOpen(false)
    };
    console.log(formFields.country)
    return (
        <form action="" className="grid gap-5" onSubmit={handleFromSubmit} >
            <div className="grid grid-cols-2 gap-5">
                <Select value={formFields.country} onValueChange={value => handleCountrayValue(value)}>
                    <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] h-12">
                        <div className='flex items-center gap-2'>
                            <SelectValue />
                        </div>
                    </SelectTrigger>
                    <SelectContent className="p-0 relative">
                        <div className="p-3 pt-0">
                            <div className="sticky -top-5 pb-3 pt-3 bg-background z-50">
                                <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                            </div>
                            {Object.keys(groupedCountries).sort().map((letter, index) => (
                                <SelectGroup key={index}>
                                    <SelectLabel className="border-b mb-2">{letter}</SelectLabel>
                                    {groupedCountries[letter].map((cn: any) => (
                                        <SelectItem key={cn.name} value={cn.name}>
                                            <div className="flex items-center gap-2">
                                                <img src={cn.flag} alt="flag" className="w-6 h-4" />
                                                <span>{cn.name}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            ))}
                        </div>
                    </SelectContent>
                </Select>
                <div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input onChange={handleInputValue} required value={formFields.name} name="name" placeholder="Enter your name*" className="text-sm h-12.5" />
                <Input onChange={handleInputValue} required value={formFields.phoneNumber} name="phoneNumber" placeholder="Enter your phone number*" className="text-sm h-12.5" />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input onChange={handleInputValue} required value={formFields.street} name="street" placeholder="Street, house/apartment/unit*" className="text-sm h-12.5" />
                <Input onChange={handleInputValue} value={formFields.apt} name="apt" placeholder="Apt, suite, unit, etc(optional)" className="text-sm h-12.5" />
            </div>
            <div className="grid grid-cols-3 gap-5">
                <Input onChange={handleInputValue} value={formFields.state} required name="state" placeholder="State/Province*" className="text-sm h-12.5" />
                <Input onChange={handleInputValue} value={formFields.city} required name="city" placeholder="City*" className="text-sm h-12.5" />
                <Input onChange={handleInputValue} value={formFields.zipCode} required name="zipCode" placeholder="Zip Code*" className="text-sm h-12.5" />
            </div>
            <div className="flex items-center gap-1">
                <Checkbox onCheckedChange={handleCheckboxValue} checked={formFields.isDefault} id="default-check" />
                <label htmlFor="default-check" className="text-sm text-[#666]">Set as default shipping address</label>
            </div>
            <div>
                {
                    editId ?
                        <div>
                            <Button type="submit" variant={"secondary"} className="px-15">Update</Button>
                            <Button type="reset" variant={"outline"} onClick={handleCancel} className="px-15 border-secondary ml-5">Cancle</Button>
                        </div>
                        :
                        <Button type="submit" variant={"secondary"} className="px-15">Submit</Button>
                }
            </div>
        </form>
    )
}

export default AddressForm