import React from 'react';
import { PiTicketThin } from "react-icons/pi";



const CouponHome = () => {



    return (
        <div>
        

            <div className="my-10 mt-0 bg-[#292933] py-[40px]">
                <div className="containerWidth">

                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <div className="">
                                <PiTicketThin className="text-[#fff] text-[80px] rotate-[134deg]" />
                            </div>

                            <div className="">
                                <h2 className="text-[2.25rem] ml-10 text-white">Save Upto 50% with our Coupons</h2>
                                <h2 className="text-[1.25rem] ml-10 text-[gray] font-medium mt-2">Get huge discount in products or save money by using coupons while checkout</h2>
                            </div>
                        </div>

                        <a href="#" className="px-5 bg-[#ffffff2e] hover:bg-[#fff] hover:text-[#000] duration-300 py-2 rounded-full border-[2px] border-[#fff] text-white font-medium text-[18px]">View all coupon</a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CouponHome;
