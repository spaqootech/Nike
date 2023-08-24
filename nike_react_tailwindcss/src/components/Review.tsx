import React from 'react'

const Review = () => {
  return (
    <div>
            {/* review */}
      <section className='p-5 lg:p-20 flex justify-center items-center flex-col space-y-3'>
        <div className='text-5xl font-bold'>
          What Our <span className='text-red-400'>
            Customers
          </span> Say?
        </div>
        <div className='text-xl text-gray-500  lg:w-4/6 lg:text-center'>
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 py-20 space-y-20'>

          <div className='space-y-3 flex justify-center items-center flex-col'>
            <img
              src='assets/images/customer1.jpg'
              className='h-32 rounded-full' />
            <div className='rating flex space-x-1'>
              <img src='assets/icons/star.svg' />
              <span className='text-gray-500 text-lg'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>
              Morich Brown
            </div>
            <div className='text-gray-500 text-lg text-center w-4/6'>
              The product not only met but exceeded my expectations. I'll definitely be a returning customer!
            </div>
          </div>

          <div className='space-y-3 flex justify-center items-center flex-col'>
            <img
              src='assets/images/customer2.svg'
              className='h-32 rounded-full' />
            <div className='rating flex space-x-1'>
              <img src='assets/icons/star.svg' />
              <span className='text-gray-500 text-lg'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>
              Morich Brown
            </div>
            <div className='text-gray-500 text-lg text-center w-4/6'>
              The product not only met but exceeded my expectations. I'll definitely be a returning customer!
            </div>
          </div>

        </div>


      </section>
      {/* review */}


      





    </div>
  )
}

export default Review
