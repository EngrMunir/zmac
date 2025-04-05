export type AddressType = {
    id: number | string,
    name: string,
    phoneNumber: string,
    country: string,
    street: string,
    apt: string,
    state: string,
    city: string,
    zipCode: string,
    isDefault: boolean
}
export const addressList: AddressType[] = [
    {
        id: 1,
        name: "Mostafizar Rahman",
        phoneNumber: "01575699193",
        country: "Bangladesh",
        street: "Dahagram",
        apt: "",
        state: "Lalmonirhat",
        city: "Patgram",
        zipCode: "5544",
        isDefault: true
    }
]