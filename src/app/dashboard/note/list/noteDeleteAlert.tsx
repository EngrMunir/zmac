import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from 'lucide-react'


const NoteDeleteAlert = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="w-9 h-9 rounded-full flex justify-center items-center bg-red-100 text-red-600 hover:bg-red-600 hover:text-secondary-foreground transition-all duration-500">
                    <Trash2 size={12} />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className='sm:rounded-md max-w-xs p-5'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='border-b pb-3 mb-3'>Delete Confirmation</AlertDialogTitle>
                    <AlertDialogDescription className='text-center'>
                        Are you sure to delete this?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className='sm:justify-center justify-center mt-2'>
                    <AlertDialogCancel className='rounded-sm 3xl:h-10 px-7 text-sm'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='rounded-sm 3xl:h-10 px-7 text-sm'>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default NoteDeleteAlert