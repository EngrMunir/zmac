import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Ads = () => {
    return (
        <section className="bg-[rgb(10,128,56)] min-w-[1200px] pt-8 pb-12">
            <div className="container bg-[url('/images/ads.png')] bg-no-repeat bg-contain bg-right">
                <div className="text-xl font-bold">
                    <span className="text-white ">Sale Ends in:</span>
                </div>
                <h1 className="uppercase font-bold text-[rgb(255,237,190)] text-[80px] leading-none flex items-center gap-3 mt-2">
                    Hours <span className="text-white font-medium">Left</span>
                    <Link href={"#"} className="w-12 h-12 flex justify-center items-center bg-background rounded-full text-[rgb(10,128,56)] ml-2" aria-label="next-arrow"><ChevronRight size={50} /></Link>
                </h1>
                <div className="max-w-[954px] max-h-[156px] grid grid-cols-3 gap-3 items-center justify-between mt-3">
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Top discount list"
                        price={72.56}
                    />
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Stay warm"
                        price={50.56}
                        bgColor="bg-[rgb(255,237,190)]"
                        titleColor="text-[rgb(161,40,98)]"
                    />
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Men's fashion"
                        price={60.56}
                        bgColor="bg-[rgb(240,220,255)]"
                        titleColor="text-[rgb(111,71,143)]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Ads


type CardProps = {
    img: string,
    bgColor?: string,
    titleColor?: string,
    title: string,
    price: number
}
const Card = ({ img, bgColor, titleColor, title, price }: CardProps) => {
    return (
        <div className={cn("bg-[rgb(255,177,233)] h-full p-2 flex", bgColor)}>
            <Link href={"#"} className="w-[140px]">
                <Image width={140} height={140} sizes="100vw" src={img} alt="img" />
            </Link>
            <div className="max-w-[126px] ml-2 flex flex-col justify-between items-start w-full relative">
                <Link href={"#"} className={cn("text-[rgb(161,40,98)] text-xl font-bold mt-4", titleColor)}>{title}</Link>
                <span className="absolute bottom-4 inline-block text-xl font-medium text-white bg-[rgba(25,25,25,.7)] px-2 py-1">US ${price}</span>
            </div>
        </div>
    )
}