import React from "react"
import { Drawer } from "antd"
import { NavItem } from "../constants/NavItem"
import { Link } from "react-router-dom"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebook, FaTwitter } from "react-icons/fa";
const DrawerMobile = (props) => {
    const { onClose, open } = props
    return (
        <Drawer
            title="Menu"
            placement={"left"}
            onClose={onClose}
            open={open}
        >
            <ul className=" flex flex-col justify-center items-center gap-y-5 ">
                {NavItem.map((nav, i) => (
                    <li
                        key={i}
                        className=" transition-all ease-in-out duration-200 "
                    >
                        {" "}
                        <Link
                            className="opacity-70 font-medium hover:opacity-100 hover-underline-animation  "
                            to={nav.link}
                        >
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center text-2xl gap-x-5 mt-5">
                <FaFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
            </div>
        </Drawer>
    )
}

export default DrawerMobile
