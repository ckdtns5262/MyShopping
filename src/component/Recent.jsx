import React from 'react'
import '../App.css'

const Recent = () => {

  let arr = localStorage.getItem('watched')
  arr = JSON.parse(arr)
  console.log(arr)
  return (
  
  <div className='watched'>

    <div className='re'>
     <p className='bor'>최근 본 상품목록</p> 
     {
     arr.map((item)=>{
      return <div key={item.id}>{item}</div>
     })
     }
      </div>
    </div>
  )
}

export default Recent