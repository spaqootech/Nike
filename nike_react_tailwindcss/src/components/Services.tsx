import React from 'react'

const Services = () => {
  return (
    <div>
      
      {/* services*/}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-32 px-10 gap-10'>

        <div className='cart p-10 shadow-xl rounded-xl'>
          <img src='assets/icons/truck-fast.svg'
            className='bg-red-400 p-2 rounded-full' />
          <div className='text-2xl font-bold'>Free shipping</div>
          <div className='text-lg text-gray-500'>
            Enjoy seamless shopping with our complimentary shipping service.
          </div>
        </div>

        <div className='cart p-10 shadow-xl rounded-xl'>
          <img src='assets/icons/shield-tick.svg'
            className='bg-red-400 p-2 rounded-full' />
          <div className='text-2xl font-bold'>Secure Payment</div>
          <div className='text-lg text-gray-500'>
            Experience worry-free transactions with our secure payment options.
          </div>
        </div>

        <div className='cart p-10 shadow-xl rounded-xl'>
          <img src='assets/icons/support.svg'
            className='bg-red-400 p-2 rounded-full' />
          <div className='text-2xl font-bold'>Love to help you</div>
          <div className='text-lg text-gray-500'>
            Our dedicated team is here to assist you every step of the way.
          </div>
        </div>

      </div>

{/* services*/}

    </div>
  )
}

export default Services
