import React from 'react'

const login = () => {

  
  return (
    <div className=' flex h-screen w-screen items-center justify-center'>
      <div className='border-2 p-20 border-emerald-600'>
        <form className='flex flex-col items-center justify-center'>
          <input className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-white' type="email"placeholder='Enter your email' />
          <input className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-white' type="password"placeholder='Enter your password' />
          <button className='text-white outline-none  border-2 border-none bg-emerald-600 text-xl py-4 px-5 rounded-full mt-5 placeholder:text-white'>Login</button>

        </form>
      </div>
      
    </div>
  )
}

export default login
