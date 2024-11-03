import { Link, NavLink } from "react-router-dom";
import Menus from "./Menus";

export default function Footer() {
    const services = ["Services", ["Product Support", "Order Tracking", "Shipping & Delivery", "Returns",]]
    const company = ["Company", ["About Us", "Careers", "Contact",]]
    const legal = ["Legal", ["Terms of Service", "Privacy Policy", "Cookie Policy",]]
    const allMenus = [services, company, legal]
    return (
        <footer className="text-base-content p-10 px-28 bg-white text-center pb-20 mt-28">
            <div >
                <p className="text-gray-500">
                    <NavLink className=" btn btn-ghost text-3xl font-bold text-black mt-12 mb-6" to="/">Gadget Heaven</NavLink>
                    <br />
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>
            <hr className="border-y border-gray-200 my-8" />
            <div className="max-w-3xl mx-auto">
            <div className="footer items-start place-items-center ">
                {
                    allMenus.map((menuList, i) => {
                        return (
                            <nav key={i} className="place-items-center">
                                <h6 className="footer-title opacity-100">{menuList[0]}</h6>
                                <Menus menus={menuList[1]} />
                            </nav>
                        )
                    })
                }
            </div>
            </div>
        </footer>
    );
}
