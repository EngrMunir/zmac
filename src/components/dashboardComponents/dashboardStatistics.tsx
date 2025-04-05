import React from 'react'
import { ChartNoAxesCombined, Gift, ListChecks, Star, UserRoundPen, Users } from 'lucide-react'

const DashboardStatistics = () => {
  return (
    <>
    <div className='bg-popover rounded-sm p-5 flex justify-between items-center'>
        <div>
            <p className='text-lg font-medium'>Products</p>
            <h5 className='text-3xl font-semibold mt-1'>47</h5>
        </div>
        <div>
            <Gift size={70} strokeWidth={1} />
        </div>
    </div>
    <div className='bg-popover rounded-sm p-5 flex justify-between items-center'>
        <div>
            <p className='text-lg font-medium'>Rating</p>
            <h5 className='text-3xl font-semibold mt-1'>5</h5>
            <div className='mt-2'>
                <p className='text-sm flex gap-1 mb-1'><Users size={16}/> Followers 0</p>
                <p className='text-sm flex gap-1'><UserRoundPen size={16}/> Custom Followers 0</p>
            </div>
        </div>
        <div>
            <Star size={70} strokeWidth={1} />
        </div>
    </div>
    <div className='bg-popover rounded-sm p-5 flex justify-between items-center'>
        <div>
            <p className='text-lg font-medium'>Total Order</p>
            <h5 className='text-3xl font-semibold mt-1'>17</h5>
        </div>
        <div>
            <ListChecks size={70} strokeWidth={1} />
        </div>
    </div>
    <div className='bg-popover rounded-sm p-5 flex justify-between items-center'>
        <div>
            <p className='text-lg font-medium'>Total Sales</p>
            <h5 className='text-3xl font-semibold mt-1'>$5,579.390</h5>
        </div>
        <div>
            <ChartNoAxesCombined size={70} strokeWidth={1} />
        </div>
    </div>
</>
  )
}

export default DashboardStatistics