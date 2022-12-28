
import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import {Routes, Route} from 'react-router-dom'
import Event from './component/Event';
import Detail from './component/Detail';
<<<<<<< HEAD
import item from "./data"
function App() {

  let [items] = useState(item);
=======

function App() {

 
>>>>>>> f537c3d85cd6c89a7312fd791a41ff37587edfe4
  return (
   <>
    <Header/>
   
     <Routes>
     
      <Route path='/' element={ <div className="">
         <Content items={items}/>
        </div>}></Route>
      <Route path='*' element={<div>404 없는 페이지 입니다</div>}></Route>
<<<<<<< HEAD
      <Route path='/detail/:id' element={<Detail items={items}/>}></Route>
=======
      <Route path='/detail' element={<Detail/>}></Route>
>>>>>>> f537c3d85cd6c89a7312fd791a41ff37587edfe4
      <Route path='/about' element={<div>어바웃페이지임</div>}></Route>
      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div>첫 주문시 쿠폰 발행</div>}></Route>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
      </Route>
     </Routes>



     </>
   
  );
}

export default App;
