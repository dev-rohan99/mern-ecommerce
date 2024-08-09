import React from 'react';

const Login = () => {



    return (
        <div>
        
            <div className="flex justify-between items-center h-full">
                <div className="w-[50%] h-full">
                    <img className="w-[100%] h-[100vh] max-h-[100%] object-cover" alt='Login banner' src="https://demo.activeitzone.com/ecommerce/uploads/all/dsp57bOl4bJ4YUuDzeVXyb1gl8GhIG8IHW0GcYid.webp"/>
                </div>

                <div className="w-[50%] h-full ml-[4.5rem]">
                    <div className="">
                        <img className="w-[48px] h-[48px]" src="https://demo.activeitzone.com/ecommerce/uploads/all/pOcEwsWKlrd8jMih6o68tn4YAjWbQEAwvZfeZVxJ.svg" alt="Logo" />
                        <h3 className="text-[24px] text-[#d42d2a] font-[700] mt-2 mb-1">WELCOME BACK!</h3>
                        <p className="text-[#292933] font-[400] text-[14px]">Login To Your Seller Account</p>
                    </div>

                    <form action="">
                        <div className="">
                            <label className="" htmlFor="">Email</label>
                            <input type="email" className="transition-all" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;
