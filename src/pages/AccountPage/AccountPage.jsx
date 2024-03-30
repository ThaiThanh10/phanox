import React from "react"
import { Link, Outlet } from "react-router-dom"

const AccountPage = () => {
    const data = [
        {
            name: "Account Details",
            link: "/account/dashboard",
        },
        {
            name: "Orders",
            link: "/account/orders",
        },
        {
            name: "Wishlists",
            link: "/account/wishlists",
        },
        {
            name: "Sign Out",
            link: "/account/dashboard",
        },
    ]
    return (
        <div className="container  ">
            {" "}
            <h2 className="text-[40px] text-[#324d67] font-extrabold text-center mb-[40px]">
                My Account
            </h2>
            <div className="flex xs:flex-col ">
                <div className="w-[22%] xs:w-full xs:flex xs:justify-between xs:items-start xs:border-r-0 border-r-[1px] border-solid border-[#d7d7d7] ">
                    {data.map((item, i) => (
                        <Link
                            to={item.link}
                            key={i}
                            className="py-[7px] px-3 my-2 cursor-pointer xs:w-[25%] block hover:bg-[#f7f7f7]"
                        >
                            <p className="text  transition-all duration-[0.2s] ease-[ease] ">
                                {item.name}{" "}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="w-full max-w-[75%] xs:max-w-full ">
                    {" "}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AccountPage
