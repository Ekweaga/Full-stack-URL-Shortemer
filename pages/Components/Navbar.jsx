import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between p-[30px]'>
        <div>
            <h1 className='font-bold text-3xl'>KUTI</h1>
        </div>

        <ul className='flex items-center justify-between gap-[30px]'>
            <li>Features</li>
            <li>Get started</li>
            <li>Our Solutions</li>
            <li><button>Login</button></li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
