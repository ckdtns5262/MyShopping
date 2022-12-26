import React, { useState } from 'react'
import data from '../data'
const Detail = () => {

  let [items] = useState(data)
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src={items[0].picture} width="80%" alt=''/>
          <p className=''>{items[0].title}</p>
          <p className=''>{items[0].price} 원</p>
        </div>
      </div>
    </div>

   
  </>

  
  )
}

export default Detail