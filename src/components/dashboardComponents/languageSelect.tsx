'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const LanguageSelect = () => {
    const [selectedValue, setSelectedValue] = useState<string>('english');

    const handleSelectChange = (value: string) => {
        setSelectedValue(value);
    };

    const getImageSrc = (value: string) => {
        switch (value) {
            case 'english':
                return '/images/dashboard/flag/uk.png';
            case 'turkey':
                return '/images/dashboard/flag/turkey.png';
            case 'arabia':
                return '/images/dashboard/flag/saudi-arabia.png';
            default:
                return '/images/dashboard/flag/uk.png';
        }
    };

    return (
        <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="border-none max-w-10 [&_svg]:hidden">
                <Image width={20} height={20} src={getImageSrc(selectedValue)} alt="img" className='max-w-5' />
                {/* <SelectValue /> */}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="english">
                    <span className='flex items-center gap-2'>
                        <Image width={20} height={20} src="/images/dashboard/flag/uk.png" alt="img" className='max-w-5' /> English
                    </span>
                </SelectItem>
                <SelectItem value="turkey">
                    <span className='flex items-center gap-2'>
                        <Image width={20} height={20} src="/images/dashboard/flag/turkey.png" alt="img" className='max-w-5' /> Turkey
                    </span>
                </SelectItem>
                <SelectItem value="arabia">
                    <span className='flex items-center gap-2'>
                        <Image width={20} height={20} src="/images/dashboard/flag/saudi-arabia.png" alt="img" className='max-w-5' /> Arabia
                    </span>
                </SelectItem>
            </SelectContent>
        </Select>
    );
};

export default LanguageSelect;