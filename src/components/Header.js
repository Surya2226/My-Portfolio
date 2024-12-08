import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
   const [ToggleMenu , SetToggleMenu]= useState(false)
  return (
    <header className="flex justify-between px-5 py-3 bg-primary" >
        <a className='font-bold text-green-500' href="#">Hi Surya</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white' >
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>
        {ToggleMenu && <nav className='block md:hidden '>
        <ul onClick={()=>{SetToggleMenu(!ToggleMenu)}} className='flex flex-col text-white mobile-nav text-center test'>
            <li><a href="#">home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => SetToggleMenu(!ToggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
  )
}

export default Header