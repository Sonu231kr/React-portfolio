import React from 'react'
import LeftFoot from './LeftFoot'
import RighFoot from './RighFoot'

function FooterCnt() {
  return (
    <div  className=' flex p-10 justify-between w-full '>
      <LeftFoot />
      <RighFoot />
    </div>
  )
}

export default FooterCnt