import db from "../db/connectionDB.js";
import {IsEmpty} from "../../client/src/utility/ValidationHelper.js";

export const ReviewService = async (req) => {
    try{
        const reqBody = req.body;

        // find colleague db
        const [colleague] = await db.execute(
            "SELECT * FROM colleague where id = ?;",
            [reqBody["colleague_id"]]
        );
        if (!colleague) return {success: false, message: "Colleague not found system"};

        // find existing review
        const [reviewExist] = await db.execute(
            "SELECT * FROM review WHERE colleague_id = ? AND user_id = ?;",
            [reqBody["colleague_id"],reqBody["user_id"]]
        );
        if (reviewExist.length>0) return {success: false, message: "You already reviewed this colleague.",};

        // Review create
        const newReview = await db.execute(
            "INSERT INTO review(rating,feedback,user_id,colleague_id) VALUES (?,?,?,?);",
            [reqBody.rating, reqBody.feedback, reqBody.user_id, reqBody.colleague_id]
        );
        return {success: true, message: "Review added successfully.", reviews: newReview[0]};
    }
    catch (error) {
        return { status: false, message: error.toString() };
    }
};


export const GetReviewService = async (req) => {
    try{
        const { colleague_id } = req.params;

        const [reviews] = await db.execute(
            `SELECT 
            review.rating,
            review.feedback,
            review.createdDate,
            users.username AS user_name,
            colleague.name AS colleague_name
            FROM review
            JOIN users ON review.user_id = users.id
            JOIN colleague ON review.colleague_id = colleague.id
            WHERE review.colleague_id = ?;`,
            [colleague_id]
        );
        if (IsEmpty(reviews)) return {success: false, message: "No reviews found for this colleague.",};
        return {status: true, review: reviews}
    }
    catch (error) {
        return { status: false, message: error.toString() };
    }
}




