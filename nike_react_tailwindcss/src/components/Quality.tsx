import React from 'react'

const Quality = () => {
  return (
    <div>
      
      {/* SuperQuality */}
      <section className='py-20 px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='space-y-5 flex flex-col justify-center'>
            <div className='text-3xl font-bold'>
              We Provide You <span className='text-red-400'>
                Super
              </span> Quality Shoes
            </div>
            <div className='text-gray-500 text-lg lg:pr-32'>
              Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            </div>
            <div className='text-gray-500 text-lg lg:pr-32'>
              Our dedication to detail and excellence ensures your satisfaction
            </div>
          </div>

          <div className='p-10 lg:p-20'>
            <img src='assets/images/shoe8.svg'/>
          </div>
        </div>
      </section>
      {/* SuperQuality */}

    </div>
  )
}

export default Quality
