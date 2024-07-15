import categoryModel from "../models/category.js";
import productDetailsModel from "../models/productDetails.js";
import productModel from "../models/product.js";
import productSliderModel from "../models/productSlider.js";
import reviewModel from "../models/review.js";
import brandModel from "../models/brand.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;


/**
 * brand list service
 * @returns 
 */

export const brandListService = async () => {
    try{

        const data = await brandModel.find();
        return {
            status: "success",
            data: data
        };

    }catch(err){
        return {
            status: "success",
            data: err
        }
    }
}

/**
 * category list service
 * @returns 
 */

export const categoryListService = async () => {
    try{

        const data = await categoryModel.find();
        return {
            status: "success",
            data: data
        }

    }catch(err){
        return {
            status: "success",
            data: err
        }
    }
}

/**
 * slider list service
 * @returns 
 */

export const sliderListService = async () => {
    try{

        const data = await productSliderModel.find();
        return {
            status: "success",
            data: data
        }

    }catch(err){
        return {
            status: "success",
            data: err
        }
    }
}

/**
 * product list by brand service
 * @param {*} req 
 * @returns 
 */

export const listByBrandService = async (req) => {
    try{

        const brandId = new ObjectId(req.params.brandId);
        const matchStage = {
            $match: { brandId: brandId }
        };
        const joinWithBrandStage = {
            $lookup: { 
                from: "brands",
                localField: "brandId",
                foreignField: "_id",
                as: "brand"
            }
        };
        const joinWithCategoryStage = {
            $lookup: { 
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category"
            }
        };
        const unwindBrandStage = {
            $unwind: "$brand"
        };
        const unwindCategoryStage = {
            $unwind: "$category"
        };
        const projectionStage = {
            $project: { "brand._id": 0, "category._id": 0, "brandId": 0, "categoryId": 0 }
        };

        const data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ]);

        return {
            status: "success",
            data: data
        }

    }catch(err){
        return {
            status: "success",
            data: err
        }
    }
}

/**
 * product list by category service
 * @param {*} req 
 * @returns 
 */

export const listByCategoryService = async (req) => {
    try{

        const categoryId = new ObjectId(req.params.categoryId);
        const matchStage = {
            $match: { categoryId: categoryId }
        };
        const joinWithBrandStage = {
            $lookup: { 
                from: "brands",
                localField: "brandId",
                foreignField: "_id",
                as: "brand"
            }
        };
        const joinWithCategoryStage = {
            $lookup: { 
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category"
            }
        };
        const unwindBrandStage = {
            $unwind: "$brand"
        };
        const unwindCategoryStage = {
            $unwind: "$category"
        };
        const projectionStage = {
            $project: { "brand._id": 0, "category._id": 0, "brandId": 0, "categoryId": 0 }
        };

        const data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ]);

        return {
            status: "success",
            data: data
        }

    }catch(err){
        return {
            status: "success",
            data: err
        }
    }
}

export const listBySimilarService = async () => {

}

export const listByKeywordsService = async () => {

}

export const listByRemarkService = async () => {

}

export const productDetailsService = async () => {

}

export const reviewListService = async () => {

}

export const productReviewService = async () => {

}

