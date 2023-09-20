"use client";

import Image from "next/image";
import { useEffect,useState } from "react";

function Condent() {
    const [animation,setAnimation] = useState(false)
   

  useEffect(()=>{
    setAnimation(true)
    setTimeout(() => {
     
        setAnimation(false)
    }, 1000);

  },[])

  const imgArr = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "1.jpg",
    "8.jpg",
    "2.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  return (
    <div className="w-full h-[600px] px-28 flex brightness-200 ">
      <div className={`w-7/12 h-full  pt-14  ${animation && 'renderAnimation' }`}>
        <h1 className=" text-4xl font-sans mt-7  text-black font-bold p-4">
          Interior Design 
        </h1>
        <div className="w-full bg-white h-[350px] overflow-x-auto scrollbar-hide  ">
          <>
            <div className="flex gap-3 h-44">
              {imgArr.map(
                (data, index) =>
                  index % 2 === 0 && (
                    <Image
                      src={`/assets/image/${data}`}
                      width={250}
                      height={350}
                      className="object-contain brightness-50 "
                    />
                  )
              )}
            </div>
            <div className="flex gap-3 pt-2 h-44">
              {imgArr.map(
                (data, index) =>
                  index % 2 != 0 && (
                    <Image
                      src={`/assets/image/${data}`}
                      width={250}
                      height={350}
                      className="object-contain brightness-50"
                    />
                  )
              )}
            </div>
          </>
        </div>
      </div>
      <div className="w-5/12 h-full  shadow-left-dark  flex-col  flex justify-center  pl-4 ">
        <h1 className="text-lg font-sans p-5 font-semibold">Every time we take an order - we always finish it in previuosly agreed time. When working with us you can always expect fast delivery and high quality installation.

Every time you buy our furniture products, you get a warranty without exception. Inspire your space through art and design. trusted by 30, 000 brands and organizations around the world of all sizes.</h1>
            <button className=" border-b-2 w-36 h-14 ml-6 border-yellow-700 text-yellow-700 font-semibold hover:bg-yellow-700 hover:text-white text-lg transition-colors   duration-300 ease-in-out delay-150 hover:translate-y-0 ">
              Go To Know Me     
            </button>


   
      </div>
    </div>
  );
}

export default Condent;
