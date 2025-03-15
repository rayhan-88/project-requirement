import {ColleagueService, SearchService} from "../services/ColleagueService.js";



export const ColleagueController =async(req,res)=>{
    const result= await ColleagueService(req)
    res.json(result)
}

export const SearchController = async (req, res) => {
    let result= await SearchService(req)
    res.json(result)
}