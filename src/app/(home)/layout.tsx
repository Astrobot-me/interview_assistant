import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className='root-layout'> 

            <Navbar/> 

            {children}
        </div>
    )
}

export default HomeLayout