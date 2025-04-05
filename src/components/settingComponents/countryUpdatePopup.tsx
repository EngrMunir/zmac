'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { groupCountriesAlphabetically } from "@/lib/groupCountriesAlphabetically"
import { Search } from "lucide-react"

const CountryUpdatePopup = () => {
    const [selectCountry, setSelectCountry] = useState("")
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
            .then((res) => res.json())
            .then((data) => setCountries(data.data))
    }, [])

    const groupedCountries = groupCountriesAlphabetically(countries);

    return (
        <Dialog>
            <DialogTrigger>
                <span className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Country/region</span>
            </DialogTrigger>
            <DialogContent className="rounded-md max-w-[400px]">
                <DialogHeader className="text-start">
                    <DialogTitle className="mb-2">Your registration location:Bangladesh</DialogTitle>
                    <DialogDescription>
                        This is the country/region you set when you registered your account. You can change this once within every 180 days if you need to.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-1">
                    <span className="text-sm">Location:</span>
                    <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                        <SelectTrigger className="rounded-md border-[rgba(0,0,0,.2)] focus:border-[rgba(0,0,0,.2)] focus:ring-0 h-10">
                            <div className='flex items-center gap-2'>
                                {selectCountry ? "" : <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"} alt='img' className="w-6 h-4" />}
                                <SelectValue placeholder="Bangladesh" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="p-0 w-[280px]">
                            <div className="p-3">
                                <div className="relative mb-3 ">
                                    <span className="text-accent-foreground absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
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

                    <div>
                        <Button className="w-full rounded-full 3xl:h-10 mt-4 mb-5" size={"sm"}>Change</Button>
                        <p className="text-sm text-accent-foreground">By continuing, you confirm that you have read and accepted our <a href="#" className="text-blue-600">AliExpress Free Membership Agreement and Privacy Policy.</a></p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default CountryUpdatePopup