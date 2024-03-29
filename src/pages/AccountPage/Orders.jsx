import React, { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { Collapse } from "antd"

const Orders = () => {
    const { userData } = useContext(MainContext)
    const items = userData?.orders?.map((item, i) => {
        return {
            key: i,
            label: (
                <div>
                    <h3 className="text-[16px] font-semibold " >
                        Order Ref: {item.customer_reference} { }{" "}
                    </h3>
                    <h3 className="text-[16px] font-semibold " >
                        Order Id: {item.id} { }{" "}
                    </h3>
                </div>
            ),
            children: (
                <div className="p-2">
                    <div className=" text-[16px] border border-solid border-[#ddd] p-2 mb-3 ">
                        <h4>
                            Name: <b>{item.customer.firstname} {item.customer.lastname}</b>{" "}
                        </h4>
                        <h4>Phone: <b>{item.customer.phone}</b> </h4>
                        <h4>Email: <b>{item.customer.email}</b> </h4>
                        <h4>
                            Address: <b>{item.shipping.street} {item.shipping.town_city}</b>{" "}
                        </h4>
                        <h4>Type Shipping: <b>Free</b></h4>
                        <h4>
                            Note: <b>{item.extra_fields[0].value ? item.extra_fields[0].value : ""}</b>
                        </h4>
                    </div>
                    <div className="border border-solid border-[#ddd] p-2  ">
                        {item.order.line_items.map((prod) => (
                            <div key={item.id}>
                                <div className="flex justify-between items-start p-[10px_5px] gap-x-[15px]   ">
                                    <img
                                        className="w-[70px] sm:w-[100px]"
                                        src={prod?.image?.url}
                                        alt=""
                                    />
                                    <div className="w-[178px] flex flex-col gap-y-[15px] ">
                                        <h1 className="text-[14px]">{prod.product_name}</h1>
                                        <div className="flexCenter justify-start gap-x-[15px]">
                                            <h1 className="text-[14px]">
                                                Quantity: {prod.quantity}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-y-[15px] ">
                                        <h3 className="text-[14px]">
                                            {prod?.line_total?.formatted_with_symbol}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-[18px] font-bold mt-3 ">
                        {" "}
                        Total: {item.order_value.formatted_with_symbol}{" "}
                    </h3>
                </div>
            ),
        }
    })

    return (
        <div className="px-4 py-2 ">
            <h2 className="text-[32px] text-[#324d67] font-bold text-left mb-[20px]">
                My list ordered
            </h2>
            <div>
                <Collapse items={items} />
            </div>
        </div>
    )
}

export default Orders
