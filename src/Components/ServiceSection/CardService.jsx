
import React from 'react'
import CardContent from './CardContent'
function CardService(props) {

  console.log(props.users)

  return (
    <div className=' p-1 flex gap-10 justify-between '>
       

          {props.users.map(function(elem,index){

            return  <CardContent Key ={index}  role = {elem.role} info ={elem.info} />

          })}


         

     </div>

  
  )
}

export default CardService