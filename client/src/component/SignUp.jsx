import React from 'react';
import Button from "./Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import userStore from "../store/UserStore.js";
import toast from "react-hot-toast";
import {IsEmail} from "../utility/ValidationHelper.js";
import Cookies from "js-cookie";


 function SignUp() {
     const navigate = useNavigate();
    const {FormData,FormDataOnChange,SignUpFormRequest} = userStore();

    const token = Cookies.get("token");
     console.log(token);

    const submitData =async (e) => {
        e.preventDefault();
        if (!IsEmail(FormData["email"])){
            toast.error('Please enter valid email');
        }else {
            await SignUpFormRequest(FormData)
            navigate("/sign-in");
        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="user name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e)=>FormDataOnChange('username', e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@gmail.com"
                                    onChange={(e)=>{FormDataOnChange('email', e.target.value)}}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e)=>{FormDataOnChange('password', e.target.value)}}
                                />
                            </div>

                            <Button
                                type="submit"
                                className='text-white bg-blue-700 w-full'
                                onClick={submitData}
                                >
                                Sign Up
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link
                                    to="/sign-in"
                                    className="font-semibold text-blue-700 hover:text-blue-500"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default SignUp;