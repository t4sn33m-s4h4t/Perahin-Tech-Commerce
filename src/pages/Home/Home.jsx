import React from 'react'
import Sidebar from "../../components/Home/Sidebar"
import Cards from "../../components/Home/Cards"
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='px-28'>
      <h1 className='text-4xl font-bold text-center my-12'>Explore Cutting-Edge Gadgets</h1>
      <div className='grid lg:grid-cols-[200px_1fr] grid-rows-1  items-start gap-4'>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
        <Cards></Cards>
      </div>
    </div>
  )
}
