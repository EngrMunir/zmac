import React from 'react'
import AuctionProductBlogLayout from './auctionProductBlogLayout'
import { Checkbox } from '@/components/ui/checkbox';
import { AuctionProductUploadPropsType } from './auctionProductInfo';
const categories = [
    { id: 'category-1', label: 'Demo category 1' },
    { id: 'category-2', label: 'Demo category 2' },
    { id: 'category-3', label: 'Demo category 3' },
    // Add more categories as needed
];

const AuctionProductCategory = ({ handleChangeEvent, setFromValue, fromValue }: AuctionProductUploadPropsType) => {
    const handleCheckboxChange = (id: string, checked: boolean | string) => {
        if (checked) {
            setFromValue((prev) => ({ ...prev, 'categories': [...fromValue.categories, id] }))
        } else {
            const x = fromValue.categories.filter((item) => item !== id)
            setFromValue((prev) => ({ ...prev, 'categories': x }))
        }
    }
    return (
        <AuctionProductBlogLayout
            title='Product category'
        >
            <div className='flex flex-col gap-2 text-sm'>
                {categories.map((category, index) => (
                    <div key={category.id}>
                        <Checkbox
                            className='size-3 mr-1 rounded-[2px] [&_svg]:size-2.5 [&_span]:h-2'
                            id={category.id}
                            checked={fromValue.categories && fromValue.categories.includes(category.id)}
                            onCheckedChange={(checked) => handleCheckboxChange(category.id, checked)}
                        />
                        <label htmlFor={category.id}>{category.label}</label>
                    </div>
                ))}
            </div>
        </AuctionProductBlogLayout>
    )
}

export default AuctionProductCategory