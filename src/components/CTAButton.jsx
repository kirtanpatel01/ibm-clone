import React from 'react'
import { GoArrowRight } from "react-icons/go";

function CTAButton({ text, type }) {
  return (
    <div className={`flex justify-between w-full max-w-60 border border-primary p-2 cursor-pointer hover:bg-arkaDark ${type === 'primary' ? 'bg-primary text-white' : 'bg-white text-primary hover:text-white'}`}>
        {text}
        <GoArrowRight size={24} />
    </div>
  )
}

export default CTAButton