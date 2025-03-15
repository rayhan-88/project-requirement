import React, {useEffect} from 'react';
import {FaUserTie} from "react-icons/fa";
import Review from "./Review.jsx";
import CompanyStore from "../store/CompanyStore.js";
import {useParams} from "react-router-dom";

function SearchColleague() {
    const {ColleagueRequest,ColleagueData} = CompanyStore()
    const {keyword} = useParams();

    useEffect(() => {
        (async ()=>{
            if(!keyword) return "Keyword not found";
            await ColleagueRequest(keyword)
        })()
    },[])
    return (
        <section className="h-screen bg-gray-600 flex justify-center items-center">
            {
                ColleagueData?.length > 0 ? (
                        <div id="card" className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="bg-gray-200 text-gray-700 px-6 py-4">Colleague Details</div>
                            <div className="bg-white px-6 py-4">
                                {
                                    ColleagueData?.map((item, index) => (
                                        <div key={index} className="flex items-center pt-3">
                                            <div className="flex justify-center items-center bg-blue-700 rounded-full h-12 w-12 uppercase font-bold text-gray-300">
                                                <FaUserTie/>
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-2xl">{item?.colleague_name}</p>
                                                <p className="text-sm text-gray-700 mt-1">{item?.company_name}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <Review/>
                        </div>
                    ) :
                    (<h1>No colleagues found.</h1>)
            }
        </section>
    );
}

export default SearchColleague;