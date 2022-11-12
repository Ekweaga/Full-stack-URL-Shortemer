import React from 'react'

function Spinner() {
  return (
    <>
    <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
        <div className='border-t-transparent border-solid animate-spin rounded-full border-[#2BD0D0]-400 border-8 h-64 w-64 bg-black'></div>
    </div>
      
    </>
  )
}

export default Spinner
