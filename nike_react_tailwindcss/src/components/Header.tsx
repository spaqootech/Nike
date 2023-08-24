import React from 'react'

const Header = () => {
  return (
    <div>
            
      {/* header */}
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-5 lg:px-10 pt-32 z-10 space-y-5'>
          <div className='text-red-400 text-xl'>
            Our Summer collections</div>
          <div className='text-5xl lg:text-8xl font-bold w-[700px] py-5 bg-white'>
            The New Arrival</div>
          <div className='text-5xl lg:text-8xl font-bold'>Nike Shoes</div>
          <div className='text-gray-500 text-lg w-3/5'>
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </div>
          <button className='flex bg-red-400 text-white p-3 px-6 rounded-full'>
            Shop now
            <img src='assets/icons/arrow-right.svg'className='pt-1 pl-2'/>
          </button>
          <div className=' flex space-x-20'>
            <div className='text'>
              <div className='text-3xl font-bold'>1k+</div>
              <div className='text-xl text-gray-500'>Brands</div>
            </div>
            <div className='text'>
              <div className='text-3xl font-bold'>500+</div>
              <div className='text-xl text-gray-500'>Shops</div>
            </div>
            <div className='text'>
              <div className='text-3xl font-bold'>250k+</div>
              <div className='text-xl text-gray-500'>Customers</div>
            </div>
          </div>
        </div>
        <div className='p-5 lg:px-20 pt-32 pb-0 bg-[url(assets/images/collection-background.svg)] bg-center'>
          <img src='assets/images/big-shoe1.png' />

          <div className='flex relative top-14'>

            <div className='bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
              <img src='assets/images/thumbnail-shoe1.svg' />
            </div>     
            <div className='bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
              <img src='assets/images/thumbnail-shoe2.svg' />
            </div>
            <div className='bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
              <img src='assets/images/thumbnail-shoe3.svg' />
            </div>     

          </div>

        </div>

      </div>

      {/* header */}

    </div>
  )
}

export default Header
