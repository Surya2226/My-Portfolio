import React from 'react'
import AboutMe from '../Assets/AboutMe1.png'
const About = () => {
    return (
        <section className='flex flex-col md:flex-row px2 py-10 bg-black' id='About'>
            <div className=' px-10' >
                <img src={AboutMe} />
            </div>
            <div className='md:w-1/2 py-10 flex justify-center pl-11'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-green-400 text-4xl py-2 border-b-4 font-main-testFont mb-4 w-[170px] font-bold'>About Me </h1>
                    <p className=' text-1xl py-3'>Hi, I'm Surya, a Full Stack Developer with 2 years of experience in Mendix.</p> 
                    <p className='text-1xl py-3'>I specialize in building scalable applications and have expanded my skills in React and Tailwind CSS to create sleek, responsive web interfaces. I focus on writing clean, efficient code and delivering functional, user-friendly solutions.</p>
                    <p className='text-1xl py-3'>Explore my portfolio and feel free to reach out for collaborations or opportunities!</p>
                </div>

            </div>
        </section>
    )
}

export default About