import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';


const Hero = () => {




    return (
        <div>
        
            <div className="">
                <div className="containerWidth flex justify-between items-center">
                    <div className="w-[250px] block py-5 opacity-0">fdgdfg</div>

                    <div className="block w-full overflow-hidden">

                        <Swiper autoplay={{ delay: 2000, disableOnInteraction: false, }} modules={[Autoplay]} className="mySwiper overflow-hidden">
                            <SwiperSlide>
                                <img src="https://demo.activeitzone.com/ecommerce/uploads/all/K11jEaa22um8nGJD5niqHNNTHYZtV0iGLng26x2Y.webp" className="w-[100%] h-[459px] object-cover" alt="Hero Banner" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://demo.activeitzone.com/ecommerce/uploads/all/dbZvNvIJbghWindaOQxhrM0isq5twF9cRX0RBmJA.webp" className="w-[100%] h-[459px] object-cover" alt="Hero Banner" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://img.freepik.com/premium-vector/smart-watch-brand-social-media-cover-banner-web-banner-template_613138-53.jpg" className="w-[100%] h-[459px] object-cover" alt="Hero Banner" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/original_thumb/0a026a71.jpg?version=1618113595" className="w-[100%] h-[459px] object-cover" alt="Hero Banner" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/original_thumb/ec1eb042.jpg?version=1618112516" className="w-[100%] h-[459px] object-cover" alt="Hero Banner" />
                            </SwiperSlide>
                        </Swiper>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
