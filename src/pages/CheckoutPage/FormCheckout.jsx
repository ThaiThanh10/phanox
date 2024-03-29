import { Form, Input, Radio, Select, Space, Spin } from "antd"
import React from "react"
import { InputField } from "../../components"
import { Controller } from "react-hook-form"
import TextArea from "antd/es/input/TextArea"
import { ErrorMessage } from "@hookform/error-message"

const FormCheckout = (props) => {
    const { form, country, handleSelectCountries, handleSelectDistrict, handleSelectWard, checkoutToken, handleCheckout } = props
    return (
        <div className="flex justify-around mt-[60px] xs:mt-[40px] sm:mt-[50px] xs:flex-col sm:flex-col ">
            <div className=" border-[0.1rem] p-10 h-full border-dashed border-[#d7d7d7] xs:w-full xs:max-w-full sm:max-w-full md:max-w-[60%] w-full lg:max-w-[60%] max-w-[70%]    ">
                <Form layout="vertical">
                    <div className="flex justify-between items-start gap-x-3 xs:flex-col sm:flex-col md:flex-col ">
                        <div className="w-1/4 xs:w-full sm:w-full md:w-full ">
                            <InputField
                                name="name"
                                label="Full Name"
                                form={form}
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                        </div>
                        <div className="w-1/4 xs:w-full sm:w-full md:w-full ">
                            <InputField
                                name="phone"
                                label="Phone"
                                form={form}
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                        </div>
                        <div className="w-[40%] xs:w-full sm:w-full md:w-full">
                            <InputField
                                name="email"
                                label="Email"
                                form={form}
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />
                        </div>
                    </div>

                    <div className="mb-[18px]">
                        <Space
                            style={{ columnGap: "12px" }}
                            wrap
                        >
                            <Select
                                defaultValue="Choose Provinces/City"
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
                            <Select
                                defaultValue="Choose District/Town"
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
                            <Select
                                defaultValue="Choose Ward"
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
                        </Space>
                    </div>
                    <InputField
                        name="shippingAddress"
                        label="Shipping Address"
                        form={form}
                        errors={form.formState.errors}
                        touchedFields={form.formState.touchedFields}
                    />
                    <div className=" border px-5 py-2 border-dashed border-[#d7d7d7] mb-[18px] ">
                        <h1 className="text-[22px] text-center ">Visa Card</h1>
                        <InputField
                            name="cardOwner"
                            label="Card's Owner"
                            form={form}
                            errors={form.formState.errors}
                            touchedFields={form.formState.touchedFields}
                        />
                        <div className="flex gap-3 ">
                            <InputField
                                name="visaNumber"
                                label="Card Information"
                                form={form}
                                errors={form.formState.errors}
                                touchedFields={form.formState.touchedFields}
                            />

                            <Controller
                                name="expiryMonth"
                                control={form.control}
                                render={({ field }) => (
                                    <Form.Item style={{ width: "130px" }}>
                                        <label>Expiry Month</label>
                                        <Input
                                            {...field}
                                            style={{
                                                marginTop: "8px",
                                                fontSize: "16px",
                                                maxWidth: "90px",
                                            }}
                                            name="expiryMonth"
                                            placeholder="12"
                                            maxLength={2}
                                        />
                                        <ErrorMessage
                                            name="expiryMonth"
                                            touchedFields={form.formState.touchedFields}
                                            render={({ message }) => (
                                                <p className="text-red-500 pt-1 ">{message}</p>
                                            )}
                                            errors={form.formState.errors}
                                        />
                                    </Form.Item>
                                )}
                            />
                            <Controller
                                name="expiryYear"
                                control={form.control}
                                render={({ field }) => (
                                    <Form.Item style={{ width: "130px" }}>
                                        <label>Expiry Year</label>
                                        <Input
                                            controls={false}
                                            {...field}
                                            style={{
                                                marginTop: "8px",
                                                fontSize: "16px",
                                                maxWidth: "90px",
                                            }}
                                            name="expiryYear"
                                            placeholder="24"
                                            maxLength={2}
                                        />
                                        <ErrorMessage
                                            name="expiryYear"
                                            touchedFields={form.formState.touchedFields}
                                            render={({ message }) => (
                                                <p className="text-red-500 pt-1 ">{message}</p>
                                            )}
                                            errors={form.formState.errors}
                                        />
                                    </Form.Item>
                                )}
                            />
                            <Controller
                                name="cvc"
                                control={form.control}
                                render={({ field }) => (
                                    <div className="flex flex-col">
                                        <label>CVC</label>
                                        <Input
                                            controls={false}
                                            {...field}
                                            style={{
                                                marginTop: "8px",
                                                fontSize: "16px",
                                                maxWidth: "70px",
                                            }}
                                            name="cvc"
                                            placeholder="123"
                                            maxLength={3}
                                        />
                                        <ErrorMessage
                                            name="cvc"
                                            touchedFields={form.formState.touchedFields}
                                            render={({ message }) => (
                                                <p className="text-red-500 pt-1 ">{message}</p>
                                            )}
                                            errors={form.formState.errors}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                    <div className=" mb-[20px]">
                        <Controller
                            name="note"
                            control={form.control}
                            render={({ field }) => (
                                <Form.Item>
                                    <label>Additional Information</label>
                                    <TextArea
                                        {...field}
                                        style={{
                                            marginTop: "8px",
                                        }}
                                        name="note"
                                        placeholder="Order Notes (Optional) "
                                        autoSize={{
                                            minRows: 4,
                                            maxRows: 6,
                                        }}
                                    />
                                </Form.Item>
                            )}
                        />
                    </div>
                </Form>
            </div>
            <div className=" xs:w-full xs:max-w-full  sm:max-w-full md:max-w-[38%] lg:px-6 lg:max-w-[33%] max-w-[27%] bg-[#f9f9f9] mb-8 pt-10 pb-12 px-12 md:px-5 rounded-[0.3rem] border-[0.1rem] border-dashed border-[#d7d7d7]">
                <h3 className="font-medium text-center text-[1.4rem] tracking-[0] mb-[1.7rem] pb-[1.3rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                    Cart Total
                </h3>
                <div className="flex justify-between items-center  mb-[1rem] pb-[1.3rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                    <h3>Subtotal:</h3>
                    <p>{checkoutToken?.total.formatted_with_symbol}</p>
                </div>
                <div className="border-b-[0.1rem] border-b-[#cccccc] border-solid  mb-[1rem] pb-[1.7rem]">
                    {checkoutToken?.line_items.length ? (
                        checkoutToken?.line_items.map((item) => (
                            <div key={item.id}>
                                <div className="flex justify-between items-start p-[10px_5px] gap-x-[15px]   ">
                                    <img
                                        className="w-[70px] sm:w-[100px]"
                                        src={item?.image?.url}
                                        alt=""
                                    />
                                    <div className="w-[178px] flex flex-col gap-y-[15px] pt-[10px] ">
                                        <h1 className="text-[14px]">{item.name}</h1>
                                        <div className="flexCenter justify-start gap-x-[15px]">
                                            <h1 className="text-[14px]">
                                                Quantity: {item.quantity}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="pt-[10px] flex flex-col gap-y-[15px] ">
                                        <h1 className="text-[14px]">
                                            {item?.line_total?.formatted_with_symbol}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flexCenter">
                            <Spin />
                        </div>
                    )}
                </div>
                <div className=" pb-[1.7rem] mb-[2rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                    <h3 className="mb-[10px]">Shipping</h3>
                    <Radio.Group value={1}>
                        <Space direction="vertical">
                            <Radio value={1}>Free Shipping</Radio>
                            <Radio
                                disabled
                                value={2}
                            >
                                Standard: $15
                            </Radio>
                            <Radio
                                disabled
                                value={3}
                            >
                                Express: $8
                            </Radio>
                        </Space>
                    </Radio.Group>
                </div>{" "}
                <div className="flex justify-between items-center   pb-[1.7rem] border-b-[0.1rem] border-b-[#cccccc] border-solid">
                    <h3>Total:</h3>
                    <p>$0</p>
                </div>
                <div>
                    <button
                        style={{
                            background: "#f02d34",
                        }}
                        className=" w-full text-white text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                        type="button"
                        onClick={form.handleSubmit((data) => handleCheckout(data))}
                    >
                        Checkout
                    </button>
                    <button
                        className="bg-[#fff] w-full text-[#000] text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                        type="button"
                        onClick={() => {
                            navigate("/productpage")
                        }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormCheckout
