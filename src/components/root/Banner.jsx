import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Banner({title}) {
  const [isCart, setIsCart] = useState(true);
  const navigate = useNavigate();
  function handleCartActive(e) {
    if (title=="Home") {
      navigate('/dashboard')
    }
    if (!e.target.classList.contains("activeBtn")) {
      setIsCart(!isCart)
    }
  }
  const homeHeading = "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
  function button(text, toggler) {
    return (
      <div>
        <button
            onClick={(e)=>handleCartActive(e)}
            className={`font-bold block w-full rounded-3xl border border-white px-12 py-3 text-sm } focus:outline-none  sm:w-auto hover:bg-white hover:text-[#9538E2] transition ${toggler && "activeBtn"}`}
            href="#"
          >
            {text}
          </button>
      </div>
    )
  }
  return (
    <div>
      <section className="bg-[#9538E2] text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex  lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-white text-2xl font-extrabold md:text-4xl"
      >
        {title=="Home" ? homeHeading : title}
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-md ">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      {
      title=="Home" ? 
      button('Shop Now', isCart) 
      : 
      <>
      {button('Cart', isCart)}
      {button('Wishlist', !isCart)}
      </>
      }
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
