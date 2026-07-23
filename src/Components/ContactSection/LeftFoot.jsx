import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
function LeftFoot() {
  return (
    <div className='w-1/3 flex flex-col gap-10'>
      <div>
        <p>Have an Owesome Project idea?</p>
        <p className='text-blue-400'>Lets Discuss.</p>
      </div>
      <div className='flex gap-5 flex-col'>
        <h1 className='flex gap-3  items-center'>
          <span className=' p-2 text-green-500 rounded-full border border-black dark:border-white'><Phone className='size-4' /></span>
          <span className='text-blue-400 flex items-center'>+91 8603264475</span>
          </h1>

        <h1 className='flex gap-3  items-center'>
          <span className=' p-2 text-red-500 rounded-full border border-black dark:border-white'><Mail className='size-4' /></span>
          <span className='text-blue-400 flex items-center '>Sonugenius944@gmail.com</span>
          </h1>

        <h1 className='flex gap-3  items-center'>
          <span className=' p-2 text-blue- rounded-full border border-black dark:border-white'><MapPin className='size-4' /></span>
          <span className='flex items-center'>Jharkhand , Koderma</span>
          </h1>
      </div>
    </div>
  )
}

export default LeftFoot