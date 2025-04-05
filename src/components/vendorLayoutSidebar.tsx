'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { vendorSidebarList } from "@/db/vendorSidebarList"


const VendorLayoutSidebar = () => {
    const pathName = usePathname()
    const firstPart = pathName.match(/^(\/[^\/]+)/)?.[1];

    return (
        <ul className="flex flex-col gap-1 bg-background py-5 rounded-md">
            <li className="font-semibold px-5 pb-2 mb-3 border-b">Vendor</li>
            {
                vendorSidebarList.map(({ id, name, url }) => (
                    <li key={id}>
                        <Link href={url} className={`text-sm capitalize py-3 px-5 rounded-md block font-medium hover:bg-popover hover:text-primary-foreground transition-all duration-300 ${firstPart === url ? "bg-popover text-primary-foreground" : ""}`}>{name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default VendorLayoutSidebar