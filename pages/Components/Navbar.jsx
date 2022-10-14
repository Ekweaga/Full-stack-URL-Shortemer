import React,{useState} from 'react'
import Image from 'next/image'

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='flex items-center justify-between px-[30px] shadow py-[10px]  bg-white' style={{boxShadow:'1px 10px 10px rgba(0,0,0,0.1)'}}>
        <div>
            <h1 className='font-bold text-3xl'>KUTI</h1>
        </div>

        <ul className='md:flex items-center justify-between gap-[30px] hidden'>
            <li>Features</li>
            <li>Get started</li>
            <li>Our Solutions</li>
            <li>  <button className='text-white bg-[#2BD0D0] w-[100px] p-2 shadow' style={{borderRadius:'20px'}}>Login</button></li>
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width="20px" height="15px"></Image>
        </div>

        <div
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#3A3054] top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}>Features</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
               
                <li> <button className='text-white bg-[#2BD0D0] w-[100px] p-2 shadow' style={{borderRadius:'20px'}}>Login</button></li>
          </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
