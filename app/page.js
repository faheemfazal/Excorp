"use client";

import Image from "next/image";
// import image from '../public/assets/image/8316.jpg'
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Condent from "@/components/Condent";
import Service from "@/components/Service";
import Advertisement from "@/components/Advertisement";
import Category from "@/components/Category";
import Partners from "@/components/Partners";
import Booking from "@/components/Booking";

export default function Home() {
  const [state, setState] = useState(2);
  const [rotate, setRotate] = useState(false);
  const [rotateImg, setRotateImg] = useState(false);

  useEffect(()=>{
    setRotate(true);
    setRotateImg(true)
    setTimeout(() => {
      setRotate(false);
      setRotateImg(false)
    }, 1000);
  },[])


  const rotateDiv = (data) => {
    if (state !== data) {
      setState(data);
      setRotate(true);
      setRotateImg(true)
      setTimeout(() => {
        setRotate(false);
        setRotateImg(false)
      }, 1000); // Adjust the duration to match your keyframes animation duration
    }
  };


  return (
    <>
    
      <main className={`flex h-screen w-full ${state ==1 && 'bg-HomeOne'  } ${state ==2 && 'bg-Hometwo'  } ${state ==3 && 'bg-Homethree'  } bg-cover bg-center  brightness-25 absolute top-0`} ></main>
      {/* <div className="h-[1500px]"> */}
      <div className="w-full h-screen brightness-100 flex ">
        <div className="w-1/2 h-full flex-col gap-2 flex-center pl-20 pt-20 ">
          <h1 className="lg:text-6xl text-3xl font-sans  font-bold text-teal-400 b ">
            Enhance Your Construction Projects
          </h1>
          <p className="font-sans lg:text-2xl text-xl pt-4 text-white ">
            Our team of professional designers can help you create modern and
            luxurious interior design.
          </p>
          <div className="flex justify-start w-full gap-4 pt-8">
            <button className="p-4 border-b-2 border-yellow-700 text-yellow-700 font-semibold hover:bg-yellow-700 hover:text-white text-xl transition-colors   duration-300 ease-in-out delay-150 hover:translate-y-0 ">
              See Projects
            </button>
            <button className="p-4 border-b-2 border-white text-white font-semibold hover:bg-white hover:text-black text-xl  transition-colors   duration-300 ease-in-out delay-150 hover:translate-y-0">
              See Projects
            </button>
          </div>
          <div className="flex justify-start w-full gap-4 pt-24 p-14">
            <button
              className={`  ${
                state == 1
                  ? "border-2  border-yellow-700 text-xl p-2.5 text-yellow-700"
                  : "text-yellow-950  hover:border-2 hover:border-yellow-950 "
              } w-14  ${rotate && state == 1 ? "rotate" : ""} `}
              onClick={() => rotateDiv(1)}
            >
              01
            </button>
            <button
              className={`  ${
                state == 2
                  ? "border-2 border-yellow-700 text-xl p-2.5 text-yellow-700"
                  : "text-yellow-950 hover:border-2 hover:border-yellow-950"
              } w-14   ${rotate && state == 2 ? "rotate" : ""}`}
              onClick={() => rotateDiv(2)}
            >
              02
            </button>
            <button
              className={`  ${
                state == 3
                  ? "border-2 border-yellow-700 text-xl p-2.5 text-yellow-700"
                  : "text-yellow-950  hover:border-2 hover:border-yellow-950"
              } w-14 ${rotate && state == 3 ? "rotate" : ""} `}
              onClick={() => rotateDiv(3)}
            >
              03
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full px-20 pt-14 ">
          <div className={`w-full aspect-square  border-8  border-dashed border-teal-400 border-spacing-48  pl-20 pt-16 ${state ==1 && 'bg-HomeOne'  } ${state ==2 && 'bg-Hometwo'  } ${state ==3 && 'bg-Homethree'  } bg-cover bg-center ${rotate  ? "rotateImg" : ""}`} >
            
        </div>
            {/* <div className={`w-full   aspect-square relative -right-14 lg:-top-3px md:-top-72  ${state ==1 && 'bg-HomeOne'  } ${state ==2 && 'bg-Hometwo'  } ${state ==3 && 'bg-Homethree'  } bg-cover bg-center ${rotateImg ? "innerImg" : ""}`}></div> */}
          </div>
      </div>
      
      {/* </div> */}
      {/* <div className="h-screen"></div> */}
      <Condent />
      <Service />
      
      <Advertisement  />
      <Category />
      <Partners />
      <Booking />
    </>
  );
}
