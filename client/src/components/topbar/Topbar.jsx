import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";



const Topbar = () => {



    return (
        <div>
        

            <div className="flex justify-between items-center containerWidth mx-auto py-2 text-[#494f54]">
                <div className="sm:w-[100%] md:w-[50%] sm:justify-between md:justify-start flex items-center">
                    <a href="" className="topbarMenuItem">English <MdKeyboardArrowDown className="text-[0.95rem] ml-1 mt-[2px]" /> </a>
                    <a href="" className="topbarMenuItem">U.S. Dollar <MdKeyboardArrowDown className="text-[0.95rem] ml-1 mt-[2px]" /> </a>
                </div>

                <div className="sm:hidden md:flex w-[50%] justify-end items-center">
                    <a href="" className="topbarMenuItem border-r-gray-200 border-r-[2px] pr-3">Become a Seller!</a>
                    <a href="" className="topbarMenuItem">Login to Seller</a>
                    <a href="tel:+01 112 352 566" className="topbarMenuItem mr-0">Helpline +01 112 352 566</a>
                </div>
            </div>


        </div>
    )
}

export default Topbar;
