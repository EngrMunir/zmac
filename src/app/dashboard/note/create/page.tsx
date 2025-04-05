import React from 'react'
import DashboardCardLayout from '@/components/dashboardComponents/dashboardCardLayout'
import NoteCreateForm from './noteCreateForm'

const page = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <DashboardCardLayout>
                <DashboardCardLayout.Title
                    title='Note Information'
                    className='mb-5'
                />
                <NoteCreateForm />
            </DashboardCardLayout>
        </div>
    )
}

export default page