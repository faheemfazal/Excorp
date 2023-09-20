
"use client"

// import Nav from '@component/Nav'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
// import {signIn  } from 'next-auth'



function Nav() {
  const [session,setSession] = useState(true)
  const [providers,setProvider] = useState(true)
  const [toggleDropdown,setToggleDropdown] =useState(false)



  return (
    <>
    <nav className='flex-between px-10 w-full h-20 sticky top-0 justify-center z-50 bg-white'>
    <div className='lg:flex hidden'>

    <div className='flex gap-5 flex-center '>
        <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link>

        <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link> <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link>


      </div>
      </div>

 

        <Link href='/about' className='flex gap-2 flex-center '>
           <Image src="/assets/image/8316.jpg" width={50} height={50}   className='object-contain' />

           <h1 className='text-xl'>prerkwgvwev</h1>
         
        
        </Link>

    <div className='lg:flex hidden '>
       
        <div className=' md:flex gap-5 flex-center hidden sm:visible'>
        <button className='black_btn'>Create Post</button>
        <button className='outline_btn'>Sign Out</button>

      </div>
      </div>

      <div className='lg:hidden flex relative'>
        {session  ? (
          <div className='flex'>
            <Image
              src='/assets/image/8316.jpg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link>

        <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link> <Link href='/'>
          <p className=''>INTERIORS</p>
        </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider?.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

        

     
    </nav>
    </>




  )
}

export default Nav
