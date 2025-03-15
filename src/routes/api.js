import express from "express";
import {logoutController, signInController, signupController} from "../controller/UserController.js";
import {companyCreateController, companyGetController} from "../controller/CompanyController.js";
import {DepartmentController} from "../controller/DepartmentController.js";
import {ColleagueController,SearchController} from "../controller/ColleagueController.js";
import {GetReviewController, ReviewController} from "../controller/ReviewController.js";
import {AuthMiddleware} from "../middleware/AuthMiddleware.js";
const router = express.Router();

// user api
router.post("/signup",signupController)
router.post("/signin",signInController)
router.delete("/logout",AuthMiddleware,logoutController)

// Company api
router.post('/company',AuthMiddleware,companyCreateController)
router.get('/get-company',AuthMiddleware,companyGetController)

// Department api
router.post('/department',AuthMiddleware,DepartmentController)

// Colleague api
router.post('/colleague',AuthMiddleware,ColleagueController)
router.post('/reviews',AuthMiddleware,ReviewController)
router.get('/colleague-reviews/:colleague_id',AuthMiddleware,GetReviewController)
router.get('/colleague-search/:keyword',AuthMiddleware,SearchController)




export default router;