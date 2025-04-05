
'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { AlMessage } from "@/lib/icon"
import { Plus } from "lucide-react"
import CustomerReviews from "./customer-reviews"
import Specifications from "./specifications"
import { productType } from "@/types/productType"
import { useEffect, useState } from "react"


const tabList = [
  { value: "#customer-reviews", title: "Customer Reviews (1)" },
  { value: "#specifications", title: "Specifications" },
  { value: "#description", title: "Description" },
  { value: "#store", title: "Store" },
  { value: "#more-love", title: "More to love" },
]

const ProductDetailsTab = ({ data }: { data: productType[] }) => {
  const [hash, setHash] = useState("")
  useEffect(() => {
    setHash(window.location.hash)
  }, [])
  return (
    <div className="pb-10 ">

      <ul className="flex gap-8 pb-10 pt-7 sticky top-0 bg-background z-50">
        {
          tabList.map(({ title, value }) => (
            <li key={value} className={`cursor-pointer text-[15px] ${value === hash ? "font-bold" : ""}`}>
              <Link href={`${value}`} onClick={()=>setHash(value)}>{title}</Link>
            </li>
          ))
        }
      </ul>

      <CustomerReviews />
      <span className="block border-b border-b-[rgba(0,0,0,0.1)] mt-8 mb-12"></span>
      <Specifications />
      <span className="block border-b border-b-[rgba(0,0,0,0.1)] mt-8 mb-12"></span>

      <div id="description">
        <h4 className="font-bold text-xl mb-3">Description</h4>
        <div className="h-full">
          <img src="https://ae01.alicdn.com/kf/S183939df322542dab9f58c5b8ea7191aK.jpg" alt="img" className="block max-w-full" />
          <img src="https://ae01.alicdn.com/kf/S12c5003f633c494da9fcea1b792dabd3V.jpg" alt="img" className="block max-w-full" />
          <img src="https://ae01.alicdn.com/kf/S80e2ea431ce74f9fbb3d5d635508bc124.jpg" alt="img" className="block max-w-full" />
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant={"outline"} className="rounded-none border-secondary w-60 font-semibold text-sm 3xl:h-12">View More</Button>
        </div>
      </div>
      <span className="block border-b border-b-[rgba(0,0,0,0.1)] mt-8 mb-12"></span>
      <div id="store">
        <div className="px-4 py-3 bg-[rgb(245,245,245)] flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Link href={"#"}>
              <img src="https://ae01.alicdn.com/kf/Se90fceedf9d34ad1a8979283c98a1e45I/144x144.png" alt="img" className="w-12 h-12" />
            </Link>
            <div>
              <Link href={"#"} className="text-xl font-bold leading-8">Shop1104342073 Store</Link>
              <div className="mt-0.5 text-sm leading-5">
                <strong>100.0%</strong><span> Positive Feedback</span> | <strong>15</strong><span> Followers</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <Button variant={"outline"} className="border-secondary rounded-none font-bold 3xl:h-10"> <span><Plus size={24} /></span> <span>Follow</span> </Button>
            <Button variant={"outline"} className="border-secondary rounded-none font-bold 3xl:h-10 [&_svg]:size-6"> <span><AlMessage /></span> <span>Message</span> </Button>
          </div>
        </div>
      </div>
      <span className="block border-b border-b-[rgba(0,0,0,0.1)] mt-8 mb-12"></span>
      <div id="more-love">
        <h4 className="font-bold text-xl mb-1">More to love</h4>
        <div className="grid grid-cols-4 gap-5">
          {
            data.map(({ id, thumbnail, title, discountPercentage, price }) =>
              <Card
                key={id}
                id={id}
                thumbnail={thumbnail}
                title={title}
                price={price}
                discountPercentage={discountPercentage}
              />)
          }
        </div>
      </div>

    </div>
  )
}

export default ProductDetailsTab