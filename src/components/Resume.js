import React from 'react'
import ResumeImg from '../Assets/resume.jpg'
function Resume() {
  return (
    <section className='flex flex-col md:flex-row md:pl-[150px] pt-[150px] pb-10  px-10 bg-black' id='Resume'>
    <div className=' px-10  flex justify-end ' >
        <img className='md:w-[400px] w-[300px]' src={ResumeImg} />
    </div>
    <div className='md:w-1/2 py-10 flex justify-center'>
        <div className='flex flex-col  text-white'>
            <h1 className='text-green-400 text-4xl py-2 border-b-4 font-main-testFont mb-4 w-[130px] font-bold'>Resume</h1>
            <p className=' text-1xl py-3 '>You can view my resume <a className='btn ml-2'href='#'>Download</a></p> 
            </div>

    </div>
</section>
  )
}

export default Resume