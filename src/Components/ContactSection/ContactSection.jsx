import React from 'react'
import HeaderCnt from './HeaderCnt'
import FooterCnt from './FooterCnt'

function ContactSection() {
  return (
    <div className='flex flex-col items-center gap-10  px-30 pt-30  dark:text-white'>
        <HeaderCnt/>
        <FooterCnt />
    </div>
  )
}

export default ContactSection