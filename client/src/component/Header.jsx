import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompanyStore from "../store/CompanyStore.js";

const Header = () => {
    const { SearchKeyword, SetSearchKeyword } = CompanyStore();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-auto bg-[url(/img/header-1.png)] bg-cover bg-center px-4 md:px-8">
            {/* Navbar */}
            <nav className="h-[80px] flex items-center">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 items-center">
                        {/* Left: Social Icons */}
                        <div className="hidden md:flex items-center justify-center gap-4">
                            <a href="#" className="text-[#006BFF] text-xl"><FaFacebook /></a>
                            <a href="#" className="text-[#006BFF] text-xl"><FaTwitter /></a>
                            <a href="#" className="text-[#006BFF] text-xl"><FaInstagram /></a>
                            <a href="#" className="text-[#006BFF] text-xl"><FaTiktok /></a>
                        </div>

                        {/* Center: Logo */}
                        <div className="text-center">
                            <span className="text-2xl font-plexMono">Meet My Colleague</span>
                        </div>

                        {/* Right: Buttons */}
                        <div className="hidden md:flex items-center justify-end gap-2">
                            <Link to="/sign-up" className="text-blue-700 bg-white border border-blue-700 px-4 py-2 rounded-md">Sign Up</Link>
                            <Link to="/sign-in" className="text-white bg-blue-700 px-4 py-2 rounded-md">Sign In</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex justify-end">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                                <FaBars />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden flex flex-col items-center bg-gray-100 p-4 mt-2 rounded-lg">
                            <div className="flex gap-4">
                                <a href="#" className="text-[#006BFF] text-xl"><FaFacebook /></a>
                                <a href="#" className="text-[#006BFF] text-xl"><FaTwitter /></a>
                                <a href="#" className="text-[#006BFF] text-xl"><FaInstagram /></a>
                                <a href="#" className="text-[#006BFF] text-xl"><FaTiktok /></a>
                            </div>
                            <div className="mt-3 flex flex-col gap-2 w-full text-center">
                                <Link to="/sign-up" className="text-blue-700 bg-white border border-blue-700 px-4 py-2 rounded-md">Sign Up</Link>
                                <Link to="/sign-in" className="text-white bg-blue-700 px-4 py-2 rounded-md">Sign In</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Image */}
                    <div className="md:col-span-3 flex justify-center">
                        <img src="/img/about-our-team.png" alt="about-our-team" className="w-3/4 md:w-full" />
                    </div>

                    {/* Center Content */}
                    <div className="md:col-span-6 text-center">
                        <h2 className="font-bold text-3xl md:text-4xl mb-7 mt-12 md:mt-28">Enter name to get started</h2>
                        <form className="max-w-md mx-auto mb-7">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                                    <FaSearch />
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    onChange={(e) => SetSearchKeyword(e.target.value)}
                                    className="block w-full p-4 ps-14 text-sm outline-1 outline-blue-700 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Enter your colleague's name"
                                    required
                                />
                                <Link
                                    to={SearchKeyword.length > 0 ? `/colleague-details/${SearchKeyword}` : "/"}
                                    className="absolute end-[16px] bottom-[4px] px-4 py-2 rounded-md"
                                >
                                    Search
                                </Link>
                            </div>
                        </form>
                        <Link to="/" className="text-blue-600 hover:underline">I'd like to look up a colleague by name</Link>
                    </div>

                    {/* Right Image */}
                    <div className="md:col-span-3 flex justify-center">
                        <img src="/img/get-a-job-promotion.png" alt="get-a-job-promotion" className="w-3/4 md:w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
