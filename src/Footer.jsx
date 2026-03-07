import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-4 flex justify-center space-x-4">
        <Link
          to="/privacy-policy"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Privacy Policy
        </Link>
        <Link
          to="/service"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Service
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
