"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string
    user: string
    type: string
    description: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "#",
    },
    {
        accessorKey: "user",
        header: "User",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "options",
        header: "Options",
    },
]
