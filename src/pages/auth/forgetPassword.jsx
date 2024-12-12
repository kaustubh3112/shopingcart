import React from 'react';
import { Link } from 'react-router-dom';
const ForegtPassword = () => {
  const ForegtPasswordForm = (e) =>{    
    e.preventDefault()
  }
  return (
    <div className='w-full max-w-sm mx-auto'>
       <div className='d-block mb-5 text-center' >
        <h2 className='text-2xl font-bold inline-flex items-center mb-3'>Reset Your Password</h2>
        <p>Dont worry you can reset your password here.</p>
       </div>
       <form className='w-full' onSubmit={ForegtPasswordForm}> 
        <div className='mb-3'>
            <input type='email' placeholder='Email' className='border border-slate-200 rounded-md text-md px-3 py-2 w-full' />
        </div>
        <div className='mb-3 hidden'>
            <input type='Password' placeholder='Password' className='border border-slate-200 rounded-md text-md px-3 py-2 w-full' />
        </div>
        <div className='mb-3 hidden'>
            <input type='Password' placeholder='Confirm Password' className='border border-slate-200 rounded-md text-md px-3 py-2 w-full' />
        </div>
        <div className='mb-3'>
            <button type='submit' className=' px-3 py-2 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full'>Submit</button>
        </div>
        <div className='mb-3'>
        <Link to="/login" className=' px-3 py-2 bg-slate-800 hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full text-center'> Cancel</Link>
        </div>
       </form>
    </div>
  )
}

export default ForegtPassword;