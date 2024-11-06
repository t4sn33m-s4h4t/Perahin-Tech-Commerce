import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { CartContext, WishlistContext } from '../../App';
import { toast } from 'react-toastify';

export default function ProductDetailsRightSide({ product }) {
    const { product_title, price, availability, description, specification, rating } = product || {};
    const { cart, setCart } = useContext(CartContext);
    const { wishlist, setWishlist } = useContext(WishlistContext);

    const addToCart = () => {
        if (!cart.some(item => item.product_id === product.product_id)) {
            setCart([...cart, product]);
            toast.success("Product Added to Cart!")
        } else {
            toast.info("Product is Already in Cart")

        }
    };

    const addToWishlist = () => {
        if (!wishlist.some(item => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
            toast.success("Product Added to Wishlist!")
        } else {

            toast.info("Product is Already in Wishlist")
        }
    };

    const isInWishlist = wishlist.find(item => item.product_id === product.product_id);

    return (
        <div className="w-1/2 p-6">
            <h2 className="text-3xl font-semibold">{product_title}</h2>
            <p className="text-gray-800 font-semibold text-lg mt-2">Price: ${price}</p>
            <div className={`badge ${availability ? 'badge-success' : 'badge-error'} badge-outline bg-[#00a96e1c] p-3 mt-2`}>
                {availability ? 'In Stock' : 'Out of Stock'}
            </div>

            <p className="mt-3 text-gray-500">{description}</p>

            <div className="mt-4">
                <h3 className="font-bold">Specification:</h3>
                <ul className="list-decimal list-inside mt-1 text-gray-500">
                    {specification.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 flex items-center">
                <span className="text-gray-500 font-semibold mr-2">Rating</span>
                <div className="rating">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-yellow-500"
                            defaultChecked={index + 1 === Math.round(rating)}
                        />
                    ))}
                </div>
                <span className="ml-2 text-gray-500 text-sm bg-base-200 py-1 px-2 rounded-xl">{rating}</span>
            </div>

            <div className="mt-6 flex items-center gap-2">
                <button onClick={addToCart} className="btn bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2">
                    Add To Cart
                    <AiOutlineShoppingCart />
                </button>

                <button
                    onClick={addToWishlist}
                    disabled={isInWishlist}
                    className={`p-2 border ${isInWishlist ? 'border-purple-500 text-purple-500' : 'border-gray-200'} rounded-full`}
                    title={isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                >
                    {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
}
