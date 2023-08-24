import React from 'react'

const Newsletter = () => {
  return (
    <div>
            {/* Newsletter */}
      <section className='grid grid-cols-1 lg:grid-cols-2 p-10 py-20 space-y-10'>
        <div className='text'>
          <div className='text-5xl font-bold'>
            Sign Up for 
            <span className='text-red-400'> Updates </span>
            & Newsletter
          </div>
        </div>
        <div className='input lg:flex justify-center items-center'>
          <input placeholder='subscribe@nike.com'
            className='ring-1 p-3 rounded-full w-5/6'
          />
        </div>
      </section>
      {/* Newsletter */}


      


    </div>
  )
}

export default Newsletter
