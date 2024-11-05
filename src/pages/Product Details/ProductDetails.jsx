import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetailsLeftSide from '../../components/ProductDetails/ProductDetailsLeftSide'
import ProductDetailsRightSide from '../../components/ProductDetails/ProductDetailsRightSide'
export default function ProductDetails() {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(p => p.product_id === String(id));
    const {
        product_title,
        product_image
    } = product || {};

    return (
        <div>
            <div className="flex -mt-48 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-gray-200">
                <ProductDetailsLeftSide 
                product_image={product_image} 
                product_title={product_title} />

                <ProductDetailsRightSide product={product}/>
            </div>
        </div>
    )
}
