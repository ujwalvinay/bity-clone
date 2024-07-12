// components/SignUpForm.tsx
"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SignUpForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);



  return (
    
      <div ref={formRef} className="bg-white pt-10 rounded w-full max-w-md">
        <button className="w-full  text-black py-3 border-solid border-gray-300 border-2 rounded mb-4 flex items-center justify-center">
          <img src="/google-icon.webp" alt="Google" className="h-5 w-5 mr-2" />
          <h6 className='text-sm'>Continue with Google</h6>
        </button>
        <button className="w-full  text-black py-3 border-solid border-gray-300 border-2 rounded mb-4 flex items-center justify-center">
          <img src="/Apple_logo.svg" alt="Apple" className="h-6 w-5 mr-2" />
          <h6 className='text-sm'>Continue with Google</h6>
        </button>
        <div className="flex items-center my-10">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <label htmlFor="email"><h6>Email</h6></label>
        <input
          name='email'
          type="email"
          className="w-full p-2 mt-2 border border-gray-300 rounded mb-4"
        />
        <label htmlFor="password">Password</label>
        <input
          name='password'
          type="password"
          className="w-full p-2 mt-2 border border-gray-300 rounded mb-4"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Create free account
        </button>
        <p className="text-gray-500 text-xs text-center mt-4">
          By creating an account, you agree to Bitly's{' '}
          <a href="#" className="text-blue-500">Terms of Service</a>,{' '}
          <a href="#" className="text-blue-500">Privacy Policy</a>, and{' '}
          <a href="#" className="text-blue-500">Acceptable Use Policy</a>.
        </p>
      </div>
    
  );
};

export default SignUpForm;