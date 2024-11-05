import React from 'react'
import Card from "./Card"
import { useLoaderData, useParams } from 'react-router-dom';
export default function Cards() {
  let products = useLoaderData();
  const { catId } = useParams();
  if (catId) {
    products = products.filter(product => product.category === catId)
  }
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
  {
    products.length === 0 ? (
      <h3>No Product Found</h3>
    ) : (
      products.map((product, index) => (
        <Card key={`${product.products_id}-${index}`} product={product} />
      ))
    )
  }
</div>

  )
}
