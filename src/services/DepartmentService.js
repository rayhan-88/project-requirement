import db from "../db/connectionDB.js";
import {IsEmpty} from "../../client/src/utility/ValidationHelper.js";


export const DepartmentService=async(req)=>{
    try {
        const {departmentName,departmentDescription} = req.body;


        if (IsEmpty(req.body)) return {status:false,message:"Please enter"};

        const [result] = await db.execute(
            "INSERT INTO department(departmentName,departmentDescription) VALUES (?,?);",
            [departmentName,departmentDescription]
        )
        return {status:true,department:result}
    }
    catch(error){
        return {status:false,message:error.toString()}
    }
}