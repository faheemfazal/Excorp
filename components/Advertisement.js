import Image from "next/image"


function Advertisement() {

  return (
    <div className='w-full h-full px-28 gap-3 '>
        <div className="h-52 w-full">
        <h1 className="px-28 text-5xl font-sans font-semibold p-5  text-black mt-10 pr-14">Our interior design service are tailored to you space, style, and budget.</h1>

        </div>
        <div className="flex  w-3/5 justify-start gap-5  ml-52 opacity-80">

            <div className="w-64 h-64 bg-orange-800 ">

            </div>
            <div className="w-64 h-64  bg-orange-800 ">

            </div>

        </div> 

        <div className="w-full flex">

        <div className="flex h- w-3/5 justify-start gap-8  ml-20 relative -top-48">
            

<div className="w-72 h-72 bg-orange-500 flex-col  flex-center">
   <h1 className="text-3xl text-center font-bold text-white  font-sans p-3">FURNISH YOUR 2 BEDROOM APARTMENT AT 3.35 LAKS*</h1>
   <h1 className="relative  text-white right-0 text-xs ">*GST extra</h1>
</div>
<div className="w-72 h-72  bg-orange-500  flex-col  flex-center">
<h1 className="text-3xl text-center font-bold text-white  font-sans p-3">FURNISH YOUR 3 BEDROOM APARTMENT AT 4.30 LAKS*</h1>
   <h1 className="relative  text-white right-0 text-xs ">*GST extra</h1>
</div>

</div>


<Image src="/assets/image/drow.avif " width={600} height={600}   className='object-contain p-5 ' />
        </div>
    


       
    
    
    </div>
  )
}

export default Advertisement
