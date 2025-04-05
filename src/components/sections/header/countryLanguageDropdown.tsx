'use client'
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { groupCountriesAlphabetically } from "@/lib/groupCountriesAlphabetically"
import { Search } from 'lucide-react'

const CountryLanguageDropdown = () => {
    const [countries, setCountries] = useState([])
    const [selectCountry, setSelectCountry] = useState("Bangladesh")
    const [showCountryPopup, setShowCountryPopup] = useState(false)

    const handleCountries = () => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
            .then((res) => res.json())
            .then((data) => setCountries(data.data))
    }

    const groupedCountries = groupCountriesAlphabetically(countries);


    return (
        <div className="relative">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => { handleCountries(), setShowCountryPopup(!showCountryPopup) }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="flag" className="w-6 h-4" />
                <div>
                    <span className="text-xs leading-3  block">En /</span>
                    <span className="font-bold text-xs leading-4 block">USD</span>
                </div>
            </div>
            <div className={`${showCountryPopup ? "block" : "hidden"} p-6 bg-white shadow-[0_2px_8px_0_rgba(0,0,0,.2)] rounded-3xl w-[300px] absolute -right-9 top-10 z-30`}>
                <div className="bg-white w-4 h-4 rotate-45 absolute -top-2 right-10"></div>
                <div>
                    <p className="leading-6 font-bold text-xl  mb-2">Ship to</p>
                    <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                        <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                            <div className='flex items-center gap-2'>
                                <SelectValue />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="p-0 w-[252px]">
                            <div className="p-3 pt-0">
                                <div className="sticky -top-3 bg-background z-50 pb-3 pt-3 ">
                                    <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                    <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                                </div>
                                {Object.keys(groupedCountries).sort().map((letter) => (
                                    <SelectGroup>
                                        <SelectLabel className="border-b mb-2">{letter}</SelectLabel>
                                        {groupedCountries[letter].map((cn: any) => (
                                            <SelectItem key={cn.name} value={cn.name}>
                                                <div className="flex items-center gap-2">
                                                    <img src={cn.flag} alt="flag" className="w-6 h-4" />
                                                    <span>{cn.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                ))}
                            </div>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <p className="leading-6 font-bold text-xl  mb-2">Language</p>
                    <Select>
                        <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                            <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent className="p-0 w-[252px]">
                            <div className="p-3">
                                <div className="relative mb-3 ">
                                    <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                    <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                                </div>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="bangla">Bnglish</SelectItem>
                            </div>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <p className="leading-6 font-bold text-xl  mb-2">Currency</p>
                    <Select>
                        <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                            <SelectValue placeholder="(BDT) Bangladeshi Taka" />
                        </SelectTrigger>
                        <SelectContent className="p-0 w-[252px]">
                            <div className="p-3">
                                <div className="relative mb-3 ">
                                    <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                    <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                                </div>
                                <SelectItem value="bdt">(BDT) Bangladeshi Taka</SelectItem>
                                <SelectItem value="eur">EUR (Euro)</SelectItem>
                                <SelectItem value="usd">USD (US Dollar)</SelectItem>
                            </div>
                        </SelectContent>
                    </Select>
                </div>
                <button onClick={() => setShowCountryPopup(false)} className="bg-[#191919] font-bold text-white rounded-3xl flex justify-center items-center text-center h-10 w-full mt-4">Save</button>
            </div>

        </div>
    )
}

export default CountryLanguageDropdown