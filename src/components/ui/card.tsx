'use client'
import Link from "next/link"
import { ShoppingCartIcon, Star } from "lucide-react"
import { MouseEvent, useEffect, useRef, useState } from "react"
import ProductQuickView from "../sections/product-details/productQuickView"
import SimilarItemPopup from "../similarItemPopup"
import { Button } from "./button"
import Image from "next/image"
import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice"

type ProductCardType = {
  id: number | string,
  thumbnail: string,
  title: string,
  price: number,
  discountPercentage: number,

}
const Card = ({ id, title, thumbnail, price, discountPercentage }: ProductCardType) => {
  const calculatePrice = calculateDiscountPrice(price, discountPercentage)
  // divided the price base on .
  const finalPrice = calculatePrice?.toString().match(/^(\d+)\.(\d{2})$/);


  const ref = useRef<HTMLDivElement>(null)
  const initialWidth = useRef<number>();
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [isSimilarDialogOpen, setIsSimilarDialogOpen] = useState(false);

  const handleMouseHover = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    if (ref.current) {
      if (!initialWidth.current) {
        initialWidth.current = ref.current.offsetWidth;
      }

      const childElement = ref.current.children[0] as HTMLElement;
      if (childElement) {
        childElement.style.maxWidth = `${initialWidth.current}px`;

        const newWidth = initialWidth.current + 24; // Always calculate from initial width
        ref.current.style.width = `${newWidth}px`;
        ref.current.style.left = "-12px";
      }
    }
  };


  const handleMouseLeave = () => {
    if ((!isPreviewDialogOpen || !isSimilarDialogOpen) && ref.current) {
      const childElement = ref.current.children[0] as HTMLElement;
      if (childElement) {
        childElement.style.maxWidth = `100%`;
      }

      ref.current.style.width = `auto`;
      ref.current.style.left = "0px";
    }
  };

  useEffect(() => {
    handleMouseLeave()
  }, [isSimilarDialogOpen, isPreviewDialogOpen])


  return (
    <div className="relative rounded-2xl group">
      <div
        ref={ref}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
        className="group-hover:absolute z-40 group-hover:h-auto group-hover:shadow-4xl group-hover:rounded-2xl py-4 bg-background">
        <div className=" mx-auto">
          <Link href={`/product-details/${id}`} className="relative">
            <Image width={256} height={256} sizes="100vw" src={thumbnail} alt="img" className="rounded-2xl" />
            <div className="absolute right-3 bottom-3 w-12 h-12 rounded-full flex justify-center items-center bg-background cursor-pointer hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300">
              <ShoppingCartIcon />
            </div>
          </Link>
          <div className="mt-2">
            <Link href={`/product-details/${id}`} className="line-clamp-1 text-sm">{title}</Link>
            <div className="flex items-center justify-between mt-0.5">
              <div className="flex items-center">
                <ul className="flex gap-0.5">
                  <li><Star fill="black" size={10} /></li>
                  <li><Star fill="black" size={10} /></li>
                  <li><Star fill="black" size={10} /></li>
                  <li><Star fill="black" size={10} /></li>
                  <li><Star fill="black" size={10} /></li>
                </ul>
                <span className="text-accent text-xs ml-1.5">6 sold</span>
              </div>
              <Image height={16} width={80} sizes="100vw" className="inline-block ml-2 object-contain max-h-4" src="https://ae01.alicdn.com/kf/Sba3affa33fb2433f934852e5b2abaf25v/250x64.png" alt="img" />
            </div>
            <div>
              <p className="font-bold inline-block">
                <span className="text-xs">US $</span>
                <span className="text-2xl">{finalPrice && finalPrice[1]}</span>
                <span className="text-xs">.{finalPrice && finalPrice[2]}</span>
              </p>
              <p className="text-[rgb(153,153,153)] line-through text-xs inline-block ml-3">US ${price}</p>
            </div>
            <p className="text-sm mt-2 text-[rgb(25,25,25)]">Free shipping</p>
            <div className="mt-2.5 hidden group-hover:flex min-[1552px]:flex-row flex-col justify-between items-center gap-2 bg-background">
              <Button
                onClick={() => setIsPreviewDialogOpen(true)}
                variant={"secondary"}
                size={"xs"}
                className="font-bold rounded-3xl w-full hover:opacity-90"
              >
                See preview
              </Button>
              <Button
                onClick={() => setIsSimilarDialogOpen(true)}
                variant={"secondary"}
                size={"xs"}
                className="font-bold rounded-3xl w-full hover:opacity-90"
              >
                Similar items
              </Button>
              <ProductQuickView id={id} isDialogOpen={isPreviewDialogOpen} setIsDialogOpen={setIsPreviewDialogOpen} />
              <SimilarItemPopup isDialogOpen={isSimilarDialogOpen} setIsDialogOpen={setIsSimilarDialogOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card