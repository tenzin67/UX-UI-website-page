import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Contact() {
  return (
    <div className='flex'>
      <div>
        <motion.h1 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1}}
               className=' font-extrabold text-8xl m-20'>Feel free to <br />
               contact me
          </motion.h1>
          <p className='ml-20 text-2xl font-bold'>tenzin7755@mail.com</p>
          <div className='flex gap-5 ml-20 m-5 text-4xl font-bold'>
            <Link to={'https://www.instagram.com'}> <FaInstagram /> </Link>
            <Link to={'https://www.linkedin.com/feed/'}>  <CiLinkedin /> </Link>
            <Link to={'https://twitter.com/home'}>  <CiTwitter /> </Link>
          </div>
      </div>
      
      <div className='flex-col w-1/2 text-center m-20'>
        
        <div>
          <input type="text" placeholder='Name' className='border w-[70%] m-2 rounded-md p-3 bg-gray-200'/>
        </div>

        <div>
          <input type="Email" placeholder='Email' className='border w-[70%] m-2 rounded-md p-3 bg-gray-200'/>
        </div>
        
        <div>
           <textarea name="message" id=""  rows="10" placeholder='Message' className='border m-3 rounded-md p-2 w-[70%] bg-gray-200'></textarea> 
        </div>

        <div>
          <button className='border w-[70%] rounded-md bg-black text-white p-3'>Sign Up</button>
        </div>

      </div>
    </div>
  )
}

export default Contact