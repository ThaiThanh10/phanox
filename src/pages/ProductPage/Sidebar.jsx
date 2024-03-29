import { Collapse } from "antd"
import React from "react"

const Sidebar = (props) => {
    const { dataCate, showAll, handleCate } = props
    return (
        <div className="px-5 flex-[0_0_25%] max-w-[25%] xs:w-full xs:max-w-full sm:w-full sm:max-w-full md:w-full md:max-w-full lg:max-w-full ">
            <div className="flex justify-between items-center px-4 pt-[10px] pb-[1.5rem] xs:pb-[20px] xs:mb-[1rem] mb-[1.5rem] border-b-[0.1rem] border-b-[#ebebeb] border-solid">
                <p>Filters:</p>
                <p
                    className="cursor-pointer text-[15px] "
                    onClick={showAll}
                >
                    Show All
                </p>
            </div>
            <Collapse
                style={{
                    borderBottom: "1px solid #ebebeb",
                }}
                bordered={false}
                ghost
                defaultActiveKey={["1"]}
                expandIconPosition="end"
            >
                <Collapse.Panel
                    key="1"
                    header={
                        <h2 className="text-[#1a1a1a] font-normal text-[1rem] leading-[1.15] tracking-[-0.01em] ">
                            Category
                        </h2>
                    }
                >
                    {dataCate.map((cate) => {
                        return (
                            <div
                                onClick={() => handleCate(cate.slug)}
                                key={cate.id}
                                className="py-[7px] px-[5px] cursor-pointer hover:bg-[#f7f7f7]"
                            >
                                <p className="text ml-[10px] transition-all duration-[0.2s] ease-[ease] hover:translate-x-[15px] ">
                                    {cate.name}
                                </p>
                            </div>
                        )
                    })}
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

export default Sidebar
