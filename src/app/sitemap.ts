import { getProducts } from '@/lib/getProducts'
import type { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getProducts()
    const productObj = products.map(({ id }: { id: number | string }) => {
        return (
            {
                url: `${process.env.API_URL}/product-details/${id}`,
                lastModified: new Date(),
            }
        )
    })
    return [
        {
            url: `${process.env.API_URL}`,
            lastModified: new Date(),
        },
        ...productObj
    ]
}