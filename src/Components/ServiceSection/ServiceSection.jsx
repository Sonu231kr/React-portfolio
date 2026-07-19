import React from 'react'
import CardService from './CardService'

function ServiceSection() {
  return (
    <div className='py-10 px-30'>
         
         <div className='flex flex-col items-center '>
            <p className='leading-3'>SERVICES</p>
            <h1 className='text-2xl'>What I do.</h1>
         </div>

        <CardService/>
    </div>
  )
}

export default ServiceSection