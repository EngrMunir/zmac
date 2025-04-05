'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { superDealsData } from "@/db/superDealsData";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { productType } from "@/types/productType";
import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice";

const TodayDeals = ({ data }: { data: productType[] }) => {
  return (
    <section className="container mt-8">
      <h2 className="text-center font-bold text-[32px]">Today's deals</h2>
      <div className="grid grid-cols-2 gap-[35px] mt-6">
        <div className="relative bg-[url('https://ae01.alicdn.com/kf/S750461e03a75471cac965e67d7d557229.jpg')] bg-cover bg-no-repeat group/super rounded-2xl">
          <div className="pt-6 flex flex-col items-center">
            <h5 className="text-2xl font-bold leading-[31px] text-center text-white">SuperDeals</h5>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium">
              <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S493ec270c78c4b8b90b8993ec0197d3a6/48x48.png" alt="clock" className="size-6" />
              <span className="leading-none inline-block">Ends in: 18:23:20</span>
              <span><ChevronRight size={17} /></span>
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              navigation={{
                nextEl: ".next-el",
                prevEl: ".prev-el"
              }}
              loop
              modules={[Navigation]}
            >
              {
                data.map(({ discountPercentage, id, price, thumbnail, title }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Card id={id} discountPercentage={discountPercentage} discountPercentageShow={true} price={price} thumbnail={thumbnail} title={title} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/super:opacity-100 transition-all duration-300">
            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
          </div>
        </div>

        <div className="relative bg-[url('https://ae01.alicdn.com/kf/Sc8908a992f6341cda52c8b6ac2d302efG.jpg')] bg-cover bg-no-repeat group/big rounded-2xl">
          <div className="pt-6 flex flex-col items-center">
            <h5 className="text-2xl font-bold leading-[31px] text-center text-white">Big Save</h5>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium relative overflow-hidden">
              <div className="flex">
                <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S588971e0387446a4bcf202557655fc61t.png" alt="clock" className="size-6 rounded-full translate-x-0 relative z-10" />
                <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S213f18d82e794cb580fc2b59738b061fQ.png" alt="clock" className="size-6 rounded-full absolute -translate-x-2 z-[2]" />
                <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S1d5267d0fddd4213810e41ed1a4ebf247.png" alt="clock" className="size-6 rounded-full absolute -translate-x-10 z-[1]" />
              </div>
              <span className="leading-none inline-block">500+ Brands</span>
              <span><ChevronRight size={17} /></span>
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              navigation={{
                nextEl: ".next-el-brand",
                prevEl: ".prev-el-brand"
              }}
              loop
              modules={[Navigation]}
            >
              {
                data.map(({ id, price, thumbnail, title, discountPercentage }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Card id={id} discountPercentageShow={false} price={price} thumbnail={thumbnail} title={title} discountPercentage={discountPercentage} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/big:opacity-100 transition-all duration-300">
            <div className="prev-el-brand w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
            <div className="next-el-brand w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayDeals



interface CardPropsType {
  id: number | string
  discountPercentage: number,
  price: number,
  thumbnail: string,
  title: string,
  discountPercentageShow: boolean
}
const Card = ({id, discountPercentage, price, thumbnail, title, discountPercentageShow }: CardPropsType) => {
  const calculatePrice = calculateDiscountPrice(price, discountPercentage)

  return (
    <div className="p-2 bg-background rounded-lg group">
      <Link href={`/product-details/${id}`} className="rounded-md max-w-[216px] max-h-[216px] overflow-hidden block">
        <Image width={216} height={216} sizes="100vw" src={thumbnail} alt="img" className="rounded-md group-hover:scale-105 transition-all duration-300" />
      </Link>
      <div className="mt-3">
        <Link href={`/product-details/${id}`} className="min-h-10 line-clamp-2 font-[450] leading-5 hover:text-primary-foreground transition-all duration-300">{title}</Link>
        <div className="mt-4">
          <p className="font-bold 3xl:text-xl inline-block leading-none mr-2">US ${calculatePrice}</p>
          <p className="line-through text-muted inline-block leading-none 3xl:text-base text-xs">US ${price}</p>
        </div>
        {
          discountPercentageShow ?
            <div className="inline-block text-sm bg-primary px-1 py-[3px] text-white mt-1.5">-{discountPercentage}%</div>
            :
            <div className="text-primary-foreground px-1 py-[3px] mt-1.5 leading-[14px] flex gap-2">
              You save
              <span className="font-semibold">US $18.82</span>
            </div>
        }
      </div>
    </div>
  )
}