import React,{useContext, useState} from 'react'
import Image from 'next/image'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth} from "../../styles/Firebase/firebase"

import { Auth } from '../Context';

import {  signOut } from "firebase/auth";
import Link from "next/link"
import {useRouter} from "next/router"

function Navbar() {
  const [open,setOpen] = useState(false)
  const [token,setToken] = useState(null)

  const {user} = useContext(Auth)
  const router = useRouter();
  
  const logout = async ()=>{
    await signOut(auth)
    localStorage.clear();
    router.push("login")
}
 



  
  return (
    <>
    <nav className='flex items-center justify-between px-[30px] shadow py-[10px]  bg-white' style={{boxShadow:'1px 10px 10px rgba(0,0,0,0.1)'}}>
        <div>
            <h1 className='font-bold text-3xl cursor-pointer'><Link href="/">KUTI</Link></h1>
        </div>

        <ul className='md:flex items-center justify-between gap-[30px] hidden'>
            <li>Home</li>
            <li>Get started</li>
            <li>Our Solutions</li>
            <li>{user? <span onClick={()=>router.push('dasboard')} className="cursor-pointer">dashboard</span> :null}</li>
            <li>  {user ? <button className='text-white bg-[#2BD0D0] w-[100px] p-2 shadow' style={{borderRadius:'20px'}} onClick={logout}>Logout</button> :<button className='text-white bg-[#2BD0D0] w-[100px] p-2 shadow' style={{borderRadius:'20px'}}><Link href="login">Login</Link></button>}</li>
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
          <li  onClick={() => setOpen(!open)}>Home</li>
                
                <li  onClick={() => setOpen(!open)}>Get Started</li>
                <li  onClick={() => setOpen(!open)}>Our Solutions</li>
               
                <li> <button className='text-white bg-[#2BD0D0] w-[100px] p-2 shadow' style={{borderRadius:'20px'}} ><Link href="login">Login</Link></button></li>
          </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
