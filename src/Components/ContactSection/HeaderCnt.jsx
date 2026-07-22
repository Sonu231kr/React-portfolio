import React from 'react'

function HeaderCnt() {
  return (
    <div className=' flex flex-col items-center gap-6'>

      <div className='flex flex-col gap-1  items-center'>
        <p className='text-sm font-medium leading-1' >GET IN TOUCH</p>
        <h1 className='text-3xl font-semibold '>Contact <span className='text-blue-400'>me</span>.</h1>
      </div>

      <div className='flex justify-center items-center flex-col '>
        <p className='font-mendium px-20  items-center'></p>I am currently open to full-time, contract or part-time opportunities in <p />

          <p>Full Stack Development</p>
      </div>

    </div>
  )
}

export default HeaderCnt