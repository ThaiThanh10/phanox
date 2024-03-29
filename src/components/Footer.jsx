import React from "react"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
    return (
        <div>
            <hr className="my-[60px] mb-0" />
            <div className=" container py-[30px]  ">
                <div className="grid grid-cols-4 xs:grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-y-4 ">
                    <div className="px-[10px]  xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full ">
                        <div className="widget widget-about">
                            <p className="text-[gray] text-[2em] mb-3 xs:text-center sm:text-center mt-[-15px] ">Phanox</p>
                            <p className="max-w-[400px] xs:text-center sm:text-center sm:mx-auto ">
                                Welcome to the world of bass-boosted audio experience with our
                                top-rated Bluetooth headphones. Designed for music enthusiasts and
                                audiophiles, our wireless headphones combine cutting-edge
                                technology with an ergonomic design, delivering a symphony of sound
                                directly to your ears.
                            </p>
                        </div>
                    </div>
                    <div className="px-[10px] ml-[8.3%] xs:mx-auto sm:mx-auto md:max-w-full lg:max-w-full xl:max-w-full  xs:w-[200px] xs:text-center sm:text-center xs:max-w-full sm:max-w-full   ">
                        <div className="sm:mt-[20px] md:mt-[20px]">
                            <h4 className=" font-semibold xs:mb-2 text-lg mb-5 ">Useful Links</h4>
                            <ul>
                                <li className="mb-1">
                                    <a href="/about">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a
                                        className=""
                                        href="/product"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a
                                        className=""
                                        href="/fag"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a
                                        className=""
                                        href="/contact"
                                    >
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-[10px] ml-[8.3%] xs:mx-auto md:max-w-full lg:max-w-full xl:max-w-full  sm:mx-auto xs:w-[200px] xs:text-center sm:text-center xs:max-w-full sm:max-w-full    ">
                        <div>
                            <h4 className=" font-semibold xs:mb-2 text-lg mb-5 ">Customer Service</h4>
                            <ul>
                                <li className="mb-1">
                                    <a href="/payment">Payment Methods</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/return">Returns</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/shipping">Shipping</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-[10px] ml-[8.3%] xs:mx-auto md:max-w-full lg:max-w-full xl:max-w-full  sm:mx-auto xs:w-[200px] xs:text-center sm:text-center xs:max-w-full sm:max-w-full    ">
                        <div>
                            <h4 className=" font-semibold xs:mb-2 text-lg mb-5 ">My Account</h4>
                            <ul>
                                <li className="mb-1">
                                    <a href="/dashboard">Account Details</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/cart">View Cart</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/dashboard/wishlist">My Wishlist</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/dashboard/orders">Track My Order</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-1 border-solid border-[#324d67] mt-[32px] ">
                <div className="container text-[#324d67] text-center font-bold flex  justify-between gap-2.5 items-center px-2.5 py-[15px]">
                    <p>Phanox All Rights Reserverd</p>
                    <p className="text-3xl flex gap-2.5 ">
                        <AiFillInstagram />
                        <AiOutlineTwitter />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
