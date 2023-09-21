import Image from "next/image"

function Booking() {
  return (
    <div className="w-full h-full lg:px-28 md:px-14 px-5
     justify-center text-5xl">
        <h1 className=" text-center lg:mx-48 lg:text-5xl text-3xl font-semibold font-sans"> 
            Hevenly - offeringservices that were offerable for everyone
        </h1>

        <div className="flex gap-12  lg:px-20 justify-center flex-wrap items-center py-5 mt-4 ">
     
      
      <div className="flex justify-center w-64">
      <Image
              src='/assets/image/8316.jpg'
              width={37}
              height={37}
              className='rounded-full'
         
            />

            <h1 className="text-xl mt-1">Discover design Ideas</h1>


      </div>
      <div className="flex justify-center">
      <Image
              src='/assets/image/8316.jpg'
              width={37}
              height={37}
              className='rounded-full'
         
            />
            <h1 className="text-xl">Discover design Ideas</h1>


      </div>
      <div className="flex justify-center">
      <Image
              src='/assets/image/8316.jpg'
              width={37}
              height={37}
              className='rounded-full'
         
            />
            <h1 className="text-xl">Discover design Ideas</h1>


      </div>
      <div className="flex justify-center">
      <Image
              src='/assets/image/8316.jpg'
              width={37}
              height={37}
              className='rounded-full'
         
            />
            <h1 className="text-xl">Discover design Ideas</h1>


      </div>

     


        </div>
        <div className=" w-full h-[550px] bg-Fayor bg-cover bg-center flex-col gap-3 flex-center ">
            <p className="font-semibold">Book a Consultation</p>
            <p className="font-semibold text-2xl">Looking forward to creating your dream space today</p>
            <button className="p-4 border-b-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-white text-xl transition-colors   duration-300 ease-in-out delay-150 hover:translate-y-0 ">
              BOOK A CONSULT
            </button>
     

        </div>
     

        </div>
  )
}

export default Booking
