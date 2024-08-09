import React from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaTwitter } from "react-icons/fa6";


const Footer = () => {



    return (
        <div>
            
            <div className="bg-[#212129]">
                <div className="border-b-[1px] border-gray-700 py-10">
                    <div className="containerWidth flex justify-between items-center">
                        
                        <div className="w-[50%]">
                            <img src="https://demo.activeitzone.com/ecommerce/uploads/all/6TgLDR7srOHnPupxhYDsTSPzymj2OOlAxjXrEKI4.svg" alt="" className="w-[275px] h-[45px] object-fill" />
                            <p className="text-[13px] font-[400] text-white my-4">Complete system for your eCommerce business</p>
                            <p className="text-[13px] font-[700] text-white my-4">Subscribe to our newsletter for regular updates about Offers, Coupons & more</p>

                            <form action="">
                                <div className="flex justify-start items-center">
                                    <input type="text" className="outline-none border-[2px] text-white border-[#6e6e6e] py-[8px] px-4 bg-transparent w-[70%]" placeholder="Your Email Address" />

                                    <button className="bg-[#ad2220] text-white font-[600] outline-none border-[2px] border-[#ad2220] py-[8px] px-10 ml-5">Subscribe</button>
                                </div>
                            </form>
                        </div>

                        <div className="w-[310px]">
                            <h3 className="font-bold text-[15px] text-gray-500">FOLLOW US</h3>

                            <div className="flex gap-3 justify-start items-center my-3 mb-5">
                                <a href="#" className="footerIconHoverEffect w-[36px] h-[36px] rounded-full bg-[#3b5998] flex justify-center items-center text-white"><FaFacebookF className="text-[22px]" /></a>
                                
                                <a href="#" className="footerIconHoverEffect w-[36px] h-[36px] rounded-full bg-[#1da1f2] flex justify-center items-center text-white"><FaTwitter className="text-[22px]" /></a>
                                
                                <a href="#" className="footerIconHoverEffect w-[36px] h-[36px] rounded-full bg-[#da2c67] flex justify-center items-center text-white"><FaInstagram className="text-[22px]" /></a>

                                <a href="#" className="footerIconHoverEffect w-[36px] h-[36px] rounded-full bg-[#ff0000] flex justify-center items-center text-white"><FaYoutube className="text-[22px]" /></a>

                                <a href="#" className="footerIconHoverEffect w-[36px] h-[36px] rounded-full bg-[#0070ac] flex justify-center items-center text-white"><FaLinkedinIn className="text-[22px]" /></a>
                            </div>

                            <h3 className="font-bold text-[15px] text-gray-500">MOBILE APPS</h3>

                            <div className="flex gap-3 justify-start items-center my-3">
                                <a href="#" className="hover:scale-[1.05] ease-in duration-300">
                                    <img src="https://demo.activeitzone.com/ecommerce/assets/img/play.png" alt="" />
                                </a>

                                <a href="#" className="hover:scale-[1.05] ease-in duration-300">
                                    <img src="https://demo.activeitzone.com/ecommerce/assets/img/play.png" alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* footer list section  */}

                <div className="py-10">
                    <div className="containerWidth grid grid-cols-4 gap-4">

                        <div className="">
                            <h3 className="font-bold text-[15px] text-gray-500">FOLLOW US</h3>

                            <ul className="list-none mt-2">
                                <li><a href="#" className="footerMenuItem">Support Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                                <li><a href="#" className="footerMenuItem">Privacy Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h3 className="font-bold text-[15px] text-gray-500">CONTACTS</h3>

                            <ul className="list-none mt-2">
                                <li><a href="#" className="footerMenuItem">Support Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                                <li><a href="#" className="footerMenuItem">Privacy Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h3 className="font-bold text-[15px] text-gray-500">MY ACCOUNTS</h3>

                            <ul className="list-none mt-2">
                                <li><a href="#" className="footerMenuItem">Support Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                                <li><a href="#" className="footerMenuItem">Privacy Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h3 className="font-bold text-[15px] text-gray-500">SELLER ZONE</h3>

                            <ul className="list-none mt-2">
                                <li><a href="#" className="footerMenuItem">Support Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">About Us</a></li>
                                <li><a href="#" className="footerMenuItem">Privacy Policy Page</a></li>
                            </ul>
                            
                            <h3 className="font-bold text-[15px] text-gray-500">DELIVERY BOY</h3>

                            <ul className="list-none mt-2">
                                <li><a href="#" className="footerMenuItem">Support Policy Page</a></li>
                                <li><a href="#" className="footerMenuItem">Return Policy Page</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* footer copyright section */}

                <div className="bg-[#17171f] py-8">
                    <div className="containerWidth flex justify-between items-center">
                        <p className="text-[15px] text-white">Active eCommerce CMS 2023</p>

                        <div className="flex items-center justify-end">
                            <a href="#" className="">
                                <img className="w-[145px] h-[20px] object-fill" src="https://demo.activeitzone.com/ecommerce/uploads/all/NankP5emHOKcdCWqX6Bks1Qa63iDgoLA6WPGn7oe.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
