import React from "react";
import Image from "next/image";

function Service() {
 
  


  return (
    <div className="w-full h-full   mx-28">
      <div className="h-96 w-full bg-cover brightness- bg-center bg-service">
        <div className="w-96 h-96 ml-28 bg-white flex-col gap-1 flex justify-center p-5 ">
          {/* <div className="w-64 h-20 bg-yellow-500  ">
            <div className="flex relative -top-5  left-1">
              <div
                className="w-0 h-0 
  border-l-[50px] border-l-transparent
  border-b-[200px] border-b-yellow-500
  border-r-[50px] border-r-transparent rotate-90 "
              ></div>
              <div
                className="w-0 h-0 -ml-10
  border-l-[50px] border-l-transparent
  border-b-[200px] border-b-yellow-500
  border-r-[50px] border-r-transparent -rotate-90 "
              ></div>
            </div>
        </div> */}
        <h1 className="text-2xl font-semibold font-sans ">Services</h1>
          <h1 className="text-5xl font-semibold font-sans ">
            Stunning interior design services now whithin reach{" "}
          </h1>
          <button className=" border-b-2 w-36 h-14 border-yellow-700 text-yellow-700 font-semibold hover:bg-yellow-700 hover:text-white text-lg transition-colors   duration-300 ease-in-out delay-150 hover:translate-y-0 ">
              Find your style     
            </button>
        </div>
      </div>
      <div className="bg-custom-color mx-28">
      <div className="w-full h-[400px] px-28 flex pt-5 justify-around overflow-hidden brightne">


      <div className="w-[500px] h-[300px] bg-white overflow-hidden  flex-col flex justify-center rounded-2xl">
<Image src="/assets/image/1.jpg" width={500} height={500}   className='object-contain' />
</div>
<div className="w-[500px] h-[350px] ">
    <div className="w-full flex justify-around pt-4 text-white">
        <h1 className="text-4xl p-5 font-bold ">01</h1>
        <div className="p-5">
        <p className="text-2xl  font font-semibold">Match with one of our talented designers and get Inspired.</p>
        <p className="text-lg pt-3 font ">With 10 year of experience in all 50 states and 10,000+ designes, we'll help
         you hone your style, get inspired, and realize your design dreams for your specific space </p>

        </div>
    </div>

</div>


</div>
<div className="w-full h-[400px] px-28 flex pt- justify-around overflow-hidden brightne">

<div className="w-[500px] h-[350px] ">
    <div className="w-full flex justify-around pt-4 text-white">
        <h1 className="text-4xl p-5 font-bold ">02</h1>
        <div className="p-5">
        <p className="text-2xl  font font-semibold">Collaburate 1:1 with your designer to create your perfect space.</p>
        <p className="text-lg pt-3 font ">Let your designer guide you to a design that meets your functional needs and suits your unique style. See it come to life with a 3D rendering of the design in your actual space. </p>

        </div>
    </div>

</div >
<div className="w-[500px] h-[300px] bg-white overflow-hidden  flex-col flex justify-center rounded-2xl ">
<Image src="/assets/image/1.jpg" width={500} height={500}   className='object-contain' />
</div>

</div>   

<div className="w-full h-[400px] px-28 flex pt- justify-around overflow-hidden brightne">
<div className="w-[500px] h-[300px] bg-white overflow-hidden  flex-col flex justify-center rounded-2xl">
<Image src="/assets/image/1.jpg" width={500} height={500}   className='object-contain' />
</div>
<div className="w-[500px] h-[350px] ">
    <div className="w-full flex justify-around pt-4 text-white">
        <h1 className="text-4xl p-5 font-bold ">03</h1>
        <div className="p-5">
        <p className="text-2xl  font font-semibold">Bring your design home with ease.</p>
        <p className="text-lg pt-3 font ">Our designers source from 100+ home brands so no two spaces are ever alike. Leverage havenly's propietary platform with a consolidated checkout and never overpay with our price quarentee. </p>

        </div>
    </div>

</div>


</div>


      
         


      </div>
    </div>
  );
}

export default Service;
