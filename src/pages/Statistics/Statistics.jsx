import React from 'react'
import Chart from '../../components/Statistics/chart'

export default function Statistics() {
  return (
    <div className='md:mx-32'>
      <h4 className='text-3xl mt-8 font-bold md:mx-12 lg:mx-32 hidden md:block'>Statistics</h4>
      <Chart></Chart>
    </div>
  )
}
