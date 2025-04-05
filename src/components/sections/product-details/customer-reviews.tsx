import { Button } from '@/components/ui/button'
import { Star, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomerReviews = () => {
    return (
        <div id="customer-reviews">
            <h4 className="font-bold text-xl mb-3">Customer Reviews (1)</h4>
            <div className="rounded-xl py-4 px-7 bg-popover grid gap-4 max-w-[600px] mb-15">
                <div className="flex items-center gap-5">
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                    </ul>
                    <span className="block h-1.5 w-full bg-secondary"></span>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                    </ul>
                    <span className="block h-1.5 w-full bg-[#e2dfdf]"></span>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                    </ul>
                    <span className="block h-1.5 w-full bg-[#e2dfdf]"></span>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                    </ul>
                    <span className="block h-1.5 w-full bg-[#e2dfdf]"></span>
                </div>
                <div className="flex items-center gap-5">
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                        <li className="text-[#ffc50a]"><Star size={15} /></li>
                    </ul>
                    <span className="block h-1.5 w-full bg-[#e2dfdf]"></span>
                </div>
            </div>

            <ReviewCard />
            <ReviewCard />

            <div className="flex justify-center">
                <Button variant={"outline"} className="rounded-none border-secondary w-60 font-semibold text-sm 3xl:h-12">View More</Button>
            </div>
        </div>
    )
}

export default CustomerReviews


const ReviewCard = () => {
    return (
        <div className="border-b border-b-[rgba(0,0,0,0.1)] pb-5 mb-10">
            <div className="flex items-center gap-3">
                <Image width={40} height={40} src="https://ae-pic-a1.aliexpress-media.com/kf/Uc1f2e0c335864ece8281533d7affdd63j.jpg_220x220.jpg_.webp" alt="img" className="w-10 h-10 rounded-full" />
                <div>
                    <ul className="flex gap-1">
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={16} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={16} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={16} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={16} /></li>
                        <li className="text-[#ffc50a]"><Star fill="#ffc50a" size={16} /></li>
                    </ul>
                    <p className="flex gap-2.5 text-accent mt-0.5">Jon Deo</p>
                </div>
            </div>
            <div className="py-6">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur est maxime corrupti obcaecati fugit suscipit.</p>
            </div>
            <div className="flex justify-between mt-1 text-accent">
                <div className="flex items-center gap-4">
                    <span className="">17 Dec 2024</span>
                    <span className="block h-3 w-px bg-[rgba(0,0,0,0.34)]"></span>
                    <p className="flex gap-2.5 text-accent capitalize">
                        <span>Color: red</span>
                        <span>Size: 2xl</span>
                    </p>
                </div>
                <Link href={"#"} className="flex items-center gap-1.5"><ThumbsUp size={17} /> Helpful (0)</Link>
            </div>
        </div>
    )
}