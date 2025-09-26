import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 bg-gray-950 text-gray-300">
      <h1 className="text-7xl font-bold text-white mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </span>
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-semibold shadow hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
