import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, Scatter } from 'recharts';

export default function Chart() {
  const products = useLoaderData();

  const data = products?.map(product => ({
    name: product.product_title,
    price: product.price,
    rating: product.rating,
  })) || [];

  return (
    <div className="bg-white rounded-2xl py-12 mx-4 md:mx-12 lg:mx-32 mt-10" style={{ height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >

          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#d4a8ff" stroke="#8884d8" />
          <Bar dataKey="price" barSize={window.innerWidth < 768 ? 10 : 20} fill="#9538E2" />
          <Scatter dataKey="rating" fill="purple" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
