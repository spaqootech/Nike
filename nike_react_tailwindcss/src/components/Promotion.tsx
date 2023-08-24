import React from 'react'

const Promotion = () => {
  return (
    <div>
      


      {/* Promotion */}
      <div className='py-32 px-10 grid grid-cols-1 lg:grid-cols-2'>
        <div className='image'>
          <img src='assets/images/offer.svg'/>
        </div>
        <div className='texts p-10 space-y-5 flex flex-col justify-center'>
          <div className='text-5xl font-bold'>
            <span className='text-red-400'> Special  </span>
            Offer</div>
          <div className='text-gray-500 text-lg'>
            Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
          </div>

          <div className='text-gray-500 text-lg'>
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
          </div>
          <div className='buttons flex space-x-5'>
            <button 
              className='flex bg-red-400 text-white p-3 px-6 rounded-full'>Shop now
              <img src='assets/icons/arrow-right.svg'
                className='mt-1 ml-2'
              />
            </button>
            <button 
            className='ring-1 text-gray-500 p-3 px-6 rounded-full'>Learn more</button>
          </div>

        </div>

      </div>
      
{/* Promotion */}

      
    </div>
  )
}

export default Promotion
