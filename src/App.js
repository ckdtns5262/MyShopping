
import './App.css';
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import { Routes, Route } from 'react-router-dom'
import Event from './component/Event';
import Detail from './component/Detail';
import item from "./data"
import Cart from './component/Cart';



function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[]) 


  let [items, setItems] = useState(item)

  return (
    <>
      <Header/>
  
      <Routes>
        <Route path='/' element={<div className="">
          <Content items={items} setItems={setItems} />
        </div>}></Route>
        <Route path='*' element={<div>404 없는 페이지 입니다</div>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/detail/:id' element={<Detail items={items} />}></Route>
        <Route path='/about' element={<div>어바웃페이지임</div>}></Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 쿠폰 발행</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
      


    </>

  );
}

export default App;
