"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string
    name: string
    info: string
    totalStock: string
    approved: boolean
    published: string
    featured: boolean
    // options: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "#",
        size:120,
    },
    {
        accessorKey: "name",
        header: "Name",
        size:300,
        
    },
    {
        accessorKey: "info",
        header: "Info",
        size:300,
    },
    {
        accessorKey: "totalStock",
        header: "Total Stock",
    },
    {
        accessorKey: "approved",
        header: "Approved",
        size:100,
    },
    {
        accessorKey: "published",
        header: "Published",
    },
    {
        accessorKey: "featured",
        header: "Featured",
        size:100,
    },
    {
        accessorKey: "options",
        header: "Options",
    },
]
