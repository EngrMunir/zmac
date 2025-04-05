'use client'
import React, { ChangeEventHandler, useState } from 'react'
import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import UploadProductFrequentlyBoughtTab from '@/components/sections/upload-products/uploadProductFrequentlyBoughtTab'
import UploadProductMediaTab from '@/components/sections/upload-products/uploadProductMediaTab'
import UploadProductPriceStockTab from '@/components/sections/upload-products/uploadProductPriceStockTab'
import UploadProductSeoTab from '@/components/sections/upload-products/uploadProductSeoTab'
import UploadProductShippingTab from '@/components/sections/upload-products/uploadProductShippingTab'
import UploadProductWarrantyTab from '@/components/sections/upload-products/uploadProductWarrantyTab'
import { ProductUpdateFormState } from '@/types/ProductUpdateFormState'
import dynamic from 'next/dynamic'
const UploadProductGeneralTab = dynamic(() => import('@/components/sections/upload-products/uploadProductGeneralTab'), { ssr: false })


const ProductCreateContainer = () => {
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
    return (
        <div className='flex flex-col gap-10'>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Product Information'
                />
                <UploadProductGeneralTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Product Images'
                />
                <UploadProductMediaTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Product Variation'
                />
                <UploadProductPriceStockTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='SEO Meta Tags'
                />
                <UploadProductSeoTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Shipping Configuration'
                />
                <UploadProductShippingTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Warranty'
                />
                <UploadProductWarrantyTab handleChangeEvent={handleChangeEvent} fromValue={fromValue} setFromValue={setFromValue} />
            </DashboardCardLayout>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    className='mb-5'
                    title='Frequently Bought'
                />
                <UploadProductFrequentlyBoughtTab />
            </DashboardCardLayout>
        </div>
    )
}

export default ProductCreateContainer