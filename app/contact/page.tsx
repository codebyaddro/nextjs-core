"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
  const router = useRouter();
  const goToHome = () => {
    router.push('/');
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <button
        onClick={goToHome}
        className="
        bg-blue-500 
        hover:bg-blue-700 
        text-white 
        font-bold 
        py-2 px-4 
        rounded"
      >
        Go to Home
      </button>
    </div>
  )
}

export default Contact