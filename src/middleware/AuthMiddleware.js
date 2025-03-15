import {DecodeToken} from "../utility/TokenHelper.js";


export const AuthMiddleware =(req,res,next)=>{


    let token=req.headers['token'] ||req.cookies['token']

    let decoded=DecodeToken(token)



    if(decoded===null){
        return res.status(401).json({status:"fail", message:"Unauthorized"})
    }
    else {
        let email=decoded['email'];
        req.headers.email=email;
        next();
    }
}