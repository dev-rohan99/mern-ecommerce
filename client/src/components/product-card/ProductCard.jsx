import React from 'react';
import { FaHeart } from "react-icons/fa";
import { HiSwitchHorizontal } from 'react-icons/hi';



const ProductCard = () => {



    return (
        <div>
        
            <div className="box relative m-auto my-12 w-[230px] h-auto bg-cover bg-no-repeat border-[2px] border-gray-200 hover:border-transparent">

                <div className="before:content-[''] before:absolute before:h-[3px] before:w-0 before:bg-[#fff] before:top-[-3px] before:right-[-3px] before:transition-all before:duration-[200ms]"></div>
                <div className="after:content-[''] after:absolute after:h-[3px] after:w-0 after:bg-[#fff] after:bottom-[-3px] after:left-[-3px] after:transition-all after:duration-[200ms]"></div>

                <span className="text-[0.6875rem] text-[white] bg-[#D42D2A] w-[35px] text-center absolute left-4 font-bold top-4 py-[3px]">-5%</span>

                <a href="#" className="hover:bg-[#D42D2A] z-100 shadow-xl w-[35px] h-[35px] flex justify-center items-center ease-in duration-300 absolute top-4 right-4"><FaHeart className="text-[17px] text-gray-300" /></a>

                <a href="#" className="hover:bg-[#D42D2A] shadow-xl w-[35px] h-[35px] flex justify-center items-center ease-in duration-300 absolute top-[65px] right-4"><HiSwitchHorizontal className="text-[17px] text-gray-300" /></a>

                <div className="flex justify-center items-center">
                    <a href="#" className="flex justify-center items-center flex-col">
                        <img className="w-[195px] h-[195px] object-cover" src="https://demo.activeitzone.com/ecommerce/uploads/all/70TVd2OrhelP4B9bqY9SIK3TnUpCtXkSLntYP5O4.webp" alt="" />

                        <div className="px-4 text-center pb-4 pt-0 mt-0">
                            <div className="h-[34px] mt-[-30px] mb-3">
                                <a href="#" className="cartBtn scale-y-0 opacity-0 translate-y-[5px] flex justify-center items-center bg-[#4c4c4c] transition-all ease-in duration-300">Add to cart</a>
                            </div>
                            <a href="#" className="block text-center text-ellipsis overflow-hidden">Lorem, ipsum dolor sit amet consectetur.</a>
                            <h2 className="text-[#ad2220] text-center hoverEffectTwo opacity-100 font-bold mb-5">$72.258</h2>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;
