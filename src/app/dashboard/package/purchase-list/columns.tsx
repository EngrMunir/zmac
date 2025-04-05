"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string
    package: string
    packagePrice: string
    paymentType: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "#",
    },
    {
        accessorKey: "package",
        header: "Package",
    },
    {
        accessorKey: "packagePrice",
        header: "Package Price",
    },
    {
        accessorKey: "paymentType",
        header: "Payment Type",
    },
]
