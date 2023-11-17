import React from 'react'

function Footer() {
  return (
    <div>
      <div className='border border-gray-300 flex justify-between'>

        <div className='p-10 '>
           <h1 className=' font-bold text-4xl m-3'>Limas Anggara</h1>
          <div className='flex items-center'> 
              <input type="text" className='border rounded-full p-3 text-xs' placeholder='name@gmail.com'/>
              <p className=' bg-black text-white rounded-full m-2 p-1'>Subscribe</p>
            </div>
        
        </div>

        <div className='flex gap-5'>
          <div className='p-10'>
            <h2 className='font-bold text-2xl '>Menu</h2>
            <p className=' text-xs m-2'>About Me</p>
            <p className=' text-xs m-2'>Project</p>
            <p className=' text-xs m-2'>Contact</p>
          </div>

          <div className='p-10'>
            <h2 className='font-bold text-2xl'>Scila Media</h2>
              <p className=' text-xs m-2'>About Me</p>
              <p className=' text-xs m-2'>Project</p>
              <p className=' text-xs m-2'>Contact</p>
            </div>
        </div>
      </div>

      <div className='p-5 flex justify-between'>
        <h2 className=' text-lg font-semibold'>tenzin7755@gmail.com</h2>
        <p className=' text-xs text-gray-500'>©2023 TENZ</p>
      </div>
    </div>
  )
}

export default Footer