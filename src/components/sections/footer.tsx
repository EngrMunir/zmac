// import { Link } from "react-router-dom"

import Link from "next/link";


const languages = [
    { name: "Russian", url: "#" },
    { name: "Portuguese", url: "#" },
    { name: "Spanish", url: "#" },
    { name: "French", url: "#" },
    { name: "German", url: "#" },
    { name: "Italian", url: "#" },
    { name: "Dutch", url: "#" },
    { name: "Turkish", url: "#" },
    { name: "Japanese", url: "#" },
    { name: "Korean", url: "#" },
    { name: "Thai", url: "#" },
    { name: "Vietnamese", url: "#" },
    { name: "Arabic", url: "#" },
    { name: "Hebrew", url: "#" },
    { name: "Polish", url: "#" }
];

const ZMACHelp = [
    { name: "Help Center", url: "#" },
    { name: "Disputes & Reports", url: "#" },
    { name: "Buyer Protection", url: "#" },
    { name: "Report IPR infringement", url: "#" },
    { name: "Regulated Information", url: "#" },
    { name: "Integrity Compliance", url: "#" },
    { name: "Transparency Center", url: "#" },
    { name: "Submit report (non-registered users)", url: "#" }
];

const ZMACGroup = [
    { name: "ZMAC Group Website", url: "#" },
    { name: "ZMAC", url: "#" },
    { name: "ZMACmama", url: "#" },
    { name: "ZMACpay", url: "#" },
    { name: "Fliggy", url: "#" },
    { name: "ZMAC Cloud", url: "#" },
    { name: "ZMAC International", url: "#" },
    { name: "ZMACTelecom", url: "#" },
    { name: "DingTalk", url: "#" },
    { name: "Juhuasuan", url: "#" },
    { name: "Taobao Marketplace", url: "#" },
    { name: "Tmall", url: "#" },
    { name: "Taobao Global", url: "#" },
    { name: "ZMACOS", url: "#" },
    { name: "1688", url: "#" }
];

const Footer = () => {
    return (
        <footer className="bg-[#e8e8e8] pt-4">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2 flex justify-between">
                        <div className="flex-1 mr-4">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Customer service</b>
                            <ul>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Help Center</Link></li>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Transaction Services Agreement for</Link></li>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">non-EU/UK Consumers</Link></li>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Terms and Conditions for EU/EEA/UK</Link></li>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Consumers (Transactions)</Link></li>
                                <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Take our feedback survey</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-[2]">
                            <div className="flex-1">
                                <b className="block mt-4 font-bold leading-7 mb-[5px]">Shopping with us</b>
                                <ul>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Making payments</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Delivery options</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Buyer Protection</Link></li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <b className="block mt-4 font-bold leading-7 mb-[5px]">Collaborate with us</b>
                                <ul>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Partnerships</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Affiliate program</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">DS Center</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Seller Log In</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">中国卖家入驻</Link></li>
                                    <li><Link href={"#"} className="text-sm text-accent-foreground leading-7">Non-Chinese Seller Registration</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-between">
                        <div className="flex-[2]">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Pay with</b>
                            <ul className="flex gap-2">
                                <li><img src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Stay connected</b>
                            <ul className="flex gap-2">
                                <li>
                                    <Link href={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H4d523ca938f84764ab9970676846ceddE.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H3f646a8410084ae39ee8c979ca1409a2K.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H92546404c05349bd9a64fa2eb268541e1.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/Hf5aa563a0e8e4c7e93b6340dd38ebd30B.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/Heb2cbbfeb7bf407f9cbe7fdd8cdd82d5b.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex mt-[30px]">
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">Help</b>
                        <div>
                            {ZMACHelp.map((link, index) => (
                                <span key={link.name}>
                                    <Link
                                        href={link.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < ZMACHelp.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">ZMAC Multi-Language Sites</b>
                        <div>
                            {languages.map((language, index) => (
                                <span key={language.name}>
                                    <Link
                                        href={language.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {language.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < languages.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex mt-[30px]">
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">Browse by Category</b>
                        <div className="text-accent-foreground">
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> All Popular</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Product</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Promotion</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Low Price</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Great Value</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Reviews</Link>{", "}
                            <Link href={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Blog</Link>{", "}
                        </div>
                    </div>
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">ZMAC Group</b>
                        <div>
                            {ZMACGroup.map((link, index) => (
                                <span key={link.name}>
                                    <Link
                                        href={link.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < ZMACGroup.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-black text-[#ccc] text-sm leading-[18px] py-2 mt-10">
                <div className="container">
                    <Link href={"#"}>Intellectual Property Protection</Link>
                    {" - "}
                    <Link href={"#"}>Privacy Policy</Link>
                    {" - "}
                    <Link href={"#"}>Sitemap</Link>
                    {" - "}
                    <Link href={"#"}>Terms of Use</Link>
                    {" - "}
                    <Link href={"#"}>Information for EU consumers</Link>
                    {" - "}
                    <Link href={"#"}>Imprint</Link>
                    {" - "}
                    <Link href={"#"}>Transaction Services Agreement for non-EU/UK Consumers</Link>
                    {" - "}
                    <Link href={"#"}>Terms and Conditions for EU/EEA/UK Consumers</Link>
                    {" - "}
                    <Link href={"#"}>User Information Legal Enquiry Guide</Link>
                    {" - "}
                    <Link href={"#"}> ©️2010-2024 ZMAC.com. All rights reserved.</Link>
                    {" - "}
                    <Link href={"#"}> ©️2010-2024 ZMAC.com. All rights reserved.</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer