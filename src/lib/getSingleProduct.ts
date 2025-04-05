export const getSingleProduct = async (id: string | number) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    return data
}