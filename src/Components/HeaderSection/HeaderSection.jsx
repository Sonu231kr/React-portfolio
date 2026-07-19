import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Theame from './Theame'
function HeaderSection() {
  return (
    <div className='flex justify-between px-20 py-5 '>
       <Logo />
       <Menu />
       <Theame />
    </div>
  )
}

export default HeaderSection