import React from "react"

const Deals = () => {
    return (
        <div className="bg-[#f02d34] relative h-[400px] leading-none text-white w-full mt-[120px] xs:mt-[90px] px-10 py-[100px] rounded-[15px] xs:h-full sm:h-full md:h-full ">
            <div className="flex justify-between xs:flex-col sm:flex-col md:flex-col ">
                <div>
                    <p className="m-[18px]">20% OFF</p>
                    <h3 className="font-black text-[80px] ml-[25px] z-[3] relative ">FINE</h3>
                    <h3 className="font-black text-[80px] ml-[25px] z-[3] relative ">SMILE</h3>
                    <p className="m-[18px]">15 Nov to 7 Dec</p>
                </div>
                <div className="relative z-[9] max-w-1/2 ">
                    <p className="text-[18px]">Beat Solo Air</p>
                    <h3 className="font-extrabold text-6xl  leading-[1.4]">Winter Sale</h3>
                    <p className="text-3.5 font-light max-w-[360px]">
                        Wireless Headphone with 40 mm drivers, 65 Hours (54 Hours with ANC), Type C,
                        Dual Compatibility{" "}
                    </p>
                    <div>
                        <button
                            className="bg-white text-[red] text-lg font-medium cursor-pointer mt-10 px-4 py-2.5 rounded-[15px] border-[none]"
                            type="button"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
                <img
                    src="/images/deals.webp"
                    className="xs:w-[80%] sm:w-[85%] md:w-[90%] z-[1] xs:top-0 xs:right-0 absolute left-1/4 -top-1/4 sm:top-0 md:top-0  "
                />
            </div>
        </div>
    )
}

export default Deals
