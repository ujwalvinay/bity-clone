"use client"
import React from 'react';
import Image from 'next/image';
import SignUpForm from '../components/SignupForm';
import axios from 'axios';

const SignUpPage: React.FC = () => {
  const handleSignup = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username: email,
        password: password,
      });
      alert(response.data.message); 
      // Show success message
      // Optionally redirect to login page or handle navigation
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='w-full h-full flex justify-center'>
      <div className="form-side w-7/12 pl-20 pt-10">
        <Image
          alt='logo'
          src={'/logo.png'}
          width={100}
          height={100}
        />
        <div className="form-space pt-10 text-black pl-32">
          <h1 className='text-3xl font-bold '>Create your account</h1>
          <h4 className='pt-5'>Already have an account? <a href="/login" className='underline'>Log in</a> or Log in with SSO</h4>
          <SignUpForm onSubmit={handleSignup} />
        </div>
      </div>
      <div className="w-5/12 h-full text-black flex justify-center gap-4 items-center signup-img bg-[#E5EDFF]">
        <div>
          <Image 
            alt='signup-img'
            src={'/signup-img.png'}
            width={600}
            height={600}
          />
          <h3 className='text-xl text-center mt-10 font-semibold'>
            Power your links, QR Codes, and Link-in-bio with Bitly's Connections Platform.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
