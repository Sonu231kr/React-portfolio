import React from 'react'
import HeadAbt from './HeadAbt'
import FooterAbt from './FooterAbt'
function AboutSection() {
  return (
    <div className='flex flex-col py-20 px-30 gap-5 items-center justify-between'>
         <HeadAbt />
         <FooterAbt />

    </div>
  )
}

export default AboutSection