import React from 'react'
import {CodeXml, Key } from 'lucide-react'

function CardContent(props) {
 console.log(props)
  return (

      <div className='size-80  bg-blue-400 rounded-xl '>
          <div className='flex flex-row justify-between  py-4 px-8'>

              <CodeXml size={80} className='text-black  pr-8 ' />
              <h1 className='  font-medium text-white text-4xl'>0{props.Key+1}</h1>
          </div>  
          <div className='flex flex-col px-8'>
              <h1 className='text-xl text-black font-semibold'>{props.role}</h1>
              <hr className='text-black w-25 border-2 my-3 rounded-xl' />
              <p className='leading-5 text-black'>{props.info}</p>
          </div>
    </div>
  )
}

export default CardContent