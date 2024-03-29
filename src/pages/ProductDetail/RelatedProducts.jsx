import React, { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { Product } from "../../components"

const RelatedProducts = ({ productDetail }) => {
    const { handleAddCart } = useContext(MainContext)

    return (
        <div>
            <h2 className="text-center font-semibold text-[#324d67] text-[30px] my-[20px]">
                You may also like
            </h2>
            <div className="relative w-full ">
                <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[15px] mt-5 ">
                    {productDetail?.related_products?.map(
                        (product, i) =>
                            i < 5 && (
                                <Product
                                    onClick={() => handleAddCart(product.id, 1)}
                                    id={product.id}
                                    key={product.id}
                                    imgSrc={product.image.url}
                                    title={product.name}
                                    price={product.price.formatted_with_symbol}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts
