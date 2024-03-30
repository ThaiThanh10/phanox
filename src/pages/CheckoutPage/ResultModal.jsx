import { Modal, Result, Spin } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

const ResultModal = (props) => {
    const navigate = useNavigate()
    const { order, isModalOpen, handleCancel, viewOrder } = props
    return (
        <Modal
            maskClosable={false}
            footer={null}
            open={isModalOpen}
            okButtonProps={{ styles: { background: "#000" }, type: "default" }}
            onCancel={handleCancel}
        >
            {order?.customer ? (
                <Result
                    status="success"
                    title="Successfully Purchased  "
                    subTitle={
                        <h3 className="text-[18px] text-[#000]">
                            {" "}
                            Order ref: ${order?.customer_reference} .
                        </h3>
                    }
                    extra={[
                        <h1 className="mb-[10px]">
                            Check your email for details. If you have any trouble, then contact us
                        </h1>,
                        <button
                            className="bg-[#f02d34] w-full text-white text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                            onClick={async () => {
                                await getUserData(userInfo.uid).then(() => navigate("/productpage"))
                            }}
                        >
                            Continue Buying
                        </button>,
                        <button
                            className="bg-[#fff] border-[1px] border-solid border-red-500 w-full text-red-500 text-lg font-medium cursor-pointer  mt-7 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                            type="button"
                            onClick={viewOrder}
                        >
                            View Your Order
                        </button>,
                    ]}
                />
            ) : (
                <div className="flexCenter">
                    <Spin size="large" />
                </div>
            )}
        </Modal>
    )
}

export default ResultModal
