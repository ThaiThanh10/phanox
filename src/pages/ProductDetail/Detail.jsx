import React, { useContext } from "react"
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai"
import { stripHtml } from "string-strip-html"
import { MainContext } from "../../context/MainContext"
import { Guarantee } from "../HomePage"

const Detail = (props) => {
    const { handleAddCart, handleWishlist } = useContext(MainContext)

    const { productDetail, indexImg, setIndexImg, updateQty, qty } = props
    return (
        <div>
            <div className="flex justify-center gap-x-[70px] gap-y-5 xs:flex-col sm:flex-col md:flex-col text-[#324d67] mt-[60px] mb-[90px] mx-10 ">
                <div className=" max-w-[45%] gap-10 flex flex-row-reverse justify-center  xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] ">
                    <div className="image-container">
                        <img
                            src={productDetail.assets && productDetail.assets[indexImg].url}
                            className="bg-[#ebebeb] mx-auto w-[400px] cursor-pointer transition-all duration-300 rounded-[15px]"
                        />
                    </div>
                    <div className=" flex gap-2 flex-col  ">
                        {productDetail.assets?.map((item, i) => (
                            <img
                                key={i}
                                src={item.url}
                                className="bg-[#ebebeb]  w-[80px] aspect-[1] cursor-pointer rounded-[8px]"
                                onMouseEnter={() => setIndexImg(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-[55%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%]  ">
                    <h2 className="font-bold text-[2rem] xs:text-[1.5rem] text-[#324d67] ">
                        {productDetail?.name}
                    </h2>
                    <div className=" text-[#f02d34] flex mt-[10px] gap-[5px] items-center">
                        <div className="flex gap-[5px]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4 className="mt-[10px]">Details: </h4>
                    <p className="mt-[10px]">
                        {productDetail.description && stripHtml(productDetail.description)?.result}
                    </p>
                    <p className="font-bold text-[26px] text-[#f02d34] mt-[30px]">
                        {productDetail?.price?.formatted_with_symbol}
                    </p>
                    <div className="flex gap-5 cursor-pointer items-center mt-2.5">
                        <h3>Quantity:</h3>
                        <p className=" border p-1.5 border-solid border-[gray] flexCenter gap-x-[10px] ">
                            <button
                                onClick={() => {
                                    updateQty(qty - 1)
                                }}
                                className="minus"
                            >
                                <AiOutlineMinus />
                            </button>
                            <span className="num">{qty}</span>
                            <span
                                onClick={() => {
                                    updateQty(qty + 1)
                                }}
                                className="plus"
                            >
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-[30px]">
                        <button
                            onClick={() => handleAddCart(productDetail.id, qty)}
                            type="button"
                            className="border text-lg transition-all duration-200 origin-left font-medium bg-white text-[#f02d34] cursor-pointer w-[200px] ] ease-[ease] mt-10 px-5 py-2.5 border-solid border-[#f02d34] scale-100 hover:bg-red-500 hover:text-white"
                        >
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            onClick={() => handleWishlist(productDetail)}
                            className="border text-lg transition-all duration-200 origin-left font-medium bg-white text-[#f02d34] cursor-pointer w-[200px] ] ease-[ease] mt-10 px-5 py-2.5 border-solid border-[#f02d34] scale-100 hover:bg-red-500 hover:text-white"
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <Guarantee />
            <div className="my-[80px]">
                <h2 className="text-center font-semibold text-[#324d67] text-[30px] mb-[20px]">
                    Description
                </h2>
                <div>
                    <img
                        src="/images/product-detail.webp"
                        alt=""
                    />
                    <h1 className="font-bold text-[1.5rem] text-[#324d67] text-center mt-10 mb-5 ">
                        {productDetail?.name}
                    </h1>
                    <p className="text-center mb-10">
                        Get ready to experience a vibe of freshness with the all-new Airdopes 181
                        bluetooth earbuds. Make your point matter with a crisp mic powered by our
                        ENx™ technology that enables a crystal clear calling experience. Bring out
                        the gamer in you with its low latency BEAST™ Mode and show your friends who
                        is the boss. Go on a gaming bender or a binging marathon — its ergonomic fit
                        and 20 Hours of playback have got you covered. Enjoy music seamlessly with
                        the latest Bluetooth v5.2 and feel the thump of every beat with its powerful
                        10mm drivers.
                    </p>
                    <img
                        alt="boAt Airdopes 161 | Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water &amp; Sweat Resistance, IWP Technology, Type C Interface - boAt Lifestyle"
                        loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Activate-Voice-Assistant_1_8d50f2c4-19d0-431f-8e57-b08c5651885d.png?v=1617615123"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Detail
