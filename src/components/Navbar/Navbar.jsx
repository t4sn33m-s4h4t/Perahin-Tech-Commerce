
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
export default function Navbar({ transBg }) {
  const NavLinks = <>
    <li><NavLink className={({ isActive }) => (isActive && transBg ? 'bg-white text-black' : '')} to="/">Home</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </>
  return (
    <div className={`lg:px-28 ${transBg && "text-white"}`}>
      <div className={`navbar ${transBg ? "bg-transparent" : "bg-base-200"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn px-1 md:px-3 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {NavLinks}
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-lg lg:text-xl font-bold px-1 md:px-3" to="/">Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end md:space-x-4 space-x-2">
          <button className={`p-2 md:p-3 border-2 bg-white border-base-300 rounded-full text-lg ${transBg ? "text-black" : ""}`}>
            <AiOutlineShoppingCart />
          </button>
          <button className={`p-2 md:p-3 border-2 bg-white border-base-300 rounded-full text-lg ${transBg ? "text-black" : ""}`}>
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  )
}
