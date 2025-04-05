import { ImgUploadType } from "@/components/ui/img-upload";

export type ProductUpdateFormState = {
    product_name: string;
    thumbnail: ImgUploadType[];
    gallery: ImgUploadType[];
    pdf_specification: ImgUploadType[];
    brand: string;
    flash: string;
    unit: string;
    weight: number;
    min_purchase: number;
    tags: string[];
    categories: string[];
    isFeatured: boolean;
    todays_deal: boolean;
    video_provider: string;
    video_link: string;
    price: number;
    discount: number;
    tax: number;
    tax_type: string;
    discount_type: string;
    discount_date_range: {};
    products_colors: {
        color: string,
        variant_price: number,
        SKU: string,
        quantity: number
    }[];
    quantity: number;
    SKU: string;
    low_quantity_warning: number;
    showStockQuantity: boolean;
    showStockText: boolean;
    hideStock: boolean;
    meta_title: string;
    meta_description: string;
    meta_banner_img: ImgUploadType[];
    isCashOnDelivery: boolean;
    isProductQuantityMulitiply: boolean;
    shipping_days: number;
    shipping_cost: number;
    isFreeShipping: boolean;
    isWarranty: boolean;
};