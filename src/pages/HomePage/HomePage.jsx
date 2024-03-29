import React, { useContext, useEffect, useState } from "react"
import { Blog, Product } from "../../components"
import { MainContext } from "../../context/MainContext"

import { Categories, HeroBanner, Deals, Guarantee } from "."
import commerce from "../../libs/commerce"
import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"

const flickityOptions = {
    initialIndex: 0,
    pageDots: true,
    wrapAround: true,
    groupCells:
        window.innerWidth <= 480
            ? 1
            : window.innerWidth <= 900 && window.innerWidth > 650
                ? 2
                : window.innerWidth <= 1280 && window.innerWidth > 950
                    ? 3
                    : 4,
    draggable: true,
    cellAlign: "left",
}
const Slider = ({ children }) => {
    return (
        <Flickity
            className={"carousel  "} // Tên class cho slider
            elementType={"div"} // Loại phần tử cho slider (div)
            options={flickityOptions} // Các tùy chọn Flickity
            disableImagesLoaded={false} // Vô hiệu hóa tính năng imagesLoaded
            reloadOnUpdate // Tải lại slider khi nội dung thay đổi
        >
            {children}
        </Flickity>
    )
}

const HomePage = () => {
    const { dataCate, handleAddCart, handleWishlist } = useContext(MainContext)
    const [dataProduct, setDataProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const listPro = await commerce.products.list()
            setDataProduct(listPro.data)
        }
        fetchProduct()
    }, [])
    return (
        <div className="container">
            <HeroBanner />
            <div className="mt-[60px] text-[#324d67]">
                <h2 className="text-[40px] font-extrabold text-center">Categories</h2>
                <Categories data={dataCate} />
            </div>
            <div className="text-center text-[#324d67] mx-0 my-[60px]">
                <h2 className="text-[40px] font-extrabold">Best Selling Products</h2>
            </div>
            <div className=" grid grid-cols-5 gap-[14px] w-full xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
                {dataProduct?.map((product, i) => {
                    return (
                        i < 10 && (
                            <Product
                                onClick={() => handleAddCart(product.id, 1)}
                                id={product.id}
                                key={product.id}
                                imgSrc={product.image.url}
                                title={product.name}
                                handleWishlist={() => handleWishlist(product)}
                                price={product.price.formatted_with_symbol}
                            />
                        )
                    )
                })}
            </div>
            <div className="container my-[60px] xs:my-[50px]">
                <hr className="mt-5 mb-0" />
            </div>
            <Guarantee />
            <Deals />
            <div className="mt-[60px] pb-[30px] text-[#324d67]">
                <h2 className="text-[40px] font-extrabold text-center mb-[30px] ">Blog</h2>
                <Slider>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((blog, i) => (
                        <Blog key={i} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HomePage
