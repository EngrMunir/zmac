import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { getProducts } from "@/lib/getProducts";
import { productType } from "@/types/productType";

const ProductList = async({params}:{params: Promise<{slug:string[]}>}) => {
    const { slug } = await params;
    console.log(slug)
    const data: productType[] = await getProducts()
    return (
        // <div>
        //     <h1>param is {slug[0]} and {slug[1]}</h1>
        // </div>
        <section className="container pt-8">
            <h2 className="text-center font-bold text-[32px] pb-2 uppercase">{slug[1]}</h2>
            <div className="grid 2xl:grid-cols-6 grid-cols-5 gap-x-4 gap-y-2">
                {
                    data.map(({ id, thumbnail, title, price, discountPercentage }) =>
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            thumbnail={thumbnail}
                            price={price}
                            discountPercentage={discountPercentage}
                        />
                    )
                }
            </div>
            <div className="flex justify-center  mt-6">
                <Button className="rounded-full font-bold h-12 w-[188px]">View more</Button>
            </div>
        </section>
    );
};

export default ProductList;