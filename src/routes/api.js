import express from 'express';
const router = express.Router();
import productController from "../controllers/productController.js"



// product routes
router.get("/product-brand-list", productController.productBrandList);
router.get("/product-category-list", productController.productCategoryList);
router.get("/product-slider-list", productController.productSliderList);
router.get("/product-list-by-brand", productController.productListByBrand);
router.get("/product-list-by-category", productController.productListByCategory);
router.get("/product-list-by-similar", productController.productListBySimilar);



export default router;
