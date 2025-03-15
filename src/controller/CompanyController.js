import {companyCreateService, companyGetService} from "../services/CompanyService.js";

export const companyCreateController=async (req,res) => {
    const result= await companyCreateService(req)
    res.json(result);
}

export const companyGetController=async (req,res) => {
    const result= await companyGetService()
        res.json(result);
}