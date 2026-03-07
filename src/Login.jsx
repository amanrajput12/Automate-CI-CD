import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle } from "./api/authApi";
import { loginUser } from "./api/userApi";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "procodrr@gmail.com",
    password: "abcd",
  });
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (serverError) setServerError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      if (data.error) setServerError(data.error);
      else navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setServerError(err.response?.data?.error || "Something went wrong.");
    }
  };

  const hasError = Boolean(serverError);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 max-w-2xl mx-auto w-full p-5">
        {/* App Description Section */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">Tryonics</h1>
          <p className="text-gray-700 text-lg mb-4">
            Secure cloud storage for uploading, downloading, and managing your files with complete privacy and control.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Upload files securely to the cloud</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Download files anytime, anywhere</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Delete files permanently</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Privacy-first approach</span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-2xl font-semibold mb-6">Login to Tryonics</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="relative mb-3">
              <label htmlFor="email" className="block mb-1 font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${hasError ? "border-red-500" : "border-gray-300"} rounded`}
              />
            </div>

            <div className="relative mb-3">
              <label htmlFor="password" className="block mb-1 font-bold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-2 border ${hasError ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {serverError && (
                <span className="absolute top-full left-0 text-red-500 text-xs mt-1">
                  {serverError}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded w-full font-medium hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link className="text-blue-600 hover:underline font-medium" to="/register">
              Register
            </Link>
          </p>

          <div className="relative text-center my-5">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-[1px] bg-gray-300"></div>
            <span className="relative bg-white px-2 text-sm text-gray-600">Or continue with</span>
          </div>

          <div className="flex justify-center mb-4">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  const data = await loginWithGoogle(credentialResponse.credential);
                  if (!data.error) navigate("/");
                } catch (err) {
                  console.error("Google login failed:", err);
                }
              }}
              onError={() => console.log("Login Failed")}
              theme="filled_blue"
              text="continue_with"
              useOneTap
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-100 border-t">
        <div className="flex justify-center space-x-6 p-4 text-sm">
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
    </div>
  );
};

export default Login;
