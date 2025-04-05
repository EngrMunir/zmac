'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

type ColorType = {
    index: number,
    img: string,
    colorName: string
}
type ProductDetailsContactType = {
    selectColor: ColorType,
    setSelectColor: Dispatch<SetStateAction<ColorType>>,
    selectSize: string,
    setSelectSize: Dispatch<SetStateAction<string>>,
    isScrollPriceShow: boolean,
    setIsScrollPriceShow: Dispatch<SetStateAction<boolean>>
}

const initialContextValue: ProductDetailsContactType = {
    selectColor: {
        index: 0,
        img: "",
        colorName: ""
    },
    setSelectColor: () => { }, // Placeholder function
    selectSize: "s",
    setSelectSize: () => { }, // Placeholder function
    isScrollPriceShow: false,
    setIsScrollPriceShow: () => { } // Placeholder function
};

export const ProductDetailsContext = createContext<ProductDetailsContactType>(initialContextValue)

const ProductDetailsProvider = ({ children }: { children: ReactNode }) => {
    const [selectColor, setSelectColor] = useState<ColorType>({
        index: 0,
        img: "https://ae-pic-a1.aliexpress-media.com/kf/Saf7b344953994dcc94a80c7f2b87d5e0s.jpg_960x960q75.jpg_.avif",
        colorName: "black"
    })
    const [selectSize, setSelectSize] = useState("s")
    const [isScrollPriceShow, setIsScrollPriceShow] = useState(false)

    const contextValue = {
        selectColor,
        setSelectColor,
        selectSize,
        setSelectSize,
        isScrollPriceShow,
        setIsScrollPriceShow
    }
    return (
        <ProductDetailsContext.Provider value={contextValue}>
            {children}
        </ProductDetailsContext.Provider>
    )
}

export default ProductDetailsProvider