import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from 'lucide-react'


const NoteDiscriptionDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="w-9 h-9 rounded-full flex justify-center items-center bg-green-100 text-green-600 hover:bg-green-600 hover:text-secondary-foreground transition-all duration-500">
                        <Eye size={12} />
                    </button>
                </DialogTrigger>
                <DialogContent className='max-w-xl sm:rounded-md [&>button]:bg-transparent [&>button]:text-foreground [&_svg]:w-6 [&_svg]:h-6'>
                    <DialogTitle className='border-b pb-3'>Note Description</DialogTitle>
                    <p className='text-sm leading-snug'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dolorem, officia, cumque eligendi blanditiis a voluptatum, commodi pariatur veritatis atque quo hic? Odit sapiente, blanditiis consequatur neque expedita perspiciatis, quo nemo reprehenderit eveniet cupiditate aliquam repudiandae deserunt rerum corrupti molestias. Ipsum nemo eveniet eum maxime sunt vitae obcaecati debitis minima!</p>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NoteDiscriptionDialog