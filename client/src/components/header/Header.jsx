import React from 'react';
import Topbar from '../topbar/Topbar';
import { AiOutlineUser } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import HeaderMenu from '../header-menu/HeaderMenu';




const Header = () => {



    return (
        <div>
            
            <Topbar />

            <div className="containerWidth flex justify-between items-center py-[15px]">
                <div className="w-[275px]">
                    <a href="#" className="">
                        <img src="https://demo.activeitzone.com/ecommerce/uploads/all/9HqWWq2GdVeMm2UKONxeNB4Yyffn7r8MuMoe37RR.svg" alt="Main Logo" />
                    </a>
                </div>

                <div className="relative">
                    <input type="text" placeholder="I am shopping for . . ." className="transition-all ease-in duration-300 rounded-full border-[2px] border-[#dfdfe6] focus:border-[#D42D2A] focus:ring-[#D42D2A] outline-none px-4 py-[7px] w-[809px]" />
                    <TbSearch className="text-[26px] text-[#dfdfe6] absolute right-4 top-2"/>
                </div>

                 <div className="flex justify-end items-center">
                    <a href="#" className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-[#dfdfe6] customAnimation hover:border-[#D42D2A] hover:shadow-xl mr-4">
                        <AiOutlineUser className="text-[26px] text-[#818181] hoverEffect" />
                    </a>

                    <a href="" className="topbarMenuItem border-r-gray-200 border-r-[2px] pr-3 customAnimation hoverEffect">Register</a>
                    <a href="" className="topbarMenuItem customAnimation hoverEffect">Login</a>
                 </div>
            </div>

            <HeaderMenu />

        </div>
    )
}

export default Header;
