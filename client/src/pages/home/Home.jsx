import React from 'react'
import Hero from '../../components/hero/Hero';
import FlashSale from '../../components/flash-sale/FlashSale';
import TodaysDeal from '../../components/todays-deal/TodaysDeal';
import FeaturedCategories from '../../components/featured-categories/FeaturedCategories';
import BannerOne from '../../components/banner-one/BannerOne';
import FeaturedProducts from '../../components/featured-products/FeaturedProducts';
import BannerTwo from '../../components/banner-two/BannerTwo';
import BestSelling from '../../components/best-selling/BestSelling';
import NewProduct from '../../components/new-product/NewProduct';
import BannerThree from '../../components/banner-three/BannerThree';
import AuctionProducts from '../../components/auction-products/AuctionProducts';
import CouponHome from '../../components/coupon-home/CouponHome';

const Home = () => {



    return (
        <div>
            
            <Hero />

            <FlashSale />

            <TodaysDeal />

            <FeaturedCategories />

            <BannerOne />

            <FeaturedProducts />

            <BannerTwo />

            <BestSelling />

            <NewProduct />

            <BannerThree />

            <AuctionProducts />

            <CouponHome />

        </div>
    )
}

export default Home;
