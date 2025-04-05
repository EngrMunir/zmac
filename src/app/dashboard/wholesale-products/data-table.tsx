"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import DashboardTablePagination from "@/components/dashboardComponents/dashboardTablePagination"
import { Edit, Eye, Trash2 } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })
  const totalPages = table.getPageCount()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const width = header.column.columnDef.size
                return (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-xs text-foreground first:pl-8 last:pr-8 last:text-right"
                    style={{ width: `${width}px` }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id} className='text-xs py-5 first:pl-8 last:pr-8'>
                        {cell.column.id === 'options' ? (
                          <div className="flex items-center justify-end gap-2">
                            <button className="w-9 h-9 rounded-full flex justify-center items-center bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-secondary-foreground transition-all duration-500">
                              <Edit size={12} />
                            </button>
                            <button className="w-9 h-9 rounded-full flex justify-center items-center bg-green-100 text-green-600 hover:bg-green-600 hover:text-secondary-foreground transition-all duration-500">
                              <Eye size={12} />
                            </button>
                            <button className="w-9 h-9 rounded-full flex justify-center items-center bg-red-100 text-red-600 hover:bg-red-600 hover:text-secondary-foreground transition-all duration-500">
                              <Trash2 size={12} />
                            </button>

                          </div>
                        ) : (
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DashboardTablePagination table={table} totalPages={totalPages} />
    </div>
  )
}
