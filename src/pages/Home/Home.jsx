import React from 'react'
import Sidebar from "../../components/Home/Sidebar"
import Cards from "../../components/Home/Cards"
import { Outlet, useLoaderData, useParams } from 'react-router-dom'

export default function Home() {
  const { catId } = useParams();
  const products = useLoaderData();
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className='md:px-32 mt-96'>
      <h1 className='text-4xl font-bold text-center my-12'>Explore Cutting-Edge Gadgets</h1>
      <div className='grid lg:grid-cols-[250px_1fr] grid-rows-1  items-start gap-6'>
        <Sidebar categories={categories}></Sidebar>
        <Outlet></Outlet>
        {!catId && <Cards />}

      </div>
    </div>
  )
}
