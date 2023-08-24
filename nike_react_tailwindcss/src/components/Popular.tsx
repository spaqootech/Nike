import React from 'react'

const Popular = () => {
  return (
    <div>
      
      {/* popular products */}
      <section className='py-32 px-10 space-y-5'>
        <div className='text-5xl font-bold'>
          Our <span className='text-red-400'>
            Popular</span> Products</div>
        <div className='text-gray-500 text-lg w-full lg:w-2/5'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
          <div className='cart space-y-2 flex flex-col'>
            <div className='img bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain'>
              <img src='assets/images/shoe5.svg' />
            </div>
            <div className='rating flex space-x-4'>
              <img src='assets/icons/star.svg'/>
              <span className='text-lg text-gray-500'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>Nike Air Jordan-01</div>
            <div className='text-2xl font-bold text-red-400'>$200.20</div>
          </div>

          <div className='cart space-y-2 flex flex-col'>
            <div className='img bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain'>
              <img src='assets/images/shoe6.svg' />
            </div>
            <div className='rating flex space-x-4'>
              <img src='assets/icons/star.svg' />
              <span className='text-lg text-gray-500'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>Nike Air Jordan-01</div>
            <div className='text-2xl font-bold text-red-400'>$200.20</div>
          </div>

          <div className='cart space-y-2 flex flex-col'>
            <div className='img bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain'>
              <img src='assets/images/shoe7.svg' />
            </div>
            <div className='rating flex space-x-4'>
              <img src='assets/icons/star.svg' />
              <span className='text-lg text-gray-500'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>Nike Air Jordan-01</div>
            <div className='text-2xl font-bold text-red-400'>$200.20</div>
          </div>

          <div className='cart space-y-2 flex flex-col'>
            <div className='img bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain'>
              <img src='assets/images/shoe4.svg' />
            </div>
            <div className='rating flex space-x-4'>
              <img src='assets/icons/star.svg' />
              <span className='text-lg text-gray-500'>(4.5)</span>
            </div>
            <div className='text-2xl font-bold'>Nike Air Jordan-01</div>
            <div className='text-2xl font-bold text-red-400'>$200.20</div>
          </div>


        </div>
        
      </section>
      {/* popular products */}

    </div>
  )
}

export default Popular
