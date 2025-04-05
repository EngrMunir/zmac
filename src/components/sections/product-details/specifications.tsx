import { Button } from '@/components/ui/button'
import React from 'react'

const Specifications = () => {
    return (
        <div id="specifications">
            <h4 className="font-bold text-xl mb-3">Specifications</h4>
            <div className="grid grid-cols-2 border-b">
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
                <div className="border-t flex">
                    <div className="bg-popover p-4 w-[174px]">
                        <span className="text-sm">Special Features</span>
                    </div>
                    <div className="p-4">
                        <span className="text-sm">Lightweight,Quick Dry</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <Button variant={"outline"} className="rounded-none border-secondary w-60 font-semibold text-sm 3xl:h-12">View More</Button>
            </div>
        </div>
    )
}

export default Specifications