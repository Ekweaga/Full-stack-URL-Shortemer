import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-black  text-white flex justify-between p-3 text-sm'>
 <div>
            <h1 className='font-bold text-1xl'>KUTI</h1>
        </div>

        <div>
            infokuti@gmail.com
        </div>
        <div className=''>
          <Image src="/icon-twitter.svg" width="15px" height="15px"></Image>&nbsp;&nbsp;
          <Image src="/icon-facebook.svg" width="15px" height="15px"></Image>&nbsp;&nbsp;
          <Image src="/icon-instagram.svg" width="15px" height="15px"></Image>&nbsp;&nbsp;
          <Image src="/icon-pinterest.svg" width="15px" height="15px"></Image>
        </div>

        
    </footer>
      
    </>
  )
}

export default Footer
