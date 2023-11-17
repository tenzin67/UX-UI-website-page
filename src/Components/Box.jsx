import React from 'react'
import { motion } from "framer-motion"
function Box({title,img}) {
  return (
   <div>
      <motion.img  whileHover={{ scale:1.02 }} src={img} className='w-[700px] h-[400px]'/>
      <h2 className=' text-3xl font-extrabold '>{title}</h2>
   </div>
  )
}

export default Box