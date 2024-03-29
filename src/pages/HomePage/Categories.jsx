import React from "react"
import { Link } from "react-router-dom"

const Categories = ({ data }) => {
    return (
        <div className="container flex justify-around items-start  mt-[40px] xs:flex-col sm:flex-col  gap-[12px] ">
            {data?.map((cate) => {
                return (
                    <div
                        key={cate.id}
                        className="   cursor-pointer hover:scale-[1.05] transition-all duration-300 ease  "
                    >
                        <Link className="xs:flex-row sm:flex-row flex flex-col gap-x-[12px] items-center" to={`/productpage/${cate.slug}`}>
                            {" "}
                            <img
                                className="xs:w-[70px] sm:w-[75px] max-w-[100px]"
                                src={cate.assets[0].url}
                                alt=""
                            />
                            <p className="text-[16px] mt-3 text-center xs:text-[14px] ">{cate.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories
