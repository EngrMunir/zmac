'use client'
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/localStorageUtils";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";


export type CartProductsType = {
    id: number | string;
    storeName: string;
    title: string;
    thumbnail: string;
    quantity: number;
    price: number;
    color: string;
    size: string,
};

export type CartContextType = {
    cartProducts: CartProductsType[];
    setCartProducts: Dispatch<SetStateAction<CartProductsType[]>>;
    handleAddToCart: (a: CartProductsType) => void;
    handleRemoveToCart: (id: string | number) => void;
    handleIncrementProductQuantity: (id: string | number) => void;
    handleDecrementProductQuantity: (id: string | number) => void;
};

const initialContextValue: CartContextType = {
    cartProducts: [],
    setCartProducts: () => { },
    handleAddToCart: () => { },
    handleRemoveToCart: () => { },
    handleIncrementProductQuantity: () => { },
    handleDecrementProductQuantity: () => { },
};

export const AddToCartContext = createContext<CartContextType>(initialContextValue);

const AddToCartProvider = ({ children }: { children: ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<CartProductsType[]>(
        getLocalStorageItem<CartProductsType[]>("cartProducts", [])
    );

    const handleAddToCart = (product: CartProductsType) => {
        console.log(product)
        if (cartProducts.some((item) => (item.size === product.size && item.color === product.color && item.id === product.id))) {
            toast.error("This product is already in your cart");
            return;
        }
        const updatedProducts = [...cartProducts, product];
        setCartProducts(updatedProducts);
        setLocalStorageItem("cartProducts", updatedProducts);
        toast.success("Added product successfully");
    };

    const handleRemoveToCart = (id: string | number) => {
        const updatedProducts = cartProducts.filter((product) => product.id !== id);
        setCartProducts(updatedProducts);
        setLocalStorageItem("cartProducts", updatedProducts);
    };

    const handleIncrementProductQuantity = (id: string | number) => {
        const updatedProducts = cartProducts.map((product) =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCartProducts(updatedProducts);
        setLocalStorageItem("cartProducts", updatedProducts);
    };

    const handleDecrementProductQuantity = (id: string | number) => {
        const updatedProducts = cartProducts.map((product) =>
            product.id === id && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        setCartProducts(updatedProducts);
        setLocalStorageItem("cartProducts", updatedProducts);
    };

    useEffect(() => {
        setLocalStorageItem("cartProducts", cartProducts);
    }, [cartProducts]);

    const contextValue: CartContextType = {
        cartProducts,
        setCartProducts,
        handleAddToCart,
        handleRemoveToCart,
        handleIncrementProductQuantity,
        handleDecrementProductQuantity,
    };

    return (
        <AddToCartContext.Provider value={contextValue}>
            {children}
        </AddToCartContext.Provider>
    );
};

export default AddToCartProvider;
