import React from 'react'

import ACMLogo from '../assets/S-Chap-Logo.png';

const Navbar = () => {
  return (
    <div className='h-20 flex justify-between items-center px-6 border-b-2 border-white border-opacity-10'>
      <div className='flex justify-center items-center gap-4 cursor-pointer'>

        <img src={ACMLogo} alt="ACM Logo" className='w-10 h-10' />

        <h1 className='p-1 text-2xl font-semibold upp'>MUJ ACM Student Chapter</h1>

      </div>

      <div>
        <ul className='flex gap-2'>
            <li className='navbarItem'>Home</li>
            <li className='navbarItem'>About us</li>
            <li className='navbarItem'>Projects</li>
            <li className='navbarItem'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
