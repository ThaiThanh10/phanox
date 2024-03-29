import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/MainContext"
import { useNavigate, useParams } from "react-router-dom"
import commerce from "../../libs/commerce"
import Sidebar from "./Sidebar"
import ListProducts from "./ListProducts"

const Productpage = () => {
    const { dataCate, handleAddCart } = useContext(MainContext)
    const param = useParams()
    const navigate = useNavigate()
    const [dataProduct, setDataProduct] = useState([])
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const [page, setPage] = useState(1)
    const handleCate = async (id) => {
        setLoading(true)
        await commerce.products.list({ category_slug: [id] }).then((res) => {
            if (res.data) {
                setResults(res.data)
            } else {
                setResults([])
            }
            setLoading(false)
            setRefresh(true)
        })
    }

    const showAll = () => {
        if (param.id) {
            navigate("/productpage")
        }
        setRefresh(false)
        fetchProduct()
    }
    const fetchProduct = async () => {
        setLoading(true)
        await commerce.products.list({ limit: 9, page: 1 }).then((res) => {
            if (res.data) {
                setResults(res.data)
                setDataProduct(res.data)
                setLoading(false)
            }
        })
    }
    const handleSort = async (value) => {
        setLoading(true)
        await commerce.products
            .list({
                sortBy: "price",
                sortDirection: value,
                limit: 9,
                page: page,
            })
            .then((res) => {
                setLoading(false)
                setResults(res.data)
            })
    }
    const handlePage = async (value) => {
        setLoading(true)
        setPage(value)
        await commerce.products
            .list({
                limit: 9,
                page: value,
            })
            .then((res) => {
                setLoading(false)
                setResults(res.data)
            })
    }
    const handleSearch = async (value) => {
        await commerce.products
            .list({
                query: value,
            })
            .then((res) => {
                console.log("🚀res---->", res)
                if (res.data) {
                    setLoading(false)
                    setResults(res.data)
                } else {
                    setRefresh(true)
                    setLoading(false)
                    setResults([])
                }
            })
            .catch((err) => {
                setRefresh(true)
                setLoading(false)
                setResults([])
            })
    }
    useEffect(() => {
        if (param.id?.includes("search=")) {
            const value = param.id.split("=")[1]
            handleSearch(value)
        } else if (param.id) {
            handleCate(param.id)
        } else {
            fetchProduct()
        }
        setRefresh(false)
    }, [param.id])

    return (
        <div className="container">
            <h2 className="text-[40px] text-[#324d67] font-extrabold text-center mb-[40px]">
                Product
            </h2>
            <div className="flex max-w-[1200px] mx-auto xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:gap-y-[20px] sm:gap-y-[20px] md:gap-y-[20px] lg:gap-y-[20px] ">
                <Sidebar
                    dataCate={dataCate}
                    showAll={showAll}
                    handleCate={handleCate}
                />
                <ListProducts
                    handleSort={handleSort}
                    loading={loading}
                    results={results}
                    refresh={refresh}
                    handlePage={handlePage}
                    handleAddCart={handleAddCart}
                />
            </div>
        </div>
    )
}

export default Productpage
