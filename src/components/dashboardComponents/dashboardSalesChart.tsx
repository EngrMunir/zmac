'use client'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart'
import { type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const chartData = [
    { date: '04-Feb', price: 50, sales: 200 },
    { date: '05-Feb', price: 100, sales: 300 },
    { date: '06-Feb', price: 500, sales: 4000 },
    { date: '07-Feb', price: 40, sales: 200 },
]
const DashboardSalesChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
    <AreaChart accessibilityLayer data={chartData} margin={{ left: -30 }}>
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <Area dataKey="sales" fill="var(--color-desktop)" />
        <ChartTooltip />
    </AreaChart>
</ChartContainer>
  )
}

export default DashboardSalesChart