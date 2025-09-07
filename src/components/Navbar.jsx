import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-[20%] h-[6%] mx-auto flex font-medium mt-4 max-lg:w-2/5'>
    <div className=' bg-[#D65F0F] w-1/2 rounded-l-2xl slex text-[#FFE5AE] cursor-pointer hover:font-semibold '>
        Home
    </div>
    <div className=' bg-[#FFE5AE] w-1/2 rounded-r-2xl slex text-[#90390b] cursor-pointer  hover:font-semibold'>Your Tasks</div>
    </div>
  )
}

export default Navbar