import React, { useState } from "react";
import { BsPass } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthBtn } from "../components/ui/button.jsx";
import { Heading } from "../components/ui/heading.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AppLayout, LoginImage } from "../utils/index.jsx";
const Login = () => {
  const server = import.meta.env.VITE_SERVER_URL;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${server}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/success-to-login-your-account");
    } else {
      navigate("/faild-to-login-your-account");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <AppLayout className={"max-lg:mt-6 max-lg:p-1"}>
      <div className="flex items-start justify-start ml-28 max-lg:ml-0">
        <h1 className="text-black dark:text-gray-300 text-4xl max-lg:text-3xl font-OpenSans flex gap-2 ">
        Login 
      </h1>
      </div>
      {/* forms */}
      <div className="flex w-full items-center justify-around m-5 max-lg:m-0 max-lg:flex-col-reverse gap-10 max-lg:gap-0   ">
        {/* left content */}
        <form
          action=""
          className="mt-4 w-full max-w-md max-lg:space-y-5"
          onSubmit={handleSubmit}
        >
          {/* 2 */}
          <div className="relative mb-6">
            <Label label={"email"} />
            <Input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your email"
              className="mt-2"
            />
          </div>
          {/* 3 */}
          <div className="relative mb-6">
            <Label label={"password"} />

            <Input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your password"
              className="mt-2"
            />

            <div className="flex items-center justify-center mt-5">
              <AuthBtn variant={"btn-login"} label={"Login"} />
            </div>

            {/* doesn't account */}
            <Label
              htmlFor="message"
              className="flex-col  text-sm font-semibold text-gray-700 dark:text-gray-400 mt-10 gap-3 flex "
            >
              Don't have an account?
              <Link
                to={"/create-an-account"}
                className="underline text-black dark:text-gray-200 text-sm font-semibold"
              >
                Sign up in numberTab
              </Link>
            </Label>

            <div className="mt-4 flex items-center gap-1">
              <Label label={"Doesn't have an account?"} />
              <Link
                to={"/create-an-account"}
                className="text-[1.1rem] text-blue-600 underline hover:text-blue-600/80"
              >
                Signup
              </Link>
            </div>
          </div>
        </form>
        {/* close */}
        {/* right content */}
        <div className="m-5 max-lg:m-0">
          <img src={LoginImage} alt="" className="w-[20rem] max-lg:w-[12rem]" />
        </div>
        {/* close */}
      </div>
    </AppLayout>
  );
};
export default Login;
