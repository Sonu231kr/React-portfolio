import React from 'react'
import Section3Info from './Section3Info'
import SectionSkillpercent from './SectionSkillpercent'

function Section3() {
  return (
    <div className='flex justify-between px-30 py-25 items-center dark:text-white'>
        <Section3Info/>
        <SectionSkillpercent/>
    </div>
  )
}

export default Section3