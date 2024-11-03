import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Sidebar() {
  const categories = ['All Product', "Laptops", 'Phones', "Accessories"]
  return (
    <div className='bg-white p-5 rounded-xl  grid grid-cols-1 space-y-5  text-white font-bold'>
      {
        categories.map((cat)=>{
          return(
            // bg-[#9538E2]
            <NavLink to={"categories/"+cat} key={cat} className='py-3 px-5 rounded-3xl bg-base-300 text-gray-500'>{cat}</NavLink>
          )
        })
      }
    </div>
  )
}
