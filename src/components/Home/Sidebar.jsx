import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Sidebar({categories}) {
  categories = ["All Categories", ...categories]
  return (
    <div className='bg-white p-6 rounded-2xl  grid grid-cols-1 space-y-5  text-white font-bold'>
      {
        categories.map((cat, i)=>{
          return(
            // bg-[#9538E2]
            <NavLink to={`${i===0 ? "/":"/category/"+cat}`} key={cat} className='py-3 px-6 font-semibold rounded-3xl hover:bg-[#9538E2] hover:text-white transition bg-base-200 text-gray-500 text-lg'>{cat}</NavLink>
          )
        })
      }
    </div>
  )
}
