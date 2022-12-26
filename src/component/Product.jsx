import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import item from "../data";


const Product = () => {
  let [items] = useState(item);
  let navigate = useNavigate()

  return (
    <div className="container flex mt-4">
      <div className="row">
        {items.map((a, i) => {
          return (
            <div className="col-md-4" key={items[i].title}>
              <img src={items[i].picture} width="80%" onClick={()=>{
                navigate('/detail')
              }} />
              <h4>{items[i].title}</h4>
              <p>{items[i].price}원</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
