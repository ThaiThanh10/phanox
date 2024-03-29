import { message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MainContext } from "../context/MainContext"
import { useDispatch, useSelector } from "react-redux"
import { emptyCart } from "../reducers/shoppingReducer"
import { NavItem } from "../constants/NavItem"
import { MenuUnfoldOutlined } from "@ant-design/icons"
import ModalRegis from "./ModalRegis"
import Search from "antd/es/input/Search"
import { CiSearch } from "react-icons/ci"
import DrawerMobile from "./DrawerMobile"
import PopoverCart from "./PopoverCart"
import PopoverAccount from "./PopoverAccount"
const Header = () => {
    const { userInfo, handleSignOut } = useContext(MainContext)
    const [openCart, setOpenCart] = useState(false)
    const [openAccount, setOpenAccount] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector((state) => state.shopping.data)
    const [open, setOpen] = useState(false)

    const handleEmptyCart = () => {
        if (cart?.line_items.length) {
            message.loading("processing")
            dispatch(emptyCart())
        } else {
            message.info("You have no product in your cart ")
        }
    }
    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [width])

    return (
        <div className="relative">
            <DrawerMobile
                onClose={() => {
                    setOpen(false)
                }}
                open={open}
            />
            <header className="fixed top-0 left-0 z-[50] w-full bg-[#fff]">
                <div className="flex justify-between items-center  py-[10px] container  overflow-visible relative ">
                    <div className="flex justify-center items-center gap-x-5">
                        {width < 577 && (
                            <button
                                type="button"
                                className={` w-[40px] aspect-[1]  ${width < 577 ? "visible" : "hidden"
                                    }`}
                                onClick={() => {
                                    setOpen(true)
                                }}
                            >
                                <MenuUnfoldOutlined />
                            </button>
                        )}
                        <Link
                            className="text-[gray] text-[2em] "
                            to="/"
                        >
                            Phanox
                        </Link>
                    </div>

                    <ul className="flexCenter gap-x-7">
                        {width > 577 &&
                            NavItem.map((nav, i) => (
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

                    <div className="flex justify-center items-center gap-x-2">
                        <div>
                            <div
                                className={` flex  absolute bottom-[-20px] z-[100] right-[15px] duration-150 origin-top ease-in-out scale-y-0 ${active ? "scale-y-100" : ""
                                    }`}
                            >
                                <Search
                                    placeholder="Search"
                                    onSearch={(value) => navigate(`/productpage/search=${value}`)}
                                    style={{
                                        width: 230,
                                    }}
                                />
                            </div>

                            <button
                                className="grid place-items-center"
                                onClick={() => {
                                    setActive(!active)
                                }}
                            >
                                <CiSearch style={{ width: 25, height: 25 }} />
                            </button>
                        </div>
                        <PopoverAccount
                            userInfo={userInfo}
                            handleSignOut={handleSignOut}
                            handleOpenAccount={(newOpen) => {
                                setOpenAccount(newOpen)
                            }}
                            openAccount={openAccount}
                            setIsOpenModal={setIsOpenModal}
                        />

                        <PopoverCart
                            handleEmptyCart={handleEmptyCart}
                            handleOpenChange={(newOpen) => {
                                setOpenCart(newOpen)
                            }}
                            openCart={openCart}
                        />
                    </div>
                </div>
            </header>
            <ModalRegis
                open={isOpenModal}
                closeModal={() => {
                    setIsOpenModal(false)
                }}
            />
        </div>
    )
}

export default Header
