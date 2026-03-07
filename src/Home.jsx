import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "./api/userApi";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // if user already logged in, provide quick link to dashboard
  useEffect(() => {
    async function check() {
      try {
        await fetchUser();
        setLoggedIn(true);
      } catch (err) {
        setLoggedIn(false);
      }
    }
    check();
  }, []);

  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold mb-4">Cloud</h1>
      <p className="text-lg text-gray-700 mb-6">
        Cloud Storage App to securely store, sync, and share your files across
        devices.
      </p>

      <div className="space-x-4">
        {loggedIn ? (
          <Link
            to="/directory"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:opacity-90"
          >
            Go to Dashboard
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:opacity-90"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white py-2 px-4 rounded hover:opacity-90"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
