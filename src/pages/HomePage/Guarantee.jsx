import React from "react"

const data = [
    {
        imgSrc: "/images/warranty.svg",
        title: "1 Year Warranty",
    },
    {
        imgSrc: "/images/replacement.svg",
        title: "7-day Replacement",
    },
    {
        imgSrc: "/images/freeship.svg",
        title: "Free Shipping",
    },
    {
        imgSrc: "/images/billing.svg",
        title: "GST Billing",
    },
]
const Guarantee = () => {
    return (
        <div className="container flex justify-around items-start  mt-[40px] xs:flex-col sm:flex-col xs:gap-[16px] xs:mt-[20px]  ">
            {data.map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center xs:flex-row sm:flex-row  xs:gap-x-[20px] sm:gap-x-[20px]  "
                >
                    <img
                        className="w-[100px] xs:w-[80px] sm:w-[90px] md:w-[90px] "
                        src={item.imgSrc}
                        alt=""
                    />
                    <p className="text-center">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Guarantee
