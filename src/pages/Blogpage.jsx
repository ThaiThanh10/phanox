import React from "react"
import { Blog } from "../components"

const Blogpage = () => {
    return (
        <div className="container">
            <h2 className="text-[40px] text-[#324d67] font-extrabold text-center">Blog</h2>
            <ul className="flex justify-center items-center mt-[30px] gap-x-8 text-[18px]  ">
                <li className="opacity-70 font-medium hover:opacity-100 cursor-pointer" >Tất cả</li>
                <li className="opacity-70 font-medium hover:opacity-100 cursor-pointer" >Tin Tức</li>
                <li className="opacity-70 font-medium hover:opacity-100 cursor-pointer" >Xu Hướng</li>
                <li className="opacity-70 font-medium hover:opacity-100 cursor-pointer" >Mới Nhất</li>
            </ul>
            <div className="mt-[60px] ">
                <div className="grid grid-cols-4 gap-7 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:gap-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-5 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog) => (
                        <Blog />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogpage
