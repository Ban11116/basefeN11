import React, { memo } from 'react'

const Reviews = () => {
    return (
        <>
            <div className="bg-[#2a2a2a] max-w-full mx-auto px-12 py-10">
                <h2 className="text-[#b35a2f] text-2xl text-center mb-10">
                    Reviews
                </h2>
                <div className="flex flex-col md:flex-row md:justify-center md:space-x-20 mb-14">
                    <div className="space-y-3 w-full max-w-xs">
                        <div className="flex items-center space-x-3 text-xs text-white">
                            <span>5 stars</span>
                            <div className="w-48 h-5 bg-white rounded-full overflow-hidden">
                                <div className="h-5 bg-[#b35a2f] rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <span className="w-14 text-right">100%</span>
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-white">
                            <span>4 stars</span>
                            <div className="w-48 h-5 bg-white rounded-full overflow-hidden">
                                <div className="h-5 bg-[#b35a2f] rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <span className="w-14 text-right">0%</span>
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-white">
                            <span>3 stars</span>
                            <div className="w-48 h-5 bg-white rounded-full overflow-hidden">
                                <div className="h-5 bg-[#b35a2f] rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <span className="w-14 text-right">0%</span>
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-white">
                            <span>2 stars</span>
                            <div className="w-48 h-5 bg-white rounded-full overflow-hidden">
                                <div className="h-5 bg-[#b35a2f] rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <span className="w-14 text-right">0%</span>
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-white">
                            <span>1 star</span>
                            <div className="w-48 h-5 bg-white rounded-full overflow-hidden">
                                <div className="h-5 bg-[#b35a2f] rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <span className="w-14 text-right">0%</span>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-0 text-center md:text-left">
                        <div className="flex justify-center md:justify-start space-x-2 text-[#b35a2f] text-3xl mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#b35a2f"
                                    viewBox="0 0 24 24"
                                    stroke="#b35a2f"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M12 17.27L18.18 21 16.54 13.97
                                           22 9.24 14.81 8.63 12 2 9.19 8.63
                                           2 9.24 7.46 13.97 5.82 21z"
                                    />
                                </svg>
                            ))}
                        </div>

                        <p className="text-white font-semibold text-xl mb-2">
                            5 out of 5
                        </p>
                        <p className="text-[12px] mb-3">
                            99% of reviewers recommend this product
                        </p>
                        <div className="flex justify-center md:justify-start space-x-6 text-[12px]">
                            <span className="font-semibold">
                                90 reviews
                            </span>
                            <button className="flex items-center space-x-2 text-white hover:text-[#b35a2f]">
                                <i className="fas fa-plus text-[12px]"></i>
                                <span>
                                    Add a Review
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="space-y-12 w-full px-5 pl-12 md:pl-21 text-left">
                    {/* Căn trái toàn phần */}
                    {/* Đánh giá 1 */}
                    <div className="flex items-start space-x-4">
                        <img
                            alt="Avatar of a female with red hair and a red shirt"
                            className="rounded-full flex-shrink-0"
                            height="48"
                            width="48"
                            src="https://storage.googleapis.com/a1aa/image/6835817c-e390-4e30-98d5-a9d95743e736.jpg"
                        />
                        <div className="flex-1 text-base text-white">
                            <div className="flex items-center space-x-1 text-[#b35a2f] text-lg mb-2">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <p className="mb-3">
                                Very lovely fragrance. Would recommend to individuals looking for a combination of sweetness and elegance in perfume. I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.
                            </p>
                            <div className="flex justify-between text-sm font-semibold">
                                <span>Jack Smith</span>
                                <span>June 03, 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* Đánh giá 2 */}
                    <div className="flex items-start space-x-4">
                        <img
                            alt="Avatar of a male with teal hair and a teal shirt"
                            className="rounded-full flex-shrink-0"
                            height="48"
                            width="48"
                            src="https://storage.googleapis.com/a1aa/image/10ceca47-9fbf-4b11-d1b5-12bcb7558e5e.jpg"
                        />
                        <div className="flex-1 text-base text-white">
                            <div className="flex items-center space-x-1 text-[#b35a2f] text-lg mb-2">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <p className="mb-3">
                                I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.
                            </p>
                            <div className="flex justify-between text-sm font-semibold">
                                <span>Ashley</span>
                                <span>January 05, 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* Đánh giá 3 */}
                    <div className="flex items-start space-x-4">
                        <img
                            alt="Avatar of a female with purple hair and a purple shirt"
                            className="rounded-full flex-shrink-0"
                            height="48"
                            width="48"
                            src="https://storage.googleapis.com/a1aa/image/12df3987-23bd-4794-b3ed-fee5f7e43dc8.jpg"
                        />
                        <div className="flex-1 text-base text-white">
                            <div className="flex items-center space-x-1 text-[#b35a2f] text-lg mb-2">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <p className="mb-3">
                                I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn’t take the air out of the room. Some scents are so overbearing but not this on. Try it you just might really love it.
                            </p>
                            <div className="flex justify-between text-sm font-semibold">
                                <span>Lauri Jess</span>
                                <span>October 05, 2022</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex justify-center mt-12">
                    <button className="text-[10px] text-white border border-white rounded px-6 py-2 hover:border-[#b35a2f] hover:text-[#b35a2f] transition-colors" type="button">
                        Load More
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(Reviews)