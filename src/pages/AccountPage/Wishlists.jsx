import React, { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { Product } from "../../components"

const Wishlists = () => {
    const { userData, handleWishlist } = useContext(MainContext)
    return (
        <div className="p-4">
            <h2 className="text-[32px] text-[#324d67] font-bold text-left mb-[20px]">
                My list ordered
            </h2>
            <div className="flex flex-wrap justify-stretch gap-[14px] w-full ">
                {userData?.wishlists?.map((product) => {
                    return (
                        <Product
                            onClick={() => handleAddCart(product.id, 1)}
                            id={product.id}
                            key={product.id}
                            imgSrc={product.image.url}
                            title={product.name}
                            handleWishlist={() => handleWishlist(product)}
                            isLike={product.isLike}
                            price={product.price.formatted_with_symbol}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlists
