import React from 'react'

export default function Card() {
  return (
    <div className='mx-auto'>
      <div className="card bg-base-100 max-w-80 shadow-xl">
        <figure className='rounded-3xl'>
          <img
            className='p-3 rounded-3xl'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">Shoes!</h2>
          <p className='text-gray-500'>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <div className="bg-gradient-to-bl rounded-3xl from-violet-600 to-red-400 p-[1.4px] ">
              <button className=" rounded-3xl text-md bg-white px-3 py-2">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
