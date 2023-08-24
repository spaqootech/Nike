import React from 'react'

const Navbar = () => {
  return (
    <div>
      
      {/* navbar */}
      <nav className=' navbar navbar-padding'>
        <img src='/assets/images/header-logo.svg' />
        <div className='ul1 hidden  lg:block'>
          <a href='#' className='a-style'>Home</a>
          <a href='#' className='a-style'>About Us</a>
          <a href='#' className='a-style'>Projects</a>
          <a href='#' className='a-style'>Contact Us</a>
        </div>
        <div className='hidden md:block flex space-x-5'>
          <a href='#' className='text-lg'>Sign in</a>
          <a href='#' className='text-lg'>Explore now</a>
        </div>
<button className='block md:hidden'>
          <img src='/assets/icons/hamburger.svg' className='h-7'/>
</button>
      </nav>
{/* navbar */}

    
    </div>
  )
}

export default Navbar
