import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="bg-blue-700">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-6 sm:px-6 lg:px-8">
                <nav className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link to="/help" className="text-base text-white">
                        Help
                    </Link>
                    <Link to="/terms" className="text-base text-white">
                        Terms & Conditions
                    </Link>
                    <Link to="/privacy-policy" className="text-base text-white">
                        Privacy Policy
                    </Link>
                    <Link to="/copyright" className="text-base text-white">
                        Copyright Compliance Policy
                    </Link>
                </nav>
            </div>
        </section>
    );
}

export default Footer;
