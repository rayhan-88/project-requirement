import Button from "./Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import userStore from "../store/UserStore.js";
import {IsEmail} from "../utility/ValidationHelper.js";
import toast from "react-hot-toast";

function SignIn() {
    const navigate = useNavigate();
    const {FormData,FormDataOnChange,SignInFormRequest} = userStore();

    const submitData =async (e) => {
        e.preventDefault();
        if (!IsEmail(FormData['email'])) {
            toast.error('Please enter valid email');
        }else {
            await SignInFormRequest(FormData)
            navigate("/");
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder="name@gmail.com"
                                    name="email"
                                    type="email"
                                    onChange={(e)=>{FormDataOnChange('email', e.target.value)}}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    onChange={(e)=>{FormDataOnChange('password', e.target.value)}}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                onClick={submitData}
                                className='text-white bg-blue-700 w-full'
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <Link to="/sign-up" className="font-semibold text-blue-700 hover:text-blue-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignIn;
