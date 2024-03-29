import { Modal, message } from "antd"
import React, { useContext, useEffect, useState } from "react"
import InputField from "./InputField"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { MainContext } from "../context/MainContext"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"
const ModalRegis = ({ open, closeModal }) => {
    const { setUserInfo, updateData, setUserData } = useContext(MainContext)
    const [signInTab, setSignInTab] = useState(true)
    const schema = yup
        .object({
            email: yup.string().email().required("Please enter a valid email"),
            password: yup.string().min(8).required("Please enter password"),
        })
        .required()
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    })

    const handleCancel = () => {
        closeModal()
    }
    const handleSignIn = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user
                setUserInfo(user)
                closeModal()
                message.success("Login successfully, Welcome back")
            })
            .catch((error) => {
                if (error) {
                    message.error("Wrong Username or Password, Please Try Again")
                }
            })
    }
    const handleSignUp = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user
                setUserInfo(user)
                const postData = {
                    name: "",
                    email: user.email,
                    phone: "",
                    birthDate: "",
                    orders: [],
                    wishlist: [],
                    provinces: "",
                    district: "",
                    ward: "",
                    img: "",
                }
                setUserData(postData)
                updateData(postData, user.uid)
            })
            .catch((error) => {
                console.log("🚀error---->", error)
            })
        closeModal()
        message.success("Log in successfully, Welcome")
    }

    return (
        <div>
            {" "}
            <Modal
                footer={null}
                open={open}
                onCancel={handleCancel}
            >
                <div className="flex text-center  items-center my-5 ">
                    <h2
                        className={`text-[1.5rem]  text-[#324d67] w-1/2 pb-[5px] border-b border-solid border-[#f5f5f5] hover:border-0 hover:font-semibold hover-underline-animation ${signInTab && "active"
                            }`}
                        onClick={() => {
                            form.reset()
                            setSignInTab(true)
                        }}
                    >
                        Sign In
                    </h2>
                    <h2
                        className={`text-[1.5rem] text-[#324d67]  w-1/2 pb-[5px] border-b border-solid border-[#f5f5f5] hover:border-0 hover:font-semibold hover-underline-animation ${!signInTab && "active"
                            }`}
                        onClick={() => {
                            form.reset()
                            setSignInTab(false)
                        }}
                    >
                        Sign Up
                    </h2>
                </div>
                <div>
                    {signInTab ? (
                        <div>
                            <InputField
                                form={form}
                                name="email"
                                label="Email"
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                            <InputField
                                password="password"
                                form={form}
                                name="password"
                                label="Password"
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                            <button
                                onClick={form.handleSubmit((values) => handleSignIn(values))}
                                className="border border-solid  border-[#ebebeb] text-[#324d67] px-7 py-2 h hover:bg-[#f02d34]  hover:text-white text-[20px] font-medium cursor-pointer rounded-[15px]  "
                            >
                                SIGN IN
                            </button>
                            <p className="text-[16px] mt-3  ">
                                You don't have account yet?{" "}
                                <b
                                    className="text-[#324d67] cursor-pointer "
                                    onClick={() => {
                                        form.reset()

                                        setSignInTab(false)
                                    }}
                                >
                                    Sign Up
                                </b>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <InputField
                                form={form}
                                name="email"
                                label="Email"
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                            <InputField
                                password="password"
                                form={form}
                                name="password"
                                label="Password"
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                            <button
                                onClick={form.handleSubmit((values) => handleSignUp(values))}
                                className="border border-solid text-[#324d67] border-[#ebebeb] px-7 py-2 h hover:bg-[#f02d34]  hover:text-white text-[20px] font-medium cursor-pointer rounded-[15px]  "
                            >
                                SIGN UP
                            </button>
                            <p className="text-[16px] mt-3 cursor-pointer">
                                Already have account?{" "}
                                <b
                                    className="text-[#324d67]"
                                    onClick={() => {
                                        form.reset()

                                        setSignInTab(true)
                                    }}
                                >
                                    Sign In
                                </b>
                            </p>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    )
}

export default ModalRegis
