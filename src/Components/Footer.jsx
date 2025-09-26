import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t mt-12">
            <div className="mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <p className="mb-3 md:mb-0">
                    © {new Date().getFullYear()} Kamand Prompt · Programming Club IIT Mandi
                </p>

                <div className="flex space-x-4">
                    <Link to="/about" className="hover:text-blue-600 transition-colors">
                        About
                    </Link>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://pclub.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Inspiration
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
