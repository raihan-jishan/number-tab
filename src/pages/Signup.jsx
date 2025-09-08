import React, { useState } from "react";
import { FaFeather } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../assets/createaccount.svg";
import { AuthBtn, BtnPrimary } from "../components/ui/button.jsx";
import { Heading } from "../components/ui/heading.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AppLayout } from "../utils/index.jsx";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${server}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/success-to-create-an-account");
    } else {
      navigate("/faild-to-create-an-account");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // name , email, password
  return (
    <AppLayout className="mt-40 max-lg:mt-2">
      <h1 className="text-black dark:text-gray-300 text-4xl max-lg:text-3xl font-OpenSans">
        SignUp
      </h1>

      <div className="flex w-full items-center justify-around m-5 max-lg:m-2 max-lg:flex-col-reverse gap-10 mt-2">
        {/* left content */}
        <form
          action=""
          className="mt-4 w-full max-w-md" // ✅ responsive width
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div className="relative mb-6">
            <Label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={onChange}
              placeholder="Enter your name"
              className="mt-2 w-full" // ✅ make input take full width
            />
          </div>

          {/* email */}
          <div className="relative mb-6">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={onChange}
              placeholder="Enter your email"
              className="mt-2 w-full" // ✅ full width
            />
          </div>

          {/* password */}
          <div className="relative mb-6">
            <Label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              placeholder="Enter your password"
              className="mt-2 w-full" // ✅ full width
            />

            <div className="mt-5 w-full flex justify-center ">
              <AuthBtn
                variant="account-btn"
                label="Create Account"
                iconLeft={<FaFeather size={25} />}
              />
            </div>

            <div className="mt-4 flex items-center gap-1">
              <Label label={"Already have an account?"} />
              <Link
                to={"/login-your-account"}
                className="text-[1.1rem] text-blue-600 underline hover:text-blue-600/80"
              >
                Login
              </Link>
            </div>
          </div>
        </form>

        {/* right content */}
        <div className="m-5 flex justify-center">
          <img
            src={SignupImage}
            alt="Signup"
            className="w-[25rem] max-w-full h-auto" // ✅ prevent overflow on mobile
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Signup;
