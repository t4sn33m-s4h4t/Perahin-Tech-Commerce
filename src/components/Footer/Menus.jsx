import React from 'react'
import { Link } from 'react-router-dom'

export default function Menus({menus}) {
    
  return (
    <>
        {
            menus.map(menu=><Link to='#' key={menu} className="link link-hover text-gray-400 font-semibold">{menu}</Link>)
        }
    </>
  )
}
