'use client'
import React, { ChangeEventHandler, FormEvent, useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import UploadProductMediaTab from '@/components/sections/upload-products/uploadProductMediaTab'
import UploadProductPriceStockTab from '@/components/sections/upload-products/uploadProductPriceStockTab'
import UploadProductSeoTab from '@/components/sections/upload-products/uploadProductSeoTab'
import UploadProductShippingTab from '@/components/sections/upload-products/uploadProductShippingTab'
import UploadProductWarrantyTab from '@/components/sections/upload-products/uploadProductWarrantyTab'
import UploadProductFrequentlyBoughtTab from '@/components/sections/upload-products/uploadProductFrequentlyBoughtTab'
import { ProductUpdateFormState } from '@/types/ProductUpdateFormState'
const UploadProductGeneralTab = dynamic(() => import('@/components/sections/upload-products/uploadProductGeneralTab'), { ssr: false })

const tabList = [
    { value: 'general', title: 'General' },
    { value: 'files-media', title: 'Files & Media' },
    { value: 'price-stock', title: 'Price & Stock' },
    { value: 'seo', title: 'SEO' },
    { value: 'shipping', title: 'Shipping' },
    { value: 'warranty', title: 'Warranty' },
    { value: 'frequently-bought', title: 'Frequently Bought' },
]

const UploadProductProductTabContainer = () => {
    const [activeTab, setActiveTab] = useState('general')
    const [fromValue, setFromValue] = useState<ProductUpdateFormState>({
        min_purchase: 1,
        product_name: '',
        todays_deal: false,
        brand: '',
        categories: [],
        flash: '',
        isFeatured: false,
        tags: [],
        unit: '',
        weight: 0,
        thumbnail: [],
        gallery: [],
        pdf_specification: [],
        video_provider: 'youtube',
        video_link: '',
        price: 0,
        discount: 0,
        tax: 0,
        tax_type: '',
        discount_type: '',
        discount_date_range: {},
        products_colors: [],
        quantity: 1,
        SKU: '',
        low_quantity_warning: 1,
        showStockQuantity: true,
        showStockText: false,
        hideStock: false,
        meta_title: '',
        meta_description: '',
        meta_banner_img: [],
        isCashOnDelivery: true,
        isProductQuantityMulitiply: false,
        shipping_days: 1,
        shipping_cost: 0,
        isFreeShipping: true,
        isWarranty: false,
    })

    const handleChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { value, name } = e.target
        setFromValue({ ...fromValue, [name]: value })
    }

    console.log(fromValue)
    const validitionFunctionlity = (): boolean => {
        if (activeTab === 'general') {
            if (!fromValue.product_name) {
                alert('Product name is required.');
                return false;
            }
            if (!fromValue.unit) {
                alert('Unit is required.');
                return false;
            }
        }

        if (activeTab === 'files-media') {
            if (!fromValue.thumbnail) {
                alert('Thumbnail is required.');
                return false;
            }
        }

        return true;
    }

    const handleTabChangeByIndex = (index: number) => {
        if (index >= 0 && index < tabList.length) {
            if (validitionFunctionlity()) {
                setActiveTab(tabList[index].value);
            }
        }
    };

    const handleNextClick = () => {
        const currentIndex = tabList.findIndex(tab => tab.value === activeTab);
        handleTabChangeByIndex(currentIndex + 1);
    };

    const handlePrevClick = () => {
        const currentIndex = tabList.findIndex(tab => tab.value === activeTab);
        handleTabChangeByIndex(currentIndex - 1);
    };

    const handleTabClick = (value: string) => {
        if (validitionFunctionlity()) {
            setActiveTab(value);
        }
    }



    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        // 
    }
    console.log(fromValue)

    return (
        <div>
            <ul className='bg-background rounded-md flex mb-5'>
                {
                    tabList.map(({ title, value }) =>
                        <li
                            key={value}
                            className={`cursor-pointer text-sm p-5 ${value === activeTab ? 'text-primary-foreground' : ''}`}
                            onClick={() => handleTabClick(value)}
                        >
                            {title}
                        </li>
                    )
                }
            </ul>

            <div className='bg-background p-5 rounded-md'>
                {activeTab === 'general' && (
                    <div>
                        <UploadProductGeneralTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5'>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                )}
                {activeTab === 'files-media' && (
                    <div>
                        <UploadProductMediaTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' variant={"outline"} className='px-12 3xl:h-11 rounded-[4px]' onClick={handlePrevClick}>Prev</Button>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                )}
                {activeTab === 'price-stock' && (
                    <div>
                        <UploadProductPriceStockTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' variant={"outline"} className='px-12 3xl:h-11 rounded-[4px]' onClick={handlePrevClick}>Prev</Button>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                )}
                {activeTab === 'seo' && (
                    <div>
                        <UploadProductSeoTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' variant={"outline"} className='px-12 3xl:h-11 rounded-[4px]' onClick={handlePrevClick}>Prev</Button>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                )}
                {activeTab === 'shipping' && (
                    <div>
                        <UploadProductShippingTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' variant={"outline"} className='px-12 3xl:h-11 rounded-[4px]' onClick={handlePrevClick}>Prev</Button>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                )}
                {activeTab === 'warranty' &&
                    <div>
                        <UploadProductWarrantyTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' variant={"outline"} className='px-12 3xl:h-11 rounded-[4px]' onClick={handlePrevClick}>Prev</Button>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]' onClick={handleNextClick}>Next</Button>
                        </div>
                    </div>
                }
                {activeTab === 'frequently-bought' &&
                    <div>
                        <UploadProductFrequentlyBoughtTab />
                        <div className='flex justify-end mt-5 gap-5'>
                            <Button type='button' className='px-12 3xl:h-11 rounded-[4px]'>Submit</Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default UploadProductProductTabContainer