
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({items}) => {
  let {id} = useParams()
  const [modal, setModal] = useState(true)
  const [num, setNum] = useState('')
  
  useEffect(()=>{
    setTimeout(()=>{
      setModal(false)
    },2000)
  },[modal])
  useEffect(()=>{
    if (isNaN(num) == true){
      alert('숫자입력해')
    }
  },[num])

  return (
    <>
    <div className="container">
      {
        modal == true ? <div className='alert alert-warning'>
        <p className='text-center'>2초 이내 구입시 할인!!</p>
       </div> : ''
      }
     
     <div className="row">
       <div className="col-md-6">
       <img src={items[id].picture} width="80%" alt=''/>
       </div>
       <div className='col-md-6 mt-4'>
        <input type='text' 
              placeholder='숫자만 입력하시오'
              className='placeholder:text-[17px]
              outline-0 max-w-[70vw] py-1 w-[15rem]'
              onChange={(e)=>{setNum(e.target.value)}}/>
         <h4 className=''>{items[id].title}</h4>
         <p className=''>{items[id].price} 원</p>
          <button className="btn btn-danger">주문하기</button>
          </div>
       </div>
     </div>
   
  
 </>

  )
}

export default Detail