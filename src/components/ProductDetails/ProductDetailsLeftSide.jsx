import React from 'react'

export default function ProductDetailsLeftSide({ product_image, product_title }) {
  return (

    <div className="w-1/2 p-7">
      <img
        className="h-full rounded-3xl bg-gray-100 object-cover"
        src={"../" + product_image}
        alt={product_title}
      />
    </div>

  )
}
