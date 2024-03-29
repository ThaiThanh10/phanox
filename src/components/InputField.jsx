import { ErrorMessage } from "@hookform/error-message"
import { Input, Form } from "antd"
import React from "react"
import { Controller } from "react-hook-form"

const InputField = (props) => {
    const { form, name, label, errors, touchedFields, password = "text", } = props
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <Form.Item
                    style={{ marginBottom: "16px" }}
                    required
                    tooltip="This is a required field"
                >
                    <label className="text-[16px]">{label}</label>
                    <Input
                        {...field}
                        type={password}
                        style={{
                            fontSize: "16px",
                            marginTop: "8px",

                        }}
                        placeholder={label}
                    />
                    <ErrorMessage
                        name={name}
                        touchedFields={touchedFields}
                        render={({ message }) => <p className="text-red-500 pt-1 ">{message}</p>}
                        errors={errors}
                    />
                </Form.Item>
            )}
        />
    )
}

export default InputField
