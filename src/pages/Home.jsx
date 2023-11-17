import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Box from '../Components/Box'
import travel from '../../public/travel.jpg'
import menu from '../../public/menu.jpg'
import web from '../../public/web.jpg'
import dash from '../../public/dash.png'
import { FiArrowUpRight } from "react-icons/fi";

function Home() {
  return (
    <div>
     <div className=''> 
     
          <motion.h1 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{duration:1}}
               className=' font-extrabold text-8xl m-20'>I’m a UI/UX designer with a passion for thinking <br /> creatively.
          </motion.h1>

          <div className='flex items-center '>
               <Link  to={'/contact'} className='border bg-black text-white p-2 rounded-full text-xs m-20 hover:bg-orange-700'>Get in touch</Link>
               <p className='m-5 relative -right-1/3 text-lg font-extralight '>Let's work together to combine our skills and efforts to <br/> produce a successful collaboration.</p>
          </div>
     </div>
     
     <div className='flex justify-center'>
          <img src="pic1.jpg" alt="" srcset="" className=' max-w-6xl'/>
     </div>

     <div className=''>
          <div className='flex gap-40'>
               <motion.h1 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{duration:1}}
                    className=' font-extrabold text-7xl m-20 text-gray-600'>Designer focuses on <br /> emotionally engaging digital <br /> experiences 
               </motion.h1>
               <Link className='p-5 mt-52 w-28 h-28 bg-black text-white rounded-full flex items-center hover:bg-orange-700' to={'/aboutme'}>About me</Link>
          </div>    
           
              <div className='flex gap-48'>
                    <p className='font-extralight ml-20 text-2xl text-gray-500'>I am a skilled UI/UX designer, proficient in creating visually appealing interfaces and ensuring a seamless <br />user experience. My expertise enhances the functionality and aesthetics of digital products, delivering a <br />satisfying user experience.
                    </p>
          
               </div> 

     </div>

     <div>
          <div className='flex justify-between'>
               <h1 className=' text-5xl font-extrabold m-20'>Selected Works</h1>
               <h4 className=' text-2xl font-extrabold m-20'>(2020-2023)</h4>
          </div>
          
          <div className='flex m-5 -mt-1 justify-around'>
               <div ><Box title="Travel" img={travel} /></div>
               <div ><Box title="Menu" img={menu} /></div>
          </div>
          <div className='flex m-5 -mt-1 justify-around'>
               <div ><Box title="Design" img={web} /></div>
               <div ><Box title="DashBoard" img={dash} /></div>
          </div>
     </div>

     <div className='p-10 flex justify-center m-20'>
          <div className='flex-col'>
               <p className=' text-center text-xl font-light text-gray-500'>
                    “Our visual designer lets you drag and drop of your own <br />
                     way to their custom apps for both of keep desktop, <br />
                    mobile & tab. Creating your main account to our website and <br/>
                     use it.”
               </p>

               <div className='flex items-center justify-center m-5'>
                    <img src="profile.jpeg" alt="" className='h-20 w-20 rounded-full m-3' />
                    <div>
                         <h3 className=' text-xl font-bold '>Sarah Khol</h3>
                         <p className=' text-gray-400'>@Sarahkhol</p>
                    </div>
              
               </div>
               
          </div>
     </div>

     <div className='border text-black text-6xl font-extrabold text-center flex-col p-20 bg-gray-300 h-96'>
          <h1>Turn Your Problems From </h1>
          <h1>Frightful Into Something </h1>
          <h1>Beautiful</h1>
     </div>

     <div className=' border flex justify-center text-black text-6xl font-extrabold text-center flex-col h-96'>
          <div className='flex justify-center gap-32'>
               <h1 >Let's Make Your Ideas a Reality! <br />
               Get in touch
               </h1>
               <Link to={'/contact'} className=' h-32 w-32 bg-black text-white text-5xl rounded-full flex justify-center items-center hover:text-orange-500'><FiArrowUpRight /></Link>
           </div> 
     </div>

    </div>
  )
}

export default Home