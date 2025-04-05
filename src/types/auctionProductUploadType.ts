import { ImgUploadType } from "@/components/ui/img-upload";

export type AuctionProductUploadType = {
    product_name: string;
    description: string;
    thumbnail: {};
    gallery: ImgUploadType[];
    pdf_specification: ImgUploadType[];
    brand: string;
    unit: string;
    weight: number;
    min_purchase: number;
    tags: string[];
    categories: string[];
    video_provider: string;
    video_link: string;
    price: number;
    tax: number;
    tax_type: string;
    bidding_date_range: {};
    bidding_price: number;
    meta_title: string;
    meta_description: string;
    meta_banner_img: ImgUploadType[];
    isCashOnDelivery: boolean;
    shipping_days: number;
    shipping_cost: number;
    isFreeShipping: boolean;
}