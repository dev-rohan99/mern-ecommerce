import express from 'express';
const router = express.Router();
import productController from "../controllers/productController"



// product routes
router.get("/products/product-brand-list", productController.productBrandList);
router.get("/products/product-category-list", productController.productCategoryList);
router.get("/products/product-slider-list", productController.productSliderList);
router.get("/products/product-list-by-brand/:brandId", productController.productListByBrand);
router.get("/products/product-list-by-category/:categoryId", productController.productListByCategory);
router.get("/products/product-list-by-similar/:keyword", productController.productListBySimilar);
router.get("/products/product-list-by-keywords/:keywords", productController.productListByKeywords);
router.get("/products/product-list-by-remark/:remark", productController.productListByRemark);
router.get("/products/product-details/:productId", productController.productDetails);
router.get("/products/product-review-list", productController.productReviewList);
router.get("/products/create-product-review", productController.createProductReview);



export default router;
