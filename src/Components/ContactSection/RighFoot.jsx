import React from 'react'
import { MessageSquareMore } from 'lucide-react'
function RighFoot() {

  return (
    <div className='w-1/3 '>

      <div className='w-full '>
        <form className='flex flex-col gap-3 '>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Full Name</label>
            <input className='py-3 px-2 border-2  dark:border-white  rounded' type="text" placeholder='Enter Name' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Email Address</label>
            <input className='py-3 px-2 border-2  dark:border-white rounded' type="text" placeholder='Enter Name' type="text" placeholder='Enter Email' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="">Message</label>
            <textarea className=' h-30  py-3 px-2 border-2  dark:*:border-white rounded' type="text" placeholder='Enter Name' type="text" placeholder='Enter Message' />
          </div>

          <button className='flex gap-2 py-2 px-3 rounded w-40 justify-center flex-row items-center  bg-blue-400  dark:text-black dark:bg-blue-400  ' >

            <span className='flex justify-center items-center font-medium'>Send Message </span>

            <span> <MessageSquareMore className='size-4 font-semibold ' /> </span>

          </button>
        </form>
      </div>


    </div>
  )
}

export default RighFoot