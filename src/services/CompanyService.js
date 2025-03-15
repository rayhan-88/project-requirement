import {IsEmpty} from "../../client/src/utility/ValidationHelper.js";
import db from "../db/connectionDB.js";


export const companyCreateService = async (req)=>{
    try{
        const {name} = req.body;
        if (IsEmpty(req.body)) return {status:false,message:"Please enter"};

        const [result] = await db.execute(
            "INSERT INTO company (name) VALUES (?);",
            [name]
        )
        return {status:true,message:"Successfully created company",data:result};
    }
    catch(err){
        return {status:false,message:err.toString()};
    }
}




export const companyGetService = async ()=>{
    try{
        const [result] = await db.execute(
            "SELECT * FROM company"
        )
        return {status:true, companies:result[0]}

    }
    catch(err){
        return {status:false,message:err.toString()};
    }
}