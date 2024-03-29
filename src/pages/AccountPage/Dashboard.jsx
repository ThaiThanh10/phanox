import { DatePicker, Input, Select, Space, message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/MainContext"
import axios from "axios"
import dayjs from "dayjs"
const baseUrl = "https://cfdshop.cfdcircle.vn/api/v1/"

const Dashboard = () => {
    const { userInfo, setUserData, userData, updateData } = useContext(MainContext)
    const [images, setImages] = useState("")
    const [country, setCountry] = useState({
        cities: [],
        districts: [],
        wards: [],
    })
    const onChangeDate = (date) => {
        const day = date.format("DD")
        const month = date.format("MM")
        const year = date.format("YYYY")
        setUserData({ ...userData, birthDate: `${day}/${month}/${year}` })

    }
    const handleSelectCountries = (value, option) => {
        setUserData({ ...userData, provinces: option.label })
        const getDistricts = async () => {
            const districts = await axios.get(`${baseUrl}districts?province=${option.value} `)
            if (districts.data) {
                setCountry({ ...country, districts: districts.data.data.districts })
            }
        }
        getDistricts()
    }
    const handleSelectDistrict = (value, option) => {
        setUserData({ ...userData, district: option.label })
        const getWards = async () => {
            const wards = await axios.get(`${baseUrl}wards?district=${option.value} `)
            if (wards.data) {
                setCountry({ ...country, wards: wards.data.data.wards })
            }
        }
        getWards()
    }
    const handleSelectWard = (value, option) => {
        setUserData({ ...userData, ward: option.label })
    }
    const inputChange = (ev) => {
        const file = ev.target.files
        const blob = new Blob(file)
        const img = URL.createObjectURL(blob)
        console.log("🚀img---->", img)
        setUserData({ ...userData, img: img })
        setImages(img)
    }
    const handleChange = (ev) => {
        setUserData({ ...userData, [ev.target.name]: ev.target.value })
    }
    const saveInfo = () => {
        updateData(userData, userInfo.uid)
        message.success("Save your information successfully")
    }
    useEffect(() => {
        const getDataCountries = async (url) => {
            const countries = await axios.get(url + "provinces")
            if (countries.data) {
                setCountry({ ...country, cities: countries.data.data.provinces })
            }
        }
        getDataCountries(baseUrl)
    }, [])

    return (
        <div className="p-4  ">
            {" "}
            <div className="test">
                <div className=" flex flex-col justify-center items-center gap-3 overflow-hidden">
                    <img
                        src={images}
                        alt=""
                        className="object-cover w-[200px] h-[200px] bg-gray-300 rounded-full"
                    />
                    <label
                        className="px-3 py-2 my-3 border-[1px] border-solid border-[#d7d7d7] hover:bg-[#f5f5f5]  "
                        htmlFor="file"
                    >
                        Choose a file{" "}
                    </label>
                    <input
                        className="mx-auto hidden"
                        id="file"
                        type="file"
                        onChange={inputChange}
                    />
                </div>
            </div>
            <div className="flex gap-x-5 gap-y-2 mb-2 xs:flex-col sm:flex-col ">
                <div className="w-[45%] xs:w-full ">
                    <p className="mb-1">Full Name</p>
                    <Input
                        onChange={handleChange}
                        name="name"
                        defaultValue={userData.name}
                        value={userData.name}
                    />
                </div>
                <div className="w-[45%] xs:w-full  ">
                    <p className="mb-1">Email</p>
                    <Input
                        onChange={handleChange}
                        name="email"
                        defaultValue={userData.email}
                        value={userData.email}
                    />
                </div>
            </div>
            <div className="flex gap-x-5  gap-y-2 mb-2 xs:flex-col ">
                <div className="w-[45%] xs:w-full  ">
                    <p className="mb-1">Phone Number</p>
                    <Input
                        onChange={handleChange}
                        name="phone"
                        defaultValue={userData.phone}
                        value={userData.phone}
                    />
                </div>
                <div className="w-[45%] xs:w-full ">
                    <p className="mb-1">Date of birth</p>
                    <DatePicker
                        defaultValue={dayjs(userData?.birthDate, "DD-MM-YYYY")}
                        value={dayjs(userData?.birthDate, "DD-MM-YYYY")}
                        format={"DD/MM/YYYY"}
                        style={{
                            width: "100%",
                            display: "block",
                        }}
                        size="large"
                        onChange={onChangeDate}
                    />
                </div>
            </div>
            <div>
                <Space
                    style={{ columnGap: "16px" }}
                    wrap
                >
                    <div>
                        <p className="mb-1">Province/City</p>
                        <Select
                            defaultValue={
                                userData?.provinces ? userData.provinces : "Choose Provinces/City"
                            }
                            value={userData.provinces}
                            className="xs:w-full sm:w-full md:w-full"
                            style={{
                                width: 180,
                            }}
                            onChange={(value, option) => handleSelectCountries(value, option)}
                            options={country.cities?.map((item) => {
                                return {
                                    value: item.id,
                                    label: item.name,
                                }
                            })}
                        />
                    </div>
                    <div>
                        <p className="mb-1">District/Town</p>
                        <Select
                            defaultValue={
                                userData?.district ? userData.district : "Choose District/Town"
                            }
                            value={userData.district}

                            className="xs:w-full sm:w-full md:w-full"
                            style={{
                                width: 180,
                            }}
                            onChange={(value, option) => handleSelectDistrict(value, option)}
                            options={country.districts?.map((item) => {
                                return {
                                    value: item.id,
                                    label: item.name,
                                }
                            })}
                        />
                    </div>

                    <div>
                        <p className="mb-1">Ward</p>
                        <Select
                            defaultValue={userData?.ward ? userData.ward : "Choose Ward"}
                            value={userData.ward}

                            className="xs:w-full sm:w-full md:w-full"
                            style={{
                                width: 180,
                            }}
                            onChange={(value, option) => handleSelectWard(value, option)}
                            options={country.wards?.map((item) => {
                                return {
                                    value: item.id,
                                    label: item.name,
                                }
                            })}
                        />
                    </div>
                </Space>
            </div>
            <div className="grid place-items-center">
                <button
                    onClick={saveInfo}
                    className="bg-[#f02d34] w-[180px] mx-auto text-white text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.01] rounded-[15px] border-[none]"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Dashboard
