import React, { useEffect } from 'react';
import { FaUserTie } from "react-icons/fa";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import CompanyStore from "../store/CompanyStore.js";

function Review() {
    const { ReviewData, ReviewRequest, ColleagueData } = CompanyStore();
    const id = ColleagueData[0]?.colleague_id;
    console.log(id);

    useEffect(() => {
        (async () => {
            if (!id) return;
            await ReviewRequest(id);
        })();
    }, []);

    if (!ReviewData) return null;

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {ReviewData.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaUserTie className='pb-1 text-xl' />
                            <div>
                                <p className="text-[16px] ps-2 text-gray-900 dark:text-gray-100">
                                    {item.user_name}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                            "{item.feedback}"
                        </p>
                        <div className="mt-4">
                            <StarRatings
                                rating={parseFloat(item.rating)}
                                starRatedColor="red"
                                starDimension="15px"
                                starSpacing="2px"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Review;
