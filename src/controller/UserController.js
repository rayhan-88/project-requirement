import {logoutService, signInService, signupService} from "../services/UserService.js";


export const signupController = async (req, res) => {
    let result = await signupService(req);
    res.json(result);
};
export const signInController = async (req, res) => {
    let result = await signInService(req,res);
    res.json(result);
};
export const logoutController = async (req, res) => {
    let result = await logoutService(req,res);
    res.json(result);
};