import React from 'react'
import { WindArrowDown } from 'lucide-react'
function Logo() {
    return (
        <div className='flex gap-1.5'>
            <div><WindArrowDown className='size-10 text-blue-400' /></div>
            <div className='flex gap-0.5 flex-col'>
                <h1 className='text-2xl font-display'>Mr.SonuDas</h1>
                <p className='text-xs leading-1.5  font-display text-indigo-50'>Frontend Developer</p>
            </div>
        
        </div>
    )
}

export default Logo