import React from 'react'
import { Link } from 'react-router-dom'

function pageNotFound() {
  return (
    <div className='flex items-center justify-center w-full h-[calc(100vh-140px)] flex-col text-center'>
        <h1 className='text-[150px] mb-5 font-extrabold leading-[150px]'>404</h1>
        <h4 className='text-[20px] mb-5 font-semibold'>Looks like this page is missing. If you still need help, <br/>visit our <Link to="/" className='text-[#fc3a7a]'>Home Page</Link></h4>
    </div>
  )
}

export default pageNotFound