import React from 'react'
import CardService from './CardService'
import ServiceNavbar from './ServiceNavbar'

function ServiceSection(props) {
  return (
    <div className=' flex flex-col gap-10 py-10 px-30 dark:text-white '>       
        <ServiceNavbar />
        <CardService users = {props.users}/>
    </div>
  )
}

export default ServiceSection