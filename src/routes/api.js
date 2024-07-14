import express from 'express';
const router = express.Router();
import { productBrandList, productCategoryList, productSliderList, productListByBrand, productListByCategory, productListBySimilar, productListByKeywords, productListByRemark, productDetails, productReviewList, createProductReview } from "../controllers/productController.js"



// product routes
router.get("/products/product-brand-list", productBrandList);
router.get("/products/product-category-list", productCategoryList);
router.get("/products/product-slider-list", productSliderList);
router.get("/products/product-list-by-brand/:brandId", productListByBrand);
router.get("/products/product-list-by-category/:categoryId", productListByCategory);
router.get("/products/product-list-by-similar/:keyword", productListBySimilar);
router.get("/products/product-list-by-keywords/:keywords", productListByKeywords);
router.get("/products/product-list-by-remark/:remark", productListByRemark);
router.get("/products/product-details/:productId", productDetails);
router.get("/products/product-review-list", productReviewList);
router.get("/products/create-product-review", createProductReview);



export default router;
