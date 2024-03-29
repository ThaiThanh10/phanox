import React from "react"

const Blog = () => {
    return (
        <div className=" carousel-cell mx-2  border bg-neutral-50  p-0 rounded-[10px] border-solid border-[#ecf0f4]">
            <div className="relative flexCenter min-h-[200px] flex-col overflow-hidden ">
                <div className="article-image image-zoom">
                    <div>
                        <img
                            className="rounded-[10px]"
                            sizes="(max-width: 740px) 81vw, (max-width: 999px) 37vw, 425px"
                            loading="lazy"
                            height="500"
                            width="1000"
                            alt="The Power of Personalisation: Custom Watch Faces in Wearables"
                            src="//www.boat-lifestyle.com/cdn/shop/articles/3_2_1000x.jpg?v=1695972107"
                            srcSet="//www.boat-lifestyle.com/cdn/shop/articles/3_2_600x.jpg?v=1695972107 600w, //www.boat-lifestyle.com/cdn/shop/articles/3_2_700x.jpg?v=1695972107 700w, //www.boat-lifestyle.com/cdn/shop/articles/3_2_800x.jpg?v=1695972107 800w, //www.boat-lifestyle.com/cdn/shop/articles/3_2_1000x.jpg?v=1695972107 1000w"
                        />
                    </div>
                </div>
                <div className="p-3 w-full">
                    <h2 className="text-[14px] leading-[18px] mt-[5px] mb-[7.5px] ">
                        23 Sep, 2023
                    </h2>
                    <p className="text-lg text-[#191e23] leading-5 font-bold mb-2 m-0 sm:line-clamp-2 md:line-clamp-2 ">
                        The Power of Personalisation: Custom Watch Faces in Wearables
                    </p>
                    <p className="text-sm leading-[18px] overflow-hidden text-[#4e5358] mb-4 line-clamp-2">
                        Check out how with our DIY Watch Face Studio and customisable watch
                        faces&nbsp;are revolusionising the wearables industry.
                    </p>
                    <div className="meta">
                        <div className="bg-[#fff] text-center border text-[#1a2024] font-bold text-sm  px-1.5 py-3 rounded-[20px] border-solid border-[#d0d9de]">
                            <p className="flexCenter gap-x-3">
                                Read more
                                <span className="right-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            id="Path_333502"
                                            data-name="Path 333502"
                                            d="M8.159,2.693a6.7,6.7,0,0,0,2.7-.551A7.172,7.172,0,0,0,13.095.625,7.133,7.133,0,0,0,14.608-1.6a6.735,6.735,0,0,0,.548-2.706,6.7,6.7,0,0,0-.551-2.7A7.216,7.216,0,0,0,13.087-9.25a7.041,7.041,0,0,0-2.234-1.513,6.781,6.781,0,0,0-2.7-.544,6.755,6.755,0,0,0-2.7.544A7.1,7.1,0,0,0,3.22-9.25,7.134,7.134,0,0,0,1.7-7.012a6.742,6.742,0,0,0-.548,2.7A6.7,6.7,0,0,0,1.706-1.6,7.184,7.184,0,0,0,3.223.625a7.184,7.184,0,0,0,2.23,1.517A6.7,6.7,0,0,0,8.159,2.693Zm0-1.283A5.609,5.609,0,0,1,5.932.968,5.741,5.741,0,0,1,4.109-.261,5.692,5.692,0,0,1,2.885-2.084a5.648,5.648,0,0,1-.44-2.226,5.648,5.648,0,0,1,.44-2.226A5.692,5.692,0,0,1,4.109-8.36,5.7,5.7,0,0,1,5.929-9.585a5.622,5.622,0,0,1,2.223-.44,5.675,5.675,0,0,1,2.23.44A5.681,5.681,0,0,1,12.208-8.36a5.692,5.692,0,0,1,1.225,1.823,5.648,5.648,0,0,1,.44,2.226,5.648,5.648,0,0,1-.44,2.226A5.692,5.692,0,0,1,12.208-.261,5.741,5.741,0,0,1,10.385.968,5.609,5.609,0,0,1,8.159,1.411Zm3.5-5.735a.637.637,0,0,0-.209-.44l-2.306-2.3a.541.541,0,0,0-.389-.144.5.5,0,0,0-.371.151.507.507,0,0,0-.148.367.526.526,0,0,0,.166.4l.843.821.793.648L8.62-4.887H5.183a.528.528,0,0,0-.4.162.557.557,0,0,0-.155.4.553.553,0,0,0,.155.4.535.535,0,0,0,.4.159H8.62l1.419-.058-.793.656L8.4-2.35a.5.5,0,0,0-.166.389.528.528,0,0,0,.148.378.491.491,0,0,0,.371.155.529.529,0,0,0,.389-.159l2.306-2.291A.627.627,0,0,0,11.661-4.325Z"
                                            transform="translate(-1.155 11.307)"
                                            fill="#393f5a"
                                        ></path>
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
