import React from 'react'
import Box from '../Components/Box'
import travel from '../../public/travel.jpg'
import menu from '../../public/menu.jpg'
import web from '../../public/web.jpg'
import dash from '../../public/dash.png'

function Project() {
  return (
    <div>

     <div>
          <div className='flex justify-between'>
               <h1 className=' text-5xl font-extrabold m-14'>Selected Works</h1>
               <h4 className=' text-2xl font-extrabold m-14'>(2020-2023)</h4>
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
    </div>
  )
}

export default Project