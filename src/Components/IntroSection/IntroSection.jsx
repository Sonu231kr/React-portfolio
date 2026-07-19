import React from 'react'
import IntroSectionButton from './IntroSectionButton'

function IntroSection() {
  return (
    <div className='flex flex-col justify-between gap-15 pt-20 px-50 items-center'>
        <div className='flex flex-col justify-between items-center'>
            <h1 className='text-7xl font-bold leading-25'>Frontend Developer</h1>
            <p className='text-2xl font-light'> Java Script, React Js, Html, Taliwind Css, Css, Mysql </p>
        </div>

        <div className='flex items-center flex-col justify-center'>
            <p className='font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae, accusamus modi odit saepe obcaecati vitae</p>
              <p className='font-semibold text-xl'>neque eaque beatae nihil commodi dolores veniam possimus ea ullam aperiam facere.</p>
        </div>

        <IntroSectionButton />
    </div>
  )
}

export default IntroSection