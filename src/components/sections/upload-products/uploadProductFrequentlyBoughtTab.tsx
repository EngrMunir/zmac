import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const UploadProductFrequentlyBoughtTab = () => {
    const [selected, setSelected] = useState('select-product')
    return (
        <div>
            <RadioGroup onValueChange={(value) => setSelected(value)} value={selected} className='flex gap-5 text-sm font-semibold mb-10'>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="select-product" id="select-product" className='size-3 [&_span]:size-2 flex justify-center items-center' />
                    <label htmlFor="select-product">Select Product</label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="select-category" id="select-category" className='size-3 [&_span]:size-2 flex justify-center items-center' />
                    <label htmlFor="select-category">Select Category</label>
                </div>
            </RadioGroup>
            {
                selected === 'select-product' &&
                <div className=' border rounded-sm px-5 py-8'>
                    <div className='flex gap-5'>
                        <Select>
                            <SelectTrigger className="rounded-sm focus:border-secondary focus:ring-0 h-11 text-accent-foreground">
                                <SelectValue placeholder="Choose Category" />
                            </SelectTrigger>
                            <SelectContent className="p-0 w-full">
                                <div className="p-3 pt-0">
                                    <div className="sticky -top-3 bg-background z-50 pb-3 pt-3 ">
                                        <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                        <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                                    </div>
                                    <SelectItem value='category-1' className='capitalize py-3'>Demo Category 1</SelectItem>
                                    <SelectItem value='category-2' className='capitalize py-3'>Demo Category 2</SelectItem>
                                    <SelectItem value='category-3' className='capitalize py-3'>Demo Category 3</SelectItem>
                                </div>
                            </SelectContent>
                        </Select>
                        <Input className='h-11 text-sm text-accent-foreground' placeholder='Search Product By Name' />
                    </div>
                    <Button variant={"outline"} size={"sm"} className='w-full rounded-sm mt-5 border-border text-accent-foreground'><Plus /> Add</Button>
                </div>
            }
            {
                selected === 'select-category' &&
                <div className=''>
                    <div className='flex gap-5'>
                        <Select>
                            <SelectTrigger className="rounded-sm focus:border-secondary focus:ring-0 h-11 text-accent-foreground">
                                <div className='flex items-center gap-2'>
                                    <SelectValue placeholder="Choose Category" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="p-0 w-full">
                                <div className="p-3 pt-0">
                                    <div className="sticky -top-3 bg-background z-50 pb-3 pt-3 ">
                                        <span className="text-accent absolute left-2.5 top-1/2 -translate-y-1/2 z-10"><Search /></span>
                                        <input type="text" className="pl-9 pr-3 bg-popover rounded-md w-full h-10 relative outline-none" />
                                    </div>
                                    <SelectItem value='category-1' className='capitalize py-3'>Demo Category 1</SelectItem>
                                    <SelectItem value='category-2' className='capitalize py-3'>Demo Category 2</SelectItem>
                                    <SelectItem value='category-3' className='capitalize py-3'>Demo Category 3</SelectItem>
                                </div>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            }

        </div>
    )
}

export default UploadProductFrequentlyBoughtTab