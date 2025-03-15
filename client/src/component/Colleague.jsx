import React from 'react';
import Button from "./Button.jsx";

function Colleague() {
    return (
        <div>
            <h1 className='mt-16 font-bold text-3xl md:text-[48px] text-center'>
                Join Meet My Colleague Today
            </h1>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 md:mt-16">
                    {/* First Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm md:w-[90%] rounded">
                            <img className="w-full" src="/img/Group%206.png" alt="Colleague Image 1"/>
                        </div>
                    </div>

                    {/* Second Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm md:w-[90%] rounded">
                            <img className="w-full" src="/img/Group%207.png" alt="Colleague Image 2"/>
                        </div>
                    </div>

                    {/* Third Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm md:w-[90%] rounded">
                            <img className="w-full" src="/img/Group%208.png" alt="Colleague Image 3"/>
                        </div>
                    </div>
                </div>

                {/* Sign-Up Button */}
                <div className="flex justify-center my-12 md:my-16">
                    <Button to='/sign-up' className='text-white bg-blue-700 px-6 py-3 rounded-md'>
                        Sign up now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Colleague;
