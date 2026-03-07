import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Cloud
          </Link>
          <nav className="space-x-4">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-gray-800"
            >
              Privacy Policy
            </Link>
            <Link to="/service" className="text-gray-600 hover:text-gray-800">
              Service
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-800">
              Register
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
