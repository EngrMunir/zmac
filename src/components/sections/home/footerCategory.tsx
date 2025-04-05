'use client'
import Link from "next/link";
import { useState } from "react";

const contentArray = [
    { label: "Verano", path: "#" },
    { label: "ac recharge kit", path: "#" },
    { label: "ahegan hoodie", path: "#" },
    { label: "chromebook charger", path: "#" },
    { label: "2 care", path: "#" },
    { label: "purgemaakumond tester", path: "#" },
    { label: "gatsby dress", path: "#" },
    { label: "hoverboard charger", path: "#" },
    { label: "inflatable belt", path: "#" },
    { label: "jade bracelet", path: "#" },
    { label: "kurami plus", path: "#" },
    { label: "studded belt", path: "#" },
    { label: "vidia geforce gtx 780", path: "#" },
    { label: "red quinceanera dresses", path: "#" },
    { label: "ryobi 40v battery", path: "#" },
    { label: "thermal phone case", path: "#" },
    { label: "camera head mount", path: "#" },
    { label: "elsa costume", path: "#" },
    { label: "galaxy projector", path: "#" },
    { label: "huggy woggy costume", path: "#" },
    { label: "lego piece 9999", path: "#" },
    { label: "rosewe dresses", path: "#" },
    { label: "shiesty mask", path: "#" },
    { label: "tutu skirt", path: "#" },
    { label: "2to and", path: "#" },
    { label: "cool lighters", path: "#" },
    { label: "kids makeup", path: "#" },
    { label: "omie lunch box", path: "#" },
    { label: "polygal", path: "#" },
    { label: "sneaker slippers", path: "#" },
    { label: "spitseman try", path: "#" },
    { label: "cute handies", path: "#" },
    { label: "tradify kruger costume", path: "#" },
    { label: "handshall phone cases", path: "#" },
    { label: "nvidia geforce rtx 2060 mobile", path: "#" },
    { label: "s plus cardholder cases", path: "#" },
    { label: "scream mask", path: "#" },
    { label: "vetina costume", path: "#" },
    { label: "white long live the", path: "#" },
];

const FooterCategory = () => {
    const [isExpend, setIsExpend] = useState(false)
    return (
        <div className="container pb-4 mt-8">
            <div className={`text-[#666] text-xs text-center overflow-hidden flex items-start ${isExpend ? "h-auto" : "h-5"}`}>
                <div>
                    {
                        contentArray.map(({ label, path }) => {
                            return (
                                <Link key={label} href={path} className="inline-block leading-5  ">
                                    <span className="pl-2 pr-[9px] relative after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-[#ccc]">
                                        {label}
                                    </span>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="shrink-0" onClick={() => setIsExpend(!isExpend)}>
                    <img src="https://ae01.alicdn.com/kf/Ha5a9d424edd045779172f9a4456d0e15t.png" alt="icon" className="h-4 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default FooterCategory