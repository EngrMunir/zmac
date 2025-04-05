import type { Metadata } from 'next'
import ProductDetailsTab from "@/components/sections/product-details/productDetailsTab"
import ProductImageGallery from "@/components/sections/product-details/productImageGallery"
import ProductShortInfo from "@/components/sections/product-details/productShortInfo"
import PurchaseSideSection from "@/components/sections/product-details/purchaseSideSection"
import { getSingleProduct } from "@/lib/getSingleProduct"
import { getProducts } from '@/lib/getProducts'


export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
    const paramsId = Number(params.id);
    const productd = await getSingleProduct(paramsId);

    if (!productd) {
        return {
            title: 'Product Not Found',
            description: 'The product you are looking for does not exist.',
        };
    }

    return {
        title: productd.title,
        description: productd.description,
        openGraph: {
            title: productd.title,
            description: productd.description,
            images: [
                {
                    url: productd.thumbnail,
                    alt: productd.title,
                },
            ],
        },
        twitter: {
            title: productd.title,
            description: productd.description,
            images: [
                {
                    url: productd.thumbnail,
                    alt: productd.title,
                }
            ],
        }
    };
}



const page = async ({ params }: { params: any }) => {
    const paramsId = Number(params.id);
    const productd = await getSingleProduct(paramsId)
    const getAllProducts = await getProducts()

    if (!productd) {
        return null
    }
    return (
        <div className="container">
            <div className="mt-11 flex items-start gap-6">
                <div>
                    <div className="flex items-start gap-6">
                        <ProductImageGallery className="w-[42%]" />
                        <ProductShortInfo
                            description={productd.description}
                            price={productd.price}
                            title={productd.title}
                        />
                    </div>
                    <span className="inline-block h-px w-full bg-[rgba(0,0,0,0.1)] mt-7"></span>
                    <ProductDetailsTab data={getAllProducts} />
                </div>
                <PurchaseSideSection
                    id={productd.id}
                    price={productd.price}
                    thumbnail={productd.thumbnail}
                    title={productd.title}
                    color=""
                    isProductDetailsPage={true}
                />
            </div>
        </div>
    )
}

export default page