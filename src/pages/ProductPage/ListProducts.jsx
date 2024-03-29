import { Pagination, Select, Spin } from "antd"
import React from "react"
import { Product } from "../../components"

const ListProducts = (props) => {
    const { handleSort, loading, results, refresh, handlePage, handleAddCart } = props
    return (
        <div className="border-l-[1px] border-solid border-[#ebebeb] pl-[35px] sm:pl-0 lg:pl-0 lg:border-l-0 md:pl-0 md:border-l-0 flex-[0_0_70%] xs:border-l-0 sm:border-l-0 ">
            <div className="flex justify-between items-center xs:flex-col  gap-y-3 px-[55px] mb-[1.5rem] xs:px-3">
                <h3 className="text-[#1a1a1a] font-normal text-[16px] leading-[1.15] xs:text-[15px]  ">
                    Showing 9 of 58 Products
                </h3>
                <div>
                    <Select
                        defaultValue="Default Sorting"
                        style={{
                            width: 180,
                        }}
                        onSelect={handleSort}
                        options={[
                            {
                                label: "Price",
                                options: [
                                    { label: "Ascending", value: "asc" },
                                    {
                                        label: "Descending",
                                        value: "desc",
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[14px] w-full xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   sm:gap-[8px]  ">
                {!loading &&
                    results.map((product) => (
                        <Product
                            onClick={() => handleAddCart(product.id, 1)}
                            id={product.id}
                            key={product.id}
                            imgSrc={product.image.url}
                            title={product.name}
                            price={product.price.formatted_with_symbol}
                        />
                    ))}
                {!results.length && !loading && refresh && (
                    <p>There is no result for your product</p>
                )}
            </div>
            {loading && (
                <div className="w-full py-8 flex flex-col gap-y-4 justify-center items-center ">
                    <Spin size="large" />
                    <h1>Loading...</h1>
                </div>
            )}
            <div className="mt-5 grid place-items-center ">
                <Pagination
                    onChange={handlePage}
                    defaultCurrent={1}
                    total={35}
                />
            </div>
        </div>
    )
}

export default ListProducts
