import {DepartmentService} from "../services/DepartmentService.js";


export const DepartmentController =async(req,res)=>{
    const result= await DepartmentService(req)
    res.json(result)
}