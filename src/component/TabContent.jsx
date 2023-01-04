import React, { useEffect, useState } from 'react'
import '../App.css'

const TabContent = ({tab}) => {
const [fade, setFade] = useState('')

   useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
   
    return ()=>{
        setFade('')
    }
   },[tab]) 
  return(
    <div className={`start ${fade}`}>
    {[<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][tab]}
  </div>
  )
}

export default TabContent