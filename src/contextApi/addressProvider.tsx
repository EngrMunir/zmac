'use client'
import { addressList, AddressType } from '@/db/addressList'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export const initialFormFields = {
    id: '',
    name: '',
    phoneNumber: '',
    country: 'Bangladesh',
    street: '',
    apt: '',
    state: '',
    city: '',
    zipCode: '',
    isDefault: false
}

export type AddressContextType = {
    formFields: AddressType,
    setFormFields: Dispatch<SetStateAction<AddressType>>,
    addressData: AddressType[],
    setAddressData: Dispatch<SetStateAction<AddressType[]>>,
    editId: number | string,
    setEditId: Dispatch<SetStateAction<number | string>>
}
const initialContextValue: AddressContextType = {
    formFields: initialFormFields,
    setFormFields: () => { },
    addressData: [],
    setAddressData: () => { },
    editId: 0,
    setEditId: () => { }
}
export const AddressContext = createContext<AddressContextType>(initialContextValue);

const AddressProvider = ({ children }: { children: ReactNode }) => {
    const [addressData, setAddressData] = useState(addressList)
    const [editId, setEditId] = useState<number | string>(0)
    const [formFields, setFormFields] = useState<AddressType>(initialFormFields)

    const contextValue = {
        formFields,
        setFormFields,
        addressData,
        setAddressData,
        editId,
        setEditId
    }

    return (
        <AddressContext.Provider value={contextValue}>
            {children}
        </AddressContext.Provider>
    )
}

export default AddressProvider