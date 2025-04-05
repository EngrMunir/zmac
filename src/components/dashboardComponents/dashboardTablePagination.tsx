import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"

const DashboardTablePagination = ({ table, totalPages }: { table: any; totalPages: number }) => {
    return (
        <div className="inline-flex items-center justify-start border mt-2 mb-4 ml-8">
            <button className={`px-4 py-2.5 border-r flex justify-center items-center ${table.getCanPreviousPage() ? 'hover:bg-secondary hover:text-secondary-foreground' : ''}`}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`px-4 py-2.5 leading-none border-r flex justify-center items-center transition-all duration-300 ${table.getState().pagination.pageIndex === index ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary hover:text-secondary-foreground'
                        }`}
                    onClick={() => table.setPageIndex(index)}
                >
                    {index + 1}
                </button>
            ))}
            <button className={`px-4 py-2.5 border-r flex justify-center items-center ${table.getCanNextPage() ? 'hover:bg-secondary hover:text-secondary-foreground' : ''}`}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    )
}

export default DashboardTablePagination