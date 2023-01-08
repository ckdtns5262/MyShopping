
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TabContent from './TabContent'
import { Nav } from 'react-bootstrap'
import '../App.css'
import { addItem } from '../Store'
import { useSelector,useDispatch } from 'react-redux'


const Detail = ({items}) => {
  let {id} = useParams()
  const [modal, setModal] = useState(true)
  const [num, setNum] = useState('')
  const [tab, setTab] = useState(0)
  const [fade, setFade] = useState('')
  let dispatch = useDispatch()

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(items[id].title, items[id].picture)
    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])



  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setModal(false)
  //   },2000)
  // },[modal])
  // useEffect(()=>{
  //   if (isNaN(num) === true){
  //     alert('숫자입력해')
  //   }
  // },[num])
  useEffect(()=>{
    setFade('end')
  },[<Detail/>])

  return (
    <div className={`start ${fade}`}>
    <div className="container">
      {
        modal === true ? <div className='alert alert-warning'>
        <p className='text-center'>2초 이내 구입시 할인!!</p>
       </div> : ''
      }
     
     <div className="row">
       <div className="col-md-6">
       <img src={items[id].picture} width="80%" alt=''/>
       </div>
       <div className='col-md-6 mt-4'>
       <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
      <TabContent tab={tab}/>
        <input type='text' 
              placeholder='숫자만 입력하시오'
              className='placeholder:text-[17px]
              outline-0 max-w-[70vw] py-1 w-[15rem]'
              onChange={(e)=>{setNum(e.target.value)}}/>
         <h4 className=''>{items[id].title}</h4>
         <p className=''>{items[id].price} 원</p>
          <button className="btn btn-danger" onClick={()=>{
            console.log('주문')
            dispatch(addItem(  
              {id : 2,
              prd : items[id].title,
               option : 100,
               price : 40000,
               deliver : 5000}))
          }}>주문하기</button>
          </div>
       </div>
     </div>
   
  
 </div>

  )
}

export default Detail