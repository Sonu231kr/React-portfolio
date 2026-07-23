import React from 'react'
import HeaderTitleProject from './HeaderTitleProject'
import FooterProjectCard from './FooterProjectCard'

function ProjectSection() {
  return (
    <div className='pl-30 pt-20 flex flex-col gap-15  dark:text-white'>
       <HeaderTitleProject />
       <FooterProjectCard />
    </div>
  )
}

export default ProjectSection