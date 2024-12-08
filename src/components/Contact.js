import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col md:pl-[150px] md:px-[130px] text-center py-[50px] bg-black text-white ' id='Contact'>
    <div className=' flex flex-col items-center'>
            <h1 className='text-green-400 text-4xl py-2 border-b-4 font-main-testFont mb-4 w-[130px] font-bold'>Contact</h1>
            <p className=' text-1xl py-3 '>If you want to discuss more information in detail, please contact me </p>
            <p className=' text-1xl py-3'><span className='font-main-testFont font-bold' >Email: </span> Suryak2226@gmail.com</p>
            <p className=' text-1xl py-3 '><span className='font-main-testFont font-bold'>Phone: </span> +91 8072843502</p>

    </div> 
</section>
  )
}

export default Contact