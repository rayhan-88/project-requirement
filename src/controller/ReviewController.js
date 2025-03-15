import {GetReviewService, ReviewService} from "../services/ReviewService.js";


export const ReviewController = async (req, res) => {
    let result= await ReviewService(req)
    res.json(result)
}


export const GetReviewController = async (req, res) => {
    let result= await GetReviewService(req)
    res.json(result)
}



