import React from 'react'
import projectImage from "../Assets/L&T.jpg";
import projectImage1 from "../Assets/ecommerce-Website-Project.jpg";
import projectImage2 from "../Assets/content-writer-blog-articles-creation-600nw-2141979401.jpg";

const Project = () => {
    const config = {
        project:[
        {
            image :projectImage,
            ProjectDescription :'Quality Management System QMS L&T',
            link:''
        },
        {
            image :projectImage1,
            ProjectDescription :'E-Commerce build in mendix platform',
             link:''
        },
        {
            image :projectImage2,
            ProjectDescription :'My Blog',
             link:''
        },
        
    ]}
    return (
        <section id='Project' className='flex flex-col justify-center px-10  bg-black text-white'>
            <div className='py-10'>
                <div className='  flex justify-center '>
                    <h1 className=' font-bold text-4xl py-2 font-main-testFont text-green-400 border-b-4 mb-3  w-[150px]'>Projects</h1>
                </div>
            </div>
            <div className='w-full'>
                <div className='px-8 py-5'>
                    <p>These are some of my best project experience with mendix platform and Ui check them out</p>
                </div>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.project.map((Project)=>(
                        <div className='relative'>
                        <img className=' h-[150px] md:h-[200px] w-[300px] md:w-[400px] image-redius' src={Project.image} />
                        <div className='project-description h-[200px]'>
                            <p className='text-center py-10'>{Project.ProjectDescription}</p>
                            <div className='flex justify-center'>
                            <a className='btn-project'target='n_blank' href={Project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default Project