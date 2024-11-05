import DCards from '../../components/Dashboard/DCards'
import Buttons from '../../components/Dashboard/Buttons'
import { CartContext, WishlistContext } from '../../App';
import { useContext } from 'react';
import { IsCardContext } from '../../App';


export default function Dashboard() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { isCart } = useContext(IsCardContext);
  return (
    <div className='md:mx-28'>
      <Buttons />
      {isCart ? <DCards goods={cart} /> : <DCards goods={wishlist} />}
      
    </div>
  )
}
