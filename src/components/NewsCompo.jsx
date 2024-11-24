import React from 'react'
import { GoArrowRight } from "react-icons/go";

function NewsCompo({ text }) {
  return (
    <div className='text-primary my-8 h-full w-full lg:w-32 cursor-pointer'>
        <p className='text-sm hover:underline hover:underline-offset-1 lg:line-clamp-4'>{text}</p>
        <GoArrowRight size={20} className='my-4'/>
        <div className='w-full h-[1px] bg-gray-300'></div>
    </div>
  )
}

export default NewsCompo