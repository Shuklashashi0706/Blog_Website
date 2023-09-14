import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[30rem] h-[29rem] md:h-[30rem]">
        <h1 className="text-5xl text-center font-semibold mb-7">
          Welcome Back!
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1 text-xl block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1 text-xl block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border mb-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot" className="text-sm text-blue-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <hr className="my-4 border-gray-300" />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
