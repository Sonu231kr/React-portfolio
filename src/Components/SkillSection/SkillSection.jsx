import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function SkillSection() {
  return (
    <div className='flex gap-20 px-30 py-10  justify-between items-center dark:text-white'>
        <LeftSection />
        <RightSection />
    </div>
  )
}

export default SkillSection