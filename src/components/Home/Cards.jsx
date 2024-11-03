import React from 'react'
import Card from "./Card"
export default function Cards() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
