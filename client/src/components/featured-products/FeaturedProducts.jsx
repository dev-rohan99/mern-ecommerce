import React from 'react';
import ProductCard from '../product-card/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const FeaturedProducts = () => {



    return (
        <div>
        
            <div className="">
                <div className="containerWidth">

                    <h3 className="font-[700] text-[20px] flex justify-between items-center text-[#1b1b28] mb-4 mt-3">
                        <div className="">Featured Products</div>
                        <a href="#" className="font-[700] text-[13px]">View All Product</a>
                    </h3>

                    <div className="mt-[-35px]">
                        
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FeaturedProducts;
