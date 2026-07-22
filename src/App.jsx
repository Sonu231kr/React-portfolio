import React from 'react'
import {WindArrowDown} from 'lucide-react'
import HeaderSection from './Components/HeaderSection/HeaderSection'
import IntroSection from './Components/IntroSection/IntroSection'
import Section3 from './Components/Section3/Section3'
import ServiceSection from './Components/ServiceSection/ServiceSection'
import ProjectSection from './Components/projectSection/ProjectSection'
import AboutSection from './Components/AboutSection/AboutSection'
import SkillSection from './Components/SkillSection/SkillSection'

function App() {

  const users =[
    {

      role: "Web Development",
        info : "I use my knowledge of various programming language such as HTML5,CSS , JAVASCRIPST ,TAILWIND CSS to build digital solution for users."
    },
    {
      role: "UI/ux designer",
        info : "Crafting users-centric digital experiences that seamlessy blend asethetics and funtionality. Expert in user -centerd degin and responsive interfaces."
    },
    {
      role: "Backend Developer",
        info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error consequatur perferendis aliquam nam, atque aut minus. Quo, facere rerum"
    },


  ]

  return (
    <div>
         <HeaderSection />
         <IntroSection />
         <Section3 />
         <ServiceSection  users = {users}/>
         <ProjectSection />
         <AboutSection />
        <SkillSection />
    </div>
  )
}

export default App