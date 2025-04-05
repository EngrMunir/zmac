'use client'
import { ChevronDown, FilesIcon, Home, NotepadText, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "motion/react"

type MenuItem = {
  title: string;
  icon: JSX.Element;
  link?: string;
  subItems?: { title: string; link: string }[];
};

const menuData: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: <Home size={18} />,
    link: '/dashboard',
  },
  {
    title: 'Product',
    icon: <ShoppingCart size={18} />,
    link: '/dashboard/product-create',
  },
  {
    title: 'Notes',
    icon: <NotepadText size={18} />,
    subItems: [
      { title: 'Add New Note', link: '/dashboard/note/create' },
      { title: 'Note List', link: '/dashboard/note/list' },
    ],
  },
  {
    title: 'Uploaded Files',
    icon: <FilesIcon size={18} />,
    link: '#',
  },
  {
    title: 'Package',
    icon: <NotepadText size={18} />,
    subItems: [
      { title: 'Packages', link: '/dashboard/package/packages-list' },
      { title: 'Purchase Package', link: '/dashboard/package/purchase-list' },
    ],
  },
  {
    title: 'Wholesale Products',
    icon: <ShoppingCart size={18} />,
    link: '/dashboard/wholesale-products',
  },
];


const DashboardSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };


  return (
    <aside className='bg-secondary text-secondary-foreground min-h-svh p-5 sticky top-0'>
      <h3 className='text-2xl font-semibold'>Logo</h3>
      <ul className='mt-7'>
        {menuData.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link || '#'}
              onClick={() => item.subItems && toggleDropdown(item.title)}
              className='flex items-center gap-2 py-3 text-sm relative'
            >
              {item.icon} {item.title}
              {item.subItems && (
                <span className='absolute right-0 top-1/2 -translate-y-1/2'>
                  <ChevronDown size={14} />
                </span>
              )}
            </Link>
            {item.subItems && (
              <ul
                className={`ml-8 transition-all duration-500 ${openDropdown === item.title ? 'h-auto visible opacity-100' : 'h-0 invisible opacity-0'
                  }`}
              >
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.link} className='flex items-center gap-2 py-3 text-sm'>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default DashboardSidebar