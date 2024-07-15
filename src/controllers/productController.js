import { brandListService, categoryListService, sliderListService, listByBrandService, listBySimilarService, listByKeywordsService, listByRemarkService, productDetailsService, reviewListService, productReviewService, listByCategoryService } from "../services/productService.js"


export const productBrandList = async (req, res, next) => {

    const result = await brandListService();
    return res.status(200).json(result);

}

export const productCategoryList = async (req, res, next) => {
    
    const result = await categoryListService();
    return res.status(200).json(result);

}

export const productSliderList = async (req, res, next) => {
    
    const result = await sliderListService();
    return res.status(200).json(result);

}

export const productListByBrand = async (req, res, next) => {
    
    const result = await listByBrandService(req);
    return res.status(200).json(result);

}

export const productListByCategory = async (req, res, next) => {
    
    const result = await listByCategoryService(req);
    return res.status(200).json(result);

}

export const productListBySimilar = async (req, res, next) => {
    
}

export const productListByKeywords = async (req, res, next) => {
    
}

export const productListByRemark = async (req, res, next) => {

    const result = await listByRemarkService(req);
    return res.status(200).json(result);
    
}

export const productReviewList = async (req, res, next) => {
    
}

export const productDetails = async (req, res, next) => {
    
}

export const createProductReview = async (req, res, next) => {
    
}

