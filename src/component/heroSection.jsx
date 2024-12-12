import React from 'react'
import { Link } from 'react-router-dom';

function HeroSection({...props}) {
  return (
    <div className='w-full  '>
      <div className='flex items-center justify-between pt-24 h-3/6 gap-10'>
        <div className='basis-1/2 text-right bg-slate-200 rounded-xl px-5 py-10 '>
          <img src={props.image} alt={props.title} className='max-w-full max-h-[350px] mx-auto mix-blend-multiply' />
        </div>
        <div className='basis-1/2  p-10'>
          <h2 className='text-4xl leading-normal font-extrabold mb-5'>{props.title}</h2>
          <h5 className='text-lg leading-8 mb-5'>{props.description}</h5>
          <Link to={props.link} className='px-8 py-3 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500'>Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;