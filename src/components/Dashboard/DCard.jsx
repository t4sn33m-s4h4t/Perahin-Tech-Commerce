import React, { useContext } from 'react'
import { MdCancel } from 'react-icons/md';
import { CartContext, IsCardContext, WishlistContext } from '../../App';
import { toast } from 'react-toastify';

export default function DCard({ product }) {
    const addToCart = () => {
        if (!cart.includes(product)) {
            setCart([...cart, product]);
        }
    };
    const { isCart } = useContext(IsCardContext);
    const { cart, setCart } = useContext(CartContext);
    const { wishlist, setWishlist } = useContext(WishlistContext);
    function deleteFromGoods() {
        if (isCart) {
            const deletedGoods = cart.filter(_ => _.product_id != product.product_id)
            setCart([...deletedGoods])
            toast.success("Product Deleted From Cart!")

        } else {
            const deletedGoods = wishlist.filter(_ => _.product_id != product.product_id)
            setWishlist([...deletedGoods])
            toast.success("Product Deleted From Wishlist!")
        }
    }
    return (
        <div className="card bg-white shadow-md rounded-lg p-4 grid lg:grid-cols-[250px_1fr] grid-rows-1  items-start gap-6 relative">
            <MdCancel
                onClick={deleteFromGoods}
                className='right-3 top-3 absolute text-3xl text-red-600 cursor-pointer' />
            <img src={product.product_image} alt={product.product_title} className=" m-auto w-full h-48 object-cover rounded-t-lg" />
            <div className='h-full space-y-3'>
                <h2 className="text-xl font-semibold mt-2">{product.product_title}</h2>
                <div className="mt-2">
                    <span className="bg-purple-100 text-purple-700 font-semibold rounded-full px-2 py-1 text-xs">{product.availability ? 'In Stock' : 'Out of Stock'}</span>

                </div>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold text-lg">Price: ${product.price.toFixed(2)}</p>

                {
                    !isCart ?
                        <div>
                            <button onClick={addToCart} className=" bg-purple-500 hover:bg-purple-600 text-white rounded-3xl px-4 py-2 text-sm">
                                Add To Cart
                            </button>
                        </div> : null
                }
            </div>
        </div>
    );
};


