'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation } from "swiper/modules"
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useContext, useEffect, useRef, useState } from "react";
import { singleProductData } from "./singleProductData";
import { ProductDetailsContext } from "@/contextApi/productDetailsProvider";
import { cn } from "@/lib/utils";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Image from "next/image";

const ProductImageGallery = ({ className }: { className?: string }) => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const { selectColor, setIsScrollPriceShow } = useContext(ProductDetailsContext)


    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(selectColor.index);
        }
    }, [selectColor]);
    useEffect(() => {
        console.log(currentImageIndex)
        if (swiperRef.current) {
            swiperRef.current.slideTo(currentImageIndex);
        }
    }, [currentImageIndex]);

    useEffect(() => {
        if (containerRef.current && imageRefs.current[currentImageIndex]) {
            const activeImage = imageRefs.current[currentImageIndex];
            const container = containerRef.current;

            if (activeImage) {
                const activeImageTop = activeImage.offsetTop;
                const activeImageBottom = activeImageTop + activeImage.offsetHeight;
                const containerScrollTop = container.scrollTop;
                const containerHeight = container.offsetHeight;

                if (activeImageTop < containerScrollTop || activeImageBottom > containerScrollTop + containerHeight) {
                    container.scrollTop = activeImageTop;
                }
            }
        }
    }, [currentImageIndex]);


    useEffect(() => {
        document.querySelectorAll(".iiz__img").forEach((img) => {
            img.setAttribute("alt", "img")
        })


        const handleScroll = () => {
            const elementHeight = scrollRef.current?.clientHeight;
            if (elementHeight !== undefined) {
                if (window.scrollY > elementHeight) {
                    setIsScrollPriceShow(true);
                } else {
                    setIsScrollPriceShow(false);
                }
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [])


    return (
        <div ref={scrollRef} className={cn("w-[33.33%] shrink-0 grid grid-cols-[12%_auto] gap-3 overflow-hidden", className)}>
            <div className="overflow-hidden ">
                <div ref={containerRef} className="no-scrollbar overflow-y-auto max-h-[567px] flex flex-col gap-2 relative">
                    {
                        singleProductData.images.map(({ img }, index) => {
                            return (
                                <div
                                    key={img}
                                    ref={el => { imageRefs.current[index] = el; }}
                                    onClick={() => setCurrentImageIndex(index)}
                                    onMouseOver={() => setCurrentImageIndex(index)}
                                    className={`${currentImageIndex === index ? "border-2 border-black" : "border-2 hover:border-black"}`}
                                >
                                    <Image width={56} height={68} src={img} alt="img" className="w-full max-h-[68px] object-cover" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="overflow-hidden">
                <Swiper
                    spaceBetween={15}
                    effect="fade"
                    navigation={{
                        nextEl: ".next-el",
                        prevEl: ".prev-el"
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onActiveIndexChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
                    modules={[EffectFade, Navigation]}
                    // loop
                    className="group relative "
                >
                    {
                        singleProductData.images.map(({ img }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <InnerImageZoom
                                        src={img}
                                        zoomSrc={img}
                                        zoomScale={1}
                                        zoomType="hover"
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
                        <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
                    </div>
                </Swiper>
            </div>
        </div>

    )
}

export default ProductImageGallery