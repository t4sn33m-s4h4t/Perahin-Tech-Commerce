import React, { useContext, } from 'react'
import { CartContext, IsCardContext } from '../../App';
import { GiSettingsKnobs } from 'react-icons/gi';
import grp from '../../assets/Group.png'
import { useNavigate } from 'react-router-dom';
export default function DRow({ sorted, setSorted }) {
    const navigate = useNavigate()
    function naviGateToHome() {
        setCart([])
        navigate("/");
    }
    const { isCart } = useContext(IsCardContext);
    const { cart, setCart } = useContext(CartContext);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const c = cart[i];
        let price = c.price;
        totalPrice += price;
    }
    const makePurchase = () => {
       document.getElementById('my_modal_5').showModal()
    }
    return (
        <div className='my-10'>
            {isCart ? <div className='flex justify-between items-center'>
                <h4 className='text-3xl font-bold'>Cart</h4>
                <div className='space-x-4 flex justify-between items-center'>
                    <h4 className='text-2xl font-bold'>
                        Total Cost: {totalPrice.toFixed(2)}
                    </h4>
                    <button onClick={() => setSorted(!sorted)} className="flex justify-between items-center border-2 border-purple-500 text-purple-600 font-semibold rounded-3xl px-4 py-2 text-sm">
                        Sort by Price
                        <GiSettingsKnobs className='ml-2 font-extrabold text-xl' />
                    </button>
                    <button
                        disabled={cart.length === 0}
                        onClick={makePurchase}
                        className="bg-purple-500 text-white rounded-3xl px-4 py-2 text-sm"
                    >
                        Purchase
                    </button>
                    
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box text-center space-y-1">
                            <img src={grp} className='mx-auto mb-4' />
                            <h3 className="font-bold text-2xl">Payment Successfully</h3>
                            <br />
                            <hr />
                            <p className="py-4 text-gray-500">Thanks for purchasing. <br /><br />
                            Total: {totalPrice.toFixed(2)}</p>
                            <div className="modal-action">
                                <form method="dialog" className='w-full'>
                                    <button onClick={naviGateToHome} className="btn w-full">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div> : <div ><h4 className='text-3xl font-bold'>WishList</h4>

            </div>

            }
        </div>
    )
}
