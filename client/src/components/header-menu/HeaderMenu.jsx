import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";




const HeaderMenu = () => {



    return (
        <div>
        
            <div className="bg-[#D42D2A]">
                <div className="containerWidth flex justify-between items-center">
                    <div className="w-[250px] py-3 px-4 flex justify-between items-center relative bg-[#ad2220] hover:bg-[#9a1e1c]">
                        <span className="text-[1rem] font-[700] text-white">Categories <span className="text-white font-normal opacity-80 ml-5">(see all)</span></span>
                        <IoIosArrowDown className="text-[1.2rem] ml-1 mt-[2px] text-white" />
                        <div className="absolute bg-white top-[48px] left-0 w-[100%] h-[459px] border-t-[0] border-gray-200 border-[1px]">
                            <ul className="flex flex-col">
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Home</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Flash Sale</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Blog</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />All Brand</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />All Category</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Coupon</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Todays Deal</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Todays Deal</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Todays Deal</a></li>
                                <li className="relative"><a href="#" className="categoryListItem"><img src="https://demo.activeitzone.com/ecommerce/uploads/all/46v0RI8PXlQa4Yy0IftaGaK9rZUQdLOAFkpnjRXT.webp" className="w-[16px] h-[16px]" alt="" />Todays Deal</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="list-none">
                        <ul className="flex justify-start">
                            <li className=""><a href="#" className="mainMenuItem">Home</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Flash Sale</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Blog</a></li>
                            <li className=""><a href="#" className="mainMenuItem">All Brand</a></li>
                            <li className=""><a href="#" className="mainMenuItem">All Category</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Coupon</a></li>
                            <li className=""><a href="#" className="mainMenuItem">Todays Deal</a></li>
                        </ul>
                    </div>

                    <div className="w-[200px] py-3 px-4 flex justify-between items-center bg-[#ad2220] hover:bg-[#9a1e1c]">
                        <FaShoppingCart className="text-[1.2rem] ml-1 mt-[2px] text-white" />
                        <span className="text-[1rem] font-[700] text-white">$0.000</span>
                        <span className="text-white font-normal opacity-80">(0 items)</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderMenu;

