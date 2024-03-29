import { Badge, Popover } from "antd"
import React, { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const PopoverCart = (props) => {
    const cart = useSelector((state) => state.shopping.data)
    const { handleUpdateQty, handleRemove } = useContext(MainContext)
    const { handleEmptyCart, handleOpenChange, openCart } = props
    const navigate = useNavigate()

    return (
        <Popover
            arrow={false}
            placement="bottomRight"
            content={
                <div className="w-[300px] sm:w-[260px] mobile:w-[300px] ">
                    {cart?.line_items.length ? (
                        cart?.line_items?.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-between items-center border-b-[1px] border-solid border-[#cccccc] pb-3.5  mb-3.5"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        className="w-[80px]"
                                        src={product?.image?.url}
                                        alt=""
                                    />
                                    <div>
                                        <h3 className="text-[16px]">{product.name}</h3>
                                        <div className="flex gap-5  items-center mt-2.5">
                                            <p className=" border p-[2px_4px] border-solid border-[gray] flexCenter gap-x-[10px] ">
                                                <span
                                                    onClick={() => {
                                                        handleUpdateQty(
                                                            product.id,
                                                            product.quantity - 1
                                                        )
                                                    }}
                                                    className="cursor-pointer hover:bg-[#f5f5f5]"
                                                >
                                                    <AiOutlineMinus />
                                                </span>
                                                <span>{product?.quantity}</span>
                                                <span
                                                    onClick={() => {
                                                        handleUpdateQty(
                                                            product.id,
                                                            product.quantity + 1
                                                        )
                                                    }}
                                                    className=" cursor-pointer hover:bg-[#f5f5f5]"
                                                >
                                                    <AiOutlinePlus />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[14px]">
                                        {product?.line_total?.formatted_with_symbol}
                                    </h3>
                                    <p
                                        className="cursor-pointer"
                                        onClick={() => {
                                            handleRemove(product.id)
                                        }}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            height="25px"
                                            width="25px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="Circle_Remove">
                                                <g>
                                                    <path d="M9.525,13.765a.5.5,0,0,0,.71.71c.59-.59,1.175-1.18,1.765-1.76l1.765,1.76a.5.5,0,0,0,.71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825,1.23-1.235.18-.18.35-.36.53-.53a.5.5,0,0,0-.71-.71L12,11.293,10.235,9.525a.5.5,0,0,0-.71.71L11.293,12Z"></path>
                                                    <path d="M12,21.933A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.067Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-[16px] text-center text-[#161619]  py-[10px] ">
                            You have no product in your cart{" "}
                        </h1>
                    )}
                    <div>
                        {cart?.line_items.length ? (
                            <div className="flex justify-around items-center py-2">
                                <button
                                    className="border border-[#000] rounded-full px-[13px] py-[5px] hover:bg-[#000] hover:text-[#fff] "
                                    onClick={handleEmptyCart}
                                >
                                    Empty Cart
                                </button>
                                <button
                                    onClick={() => navigate("/cart")}
                                    className="border border-[#000] rounded-full px-[13px] py-[5px] hover:bg-[#000] hover:text-[#fff] "
                                >
                                    Xem Gio Hang
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            }
            title={
                <div>
                    {" "}
                    <div className="flex justify-between items-center px-3 mb-[15px] border-b-[1px] pb-3 border-b-[#cccccc] border-solid ">
                        <h1 className="text-[16px] text-[#161619] font-semibold "> Total:</h1>
                        <span>{cart?.subtotal?.formatted_with_symbol}</span>{" "}
                    </div>
                </div>
            }
            trigger="click"
            open={openCart}
            onOpenChange={handleOpenChange}
        >
            <button
                type="button"
                className="text-[25px]  flexCenter  cursor-pointer  bg-transparent "
            >
                <AiOutlineShopping />
                <Badge
                    count={cart?.total_items}
                    showZero
                    color="red"
                    size="small"
                />
            </button>
        </Popover>
    )
}

export default PopoverCart
