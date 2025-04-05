import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from 'lucide-react'
import NoteCreateForm from '../create/noteCreateForm'

const NoteEditDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="w-9 h-9 rounded-full flex justify-center items-center bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-secondary-foreground transition-all duration-500">
                        <Edit size={12} />
                    </button>
                </DialogTrigger>
                <DialogContent className='max-w-6xl sm:rounded-md [&>button]:bg-transparent [&>button]:text-foreground [&_svg]:w-6 [&_svg]:h-6'>
                    <DialogTitle className='border-b pb-3'>Note Edit</DialogTitle>
                    <NoteCreateForm />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NoteEditDialog