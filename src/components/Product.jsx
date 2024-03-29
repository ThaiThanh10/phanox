import React from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci"
const Product = (props) => {
    const { imgSrc, title, price, id, onClick, handleWishlist } = props
    return (
        <div>
            <div className="relative max-w-[250px] xs:w-[250px] xs:mx-auto sm:w-[225px] md:w-[230px] md:mx-auto lg:w-[240px] xl:w-[225px] overflow-hidden card cursor-pointer transition-transform border border-solid rounded-[15px] pb-2 border-[#ebebeb] duration-[0.3s] ease-[ease] text-[#324d67] scale-100 hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] hover:border-[#f5f5f5] ">
                <div className=" mx-auto w-[250px] sm:w-[225px] md:w-[230px] lg:w-[240px] xl:w-[225px] overflow-hidden rounded-[15px]">
                    <img
                        src={imgSrc}
                        className="bg-[#ebebeb]  transition-transform duration-[0.5s] ease-[ease] rounded-[15px] scale-100 w-[250px] aspect-1"
                    />
                </div>
                <div
                    onClick={handleWishlist}
                    className=" bg-red-500 heart absolute gap-x-1 h-[22px] rounded-full p-[2px]  flex flex-row-reverse justify-center items-center btn-wishlist transition-all duration-200 ease top-0 right-[15px] opacity-0 z-10   "
                >
                    <div className="rounded-full heart-icon  ">
                        <CiHeart color="white" />
                    </div>
                    <div className="text-[14px] text-box text-[#ffffff] scale-x-0 hidden transition-all duration-200 ease pl-1 ">
                        <p>Add to wishlist</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-3 mt-2  ">
                    <div>
                        <Link
                            to={`/product/${id}`}
                            className="font-medium line-clamp-1 "
                        >
                            {title}
                        </Link>
                        <p className="font-extrabold text-black mt-1.5">{price}</p>
                    </div>
                    <button
                        className="p-3 rounded-full hover:bg-[#f5f5f5]"
                        onClick={onClick}
                    >
                        <MdAddShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
