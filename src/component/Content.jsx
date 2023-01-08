import "../App.css";

import Product from "./Product";
import ba1 from '../img/banner.jpeg'
import ba2 from '../img/banner2.jpeg'
import ba3 from '../img/banner3.jpeg'
import ba4 from '../img/banner4.jpeg'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { useState } from "react";



const Content = ({items, setItems}) => {

  const imgList = [ba1, ba2, ba3, ba4]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgList.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const nextSlide = ()=> {
    const isLastSlide = currentIndex === imgList.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="mt-1">
      <div className="max-w-[100%] h-[500px] w-full relative group"> 
        <img src={imgList[currentIndex]} alt='' className="w-full h-full bg-center bg-cover duration-500"/>
      </div>
      {/* 왼쪽방향 */}
      <div className="group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] rounded-full left-5 text-4xl bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} />
      </div>
      {/* 오른쪽방향 */}
      <div className=" group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] rounded-full right-5 text-4xl bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide}/>
      </div>
   
      <Product items={items} setItems={setItems}/>
    </div>
  );
};

export default Content;
