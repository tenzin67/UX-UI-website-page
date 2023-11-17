import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex gap-96 justify-between border-b border-gray-300 items-center m-5 p-5'>
      <div> 
         <h1 className=' text-4xl font-bold'>TENZ</h1>
       </div>
      
       <div>
          <ul className='flex gap-8 items-center'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/project'}>Project</Link></li>
              <li><Link to={'/aboutme'}>About Me</Link></li>
              <li className=' bg-black text-white p-2 rounded-full text-sm'><Link to={'/contact'}>Contact</Link></li>
          </ul>

      </div>
    </div>
  )
}

export default Header