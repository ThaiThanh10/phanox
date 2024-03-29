import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import commerce from "../../libs/commerce"
import RelatedProducts from "./RelatedProducts"
import Detail from "./Detail"

const ProductDetailpage = () => {
    let { id } = useParams()
    const [qty, setQty] = useState(1)
    const [productDetail, setProductDetail] = useState({})
    const [indexImg, setIndexImg] = useState(0)

    const updateQty = (qty) => {
        if (qty >= 1) {
            setQty(qty)
        }
    }
    useEffect(() => {
        const fetchPro = async () => {
            const productDetail = await commerce.products.retrieve(id)
            setProductDetail(productDetail)
        }
        fetchPro()
    }, [])
    return (
        <div className="container">
            <Detail qty={qty} productDetail={productDetail} indexImg={indexImg} setIndexImg={setIndexImg} updateQty={updateQty} />
            <RelatedProducts productDetail={productDetail} />

        </div>
    )
}

export default ProductDetailpage
