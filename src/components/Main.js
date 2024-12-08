import React from 'react';
import MainImage from '../Assets/673059f8e0993.png';
import { AiOutlineTwitter,AiOutlineLinkedin,AiOutlineFacebook } from "react-icons/ai";

function Main() {
    const config = {
        Name :'Surya K',
        Subtilte :'Im a full stack developer'
    }
  return (
    
    <section className='flex px-5 py-4 flex-col md:flex-row justify-center bg-secondary'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className=' mainText md:text-6xl text-5xl font-main-testFont text-white'>Hi <br></br>Im <span className='text-green-500 '>{config.Name} </span>
        <p className='text-2xl '>{config.Subtilte}  </p>
        </h1>
        <div className='flex px-12 py-7 '>
        <a href='#' className='pr-3 text-white hover:text-green-400'><AiOutlineLinkedin size={30}  /></a>
        <a href='#' className='pr-3 text-white hover:text-green-400'><AiOutlineTwitter size={30}/></a>
        <a href='#'className=' text-white hover:text-green-400'><AiOutlineFacebook size={30} /></a>
        </div>
        </div>
        <img className='md:w-1/3 ' src={MainImage}/>
    </section>
    
    
    
  )
}

export default Main