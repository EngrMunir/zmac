import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

const NoteCreateForm = () => {
    return (
        <form className='flex flex-col gap-5'>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="type" className='capitalize text-sm inline-block mb-1'>Type</label>
                <Select>
                    <SelectTrigger className="rounded-sm h-11 capitalize" id='type'>
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="refund" className='py-3 capitalize'>refund</SelectItem>
                        <SelectItem value="warranty" className='py-3 capitalize'>warranty</SelectItem>
                        <SelectItem value="shipping" className='py-3 capitalize'>shipping</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <div className='grid grid-cols-[30%_auto]'>
                <label htmlFor="description" className='capitalize text-sm inline-block mb-1'>Description <small className='text-[10px] text-muted-foreground'>(Max 900 character)</small> </label>
                <Textarea id='description' className='min-h-60' />
            </div>
            <div className='flex justify-end'>
                <Button size={'sm'} variant={'secondary'} className='text-sm 3xl:h-11 px-8 rounded-sm'>Save</Button>
            </div>
        </form>
    )
}

export default NoteCreateForm