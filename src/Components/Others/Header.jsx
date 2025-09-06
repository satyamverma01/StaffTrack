import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
         <h2 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold' >{data.firstName}👋</span></h2>
    
   
    <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-smalling'>Logout</button>
    </div>
  )
}

export default Header