import React from 'react'
import LeftFoot from './LeftFoot'
import RighFoot from './RighFoot'

function FooterCnt() {
  return (
    <div className='flex gap-20 bg-amber-200 p-5 justify-between w-full '>
      <LeftFoot />
      <RighFoot />
    </div>
  )
}

export default FooterCnt