import { useEffect, useState } from 'react';
import DCard from './DCard'
import DRow from './DRow'
export default function DCards({ goods }) {

  const [sorted, setSorted] = useState(false);
  const [stuffs, setStuffs] = useState([...goods]);

  useEffect(() => {
      if (sorted) {
          setStuffs([...goods].sort((a, b) => b.price - a.price));
      } else {
          setStuffs([...goods]);
      }
  }, [sorted, goods]); 

  return (
    <div>
      <DRow sorted={sorted} setSorted={setSorted} />
      <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2  gap-4 mx-4 mt-12 md:m-0'>
        {
          stuffs.length > 0
            ? stuffs.map(c => <DCard key={c.product_id} product={c} />)
            : <h3 className='text-center mt-12 text-3xl font-bold'>No Products Found!</h3>
        }


      </div>
    </div>
  )
}
