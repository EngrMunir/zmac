'use client'
import { useContext } from "react"
import { Edit, Trash } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { addressList } from "@/db/addressList"
import { AddressContext } from "@/contextApi/addressProvider"

const AddressTable = () => {
    const { addressData, setEditId } = useContext(AddressContext)
    console.log(addressList)
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold text-base text-foreground">Name</TableHead>
                    <TableHead className="font-semibold text-base text-foreground">Number</TableHead>
                    <TableHead className="font-semibold text-base text-foreground">Address</TableHead>
                    <TableHead className="font-semibold text-base text-foreground">Label</TableHead>
                    <TableHead className="font-semibold text-base text-foreground">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    addressData.map(({ apt, city, country, id, name, phoneNumber, state, street, zipCode, isDefault }) => {
                        return (
                            <TableRow key={id}>
                                <TableCell className="py-4 capitalize">{name}</TableCell>
                                <TableCell className="py-4">{phoneNumber}</TableCell>
                                <TableCell className="py-4 capitalize">
                                    {apt ? <span>{apt}, </span> : ''} {street}, {city}, {state}, {country}, {zipCode}
                                </TableCell>
                                <TableCell className="py-4 w-[150px] capitalize">{isDefault ? "Default" : ""}</TableCell>
                                <TableCell className="py-4">
                                    <div className="flex gap-4">
                                        <span className="cursor-pointer"><Trash /></span>
                                        <span className="cursor-pointer" onClick={() => setEditId(id)}><Edit /></span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default AddressTable