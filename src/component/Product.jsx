import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Recent from '../component/Recent';

const Product = ({ items,setItems }) => {
  let navigate = useNavigate();
  const [count, setCount] = useState(1)
  const [showBt, setShowBt] = useState(true)
  return (
    <>
      { showBt == true?
        <div className='flex justify-center'>
        <button onClick={()=>{setCount(count+1)
        if(count == 1)
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          let copy = [...items, ...result.data]
          setItems(copy)
        })
        if(count == 2) 
        axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((result)=>{
          let copy = [...items, ...result.data]
          setItems(copy)
        })
        if(count >= 3)
          setShowBt(showBt==false)
          }}>더보기</button>
      </div>
       : ''}
      <div className="container flex mt-4">
        <div className="row">
          {items.map((a, i) => {
            return (
              <div className="col-md-4" key={items[i].title}>
                <img
                  src={items[i].picture}
                  width="80%"
                  alt="제품사진"
                  onClick={() => {
                    navigate("/detail" + "/" + i);
                  }}
                  className=''
                />
                <h2 className="">{items[i].title}</h2>
                <p>{items[i].price}원</p>
              </div>
            );
          })}
          
        </div>
      </div>
      <div className="">
      <Recent/>
      </div>
    </>
  );
};

export default Product;
