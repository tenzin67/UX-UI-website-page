import React from 'react'
import { motion } from "framer-motion"
function Aboutme() {
  return (
    <div>
        <motion.h1 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1}}
               className=' font-extrabold text-8xl m-20'>Passionate brand designer 
               dedicated to transforming ideas into 
               visual stories.
          </motion.h1>

          <div className='flex'>
            <div className='m-5'>
                <img src="aboutme.jpg" alt="" srcset="" className=' m-20 '/>
                <div className='font-normal text-xl ml-10'>
                  <p className='m-10' >Name - Tenzin Phalgyal</p>
                  <p className='m-10' >Location - Banglore, Karnataka</p>
                  <p className='m-10' >Experience -1 years</p>
                </div>
            </div>
          <div>

              <div className='m-20'>
                  <h2 className=' text-6xl font-bold m-20'>My name is <br /> Tenzin Phalgyal</h2>
                  <p className=' text-lg w-[55%] m-20 '>I am a talented and experienced UI/UX designer, 
                      skilled in creating visually appealing user interfaces (UI) 
                      and ensuring a satisfying user experience (UX). You 
                      possess a deep understanding of design principles, user 
                      navigation, and interaction, and you can seamlessly 
                      integrate these elements to craft optimal user 
                      experiences. Your creative thinking, user problem 
                      analysis, and intuitive, aesthetic solutions are your 
                      strengths. Your UI/UX design expertise enhances the 
                      attractiveness and functionality of digital products, 
                      ensuring that users feel comfortable and satisfied while using them.
                    </p>
              </div>

              <div className='m-20'>
                <h2 className=' text-6xl font-bold m-10 ml-20'>Work Experience</h2>
                
                 <div className=' flex justify-around w-[80%] text-2xl font-extralight ml-5'>
                      <p>Studio Design</p>
                      <p>Product Designer</p>
                      <p>Present</p>
                  </div>
                  <div className=' w-[72%] ml-14 m-10 bg-black h-0.5' />
                  
                 <div className=' flex justify-around w-[80%]  text-2xl font-extralight ml-5'>
                      <p>Kerya</p>
                      <p>UI/UX Designer</p>
                      <p>2 years</p>
                  </div>
                  <div className=' w-[72%] ml-14 m-10 bg-black h-0.5' />

                 <div className=' flex justify-around w-[80%]  text-2xl font-extralight ml-5'>
                      <p>Freelance</p>
                      <p>UI/UX Designer</p>
                      <p>1 years</p>
                  </div>
                  <div className=' w-[72%] ml-14 m-10 bg-black h-0.5' />

                 <div className=' flex justify-around w-[80%]  text-2xl font-extralight ml-5'>
                      <p>Gintura</p>
                      <p>Designer</p>
                      <p>3 years</p>
                  </div>
                  <div className=' w-[72%] ml-14 m-10 bg-black h-0.5' />


                </div>
            </div>
          </div>
    </div>
  )
}

export default Aboutme