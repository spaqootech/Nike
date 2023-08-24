import React from 'react'

const Footer = () => {
  return (
    <div>
            {/* footer */}
      <footer className=' p-10 grid grid-cols-1 md:grid-cols-2 space-y-14 sm:space-y-0 lg:grid-cols-4 bg-black text-white'>
        <div className='space-y-3'>
          <img src='assets/images/footer-logo.svg' className='h-7' />
          <div className='text-gray-500 text-md'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </div>
          <div className='flex space-x-3'>
            <img src='assets/icons/facebook.svg' className='bg-white p-2 rounded-full' />
            <img src='assets/icons/twitter.svg' className='bg-white p-2 rounded-full' />
            <img src='assets/icons/instagram.svg' className='bg-white p-2 rounded-full' />
          </div>
        </div>

        <div className='space-y-3 lg:px-20'>
          <div className='text-2xl text-gray-300'>Products</div>
          <div className='text-lg text-gray-400'>Air Force 1</div>
          <div className='text-lg text-gray-400'>Air Max 1</div>
          <div className='text-lg text-gray-400'>Air Jordan 1</div>
          <div className='text-lg text-gray-400'>Air Force 2</div>
          <div className='text-lg text-gray-400'>Nike Waffle Racer</div>
          <div className='text-lg text-gray-400'>Nike Cortez</div>
        </div>
        

        <div className='space-y-3 lg:px-20'>
          <div className='text-2xl text-gray-300'>Help</div>
          <div className='text-lg text-gray-400'>About us</div>
          <div className='text-lg text-gray-400'>FAQs</div>
          <div className='text-lg text-gray-400'>How it works</div>
          <div className='text-lg text-gray-400'>Privacy policy</div>
          <div className='text-lg text-gray-400'>Payment policy</div>
        </div>

        <div className='space-y-3 lg:px-20'>
          <div className='text-2xl text-gray-300'>Get in touch</div>
          <div className='text-lg text-gray-400'>customer@nike.com</div>
          <div className='text-lg text-gray-400'>+92554862354</div>
        </div>
</footer>

      <div className='flex bg-black text-gray-400 p-10 justify-between items-center'>
        <div className=''>&#162; Copyright. All rights reserved.</div>
        <div className=''>Terms & Conditions</div>
      </div>
      {/* footer */}
    </div>
  )
}

export default Footer
