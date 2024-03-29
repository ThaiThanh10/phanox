import React from "react"

const HeroBanner = () => {
    return (
        <div className="container bg-[#dcdcdc] relative h-[500px] leading-[0.9] w-full px-10 py-[100px] rounded-[15px] xs:h-full xs:pb-[180px] ">
            <div>
                <p className="text-[20px]  relative z-[3]  ">Beats solo</p>
                <h3 className="my-1 text-[4em] relative z-[3] sm:text-[3em] ">Wireless</h3>
                <h1 className="text-white text-[10em] uppercase -ml-5 relative z-[3] xs:text-[3em] xs:ml-0 sm:text-[4em] sm:ml-0 md:text-[5em] lg:text-[6em] xl:text-[8em] ">Headphone</h1>
                <img
                    src="/images/banner.webp"
                    alt="headphones"
                    className="absolute w-[420px] aspect-[1] right-[5%] top-0 z-1 xs:w-[250px] xs:right-[-5%] xs:top-[14%] md:right-[10%]  "
                />
                <div>
                    <button
                        className="bg-[#f02d34] text-white relative text-lg font-medium cursor-pointer z-[10] mt-10 px-4 py-2.5 transition-all ease duration-200 hover:scale-[1.05] rounded-[15px] border-[none]"
                    >
                        View More
                    </button>

                    <div className="absolute w-[300px] leading-[1.3] flex flex-col text-[#324d67] right-[10%] bottom-[5%]">
                        <h5 className="font-bold text-base self-end mb-3">Description</h5>
                        <p className="text-[#5f5f5f] font- text-end">
                            The game begins here. With Immortal 1000D gaming headphones, dont just
                            play the game - feel it, live it, and own it. Level up your audio game
                            with 7.1 Channel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
