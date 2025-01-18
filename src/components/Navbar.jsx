import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center 
        justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>SN</p>
        </NavLink>
        
        {/* Center text */}
        <div className='flex-1 text-center'>
          <p className='text-lg font-medium text-gray-700 italic'>
            This website is under construction
          </p>
        </div>

        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to='/about' className={({ isActive }) => isActive ?
          'text-blue-500' : 'text-black'}>
              About
          </NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ?
          'text-blue-500' : 'text-black'}>
              Projects
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar