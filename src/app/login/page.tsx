import React from 'react'
import Image from 'next/image'
import LoginForm from '../components/LoginForm'
export default function page() {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className="form-side w-8/12 pl-20 pt-10">
          <Image
            alt='logo'
            src={'/logo.png'}
            width={100}
            height={100}
          />
          <div className="form-space pt-10 text-black pl-32">
            <h1 className='text-3xl font-bold '>Login and start sharing</h1>
            <h4 className='pt-5'>Don't have an account? <a href="/signup" className='underline'>Sign up</a></h4>
            <LoginForm />
          </div>
        </div>
        <div className="w-4/12 h-full text-black flex justify-center gap-4 items-center signup-img bg-[#E5EDFF]">
           <div>
            <Image 
                  alt='signup-img'
                  src={'/login-img.png'}
                  width={600}
                  height={600}
                  
              />
              <h3 className='text-xl text-center mt-10 font-semibold'>
              Analyze your links and QR Codes as easily as creating them
              </h3>
           </div>
           
        </div>
    </div>
  )
}
