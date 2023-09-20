

function Category() {

    const category = [
        { categort: "Bathroom",img:'bg-Bathroom'},
        { categort: "Bedrom",img:'bg-Bedrom' },
        { categort: "Fayor & Mudroom" ,img:'bg-Fayor'},
        { categort: "Hallway & Stairs" ,img:'bg-Hallway'},
        { categort: "Kitchen",img:'bg-Kitchen' },
        { categort: "Living Room",img:'bg-Living' },
        { categort: "Pets on Furniture" ,img:'bg-Pets'},
        { categort: "Vegnette",img:'bg-Vegnette' },
        {categort:'Dining Room',img:'bg-Dining'},
        {categort:'Kids Room',img:'bg-Kids'},
        {categort:'OutDoors',img:'bg-OutDoors'},
        {categort:'Workspace',img:'bg-Workspace'},


      ];


  return (
    <div className="w-full h-full lg:px-28 md:px-14 px-5
     justify-center text-5xl">
        <h1 className=" text-center lg:mx-48 lg:text-5xl text-3xl font-semibold font-sans"> 
            Hevenly - offeringservices that were offerable for everyone
        </h1>
        
        <div className="flex gap-12 lg:px-20 justify-center flex-wrap items-center py-5 mt-4 ">
       {category.map((data)=>(
      <div className={`w-80 h-52 ${data.img} bg-center bg-cover py-10 px-10 brightness-100`} >
      <div className="border-y-4 border-white w-full h-full flex-col flex-center backdrop-brightness-50  ">
        <h1 className="text-4xl font-semibold text-center text-white">{data.categort}</h1>
      </div>
    </div>)

       )     
           }
     


        </div>

      
    </div>
  )
}

export default Category
