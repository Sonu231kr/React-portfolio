import React from 'react'
import LeftFtr from './LeftFtr'
import Rightftr from './Rightftr'

function FooterSection() {
    return (
        <div className='flex justify-between px-30 mt-40 py-10 h-60 dark:text-white border-t-2'>
            <LeftFtr />
            <Rightftr />
           
        </div>
    )
}

export default FooterSection