import React, { useContext, useEffect, useState } from "react"
import { Controller, set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { InputField } from "../../components"
import {
    Form,
    Modal,
    Radio,
    Result,
    Select,
    Space,
    Spin,
    DatePicker,
    Input,
    InputNumber,
} from "antd"
import TextArea from "antd/es/input/TextArea"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../../context/MainContext"
import commerce from "../../libs/commerce"
import { refreshCart } from "../../reducers/shoppingReducer"
import { useDispatch } from "react-redux"
import axios from "axios"
import dayjs from "dayjs"
import { ErrorMessage } from "@hookform/error-message"
import ResultModal from "./ResultModal"
import FormCheckout from "./FormCheckout"
const phoneRegExp = /(0[3|5|7|8|9])+([0-9]{8})\b/g
const baseUrl = "https://cfdshop.cfdcircle.vn/api/v1/"
const CheckoutPage = () => {
    const { getCheckoutToken, userData, updateData, userInfo, getUserData } =
        useContext(MainContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { checkoutToken } = useContext(MainContext)
    const [country, setCountry] = useState({
        cities: [],
        districts: [],
        wards: [],
    })
    const [shippingAddress, setShippingAddress] = useState({
        city: "",
        district: "",
        ward: "",
    })
    const [visaInfo, setVisaInfo] = useState({
        owner: "",
        visaNumber: "",
        expiryDate: "",
        expiryMonth: "",
        cvc: "",
    })
    const [order, setOrder] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const schema = yup
        .object({
            name: yup.string().required("Please enter your name"),
            email: yup.string().email().required("Please enter a valid email"),
            phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
            shippingAddress: yup.string().required("Please enter shipping address "),
            cardOwner: yup.string().required("Please enter this field "),
            visaNumber: yup.string().test({
                name: "visaNumber",
                test(value, ctx) {
                    if (!value.length) {
                        return ctx.createError({ message: "Please enter card number " })
                    }
                    if (value.length != 16) {
                        return ctx.createError({ message: "Wrong Visa Number" })
                    }
                    return true
                },
            }),
            expiryMonth: yup.string().test({
                name: "expiryMonth",
                test(value, ctx) {
                    if (!value.length) {
                        return ctx.createError({ message: "Please enter expiry month " })
                    }
                    if (!/^\d+$/.test(value)) {
                        return ctx.createError({ message: "Must be a number" })
                    }
                    if (
                        !(value.length === 2 && parseInt(value, 10) > 0 && parseInt(value, 10) < 13)
                    ) {
                        return ctx.createError({ message: "Wrong expiry date" })
                    }
                    return true
                },
            }),
            expiryYear: yup.string().test({
                name: "expiryMonth",
                test(value, ctx) {
                    if (!value.length) {
                        return ctx.createError({ message: "Please enter expiry year " })
                    }
                    if (!/^\d+$/.test(value)) {
                        return ctx.createError({ message: "Must be a number" })
                    }
                    if (
                        !(
                            value.length === 2 &&
                            parseInt(value, 10) > 23 &&
                            parseInt(value, 10) < 30
                        )
                    ) {
                        return ctx.createError({ message: "Wrong expiry date" })
                    }
                    return true
                },
            }),
            cvc: yup.string().test({
                name: "expiryMonth",
                test(value, ctx) {
                    if (!value.length) {
                        return ctx.createError({ message: "Please enter expiry year " })
                    }
                    if (!/^\d+$/.test(value)) {
                        return ctx.createError({ message: "Must be a number" })
                    }
                    return true
                },
            }),
        })
        .required()

    const form = useForm({
        defaultValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            note: "",
            cardOwner: "",
            visaNumber: "4242424242424242",
            expiryMonth: "12",
            expiryYear: "24",
            cvc: "123",
        },
        resolver: yupResolver(schema),
    })
    const handleSelectCountries = (value, option) => {
        setShippingAddress({ ...shippingAddress, city: option.label })
        console.log("🚀value---->", option)
        const getDistricts = async () => {
            const districts = await axios.get(`${baseUrl}districts?province=${option.value} `)
            console.log("🚀districts.data---->", districts.data)
            if (districts.data) {
                setCountry({ ...country, districts: districts.data.data.districts })
            }
        }
        getDistricts()
    }
    const handleSelectDistrict = (value, option) => {
        setShippingAddress({ ...shippingAddress, district: option.label })
        console.log("🚀value---->", option)
        const getWards = async () => {
            const wards = await axios.get(`${baseUrl}wards?district=${option.value} `)
            console.log("🚀wards.data---->", wards.data)
            if (wards.data) {
                setCountry({ ...country, wards: wards.data.data.wards })
            }
        }
        getWards()
    }
    const handleSelectWard = (value, option) => {
        setShippingAddress({ ...shippingAddress, ward: option.label })
        console.log("🚀option---->", value)
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            await commerce.checkout.capture(checkoutTokenId, newOrder).then((incomingOrder) => {
                console.log("🚀incomingOrder---->", incomingOrder)
                setOrder(incomingOrder)
                if (userData.orders) {
                    const newList = userData.orders
                    console.log("🚀newList---->", newList)
                    newList.push(incomingOrder)
                    updateData({ ...userData, orders: newList }, userInfo.uid)
                    dispatch(refreshCart())
                } else {
                    const orders = []
                    orders.push(incomingOrder)
                    console.log("🚀orders---->", orders)
                    updateData({ ...userData, orders: orders }, userInfo.uid)
                    dispatch(refreshCart())
                }
            })
        } catch (error) {
            console.log("🚀error---->", error)
        }
    }
    const handleCheckout = (values) => {
        console.log("🚀values---->", values)

        if (!Object.keys(values).length) return
        const orderData = {
            line_items: checkoutToken.line_items,
            customer: {
                firstname: values.name,
                lastname: values.name,
                email: values.email,
                phone: values.phone,
            },
            shipping: {
                name: values.name,
                street: values.shippingAddress,
                town_city: shippingAddress.city + shippingAddress.district + shippingAddress.ward,
            },
            extra_fields: {
                extr_RqEv5xpjq5Zz4j: values.note,
            },

            payment: {
                gateway: "test_gateway",
                card: {
                    token: "gway_joPZk8OkA1k8le",
                    number: "4242424242424242",
                    expiry_month: "12",
                    expiry_year: "24",
                    cvc: "123",
                    postal_zip_code: "94107",
                },
            },
        }
        handleCaptureCheckout(checkoutToken.id, orderData)
        showModal()
    }

    const getDataCountries = async (url) => {
        const countries = await axios.get(url + "provinces")
        console.log("🚀countries---->", countries)
        if (countries.data) {
            setCountry({ ...country, cities: countries.data.data.provinces })
        }
    }
    const viewOrder = async () => {
        await getUserData(userInfo.uid).then(() => navigate("/account/orders"))
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        navigate("/productpage")
    }
    useEffect(() => {
        getCheckoutToken()
        getDataCountries(baseUrl)
    }, [])
    return (
        <div className="container">
            <ResultModal
                order={order}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                viewOrder={viewOrder}
            />
            <h2 className="text-[40px] text-[#324d67] font-extrabold text-center">Checkout</h2>
            <FormCheckout
                form={form}
                country={country}
                handleSelectCountries={handleSelectCountries}
                handleSelectDistrict={handleSelectDistrict}
                handleSelectWard={handleSelectWard}
                checkoutToken={checkoutToken}
                handleCheckout={handleCheckout}
            />
        </div>
    )
}

export default CheckoutPage
