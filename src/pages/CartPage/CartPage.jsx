import { Radio, Space } from "antd"
import React, { useContext, useEffect } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../../context/MainContext"
const CartPage = () => {
    const { getCheckoutToken, handleRemove } = useContext(MainContext)
    const cart = useSelector((state) => state.shopping.data)
    const navigate = useNavigate()

    return (
        <div className="container">
            <h2 className="text-[40px] text-[#324d67] font-extrabold text-center">Shopping Cart</h2>
            <div className="flex justify-between mt-[60px] xs:mt-[40px] xs:flex-col sm:flex-col md:flex-col ">
                <div className=" max-w-[65%] w-full xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[68%]  ">
                    {cart?.line_items?.map((product) => (
                        <div
                            key={product.id}
                            className=" flex justify-between items-center  text-[#324d67] border-[0.1rem] border-dashed p-3 border-[#d7d7d7] mb-3.5 "
                        >
                            <div className="flex justify-between items-center flex-[0_0_65%] max-w-[65%]  ">
                                <img
                                    src={product?.image?.url}
                                    className=" rounded-[20px] w-[200px] aspect-1 xs:w-[90px] sm:w-[140px] lg:w-[180px] "
                                />
                                <div className="flex-[0_0_50%] max-w-[50%] ">
                                    <p className="font-medium text-lg xs:text-[14px]  ">
                                        {product.name}
                                    </p>
                                    <div className="max-w-[38%] xs:max-w-full sm:max-w-[70%]  ">
                                        <p className=" border p-1.5 md:text-[15px] lg:text-[15px] lg:gap-x-[10px] xs:p-1 border-solid border-[gray] mt-[10px] flexCenter gap-x-[12px] ">
                                            <span className="minus ">
                                                <AiOutlineMinus />
                                            </span>
                                            <span className="num xs:text-[14px] sm:text-[16px] ">
                                                {product?.quantity}
                                            </span>
                                            <span className="plus">
                                                <AiOutlinePlus />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-[0_0_13%] max-w-[13%] flexCenter flex-col gap-y-4  ">
                                <p className="font-semibold  text-lg xs:text-[14px] ">Total</p>
                                <p className="text-lg font-semibold xs:text-[14px] ">
                                    {product?.line_total?.formatted_with_symbol}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    handleRemove(product.id)
                                }}
                                className="flex-[0_0_13%] max-w-[13%] flexCenter flex-col gap-y-4  "
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="30px"
                                    width="30px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Circle_Remove">
                                        <g>
                                            <path d="M9.525,13.765a.5.5,0,0,0,.71.71c.59-.59,1.175-1.18,1.765-1.76l1.765,1.76a.5.5,0,0,0,.71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825,1.23-1.235.18-.18.35-.36.53-.53a.5.5,0,0,0-.71-.71L12,11.293,10.235,9.525a.5.5,0,0,0-.71.71L11.293,12Z"></path>
                                            <path d="M12,21.933A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.067Z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                <div className=" md:max-w-full xs:max-w-full sm:max-w-full max-w-[30%] bg-[#f9f9f9] mb-8 pt-10 pb-12 px-12 rounded-[0.3rem] border-[0.1rem] border-dashed border-[#d7d7d7]">
                    <h3 className="font-medium text-center text-[1.4rem] tracking-[0] mb-[2.1rem] pb-[1.7rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                        Cart Total
                    </h3>
                    <div className="flex justify-between items-center  mb-[2rem] pb-[1.7rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                        <h3>Subtotal:</h3>
                        <p>{cart?.subtotal?.formatted_with_symbol}</p>
                    </div>
                    <div className=" pb-[1.7rem] mb-[2rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                        <h3 className="mb-[10px]">Shipping Method</h3>
                        <Radio.Group value={1}>
                            <Space direction="vertical">
                                <Radio value={1}>Free Shipping</Radio>
                                <Radio
                                    disabled
                                    value={2}
                                >
                                    Standard: $15
                                </Radio>
                                <Radio
                                    disabled
                                    value={3}
                                >
                                    Express: $25
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </div>{" "}
                    <div className="flex justify-between items-center   pb-[1.7rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                        <h3>Total:</h3>
                        <p>{cart?.subtotal?.formatted_with_symbol}</p>
                    </div>
                    <div>
                        <button
                            className="bg-[#f02d34] w-full text-white text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                            onClick={() => {
                                getCheckoutToken()
                                navigate("/checkout")
                            }}
                        >
                            Checkout
                        </button>
                        <button
                            className="bg-[#fff] w-full text-[#000] text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                            type="button"
                            onClick={() => {
                                navigate("/productpage")
                            }}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
