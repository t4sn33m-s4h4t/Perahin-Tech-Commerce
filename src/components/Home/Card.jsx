import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ product }) {
  
  const { 
    product_id, 
    product_title, 
    product_image, 
    description 
  } = product;

  const navigate = useNavigate()

  return (
    <div className='mx-auto'>
  <div className="card bg-base-100 max-w-80 flex flex-col h-full"> 
    <figure className='rounded-3xl'>
      <img
        className='p-3 rounded-3xl object-cover h-48' 
        src={"../"+product_image} 
        alt={product_title} 
      />
    </figure>
    <div className="card-body p-4 flex-grow"> 
      <h2 className="card-title">{product_title}</h2> 
      <p className='text-gray-500'>{description}</p> 
      <div className="card-actions mt-auto">
        <div className="bg-gradient-to-bl rounded-3xl from-violet-600 to-red-400 p-[1.4px]">
          <button 
            className="rounded-3xl text-md bg-white px-3 py-2"
            onClick={() => {
              navigate(`/product/${product_id}`) 
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
