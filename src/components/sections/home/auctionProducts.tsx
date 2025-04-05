'use client'
import Card from "@/components/ui/card"
import { productType } from "@/types/productType"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const AuctionProducts = ({ data }: { data: productType[] }) => {

    return (
        <section className="container pt-8">
            <div className="flex justify-between items-center">
                <h2 className="text-center font-bold text-[32px] pb-2">Auction Products</h2>
                <div className="flex gap-2">
                    <span className="next-el cursor-pointer"><ChevronLeft /></span>
                    <span className=" prev-el cursor-pointer"><ChevronRight /></span>
                </div>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={16}
                navigation={{
                    nextEl: ".prev-el",
                    prevEl: ".next-el"
                }}
                loop
                modules={[Navigation]}
            >
                {
                    data.map(({ id, thumbnail, title, price, discountPercentage }) =>
                        <SwiperSlide key={id} className="pb-16 pt-3">
                            <Card
                                id={id}
                                title={title}
                                thumbnail={thumbnail}
                                price={price}
                                discountPercentage={discountPercentage}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}

export default AuctionProducts